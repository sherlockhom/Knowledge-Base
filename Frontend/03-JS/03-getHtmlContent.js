// 获取HTML内容，去除图片、格式等，若要\n实现换行，要在css中添加white-space: pre-wrap
function stripHtmlContent(html) {
    // 创建一个临时 DOM 元素
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
  
    // 移除所有的图片元素
    const images = tempDiv.querySelectorAll('img');
    images.forEach(img => img.remove());
  
    // 替换 <p> 标签为换行符，并移除所有其他格式元素
    const formatElements = tempDiv.querySelectorAll('*:not(br):not(p)');
    formatElements.forEach(el => {
      if (el.tagName !== 'BR') {
        el.replaceWith(...Array.from(el.childNodes));
      }
    });
  
    // 将 <p> 标签替换为换行符，并将 <br> 标签替换为换行符
    const paragraphs = tempDiv.querySelectorAll('p');
    paragraphs.forEach(p => p.replaceWith(...Array.from(p.childNodes).concat(document.createTextNode('\n'))));
  
    // 提取文本内容，处理换行符
    const text = tempDiv.innerHTML
      .replace(/<br\s*\/?>/gi, '\n') // 替换 <br> 为换行符
      .replace(/&nbsp;/g, ''); // 替换 &nbsp; 为普通空格

    console.log("html=",html);
    console.log("text=",text);
    
    return text.trim(); // 去掉首尾的空白字符
  }
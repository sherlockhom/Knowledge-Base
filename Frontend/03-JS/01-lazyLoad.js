
$(document).ready(function (event) {
    // 初始化懒加载
    lazyLoad();
    // 监听滚动
    window.addEventListener('scroll', throttle(lazyLoad, 200))
})

// 节流函数
function throttle(fn, delay) {
    let timer
    let prevTime
    return function (...args) {
        const currTime = Date.now()
        const context = this
        if (!prevTime) prevTime = currTime
        clearTimeout(timer)

        if (currTime - prevTime > delay) {
            prevTime = currTime
            fn.apply(context, args)
            clearTimeout(timer)
            return
        }
        timer = setTimeout(function () {
            prevTime = Date.now()
            timer = null
            fn.apply(context, args)
        }, delay)
    }
}  

// 懒加载图片
function lazyLoad() {
    let viewHeight = document.body.clientHeight //获取可视区高度
    console.log("viewHeight",viewHeight)
    let imgs = document.querySelectorAll('.lazy')
    imgs.forEach((item, index) => {
        if (item.getAttribute('data-src')==null) return
        if (isElementInViewport(item)) {
            item.src = item.getAttribute('data-src');
            item.removeAttribute('data-src');
        }
    }) 
}

// 判断元素是否在视图内
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
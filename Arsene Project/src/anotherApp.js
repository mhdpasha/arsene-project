hljs.highlightAll() // initHighlightingOnLoad()

// nav buttons
const navAnim = document.getElementById('nav-anim')
const navLib = document.getElementById('nav-lib')
const navMisc = document.getElementById('nav-misc')

// div content
const contentLib = document.getElementById('content-1')
const contentAnim = document.getElementById('content-2')
const contentMisc = document.getElementById('content-3')
const resetScroll = document.getElementById('rightContent')

// event handlers
navAnim.onclick = () => {
    navAnim.style.opacity = 1
    navLib.style.opacity = 0.3
    navMisc.style.opacity = 0.3

    resetScroll.scrollTop = 0

    contentAnim.style.display = 'block'
    contentLib.style.display = 'none'
    contentMisc.style.display = 'none'
}
navLib.onclick = () => {
    navAnim.style.opacity = 0.3
    navLib.style.opacity = 1
    navMisc.style.opacity = 0.3

    resetScroll.scrollTop = 0

    contentAnim.style.display = 'none'
    contentLib.style.display = 'block'
    contentMisc.style.display = 'none'
}
navMisc.onclick = () => {
    navAnim.style.opacity = 0.3
    navLib.style.opacity = 0.3
    navMisc.style.opacity = 1

    resetScroll.scrollTop = 0

    contentAnim.style.display = 'none'
    contentLib.style.display = 'none'
    contentMisc.style.display = 'block'
}


const labelAnimation = anime({
    targets: '.badge .labelStagger',
    translateY: [0, 20, 0],
    easing: 'easeInOutCubic',
    autoplay: true,
    loop: true,
    duration: 2000,
    delay: anime.stagger(100)
})

const modernTextAnimation = anime({
    targets: '#modernText',
    opacity: [0.5,1,0],
    easing: 'easeInOutCirc',
    autoplay: true,
    loop: true,
    duration: 200,
    delay: [1000,10000]
})
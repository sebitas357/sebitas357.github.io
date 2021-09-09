const alertmsj = () => {
    alert("holiii")
}

/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

window.addEventListener('load', headerScrolled)
onscroll(document, headerScrolled)

/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
let selectHeader = select('#header')
if (selectHeader) {
    const headerScrolled = () => {
    alertmsj()
    }
}
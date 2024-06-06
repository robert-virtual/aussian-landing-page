/**
 * @type {HTMLLinkElement}
 */
const favicon = document.head.querySelector("link[rel='icon']")

let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light'
setFavicon(theme)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
     theme = event.matches ? "dark" : "light";
     setFavicon(theme)
});


function setFavicon(theme) {
    favicon.href = `assets/favicon-${theme}.ico`
    console.log(`favicon upated to ${theme}`);
}
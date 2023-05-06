const html = document.querySelector('.html textarea');
const css = document.querySelector('.css textarea');
const js = document.querySelector('.js textarea');
const yo = document.querySelector('#yo');

function start(){
    localStorage.setItem('html',html.value);
    localStorage.setItem('css',css.value);
    localStorage.setItem('js',js.value);
    yo.contentDocument.body.innerHTML = `<style>${localStorage.css}</style>` + localStorage.html;
    yo.contentWindow.eval(localStorage.js);
}

html.onkeyup = () => start();
css.onkeyup = () => start();
js.onkeyup = () => start();

html.value = localStorage.html;
css.value = localStorage.css;
js.value = localStorage.js;

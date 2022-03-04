/** 
 * 
*/

var element = {
    title: document.getElementById('indextitle'),
    favicon: document.getElementById('indexfavicon')
}

if (navigator.language == 'pt-BR') {
    element.title.innerText = "Sou Lucas!"
} else {
    element.title.innerText = "I'm Lucas!"
}
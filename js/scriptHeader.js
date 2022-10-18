var menu = document.querySelector ('div#menu')
var links = document.querySelector ('div#links')
var nav = document.querySelector ('#nav')

menu.addEventListener ('click', clickMenu)

function clickMenu() {
    if (links.style.display == 'none') {
	    links.style.display = 'flex'
	    nav.style.backgroundColor = '#4A110C'
    } else {
        links.style.display = 'none'
    }
}
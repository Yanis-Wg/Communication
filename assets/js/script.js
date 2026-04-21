function open_navigation_menu(){
    let icon=document.getElementsByClassName("navigation__buttons")
    let navigation_page=document.getElementsByClassName("navigation__link")
    icon[0].style.display="none"
    icon[1].style.display="block"
    navigation_page[0].style.display="flex"
}
function close_navigation_menu(){
    let icon=document.getElementsByClassName("navigation__buttons")
    let navigation_page=document.getElementsByClassName("navigation__link")
    icon[0].style.display="block"
    icon[1].style.display="none"
    navigation_page[0].style.display="none"
}
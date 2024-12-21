const topMenu = document.getElementById('ktn-top-menu')
const toggleTopMenuIcon = document.getElementById('ktn-toggle-top-menu-icon')

document.addEventListener('click', e => {
    if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('ktn-topmenu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        if (topMenu.classList.contains('ktn-topmenu-expanded')) {
            topMenu.classList.remove('ktn-topmenu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})

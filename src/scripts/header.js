import './appear.js'
let header = () => {
    class Menu {
        constructor() {
            this.$header = document.querySelector('.m-header')
            this.mediaQuery = matchMedia('(min-width: 764px)')
            this.$menu = document.querySelector('.m-header__menu')
            this.$openMenu = document.querySelector('.m-header__open-menu')
            this.$itemsMenu = document.querySelectorAll('.m-header__menu li a')
        }
        load() {
            if (this.$header && this.$menu) {
                this.openEvent()
                this.resizeEvent()
                this.scrollEvent()
                this.clickItemMenu()
            }
        }
        openEvent() {
            this.$openMenu.addEventListener('click', () => {
                // toggle active class
                this.$menu.classList.toggle('js--active')
                this.$openMenu.querySelector('.m-menu-icon').classList.toggle('js--active')
            })
        }
        clickItemMenu() {
            this.$itemsMenu.forEach(($item) => {
                $item.addEventListener('click', () => {
                    // remove active class
                    this.$menu.classList.remove('js--active')
                    this.$openMenu.querySelector('.m-menu-icon').classList.remove('js--active')
                })
            })
        }
        resizeEvent() {
            addEventListener('resize', () => {
                if (this.mediaQuery.matches) {
                    this.$menu.classList.remove('js--active')
                }
            })
        }
        scrollEvent() {
            let flag = true,
                $senction = null
            // scroll event
            window.onscroll = () => {
                // reset items menu
                flag = true
                this.resetItemsMenu()
                // iterating sections
                this.$itemsMenu.forEach(($item) => {
                    // set
                    $senction = document.querySelector($item.getAttribute('href'))
                    // validatting is current section is visible
                    if (this.isVisible($senction) && flag && window.scrollY > 100) {
                        flag = false
                        $item.classList.add('js--active')
                        return
                    }
                })
            }
            // validating scroll top
            if (window.scrollY >= 0) {
                this.$header.classList.add('js--show')
            }
        }
        resetItemsMenu() {
            this.$itemsMenu.forEach(($item) => {
                $item.classList.remove('js--active')
            }) 
        }
        isVisible(element) {
            const rect = element.getBoundingClientRect()
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                (rect.bottom / 3) <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            )
        }
    }
    // init
    new Menu().load()
}
export default () => {
    header()
}
const homeHover = document.getElementById('home')
const universeHover = document.getElementById('universe')
const exploreHover = document.getElementById('explore')
const body = document.body

let a = [homeHover, universeHover, exploreHover]

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle(event.target)
  }

  handle(target) {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    for (let i = 0; i < a.length; i++) {
      if (target == null) {
        target = homeHover
      }
      if (target === a[i]) {
        a[i].classList.add('hovered')
        body.classList.add(`${a[i].id}Img`)
      } else {
        a[i].classList.remove('hovered')
        body.classList.remove(`${a[i].id}Img`)
      }
    }

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
  }

  routerClick() {
    this.handle(universeHover)
  }
}

import { Router } from './router.js'

const homeHover = document.getElementById('home')
const universeHover = document.getElementById('universe')
const svgBotao = document.querySelector('#svgBotao') 

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/the_universe', '/pages/the_universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()



svgBotao.addEventListener('click', () => {
  homeHover.click()
})


document.addEventListener('click', function(event) {
  if (event.target.matches('#meuBotao')) {
    universeHover.click();
  }
});
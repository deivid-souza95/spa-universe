import { Router } from "./router.js"

const router = new Router()
router.add('/', "pages/home.html")
router.add("/about", "pages/about.html") // mapeamento de rota "/about" e mapeamento de rota "pages/about.html"
router.add("/explore", "pages/explore.html")
router.add("404", "pages/404.html")

router.handle()

window.onpopstate = () => router.handle() // funcao para navegacao pela seta do navegador
window.route = () => router.route() // adionando o window no route()
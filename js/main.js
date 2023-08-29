import {Router} from './router.js'

const OBJECT = new Router();

console.log(OBJECT)

OBJECT.add("/l", "/page/logo.html")
OBJECT.add("/home" , "/pages/Home.html")
OBJECT.add("/Uni" , "/pages/Uni.html")
OBJECT.add("/Exp", "/pages/Exp.html")

console.log("Depois de atribuir os paths")

console.log(OBJECT)

OBJECT.handle()

window.onpopstate = () => OBJECT.handle();
window.router     = () => OBJECT.router();

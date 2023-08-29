import {React} from './bg.js'
export class Router{
//  flag = " "
  Pagespath = {}

  add(Pathname , path){
    console.log("entrou no add")

    this.Pagespath[Pathname] = path;
  }
  router(e){
    console.log("entrou no router")
    e = e || window.e
    e.preventDefault()
    window.history.pushState({} , "" , e.target.href)

 /*
    this.flag = e.target.id ;
 */
    this.handle()
    
    console.log("executou todo o seu router")
  }

  handle(){

    console.log("entrou no handle")

    const {Pathname} = window.location
     // If some case until doesn't return the page clicked it will appear Looks like loadding page
    let getROUTE = this.Pagespath[Pathname] || this.Pagespath["/l"]

    fetch(getROUTE)
    .then(data => data.text()                                                   )
    .then( html => { document.querySelector('main').innerHTML = html }          )
    /*
    .then(   ( Swap_Bg) =>  React[Swap_Bg]()                                     )
    */

    console.log("executou todo seu handle")
  }

}
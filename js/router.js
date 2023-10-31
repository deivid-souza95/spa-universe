// Nome: funcao construtura ou criar objeto
export class Router {

  routes = {} // foi criado para mais tarde saber que esta sendo usado e nao é um array

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event){ // argumento event
    event = event || window.event // caso nao foi passado um event pega o event do proprio Navegador "window.event"
    event.preventDefault() // tirar o padrao do evento que no cas seria direcionar para algum lugar
  
    window.history.pushState({}, "", event.target.href) // historico de cliks
    this.handle() // quando click em route ele executa o handle ( Necessario colocar o "this")
  }

  handle(){ // funcao para redirecionar as paginas para dentro da div app
    const { pathname } = window.location // pathname foi colocado em { } para nao precisar usar ele da forma window.location.pathname "desistruturando"
    const route = this.routes[pathname] || this.routes[404] // rota para mandar para pagina caso nao navegue nas existentes
    
    // ideia de acincronimo "promessas"
    fetch(route) // significado de prometo trazer a rota que me passar
    .then(data => data.text()) // significado "entao" irei trazer a rota que me passou "data = dados e .text para trazer em texto"
    .then(html => { // então irei trazer o texto que me pediu que esta dentro do item aonde click "que no caso vai trazer o HTML e jogar dentro da DIV #app e assim trazendo o resultado de atualização de pagina sem carregamento total dela"
      document.querySelector('#app').innerHTML = html // aqui foi passado o "document.querySelection('#app') = html" e assim trazendo todo o conteudo do HTML 
    })
  }
}
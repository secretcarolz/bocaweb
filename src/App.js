import './App.css';
import {Component} from 'react';
import {Busca} from './Busca';
import {Cabecalho} from './Cabecalho';
import {Lista} from './Lista';
import {Rodape} from './Rodape';
class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome=' +busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
    
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  

  render(){
    
    return(
      <section className = "container">

     <div className = "cabecalho" >
        <Cabecalho/>
      </div> 
<div>
     <Busca
        busca={this.state.busca}
        buscaODA={this.buscaODA}
       />
       </div>

      <div className= "lista">  
      <Lista
       odas= {this.state.odas}
       />
       </div>

      <div className= "rodape"> <Rodape/> </div>

      </section>
    )
  }
}

export default App;
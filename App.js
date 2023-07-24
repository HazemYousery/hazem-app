import React , { Component } from "react";
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
//mport Items from './items'
import Nav from './components/nav';
class App extends Component{
    componentDidMount(){
        console.log("Component")
       }
       componentDidUpdate(prevProps,prevState)
       {
         console.log("ay haga b3d eznak",prevProps,prevState)
       }
        handleChange=(e)=>
        {
          this.setState({
            name:e.target.value
          })
        }
       state = {
        items:[
        {id:1,name:'hazem',age:'15'},
        {id:2,name:'omar',age:'25'},
        {id:3,name:'mazen',age:'35'}
        ]
       }
       handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.name);
      
       }
       handleClick=(e)=>{
        let items = this.state.items;
        items.push({id:4,name:'mohamed',age:'15'})
        this.setState({
          items: items
        })
       }
       handleDelete = (e)=>{
        this.setState({
          items: [
            {id:2,name:'omar',age:'25'}
          ]
        })
       }
render()
{
  return (
//<Items  items = {this.state.items}/>

<BrowserRouter>
<div className="App">
<Nav />

<Route path="/Home" exact component={Home} />
<Route path="/About" exact component={About} />
</div>

</BrowserRouter>
  );
}

}
export default App;
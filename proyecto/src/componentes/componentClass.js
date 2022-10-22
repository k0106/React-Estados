import React,{Component} from "react";

class ComponentClass extends Component {
    constructor(){
        super()
        this.state = {
            cont:0
        }
        setInterval(() =>{
            this.setState({
                cont:this.state.cont +1
                
            })
        },1000)
    }  
    render(){
        return(
            <h1> Estado : {this.state.cont}</h1>
        )
    }
}

class ComponentClass2 extends Component{
    constructor(){
        super()
        this.state = {
            connt2:5,
            cont3:100
        }
        setInterval(() =>  {
            this.setState({cont2:this.state.cont2+5,
            cont3:this.state.cont3+20})
        }, 200);
    }
    render(){
        return(
            <div>
                    <h2>Estado2: {this.state.cont2}</h2>  
                    <h2>Estado3: {this.state.cont2}</h2>         
            </div>
            
        )
    }

}
export {ComponentClass,ComponentClass2}

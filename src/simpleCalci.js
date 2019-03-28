import React, { Component } from 'react';
import './App.css';

class Calculator extends Component{

    state={
        num1:0,
        num2:0,
        res:0
        
    }

    handle_change=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handle_submit=(e)=>
    {
        console.log("worked.......");
        e.preventDefault();
        e.stopPropagation();
        let a;
        if (e.target.id==="add")
          a=Number(this.state.num1)+Number(this.state.num2);
        if (e.target.id==="sub")
         a=Number(this.state.num1)-Number(this.state.num2);
         if (e.target.id==="mul")
          a=Number(this.state.num1)* Number(this.state.num2);
         if (e.target.id==="div")
        {
            if (Number(this.state.num2)!==0)
              a=Number(this.state.num1) / Number(this.state.num2);
            else
                alert("0 divisor");
        } 

        
         this.setState({res:a},()=>{
            this.props.add_prev_res(this.state);
         })
        //console.log("button name   ")
        //console.log(e.target)
        
        
        
    }
    
    
    
    render()
    {
        
        
        return (
            
            <pre>
            <div className="content">
            <h1>Simple Calculator</h1>

            <div> number 1: {this.state.num1}    number 2: {this.state.num2}</div>
            
            <div> result: {this.state.res}</div><br></br><br></br>
            

            <form onSubmit={this.handle_submit}>
                <label htmlFor="num1">number 1</label>
                <input type="text" id="num1" onChange={this.handle_change}/><br/><br/>
                <label htmlFor="num2">number 2</label>
                <input type="text" id="num2" onChange={this.handle_change}/><br/><br/>
                <table align="center">
                    <tr><td><button onClick={this.handle_submit}id="add">ADD</button></td>
                    <td><button onClick={this.handle_submit}id="sub">SUB</button><br/></td></tr>
                    <tr><td><button onClick={this.handle_submit}id="mul">MUL</button><br/></td>
                    <td><button onClick={this.handle_submit}id="div">DIV</button><br/></td></tr>
                </table>
                
                
                
                
                
            </form>
            </div>
            </pre>
            
            
            
        )
    }
    
}

export default Calculator;
import React from 'react';
import './App.css';

const D_prev=({delete_history,result})=>{
    const st=result.map(obj=>{
        return(
            <div className="content" key={obj.id}>
                <pre>
                <p>  num1: {obj.num1}   num2: {obj.num2}  res: {obj.res} <button onClick={()=>{delete_history(obj.id)}}>Delete</button></p><br/></pre>               
            </div>
        )
    })

    return(
                <div className="super">
                    {st}

                </div>
    );
    
        
    
}

export default D_prev;
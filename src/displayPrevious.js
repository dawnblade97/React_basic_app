import React from 'react';
import './App.css';

const D_prev=({result})=>{
    const st=result.map(obj=>{
        return(
            <div className="content" key={obj.res}>
                <pre>
                <p>num1: {obj.num1}   num2: {obj.num2}  res: {obj.res}</p><br/>
                </pre>
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
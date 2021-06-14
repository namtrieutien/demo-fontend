import { useEffect, useState } from "react";

function ReactHookuseEffect(){
    const [count, setCount] =  useState(0);

    
    useEffect(
        () =>{
            console.log('useEffect');
            const id = setInterval(() => setCount(count+1), 1000)
            document.title = `You clicked ${count} times`;
            
            return(
               
                ()=>{
                    console.log("clear interval")
                    clearInterval(id)
                }
            ); 
        }, [count]
        
        
        );

   
    return(
        <div>
            <h3>You clicked {count} time</h3>
               
        </div>
    );

}

export default ReactHookuseEffect;
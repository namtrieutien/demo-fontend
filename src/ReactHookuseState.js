
import React, {useState} from 'react';

function ReactHookuseState(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <h2>You click {count} time</h2>
            <button onClick = {() => setCount(count + 1)}>Click me</button>
        </div>

    );
}

export default ReactHookuseState;


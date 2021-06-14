
import React from 'react'
import ReactDOM from 'react-dom'
class ComponentApiFindDOMNode extends React.Component{
    constructor(){
        super();
        this.findDOMNodeHandler = this.findDOMNodeHandler.bind(this);
    }

    findDOMNodeHandler(){
        var test = document.getElementById('myDiv');
        ReactDOM.findDOMNode(test).style.color = 'red';
    }

    render(){
        return(
            <div>
                <button onClick = {this.findDOMNodeHandler}>FindDOMNode</button>
                <div id = 'myDiv'>NODE</div>
            </div>
        );
    }
}

export default ComponentApiFindDOMNode;
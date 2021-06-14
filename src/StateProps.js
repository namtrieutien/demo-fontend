
import React from 'react';
class StateProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: 'Header from props',
            content: 'Content from props'
        }
    }

    render(){
        return(
            <div>
               <Header propsHeader = {this.state.header}/>
               <Content propsContent = {this.state.content}/>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <h1>{this.props.propsHeader}</h1>
        )
    }

}

class Content extends React.Component{
    render(){
        return(
            <h1>{this.props.propsContent}</h1>
        );
    }

}

export default StateProps;
import React from "react";


class Statefull extends React.Component {
    constructor() {
       super();
       this.state = {
          data: 
          [
             {
                "id":1,
                "name":"Foo",
                "age":"20"
             },
             {
                "id":2,
                "name":"Bar",
                "age":"30"
             },
             {
                "id":3,
                "name":"Baz",
                "age":"40"
             }
          ]
       }
    }
    render() {
       return (
          <div>
             <Header/>
             <table>
                <tbody>
                   {this.state.data.map((person, i) => <TableRow  
                      person = {person} i = {i} />)}
                </tbody>
             </table>
          </div>
       );
    }
 }

 class Header extends React.Component {
    render() {
       return (
          <div>
             <h1>Header</h1>
          </div>
       );
    }
 }

 class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.i} {this.props.person.id} </td>
             <td>{this.props.person.name}</td>
             <td>{this.props.person.age}</td>
          </tr>
       );
    }
 }
 export default Statefull;

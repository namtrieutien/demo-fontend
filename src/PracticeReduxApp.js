import React from 'react';
import { connect } from 'react-redux';

class PracticeReduxApp extends React.Component{ 
  render() {
    const {data} = this.props.data;

    return (
        <div>
            <h1><center>Do exercise...</center></h1>
            <table>
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Url</th>
                  <th>Image</th>
                </tr>
                {
                  data.map((my_data) => (
                    <tr>
                      <th>{my_data.id}</th>
                      <th>{my_data.url}</th>
                      <th><img src={my_data.url}></img></th>
                    </tr>
                  ))
                }
              </tbody>
            </table>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

export default connect(mapStateToProps)(PracticeReduxApp);
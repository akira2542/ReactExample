import React,{ Component } from 'react';

class PropTest extends Component {

    render() {
      return (
            <div>
                <h1>{this.props.header}</h1>
                {this.props.children}
            </div>
      )
    }
}

export default PropTest;

import React,{ Component } from 'react';
import Proptype from 'prop-types';

class PropTypeTest extends Component {

    render() {
      return (
            <div>
                <h1>{this.props.header}</h1>
                {this.props.children}
            </div>
      )
    }
}

PropTypeTest.propTypes = {
  header : Proptype.string
}


export default PropTypeTest;
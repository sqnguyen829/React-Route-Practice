import React from "react";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ClassCompTest extends React.Component {
  state = {
    testing:''
  };

  test = () => {
      this.props.history.push('/home')
  }

  render() {

    return (
        <div>
            <button onClick={() => this.test()}/>
        </div>
    )
  }
}
//withRouter only needs to be imported and used like 
//how its used in this class component so that it can access history
export default withRouter(ClassCompTest);
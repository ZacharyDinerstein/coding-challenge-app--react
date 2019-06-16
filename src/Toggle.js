import React, { Component } from 'react';

export default class Toggle extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    return (
      <div>
        {this.state.on && this.props.children}
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    );
  }
}




// import React, { useState } from "react";
// import CardMainContent from './components/Card/CardMainContent';

// const Toggle = () => {
//   const [isToggled, setToggle] = useState(false);

//   return (
//     <>
//       {isToggled && (
//         <CardMainContent setToggle={setToggle} />
//       )}
//     </>
//   )
// }

// export default Toggle;
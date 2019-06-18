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


  action = () => {
    this.toggle();
    this.props.toggleCardFullWidth();
  }


  render() {
    return (
      <>
        <button onClick={this.action}>Show/Hide</button>
        {this.state.on && this.props.children}
      </>
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
import React, { useState } from 'react';

const Toggle = (props) => {
  const [on, toggle] = useState(false);

  const action = () => {
    toggle(!on);
    props.toggleCardFullWidth();
  }

  return (
    <>
      <button onClick={action}>Show/Hide</button>
      {on && props.children}
    </>
  );
}

export default Toggle;

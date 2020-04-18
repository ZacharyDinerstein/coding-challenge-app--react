import React, { useState } from 'react';

const Toggle = ({toggleCardFullWidth, children}) => {
  const [on, toggle] = useState(false);

  const action = () => {
    toggle(!on);
    toggleCardFullWidth();
  };

  return (
    <>
      <button onClick={action}>Show/Hide</button>
      {on && children}
    </>
  );
};

export default Toggle;

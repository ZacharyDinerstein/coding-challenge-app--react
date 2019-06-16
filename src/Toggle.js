import React, { useState } from "react";
import CardMainContent from './components/Card/CardMainContent';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <>
      {isToggled && (
        <CardMainContent setToggle={setToggle} />
      )}
    </>
  )
}

export default Toggle;
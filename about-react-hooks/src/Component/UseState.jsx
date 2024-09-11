import React, { useState } from "react";
function UseState() {
  const [color, setColor] = useState('red');
   
  return (
    <div>
        <h1>Example of Traffic light for explaining useState</h1>
        <div className="container">
            <div>
                <div style={color=== 'red' ? {backgroundColor: 'red'} : {backgroundColor: 'white'}} className="light red"></div>
                <div style={{backgroundColor: color === 'yellow' ? 'yellow' : 'white'}}  className="light yellow"></div>
                <div style={{backgroundColor: color === 'green' ? 'green' : 'white'}} className="light green"></div>
            </div>
        </div>
        <div className="control-btn">
                <div onClick={() => setColor('red')} className="btn redBtn">Red</div>
                <div onClick={() => setColor('yellow')} className="btn yellowBtn">Yellow</div>
                <div onClick={() => setColor('green')} className="btn greenBtn">Green</div>
            </div>
    </div>

  );
}

export default UseState;

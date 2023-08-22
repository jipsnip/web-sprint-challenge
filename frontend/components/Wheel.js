import React from 'react'
import { connect } from 'react-redux';

import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

export function Wheel(props) {
  console.log('my props', props)
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${props.wheelIdx === 0 ? 'active' : ''}`} style={{ "--i": 0 }}>{`${props.wheelIdx === 0 ? 'B' : ''}`}</div>
        <div className={`cog ${props.wheelIdx === 1 ? 'active' : ''}`} style={{ "--i": 1 }}>{`${props.wheelIdx === 1 ? 'B' : ''}`}</div>
        <div className={`cog ${props.wheelIdx === 2 ? 'active' : ''}`} style={{ "--i": 2 }}>{`${props.wheelIdx === 2 ? 'B' : ''}`}</div>
        <div className={`cog ${props.wheelIdx === 3 ? 'active' : ''}`} style={{ "--i": 3 }}>{`${props.wheelIdx === 3 ? 'B' : ''}`}</div>
        <div className={`cog ${props.wheelIdx === 4 ? 'active' : ''}`} style={{ "--i": 4 }}>{`${props.wheelIdx === 4 ? 'B' : ''}`}</div>
        <div className={`cog ${props.wheelIdx === 5 ? 'active' : ''}`} style={{ "--i": 5 }}>{`${props.wheelIdx === 5 ? 'B' : ''}`}</div>
      </div>
      <div id="keypad">
        <button onClick={props.moveCounterClockwise} id="counterClockwiseBtn" >Counter clockwise</button>
        <button onClick={props.moveClockwise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("the state", state);
  return({
    wheelIdx: state.wheel
  });
}

 export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);
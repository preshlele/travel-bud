import React from 'react'
import CountUp from "react-countup";


const Counter = ({number}: any) => {
  return (
    <CountUp duration={10} start={0} enableScrollSpy={true} end={number} scrollSpyDelay={1000}/>
  )
}

export default Counter
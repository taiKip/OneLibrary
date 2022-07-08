import React from 'react'
import classes from './Circles.module.css'

const Circles = () => {
  return (
      <div className={classes.wrapper}>
          <div className={`${classes.circles} ${classes["circles-one"]}`}></div>
          <div className={`${classes.circles} ${classes["circles-two"]}`}></div>
          <div className={`${classes.circles} ${classes["circles-three"]}`}></div>
    </div>
  )
}

export default Circles
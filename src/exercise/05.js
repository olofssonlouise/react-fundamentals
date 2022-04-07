// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({style, size, className = '', ...otherProps}){
  const sizeClassName = size ? `box--${size}` : ''
  return(
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="samll" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}
/* first exercise:
const smallBox = (
<div
  className="box box--small"
  style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
>
  small lightblue box
</div>
)

const mediumBox = (
<div
  className="box box--medium"
  style={{fontStyle: 'italic', backgroundColor: 'pink'}}
>
  medium pink box
</div>
)

const largeBox = (
<div
className="box box--large"
style={{fontStyle: 'italic', backgroundColor: 'orange'}}
>
  large orange box
</div>
) */


export default App

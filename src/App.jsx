/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { useState } from 'react'

import './App.css'

function App() {
  
  return <div>
<WraperComponent>
  <div>
    hi i am WraperComponent 1
  </div>
</WraperComponent>
<WraperComponent >
  <div style={{height:"200px",width:"200px"
  ,border:"2px solid red"
  
  }

  }>
    hi i am WraperComponent 2
  </div>
</WraperComponent>
  </div>
}

function WraperComponent({children}){
  return <div style={{
    margin:"2px",
    padding:"10px",
    border:"1px solid red"
  }}>
{children}
  </div>
}
export default App

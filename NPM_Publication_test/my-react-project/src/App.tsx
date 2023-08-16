import { useState } from 'react'
import { MyPanelJffpReactExport } from 'my-panel-jffp-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyPanelJffpReactExport title='My React Profile' icon='1' onIconClick={() => console.log('ICON CLicked')}>
        text
      </MyPanelJffpReactExport>
    </div>
  )
}

export default App

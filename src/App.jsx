import GlobalStyled from './createGlobalStyled'
import GlobalFonts from './fonts/fonts'
import { AppRoutes } from './Routes/Routes' 

function App() {
  return (
    <div className="App">
      <GlobalStyled/>
      <GlobalFonts/>
      <AppRoutes/>
    </div>
  )
}

export default App

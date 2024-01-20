
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Accounts from './pages/Accounts'
import Compaigns from './pages/Compaigns'
import './styles/base/base.scss'
import Profiles from './pages/Profiles'

function App() {
    
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Accounts />}/>
        <Route path='/profile' element={<Profiles/>}/>
        <Route path='/profile/:id' element={<Profiles/>}/>
        <Route path='/compaign' element={<Compaigns />} />
        <Route path='/compaign/:id' element={<Compaigns/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

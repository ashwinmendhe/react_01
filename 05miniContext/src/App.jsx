
import './App.css'
import Profile from './components/Profile'
import UserContextprovider from './context/UserContextprovider'
import Login from './components/Login'

function App() {
  

  return (
    <UserContextprovider>
      <h1>React with contect switching for state managment</h1>
      <Login />
      <Profile/>
    </UserContextprovider>
  )
}

export default App

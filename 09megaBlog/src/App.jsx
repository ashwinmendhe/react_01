import { useState , useEffect} from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Header, Footer } from './components/index'
function App() {

  const [loading, setLoding] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(() => setLoding(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-amber-100'>
    <div className='w-full block'>
      <Header/>
      <main>
        <h1>Test Now</h1>
        {/* outlet */}
      </main>
      <Footer/>

    </div>
    </div>
  ) : null
}

export default App


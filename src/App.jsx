import './App.css'
import 'primeflex/primeflex.css'
import 'primeflex/themes/saga-blue.css'
import GitHubUsersList from './pages/GitHubUsersList'
import GitHubUserDetails from './pages/GitHubUserDetails'
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage'
  
function App() {

  

  return (
    <div className='surface-300 w-screen min-h-screen h-auto'>     
      <Routes>
        <Route path='/shawn-test-frontend' element={<GitHubUsersList/>} errorElement={<ErrorPage />}></Route>
        <Route path='/shawn-test-frontend/:username/details' element={<GitHubUserDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App

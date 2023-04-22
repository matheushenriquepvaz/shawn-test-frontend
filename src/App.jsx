import './App.css'
import 'primeflex/primeflex.css'
import 'primeflex/themes/saga-blue.css'
import GitHubUsersList from './components/GitHubUsersList'

function App() {


  return (
    <div className='surface-300 w-screen min-h-screen h-auto'>
      <GitHubUsersList/>
    </div>
  )
}

export default App

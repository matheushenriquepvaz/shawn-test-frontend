import LogoGitHub from "../components/LogoGitHub"
import { useNavigate, useParams } from 'react-router-dom';
import UserDetails from "../components/UserDetails"
import UserRepos from "../components/UserRepos";

function GitHubUserDetails() {

  let { username } = useParams();
  const navigate = useNavigate();


  const handleBackClick = () => {
    navigate(-1);
  }


  return (
    <div>
        <LogoGitHub/>
        <div className="grid mt-5">
            <div className="col-1">
              <div className='grid'>
                <div className='col-12 flex justify-content-end'>
                    <button className='border-round bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-3 border-nome'
                      onClick={() => {handleBackClick()}} type='button'>
                        BACK
                      </button>
                </div>
              </div>
            </div>
            <div className="col-10">
                <UserDetails username={username}/>
            </div>
            <div className="col-1"></div>            
        </div>
        <div className="grid mt-1">
            <div className="col-1"></div>
            <div className="col-10">
                <UserRepos username={username}/>
            </div>
            <div className="col-1"></div>            
        </div>
    </div> 
  )
}

export default GitHubUserDetails
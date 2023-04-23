import LogoGitHub from "../components/LogoGitHub"
import UserDetails from "../components/UserDetails"

function GitHubUserDetails() {
  return (
    <div>
        <LogoGitHub/>
        <div className="grid mt-5">
            <div className="col-1"></div>
            <div className="col-10">
                <UserDetails/>
            </div>
            <div className="col-1"></div>            
        </div>
    </div> 
  )
}

export default GitHubUserDetails
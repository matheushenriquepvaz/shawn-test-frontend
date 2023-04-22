import LogoGitHub from "./LogoGitHub"
import UsersTable from "./UsersTable"


function GitHubUsersList() {
  return (
    <div>
        <LogoGitHub/>
        <div className="grid mt-5">
            <div className="col-1"></div>
            <div className="col-10">
                <UsersTable/>
            </div>
            <div className="col-1"></div>            
        </div>
    </div> 
  )
}

export default GitHubUsersList
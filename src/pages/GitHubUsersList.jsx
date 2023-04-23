import { useEffect, useState } from "react";
import LogoGitHub from "../components/LogoGitHub"
import UsersTable from "../components/UsersTable"
import { useNavigate, useSearchParams  } from 'react-router-dom';



function GitHubUsersList() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [since , setSince] = useState(0);

  const redirectHandler = (user) => {
    console.log('chamou o callback')
    console.log(user.login)
    navigate(`/shawn-test-frontend/${user.login}/details`);
  }

  const changeUrlQueryParams = () => {
    history.replaceState(null,'','/shawn-test-frontend?since=10');
  }

  useEffect(() => {
    console.log('Renderizou');
    console.log(searchParams.get('since'));
    const sinceParam = searchParams.get('since');
    if (sinceParam !== null && sinceParam !== undefined) {
      setSince(Number.parseInt(sinceParam));
    }
  }, []);

  return (
    <div>
        <LogoGitHub/>
        <div className="grid mt-5">
          <div className="col-12">
            <button type="button" onClick={() => {changeUrlQueryParams()}}>Change</button>
          </div>
        </div>
        <div className="grid mt-5">
            <div className="col-1"></div>
            <div className="col-10">
                <UsersTable handleClickCardUser={redirectHandler} since={since}/>
            </div>
            <div className="col-1"></div>            
        </div>        
    </div> 
  )
}

export default GitHubUsersList
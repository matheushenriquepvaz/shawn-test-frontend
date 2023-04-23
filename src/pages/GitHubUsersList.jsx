import { useEffect, useState } from "react";
import LogoGitHub from "../components/LogoGitHub"
import UsersTable from "../components/UsersTable"
import { useNavigate, useSearchParams  } from 'react-router-dom';
import Paginator from "../components/Paginator";



function GitHubUsersList() {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [since , setSince] = useState(0);

  const redirectHandler = (user) => {
    console.log('chamou o callback')
    console.log(user.login)
    navigate(`/${user.login}/details`);
  }

  const handlePreviousAction = () => {
    if(since >= 5) {
      var newSince = since - 5;
      history.replaceState(null,'','/?since=' + newSince);
      setSince(newSince);
    }
  }

  const handleNextAction = () => {
    var newSince = since + 5;
    history.replaceState(null,'','/?since=' + newSince);
    setSince(newSince);
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
            <div className="col-1"></div>
            <div className="col-10">
                <UsersTable handleClickCardUser={redirectHandler} since={since}/>
            </div>
            <div className="col-1"></div>            
        </div>
        <div className="grid mt-5">
            <div className="col-1"></div>
            <div className="col-10">
                <Paginator previusAction={handlePreviousAction} nextAction={handleNextAction}/>
            </div>
            <div className="col-1"></div>            
        </div>       
    </div> 
  )
}

export default GitHubUsersList
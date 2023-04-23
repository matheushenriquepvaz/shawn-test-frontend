import { useEffect, useState } from "react";
import axios from "axios";


function UserRepos({username}) {

    const [repos, setRepos] = useState([]);

    useEffect(() => {
        console.log(`Rendering the ${username} repos !`);
        const findUser = async () => {
            const axiosResp = await axios.get(`http://localhost:8081/api/users/${username}/repos`);
            const reposFetched = axiosResp.data
            setRepos(reposFetched);
        };
        findUser();
    }, [username]);


    return (
    <>
        <div className="col-1"></div>
            <div className="col-10">
                <div className="grid">
                    <div className="col-12">
                        <label className="font-semibold ml-6">User Repositories</label>
                    </div>                    
                </div>
            </div>
        <div className="col-1"></div>

        <div className="col-1"></div>
        <div className="col-10">
            <div className="grid">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="grid card-blue">
                        <div className="col-3">
                            <label className="font-semibold">ID</label>
                        </div>
                        <div className="col-3">
                            <label className="font-semibold">Name</label>
                        </div>
                        <div className="col-5">
                            <label className="font-semibold">URL</label>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <div className="grid">
                <div className="col-1"></div>
                <div className="col-10">
                    {repos.map((repo) => (
                    <div className="grid card" key={repo.id}>
                        <div className="col-3">
                            <label>{repo.id}</label>
                        </div>
                        <div className="col-3">
                            <label>{repo.name}</label>
                        </div>
                        <div className="col-5">
                            <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.html_url}</a>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="col-1"></div>
            </div>
        </div>
        <div className="col-1"></div>
    </>
    )
}

export default UserRepos
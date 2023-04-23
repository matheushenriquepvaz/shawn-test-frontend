import axios from 'axios';
import { useState, useEffect } from 'react';
import AvatarImage from './AvatarImage';
import './UserDetails.css'
import { displayDateString } from '../utils/DateUtil';


function UserDetails({username}) {

    const [userFetched , setUserFetched] = useState({});
    

    useEffect(() => {
        console.log('usuario recebido: ' + username)
        const findUser = async () => {
            const axiosResp = await axios.get(`http://localhost:8081/api/users/${username}/details`);
            const users = axiosResp.data
            setUserFetched(users);
        };
        findUser();
    }, [])

    

    return (
        <div className='grid'>
            <div className='col-3'></div>
            <div className='col-6'>
                <div className='grid'>
                    <div className='col-6 card-no-padding'>
                        <div className='grid'>
                            <div className='col-12 p-0'>
                                <AvatarImage imageUrl={userFetched.avatar_url} size={'h-full w-full border-round-top'}/>
                            </div>                                                 
                        </div>
                        <div className='grid p-2'>
                            <div className='col-12'>
                                <label className='font-semibold opacity-80'>Id: </label><label className='opacity-80'> {userFetched.id}</label>
                            </div>
                            <div className='col-12'>
                                <label className='font-semibold opacity-80'>Login: </label><label className='opacity-80'>{userFetched.login}</label>
                            </div>
                            <div className='col-12'>
                                <label className='wrap-label font-semibold opacity-80'>Profile URL: </label>
                                <a className='opacity-80' href={userFetched.html_url} target="_blank" rel="noreferrer">{userFetched.html_url}</a>
                            </div>
                            <div className='col-12'>
                                <label className='font-semibold opacity-80'>Creation Date: </label><label className='opacity-80'>{displayDateString(userFetched.created_at)}</label>
                            </div>  
                        </div>          
                    </div>
                </div>                
            </div>
            <div className='col-3'></div>
        </div>
    )
}

export default UserDetails
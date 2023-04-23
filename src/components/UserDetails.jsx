import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AvatarImage from './AvatarImage';
import './UserDetails.css'
import { displayDateString } from '../utils/DateUtil';
import { useNavigate } from 'react-router-dom';


function UserDetails() {

    let { username } = useParams();
    const [userFetched , setUserFetched] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const findUser = async () => {
            const axiosResp = await axios.get(`http://localhost:8081/api/users/${username}/details`);
            const users = axiosResp.data
            setUserFetched(users);
        };
        findUser();
    }, [])

    const handleBackClick = () => {
        navigate(-1);
    }

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
                                <label className='wrap-label font-semibold opacity-80'>Profile URL: </label><label className='opacity-80'>{userFetched.url}</label>
                            </div>
                            <div className='col-12'>
                                <label className='font-semibold opacity-80'>Creation Date: </label><label className='opacity-80'>{displayDateString(userFetched.created_at)}</label>
                            </div>  
                        </div>          
                    </div>
                </div>
                <div className='grid'>
                    <div className='col-12 p-0'>
                        <button className='border-round bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-3 border-nome'
                         onClick={() => {handleBackClick()}} type='button'>
                            BACK
                         </button>
                    </div>
                </div>
            </div>
            <div className='col-3'></div>
        </div>
    )
}

export default UserDetails
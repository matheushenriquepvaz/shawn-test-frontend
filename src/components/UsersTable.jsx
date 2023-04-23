import { useEffect, useState } from 'react'
import UserIterable from './UserIterable';
import UsersTableHead from './UsersTableHead';
import axios from 'axios';

function UsersTable({handleClickCardUser, since}) {

    const [listaUsers, setListaUsers] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(5);
    const [idInit, setIdinit] = useState(1);

    const handleUserClicked = (user) => {
        console.log('login user: ' + JSON.stringify(user))
        handleClickCardUser(user);
    }

    useEffect(() => {
        console.log('since: ' + since);
        if (since && since !== null) {
            setIdinit(since);
        }        
        const findUsers = async () => {
            const axiosResp = await axios.get(`http://localhost:8081/api/users`,
            {
                params : {
                    since : since,
                    per_page: itensPerPage
                }
            }
            );
            const users = axiosResp.data
            setListaUsers(users);
        };
        findUsers();
        
    }, [since])

    return (
    <>
        <div className='grid card-blue'>
            <div className='col-12'>
                <UsersTableHead/>
            </div>
        </div>
        {listaUsers.map((user) => (
            <div className='grid card cursor-pointer' key={user.id} onClick={() => handleUserClicked(user)}>
                <div className='col-12'>
                    <UserIterable user={user}/>
                </div>
            </div>
        ))}
    </>
    )
}

export default UsersTable
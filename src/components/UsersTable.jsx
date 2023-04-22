import { useEffect, useState } from 'react'
import UserIterable from './UserIterable';
import UsersTableHead from './UsersTableHead';
import axios from 'axios';

function UsersTable() {

    const [listaUsers, setListaUsers] = useState([]);
    const [itensPerPage, setItensPerPage] = useState(10);
    const [idInit, setIdinit] = useState(1);

    

    useEffect(() => {
        const findUsers = async () => {
            const axiosResp = await axios.get(`http://localhost:8081/api/users`,
            {
                params : {
                    since : idInit,
                    per_page: itensPerPage
                }
            }
            );
            const users = axiosResp.data
            setListaUsers(users);
        };
        findUsers();
    }, [])

    return (
    <>
        <div className='grid card-blue'>
            <div className='col-12'>
                <UsersTableHead/>
            </div>
        </div>
        {listaUsers.map((user) => (
            <div className='grid card' key={user.id}>
                <div className='col-12'>
                    <UserIterable user={user}/>
                </div>
            </div>
        ))}
    </>
    )
}

export default UsersTable
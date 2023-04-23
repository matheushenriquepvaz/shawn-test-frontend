import AvatarImage from "./AvatarImage";

function UserIterable({user}) {
    return (
    <div className="grid flex align-items-center justify-content-center" key={user.id}>   
        <div className='col-4'>
            <AvatarImage imageUrl={user.avatar_url} size={'h-7rem w-7rem border-circle'}/>
        </div>
        <div className='col-3'>
            <span>{user.id}</span>
        </div>
        <div className='col-4'>
            <span>{user.login}</span>
        </div>
    </div>
    );
}

export default UserIterable
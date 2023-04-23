function UsersTableHead() {
  return (
    <div className='grid flex align-items-center justify-content-center'>
        <div className='col-4'>
            <span className="font-semibold">Avatar</span>
        </div>
        <div className='col-4'>
            <span className="font-semibold">ID</span>
        </div>
        <div className='col-4'>
            <span className="font-semibold">Username</span>
        </div>
    </div>
  )
}

export default UsersTableHead
function Paginator({previusAction, nextAction}) {

    const handlePrevious = () => {
        previusAction();
    }

    const handleNext = () => {
        nextAction();
    }

    return (
        <div className="grid">
            <div className="col-6 flex justify-content-center">
                <button className='border-round bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-3 border-nome' 
                onClick={() => handlePrevious()}>PREVIOUS</button>
            </div>
            <div className="col-6 flex justify-content-center">
                <button className='border-round bg-blue-500 text-white font-bold flex align-items-center justify-content-center p-3 border-nome'
                onClick={() => handleNext()}>NEXT</button>
            </div>
        </div>
    )
}

export default Paginator


function RefillBoxCard({color, amount, suffix}){
    return (
        <>
            <span>
                <figure className='circle' id={`${color}-circle`}></figure>  
                <p id='dot-label'>{amount} replacement head{suffix}</p><br></br>
            </span><br></br>
        </>
    )
}

export default RefillBoxCard
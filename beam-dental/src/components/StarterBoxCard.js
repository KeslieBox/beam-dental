

export default function StarterBoxCard({color, colorTotals, quantity}){  
    return (
        <div id={`${color}-card`}>
            <span>
                <figure className={`${color}-circle`}></figure> 
                <p id='dot-label'>{quantity} brush{quantity > 1 ? 'es' : ''}</p>
            </span> 
            <br></br>
            <br></br>
            <span>
                <figure className={`${color}-circle`}></figure>  
                <p id='dot-label'>{quantity} replacement head{quantity > 1 ? 's' : ''}</p>
            </span>
        </div>
    )
}
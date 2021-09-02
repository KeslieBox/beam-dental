

export default function StarterBoxCard({color, colorTotals}){
    // divides current color total by two and rounds up to determine 
    // the amount of boxes needed, ie 5 blue/ 2 brushes per box rounds to 3 
    let numberOfBoxes = Math.ceil(colorTotals[color]/2)
    // creates an array with an element for each number in range 0..numberOfBoxes
    let arrOfBoxes = new Array(numberOfBoxes).fill(true).map((e, i) => i+1)
    let currentColorTotal = colorTotals[color]

    const starterBoxDivs = arrOfBoxes.map(currentBox => {
        let quantity = currentColorTotal > 1 ? 2 : 1
        let suffixBrush = quantity > 1 ? 'es' : ''
        let suffixReplacementHead = quantity > 1 ? 's' : ''
        currentColorTotal -= 2
        return (
            <div id={`card`}>
                <span>
                    <figure className='circle' id={`${color}-circle`}></figure> 
                    <p id='dot-label'>{quantity} brush{suffixBrush}</p>
                </span> 
                <br></br>
                <br></br>
                <span>
                    <figure className='circle' id={`${color}-circle`}></figure>  
                    <p id='dot-label'>{quantity} replacement head{suffixReplacementHead}</p>
                </span> 
            </div>
        )    
    })

    return (
    <div>
        {starterBoxDivs}
    </div>
    )
}
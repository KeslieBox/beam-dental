

export default function StarterBoxCard({color, colorTotals, quantity}){
    // divides current color total by two and rounds up to determine 
    // the amount of boxes needed, ie 5 blue/ 2 brushes per box rounds to 3 
    let numberOfBoxes = Math.ceil(colorTotals[color]/2)
    // creates an array with an element for each number in range 0..numberOfBoxes
    let count = new Array(numberOfBoxes).fill(true).map((e, i) => i+1)
    let starterBoxCard = colorTotals[color]

    const starterBoxDivs = count.map(index => {
        let quantity = starterBoxCard > 1 ? 2 : 1
        let suffixBrush = quantity > 1 ? 'es' : ''
        let suffixReplacementHead = quantity > 1 ? 's' : ''
        starterBoxCard -= 2
        return (
            <div id={`${color}-card`}>
                <span>
                    <figure className={`${color}-circle`}></figure> 
                    <p id='dot-label'>{quantity} brush{suffixBrush}</p>
                </span> 
                <br></br>
                <br></br>
                <span>
                    <figure className={`${color}-circle`}></figure>  
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
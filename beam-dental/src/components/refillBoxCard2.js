

function RefillBoxCard({color, colorTotals}){
    // how to combine colors into boxes of 4?? need to go up one component for this where i can access all colors at once 
    // divides current color total by two and rounds up to determine 
    // the amount of boxes needed, ie 5 blue/ 2 replacement heads per box rounds to 3 
    let numberOfBoxes = Math.ceil(colorTotals[color]/2)
    // creates an array with an element for each number in range 0..numberOfBoxes
    let arrOfBoxes = new Array(numberOfBoxes).fill(true).map((e, i) => i+1)
    let currentColorTotal = colorTotals[color]

    const refillBoxDivs = arrOfBoxes.map(currentBox => {
        // each iteration where currentColorTotal is greater than two, display a new div 
        // subtracting two from the total and displaying as that div's quantity
        let quantity = currentColorTotal > 1 ? 2 : 1
        let suffixReplacementHead = quantity > 1 ? 's' : ''
        // removing two from total each time and displaying in a card div
        currentColorTotal -= 2
        return (
            <div id={`${color}-card`}>
                {/* loop through each count up to 4 and display a span like below */}
                {}
                <span>
                    <figure className={`${color}-circle`}></figure>  
                    <p id='dot-label'>{quantity} replacement head{suffixReplacementHead}</p>
                </span> 
            </div>
        )    
    })

    return (
    <div>
        {refillBoxDivs}
    </div>
    )
}

export default RefillBoxCard
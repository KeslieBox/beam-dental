import RefillBoxCard from './RefillBoxCard'

function RefillBox ({colorTotals, refillBoxes, totalRefills}){
        // creates array with key/ value pairs as elements of array, so that they are accessible for iteration and creation of boxes array creation
        let colorsArray = Object.entries(colorTotals)
        let boxes = [{}]
        let spacesLeft = 4
        let divTotal = 0
        
        colorsArray.forEach(([color, amount], i) => {  
            // current quantity being used to build each div, equal to either 
            // the current amount left of the color or 4 if amount is greater than 4
            let quantity = amount < 5 ? amount : 4
            debugger
            // how to check if the last amount + the previous amount is closer to 4 than the current amount + the previous amount? ie if the total is 3 and should be 4
            // if (boxes[boxes.length - 1].color +  )
            // this last part is super inefficient, how to check the above conditions in a better way?
            if (quantity < 5 && amount > 0 && spacesLeft >= quantity && !boxes.find((div) => Object.keys(div).find(key => key === color))){
                spacesLeft = spacesLeft - quantity
                boxes[boxes.length - 1] = {...boxes[boxes.length - 1], [color]: quantity}
                amount -= quantity
                divTotal += quantity
                // if another amount is found that completes the current div, return array with that color and amount
                let equalsFour = colorsArray.find(([c, a], i) => c !== color && a + divTotal === 4 )
                // if the current divTotal is less than 4 and another color is found that completes the divTotal of 4
                // add it to the div and return to exit the loop and move to next color
                if (divTotal < 4 && equalsFour) {
                   debugger
                   boxes[boxes.length - 1] = {...boxes[boxes.length - 1], [equalsFour[0]]: equalsFour[1]}
                   spacesLeft = spacesLeft - equalsFour[1]
                   return 
                }
                debugger
            }
            // if the other div is full, ie greater than the spaces left out of 4 total,
            if (quantity > spacesLeft ){
                debugger
                // reset the spacesLeft and current total for new div
                spacesLeft = 4
                divTotal = 0
                // create a new element to represent another div 
                boxes[boxes.length] = {[color]: amount}
                // subtract the quantity added to div from the amount of refills needed total
                // update the divTotal to reflect quantity added
                amount -= quantity
                divTotal += quantity                
            }
            
        })

    return (
        <>
        <h2>Summary: </h2>
        <p>Refill Boxes: {refillBoxes}</p>
        <p>Replacement Heads: {totalRefills} </p>
        <div className='brush-cards'>
            {/* box is an array of objects representing info needed for each div */}
            {boxes.map((div) => {
                debugger
                return (
                    <div id={`card`}>
                        {/* div represents an object with colors and amounts for that respective div */}
                        {Object.entries(div).map(([color,amount]) => {
                            debugger
                            let suffix = amount > 1 ? 's' : ''
                            return (
                                <>
                                    <span>
                                        <figure className={`${color}-circle`}></figure>  
                                        <p id='dot-label'>{amount} replacement head{suffix}</p><br></br>
                                    </span><br></br>
                                </>
                            )
                        })}
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default RefillBox
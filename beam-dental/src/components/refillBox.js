import RefillBoxCard from './refillBoxCard'

function RefillBox ({colorTotals, refillBoxes, totalRefills}){
        // creates a sorted array of the colors & the total amount of refills needed, 
        // so that they are accessible for iteration and creation of the refillDivs array 
        let colorsArray = Object.entries(colorTotals).sort((a,b) => b[1] - a[1])
        // represents an array of divs, each representing a box of refills
        let refillDivs = [{}]
        let spacesLeftInDiv = 4
        let divTotal = 0
        
        colorsArray.forEach(([color, amount], i) => {              
            // represents the current quantity being used to build each div, equal to either the current 
            // amount left of the color or the maximum box/div total of 4 if amount remaining is greater than 4
            let quantity = amount < 5 ? amount : 4
            let nextElement = i < colorsArray.length - 1 ? colorsArray[i+1][1] : 0
            let lastElement = colorsArray[2][1] 
           
            // if quantity left is less than or equal to 4 & there are enough spacesLeftInDiv
            if (quantity < 5 && amount > 0 && spacesLeftInDiv >= quantity){
                // add the max quantity of current color to the current div
                refillDivs[refillDivs.length - 1] = {
                    ...refillDivs[refillDivs.length - 1], 
                    [color]: quantity
                }
                // remove quantity added to div from the spacesLeftInDiv & the amount of refills needed for order
                spacesLeftInDiv = spacesLeftInDiv - quantity
                amount -= quantity
                // update the total quantity of the div to reflect newly added items
                divTotal += quantity
                // update the quantity to accurately represent what remains to be fulfilled
                quantity = amount < 5 ? amount : 4
            }

            // while the quantity remaining is greater than the spacesLeft from the original 4
            while (quantity > spacesLeftInDiv){
                // reset the spacesLeft to 4 and the divTotal to 0 for the creation of a new div
                spacesLeftInDiv = 4
                divTotal = 0      
                // create a new element at the end of the array to represent another div       
                refillDivs[refillDivs.length] = {[color]: quantity}  
                // remove quantity added to div from the spacesLeftInDiv & the amount of refills needed for order
                spacesLeftInDiv = spacesLeftInDiv - quantity           
                amount -= quantity
                // update the divTotal to reflect quantity added
                divTotal += quantity  
                // reset/ update the quantity 
                quantity = amount < 5 ? amount : 4 

                if (nextElement > spacesLeftInDiv && spacesLeftInDiv >= lastElement){
                    refillDivs[refillDivs.length - 1] = {
                        ...refillDivs[refillDivs.length - 1], 
                        [colorsArray[2][0]]: lastElement
                    }
                    spacesLeftInDiv = spacesLeftInDiv - lastElement
                    colorsArray[2][1] = 0
                    amount = 0
                    quantity = 0
                    divTotal = 4
                }
            }    
        })

    return (
        <>
        <h2>Summary: </h2>
        <p>Refill Boxes: {refillBoxes}</p>
        <p>Replacement Heads: {totalRefills} </p>
        <div className='brush-cards'>
            {refillDivs.map((div) => {
                return (
                    <div id={`card`}>
                        {Object.entries(div).map(([color,amount]) => {
                            let suffix = amount > 1 ? 's' : ''
                            return (
                                <>
                                    <span>
                                        <figure className='circle' id={`${color}-circle`}></figure>  
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
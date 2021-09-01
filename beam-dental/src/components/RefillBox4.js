import RefillBoxCard from './RefillBoxCard'

function RefillBox ({colorTotals, refillBoxes, totalRefills}){
        // creates RefillBoxCard component for each brush color
        let colorsArray = Object.entries(colorTotals)
        let currentColorTotal = 0
        let boxes = [{}]
        let divs = []
        let spacesLeft = 4
        let numItems = boxes.length
        let divTotal = 0
        
        
        colorsArray.forEach(([color, amount]) => {  
            // current quantity being handled of the color, either the current amount left or 4 if amount is greater than 4
            let quantity = amount < 5 ? amount : 4
            let suffixReplacementHead = quantity > 1 ? 's' : ''
            debugger
            // how to check if the last amount + the previous amount is closer to 4 than the current amount + the previous amount? ie if the total is 3 and should be 4
            // if (boxes[boxes.length - 1].color +  )
            if (quantity < 5 && amount > 0 && spacesLeft >= quantity){
                spacesLeft = spacesLeft - quantity
                boxes[boxes.length - 1] = {...boxes[boxes.length - 1], [color]: quantity}
                amount -= quantity
                divTotal += quantity
                debugger
            }

            if (quantity > spacesLeft){
                // create a new div
                debugger
                spacesLeft = 4
                boxes[boxes.length] = {[color]: amount}
            }


            // currentColorTotal = colorTotals[color] + 1      
        //     let currentCount = colorTotals[color]
        //     debugger
        //     while (currentCount > 0) {
        //         if (colorTotals[color] === 1) {
        //             // do i need to add these to object if it's just one? should i just return the component? 
        //             // I think no because if i add more single colors, they need to go into the same component as below...how do i merge them?
        //             // componentStructure[1][color] ? componentStructure[1][color] ++ : componentStructure[1][color] = 1
        //             // create array of divs to display
        //             let numberOfBoxes = Math.ceil(colorTotals[color]/2)
        //             // creates an array with an element for each number in range 0..numberOfBoxes                    
        //             let arrOfBoxes = new Array(numberOfBoxes).fill(true).map((e, i) => i+1)
                    
        //             currentColorTotal --
        //             currentCount --
        //             debugger
        //             {divOfSingles.push(
                        // <>
                        // <span>
                        //     <figure className={`${color}-circle`}></figure>  
                        //     <p id='dot-label'>1 replacement head</p><br></br>
                        // </span><br></br>
                        // </>
        //             )}

        //         } else if (colorTotals[color] > 2){
        //              debugger
        //              let quantity = colorTotals[color] > 3 ? 4 : currentColorTotal
        //              currentCount > 3 ? currentColorTotal -= 4 : currentColorTotal -= currentColorTotal
        //              currentCount > 3 ? currentCount -= 4 : currentCount -= currentCount
        //              if (divofQuadruples.length > 0){
        //                 let [currentCount] = []
        //                 `divofQuadruples${currentCount}`.push(
        //                     <>
        //                     <span>
        //                         <figure className={`${color}-circle`}></figure>  
        //                         <p id='dot-label'>{quantity} replacement heads</p><br></br>
        //                     </span><br></br>
        //                     </>
        //                 )
        //              } else {
        //                 divofQuadruples.push(
        //                     <>
        //                     <span>
        //                         <figure className={`${color}-circle`}></figure>  
        //                         <p id='dot-label'>{quantity} replacement heads</p><br></br>
        //                     </span><br></br>
        //                     </>
        //                 )
        //             }
        //         } else {
        //             // if divOfDoubles.length > 1, map through and create new div 
        //             if (divOfDoubles.length > 1){
        //                 debugger
        //                 divOfDoublesNew.push(
        //                     <>
        //                     <span>
        //                         <figure className={`${color}-circle`}></figure>  
        //                         <p id='dot-label'>2 replacement heads</p><br></br>
        //                     </span><br></br>
        //                 </>
        //                 )
        //                 debugger
        //                 currentColorTotal -= 2
        //                 currentCount -=2
                        
        //             } else {
        //                 debugger
        //                 divOfDoubles.push(
        //                     <>
        //                     <span>
        //                         <figure className={`${color}-circle`}></figure>  
        //                         <p id='dot-label'>2 replacement heads</p><br></br>
        //                     </span><br></br>
        //                     </>
        //                 )}
        //                 currentColorTotal -= 2
        //                 currentCount -=2
        //         }
        //     }
            
        })

    return (
        <>
        <h2>Summary: </h2>
        {/* need to update these numbers dynamically */}
        <p>Refill Boxes: {refillBoxes}</p>
        <p>Replacement Heads: {totalRefills} </p>
        <div className='brush-cards'>
            {/* box is an object with  */}
            {boxes.forEach((div) => {
                debugger
                return (
                    <div id={`card`}>
                        {Object.entries(div).forEach(([color,amount]) => {
                            debugger
                            let suffixReplacementHead = amount > 1 ? 's' : ''
                            return (
                                <>
                                    <span>
                                        <figure className={`${color}-circle`}></figure>  
                                        <p id='dot-label'>{amount} replacement head{suffixReplacementHead}</p><br></br>
                                    </span><br></br>
                                </>
                            )
                        })}
                    </div>
                )
            })}
            

        </div>
        {/* <div className='brush-cards'>
        <div id='blue-card'>
            <span>
                <figure class="circle" style={{background: '#01c4e9'}}></figure> 
                <text id='dot-label'> 2 replacement heads</text>
            </span> 
            <br></br>
            <br></br>
            <span>
                <figure class="circle" style={{background: '#e0e900'}}></figure>  
                <text id='dot-label'> 2 replacement heads</text>
            </span>
        </div>
        <div id='blue-card'>
            <span>
                <figure class="circle" style={{background: '#e92fac'}}></figure>  
                <text id='dot-label'> 1 replacement head</text>
            </span>
        </div> */}
         </>
    )
}

export default RefillBox
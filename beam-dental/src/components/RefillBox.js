import RefillBoxCard from './RefillBoxCard'

function RefillBox ({colorTotals, refillBoxes, totalRefills}){
        // creates RefillBoxCard component for each brush color
        let colorsArray = Object.keys(colorTotals)
        let totalsArray =  Object.values(colorTotals)
        let multiplesOfTwo = []
        const renderRefillBoxCardsByColor = colorsArray.map(color => {
            multiplesOfTwo = totalsArray.filter((val, index) => { 
                debugger
                // Object.values(colorTotals).map(val => {})
                return colorTotals[color] === 2
                // return (
                //     <RefillBoxCard color={color} colorTotals={colorTotals}/>
                // )
            })
            console.log("m", multiplesOfTwo)
        })

    return (
        <>
        <h2>Summary: </h2>
        {/* need to update these numbers dynamically */}
        <p>Refill Boxes: {refillBoxes}</p>
        <p>Replacement Heads: {totalRefills} </p>
        <div className='brush-cards'>
            {/* iterates through each color and returns StarterBoxCard component */}
            {renderRefillBoxCardsByColor}    
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
import StarterBoxCard from './StarterBoxCard.js'

function StarterBox ({colorTotals, starterBoxes, totalBrushes}){
    // creates StarterBoxCard component for each brush color
    const renderStarterBoxCardsByColor = Object.keys(colorTotals).map(color => { 
        return (
            <StarterBoxCard color={color} colorTotals={colorTotals}/>
        )
    })

    return (
        <>
        <h2>Summary: </h2>
        <p id='starter'>Starter Boxes: {starterBoxes}</p>
        <p>Brushes: {totalBrushes} </p>
        <p>Replacement Heads: {totalBrushes} </p>
        <div className='brush-cards'>
            {/* iterates through each color and returns StarterBoxCard component */}
            {renderStarterBoxCardsByColor}    
        </div>
        </>
    )
}

export default StarterBox
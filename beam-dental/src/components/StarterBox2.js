import StarterBoxCard2 from './StarterBoxCard2.js'

function StarterBox2 ({colorTotals, starterBoxes, totalBrushes}){
    const colorsArray = Object.keys(colorTotals)

    return (
        <>
        <h2>Summary: </h2>
        <p id='starter'>Starter Boxes: {starterBoxes}</p>
        <p>Brushes: {totalBrushes} </p>
        <p>Replacement Heads: {totalBrushes} </p>
        <div className='brush-cards'>
            {/* iterates through each color and returns StarterBoxCard component */}
            {colorsArray.map(color => { 
                return (
                    <StarterBoxCard2 color={color} colorTotals={colorTotals}/>
                )
            })}    
        </div>
        </>
    )
}

export default StarterBox2
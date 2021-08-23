import useStyles from '../styles/useStyles'
import {useState} from 'react'
import StarterBoxCard from './StarterBoxCard.js'

function StarterBox ({users, colorTotals, starterBoxes, totalBrushes}){
    return (
        <>
        <h2>Summary: </h2>
        <p id='starter'>Starter Boxes: {starterBoxes}</p>
        <p>Brushes: {totalBrushes} </p>
        <p>Replacement Heads: {totalBrushes} </p>
        <div className='brush-cards'>
            {/* iterate through each color and return order card component */}
            {Object.keys(colorTotals).map(color => {
                // return div dedicated to current color and the number of brushes
                return (
                    // orders[color] return the number of brushes
                    <StarterBoxCard color={color} quantity={colorTotals[color]}/>
                )
            })} 
            
        </div>
        </>
    )
}

export default StarterBox
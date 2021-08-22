import useStyles from '../styles/useStyles'
import {useState} from 'react'
import BlueBrushDiv from './blueBrushDiv'

function StarterBox ({users, orders, starterBoxes, totalBrushes}){
    console.log(starterBoxes)
    return (
        <>
        <h2>Summary: </h2>
        <p id='starter'>Starter Boxes: {starterBoxes}</p>
        <p>Brushes: {totalBrushes} </p>
        <p>Replacement Heads: {totalBrushes} </p>
        <div className='brush-cards'>
            {Object.keys(orders).map(color => {
                // return div dedicated to current color and the number of brushes
                // how to set the color for current div?
                let backgroundColor = orders[color] === 'blue' ? '#01c4e9' : orders[color] === 'green' ? '#e0e900' : '#e92fac'

                // if (color === 'blue') {
                //     if (orders[color] < 3) {
                //         return (<BlueBrushDiv />)
                //     } else {
                //         // take the number of brushes needed and divide by two (2 brushes, 2 replacement heads per box)
                //         // return a div for each count of two
                //         let count = new Array(Math.ceil(orders[color]/2))
                //         count.forEach(index => {
                //             return (<BlueBrushDiv />)
                //         })

                //     }
                // }
                debugger
                return (
                    // orders[color] return the number of brushes
                    <div id={`${color}-card`}>
                        <span>
                            <figure className="circle" style={{background: backgroundColor}}></figure> 
                            <p id='dot-label'>{orders[color]} brush{orders[color] > 1 ? 'es' : ''}</p>
                        </span> 
                        <br></br>
                        <br></br>
                        <span>
                            <figure className="circle" style={{background: backgroundColor}}></figure>  
                            <p id='dot-label'>{orders[color]} replacement head{orders[color] > 1 ? 's' : ''}</p>
                        </span>
                    </div>
                    )
            })} 
            {/* iterate through each color and return card component */}
        {/* <div id='blue-card'>
            <span>
                <figure className="circle" style={{background: '#01c4e9'}}></figure> 
                <p id='dot-label'>{orders[color]}</p>
            </span> 
            <br></br>
            <br></br>
            <span>
                <figure className="circle" style={{background: '#01c4e9'}}></figure>  
                <p id='dot-label'> 2 replacement heads</p>
            </span>
        </div> */}
        {/* <div id='green-card'>
            <span>
                <figure className="circle" style={{background: '#e0e900'}}></figure> 
                <p id='dot-label'> 2 brushes</p>
            </span> 
            <br></br>
            <br></br>
            <span>
                <figure className="circle" style={{background: '#e0e900'}}></figure>  
                <p id='dot-label'> 2 replacement heads</p>
            </span>
        </div>
        <div id='pink-card'>
            <span>
                <figure className="circle" style={{background: '#e92fac'}}></figure> 
                <p id='dot-label'> 1 brush</p>
            </span> 
            <br></br>
            <br></br>
            <span>
                <figure className="circle" style={{background: '#e92fac'}}></figure>  
                <p id='dot-label'> 1 replacement head</p>
            </span>
        </div> */}
        </div>
        </>
    )
}

export default StarterBox
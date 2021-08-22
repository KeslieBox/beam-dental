import useStyles from '../styles/useStyles'

function StarterBox ({users, orders}){
    
    return (
        <>
        <h2>Summary: </h2>
        {/* need to update these numbers dynamically */}
        <p id='starter'>Starter Boxes: 1</p>
        <p>Brushes: 2 </p>
        <p>Replacement Heads: 7 </p>
        <div className='brush-cards'>
            {/* {Object.keys(orders).map(color => {
                // return div dedicated to current color and the number of brushes
                return (
                    // orders[color] return the number of brushes
                    orders[color]
                    )
            })} */}
            {/* iterate through each color and return card component */}
        <div id='blue-card'>
            <span>
                <figure className="circle" style={{background: '#01c4e9'}}></figure> 
                <p id='dot-label'> 2 brushes</p>
            </span> 
            <br></br>
            <br></br>
            <span>
                <figure className="circle" style={{background: '#01c4e9'}}></figure>  
                <p id='dot-label'> 2 replacement heads</p>
            </span>
        </div>
        <div id='green-card'>
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
        </div>
        </div>
        </>
    )
}

export default StarterBox
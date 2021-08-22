import useStyles from '../styles/useStyles'

function RefillBox ({users, orders}){
    const classes = useStyles()

    return (
        <>
        <h2>Summary: </h2>
        {/* need to update these numbers dynamically */}
        <p>Refill Boxes: 3</p>
        <p>Brushes: 5 </p>
        <p>Replacement Heads: 5 </p>
        <div className='brush-cards'>
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
        </div>
        </div>
        </>
    )
}

export default RefillBox
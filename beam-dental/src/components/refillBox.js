import useStyles from '../styles/useStyles'

function RefillBox (){
    const classes = useStyles()

    return (
        <>
        <h2>Summary: </h2>
        {/* need to update these numbers dynamically */}
        <p>Refill Boxes: 3</p>
        <p>Brushes: 5 </p>
        <p>Replacement Heads: 5 </p>

        <div id='blue-card'>
            <span>
                <figure class="circle"></figure> 
                <text id='dot-label'> 2 Brushes</text>
            </span> 
            <br></br>
            <br></br>
            <span>
                <figure class="circle"></figure>  
                <text id='dot-label'> 2 Brushes</text>
            </span>
        </div>
        </>
    )
}

export default RefillBox
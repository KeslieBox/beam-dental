import useStyles from '../styles/useStyles'

function StarterBox (){
    const classes = useStyles()

    return (
        <>
        <h2>Summary: </h2>
        {/* need to update these numbers dynamically */}
        <p>Starter Boxes: 3</p>
        <p>Brushes: 5 </p>
        <p>Replacement Heads: 5 </p>
        <div className='brush-cards'>
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
        <div id='green-card'>
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
        <div id='pink-card'>
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
        </div>
        </>
    )
}

export default StarterBox
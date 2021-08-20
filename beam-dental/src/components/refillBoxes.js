import useStyles from '../styles/useStyles'

function RefillBoxes (){
    const classes = useStyles()

    return (
        <button className={classes.tab} >
            Refill Boxes
        </button>
    )
}

export default RefillBoxes
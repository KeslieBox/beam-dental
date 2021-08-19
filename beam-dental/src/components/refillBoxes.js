import useStyles from '../styles/useStyles'

function RefillBoxes (){
    const classes = useStyles()

    return (
        <button className={classes.tab} >
            Refills
        </button>
    )
}

export default RefillBoxes
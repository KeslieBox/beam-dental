import useStyles from '../styles/useStyles'

function StarterBox (){
    const classes = useStyles()

    return (
        <button className={classes.tab} >
            Starter Box
        </button>
    )
}

export default StarterBox
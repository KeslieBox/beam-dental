import useStyles from '../styles/useStyles'

function Tab ({type, active, handleClick}){
    const classes = useStyles()
    debugger
    return (
        <button className={classes.tab} >
            {type}
        </button>
    )
}

export default Tab
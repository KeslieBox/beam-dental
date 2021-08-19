import useStyles from '../styles/useStyles'
import RefillBoxes from './refillBoxes'
import StarterBox from './starterBox'

function Tabs (){
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <StarterBox />
            <RefillBoxes />
        </div>
    )
}

export default Tabs
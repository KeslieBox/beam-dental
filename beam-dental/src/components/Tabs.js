import useStyles from '../styles/useStyles'
import {useState} from 'react'
import RefillBoxes from './refillBoxes'
import StarterBox from './starterBoxes'
import Tab from './Tab'

const types = ['Starter Box', 'Refill Boxes'];

function Tabs (){
    const classes = useStyles()
    // const types = ['Starter Box', 'Refill Boxes'];
    const [active, setActive] = useState(types[0])

    return (
        <div className={classes.container}>
            {types.map(type => {
                return (
                    <Tab key={type} type={type} active={active === type} handleClick={setActive}/>
                )
            })}
            {/* <StarterBox />
            <RefillBoxes /> */}
        </div>
    )
}

export default Tabs
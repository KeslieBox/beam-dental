import useStyles from '../styles/useStyles'
import {useState} from 'react'
import RefillBox from './refillBox'
import StarterBox from './starterBox'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

function TabsComponent (){
    const classes = useStyles()
    const types = ['Starter Box', 'Refill Boxes']

    return (
        <div className='container'>
            <div className="shipping">
            <h1>Shipping</h1>
            <Tabs>
                <TabList>
                    <Tab>Starter Boxes</Tab>
                    <Tab>Refill Boxes</Tab>
                </TabList>
                    <TabPanel>
                        <div className="tab-content">
                            <StarterBox />
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-content">
                            <RefillBox />
                        </div>
                    </TabPanel>
            </Tabs>
            </div>
        </div>
    )
}

export default TabsComponent
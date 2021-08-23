import RefillBox from './refillBox'
import StarterBox from './StarterBox'
import StarterBox2 from './StarterBox2'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

function TabsComponent ({colorTotals, starterBoxes, refillBoxes, totalBrushes}){
    
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
                            {/* need to reconfigure to avoid prop drilling */}
                            <StarterBox2 colorTotals={colorTotals} starterBoxes={starterBoxes} refillBoxes={refillBoxes} totalBrushes={totalBrushes}/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-content">
                            <RefillBox colorTotals={colorTotals}/>
                        </div>
                    </TabPanel>
            </Tabs>
            </div>
        </div>
    )
}

export default TabsComponent
import RefillBox from './refillBox'
import StarterBox from './starterBox'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

function TabsComponent ({colorTotals, starterBoxes, refillBoxes, totalBrushes, hasError}){
   
    return (
        <div className='container'>
            {hasError && <h1>Error: Could not receive family preferences. </h1>}
            <div className="shipping">
            <h1>Shipping</h1>
            <Tabs>
                <TabList>
                    <Tab>Starter Boxes</Tab>
                    <Tab>Refill Boxes</Tab>
                </TabList>
                    <TabPanel>
                        <div className="tab-content">
                            <StarterBox colorTotals={colorTotals} starterBoxes={starterBoxes} refillBoxes={refillBoxes} totalBrushes={totalBrushes}/>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-content">
                            <RefillBox colorTotals={colorTotals} refillBoxes={refillBoxes} totalRefills={totalBrushes} />
                        </div>
                    </TabPanel>
            </Tabs>
            </div> 
        </div>
    )
}

export default TabsComponent
import TabsComponent from "./components/TabsComponent";
import {useState, useEffect} from 'react'

function App() {
  const [_, setUsers] = useState([])
  const [totals, setTotals] = useState({
    colorTotals: 0,
    starterBoxes: 0,
    refillBoxes: 0,
    totalBrushes: 0
 });

  const createOrders = (users) => {
    let starterBoxesNeeded, refillBoxesNeeded
    const colorTotals = {}
    let totalBrushes = 0
    
    // totals up each color
    users.forEach(user => {
      colorTotals[user.brush_color] ? colorTotals[user.brush_color] += 1 : colorTotals[user.brush_color] = 1
      totalBrushes += 1
    })
         
    starterBoxesNeeded = Math.ceil((totalBrushes) / 2)
    refillBoxesNeeded = Math.ceil(totalBrushes / 4)
    
    setTotals({
      colorTotals: colorTotals,
      starterBoxes: starterBoxesNeeded,
      refillBoxes: refillBoxesNeeded,
      totalBrushes: totalBrushes
    })
  } 

  useEffect(() => {
    (async() => {
      try {
        const resp = await fetch('https://beamtech.github.io/boxing-kata-js/perks.json')
        const users = await (resp.json())
        setUsers(users)
        createOrders(users)
      } catch (err){
        throw new Error('Error: Could not receive family preferences.')
      }
    })()
  }, [])

  return (
    <>
      <TabsComponent 
        colorTotals={totals.colorTotals} 
        starterBoxes={totals.starterBoxes} 
        refillBoxes={totals.refillBoxes} 
        totalBrushes={totals.totalBrushes}
      />
    </>
  );
}

export default App;

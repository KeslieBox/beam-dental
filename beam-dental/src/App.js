import TabsComponent from "./components/tabsComponent";
import {useState, useEffect} from 'react'

function App() {
  const [_, setUsers] = useState([])
  const [hasError, setHasError] = useState(false)
  const [totals, setTotals] = useState({
    colorTotals: 0,
    starterBoxes: 0,
    refillBoxes: 0,
    totalBrushes: 0
 })

  const createOrders = (users) => {
    let starterBoxesNeeded, refillBoxesNeeded
    const colorTotals = {}
    let totalBrushes = 0
    
    // totals up each color based on user preferences
    users.forEach(user => {
      colorTotals[user.brush_color] ? colorTotals[user.brush_color] += 1 : colorTotals[user.brush_color] = 1
      totalBrushes += 1
    })
    
    // rounds up the number of users to accommodate the number of boxes needed
    // 2 brushes and 2 replacement heads per starter box
    // 4 replacement heads per box
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
        setHasError(true)
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
        hasError={hasError}
      />
    </>
  );
}

export default App;

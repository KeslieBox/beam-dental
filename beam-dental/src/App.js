import TabsComponent from "./components/tabsComponent";
import ErrorComponent from "./components/errorHandling/errorComponent";
import {useState, useEffect} from 'react'

function App() {
  const [_, setUsers] = useState([])
  const [totals, setTotals] = useState({
    colorTotals: 0,
    starterBoxes: 0,
    refillBoxes: 0,
    totalBrushes: 0
 })
 const [hasError, setHasError] = useState(false)

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
        const resp = await fetch('https://beamtech.github.io/boxing-kata-js/perks.jso')
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

import TabsComponent from "./components/TabsComponent";
import {useState, useEffect} from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [totals, setTotals] = useState({
    colorTotals: 0,
    starterBoxes: 0,
    refillBoxes: 0,
    totalBrushes: 0
 });

  const createOrders = (users) => {
    let colorTotals, totalBrushes, starterBoxesNeeded, refillBoxesNeeded
    let [blueBrushes, greenBrushes, pinkBrushes, ] = [0, 0, 0]
    
    // totals up each color
    users.map(user => {
        if (user.brush_color === "green") greenBrushes++
        if (user.brush_color === "pink") pinkBrushes++
        if (user.brush_color === "blue") blueBrushes++
    })
    
    // is it too redundant to separate these out like this??
    colorTotals = {blue: blueBrushes, green: greenBrushes, pink: pinkBrushes} 
    totalBrushes = blueBrushes + greenBrushes + pinkBrushes
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

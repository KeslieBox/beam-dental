import TabsComponent from "./components/TabsComponent";
import {useState, useEffect} from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [colorTotals, setColorTotals] = useState([])
  const [starterBoxes, setStarterBoxes] = useState(0)
  const [refillBoxes, setRefillBoxes] = useState(0)
  const [totalBrushes, setTotalBrushes] = useState(0)

  const createOrders = (users) => {
    let colorTotals, totalBrushes
    let [blueBrushes, greenBrushes, pinkBrushes, ] = [0, 0, 0]
    
    // totals up each color
    users.map(user => {
        if (user.brush_color === "green") greenBrushes++
        if (user.brush_color === "pink") pinkBrushes++
        if (user.brush_color === "blue") blueBrushes++
    })
    
    colorTotals = {blue: blueBrushes, green: greenBrushes, pink: pinkBrushes} 
    setColorTotals(colorTotals)
    // totalBrushes represents one brush per user aka totalUsers
    totalBrushes = blueBrushes + greenBrushes + pinkBrushes
    setTotalBrushes(totalBrushes)    
    // starter box order = one brush per user and one replacement head per user
    setStarterBoxes(Math.ceil((totalBrushes * 2) / 4))
    setRefillBoxes(Math.ceil(totalBrushes / 4))
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
      <TabsComponent colorTotals={colorTotals} starterBoxes={starterBoxes} refillBoxes={refillBoxes} totalBrushes={totalBrushes}/>
    </>
  );
}

export default App;

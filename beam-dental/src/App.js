import TabsComponent from "./components/TabsComponent";
import {useState, useEffect} from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [orders, setOrders] = useState([])
  const [starterBoxes, setStarterBoxes] = useState(0)
  const [refillBoxes, setRefillBoxes] = useState(0)
  const [totalBrushes, setTotalBrushes] = useState(0)

  // need to create new obj, ie orders = {green: 2, blue: 2, pink: 2}
  const createOrders = (users) => {
    let [greenBrushes, pinkBrushes, blueBrushes] = [0, 0, 0]
    let orders, totalBrushes
    users.map(user => {
        if (user.brush_color === "green") {
            greenBrushes+=1
        } else if (user.brush_color === "pink") {
            pinkBrushes++
        } else {
            blueBrushes++
        }
    })
    
    orders = {blue: blueBrushes, green: greenBrushes, pink: pinkBrushes} 
    setOrders(orders)
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
        // do i need to set users??
        setUsers(users)
        createOrders(users)
      } catch (err){
        throw new Error('Error: Could not receive family preferences.')
      }
    })()
  }, [])

  return (
    <>
      <TabsComponent users={users} orders={orders} starterBoxes={starterBoxes} refillBoxes={refillBoxes} totalBrushes={totalBrushes}/>
    </>
  );
}

export default App;

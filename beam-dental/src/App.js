import TabsComponent from "./components/TabsComponent";
import {useState, useEffect} from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [orders, setOrders] = useState([])
  let [greenBrushes, pinkBrushes, blueBrushes, totalBrushes] = [0, 0, 0]
    let replacementHeads = totalBrushes;
    let starterBoxes = Math.ceil((totalBrushes + replacementHeads) / 4)
    let refillBoxes = 0;

    // need to restructure users obj to only include the orders, ie let orders = {green: 2, blue: 2, pink: 2}
    const createOrders = (users) => {
        users.map(user => {
            if (user.brush_color === "green") {
                greenBrushes+=1
            } else if (user.brush_color === "pink") {
                pinkBrushes++
            } else {
                blueBrushes++
            }
        })
        
        const orders = {blue: blueBrushes, green: greenBrushes, pink: pinkBrushes} 
        totalBrushes = blueBrushes + greenBrushes + pinkBrushes      
        setOrders(orders)
        debugger
    } 

  useEffect(() => {
    (async() => {
      try {
        const resp = await fetch('https://beamtech.github.io/boxing-kata-js/perks.json')
        console.log(resp)
        const users = await (resp.json())
        // do i need to set users??
        setUsers(users)
        createOrders(users)
      } catch (err){
        // customize error message: 'Error: Could not receive family preferences.'
        // throw new Error('Error: Could not receive family preferences.')
        console.log(err)
      }
    })()
  }, [])

  return (
    <>
      <TabsComponent users={users} orders={orders}/>
    </>
  );
}

export default App;

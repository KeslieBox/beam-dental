import Tabs from "./components/Tabs";
import {useState, useEffect} from 'react'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    (async() => {
      const resp = await fetch('https://beamtech.github.io/boxing-kata-js/perks.json')
      const users = await (resp.json())
      setUsers(users)
    })()
  }, [])

  return (
    <>
      <Tabs />
    </>
  );
}

export default App;

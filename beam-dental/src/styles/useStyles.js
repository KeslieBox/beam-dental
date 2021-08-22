// not using...

import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  //container styling
  container: {
    display: 'flex',
  },

  tab: {
    fontSize: '20px',
    padding: '10px 60px',
    cursor: 'pointer',
    opacity: 0.6,
    background: 'white',
    border: 0,
    outline: 0,
    display: 'flex',
  },

  status: {    
    // '& .active': {
      borderBottom: '2px solid blue',
      opacity: 1,
    // }
  },
})

  export default useStyles
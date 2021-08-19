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
      diplay: 'flex',
    },
  
    // list item styling
   li: {
    fontSize: '18px',
    cursor: 'pointer',
    textDecoration: 'underline',
    paddingRight: '50px',
   }
  })

  export default useStyles
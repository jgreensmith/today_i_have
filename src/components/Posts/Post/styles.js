import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  
  card: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    width: '100%',
    paddingLeft: '40px',
    paddingRight: '40px',
    margin: '10px',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
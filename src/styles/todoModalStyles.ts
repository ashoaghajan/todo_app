import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  colorGrid: {
    justifyContent: 'center'
  },
  button: {
    margin: '5px'
  },
  label:{
    fontSize: '18px'
  },
  textArea:{
    minWidth: '100%',
    fontSize: 18
  },
  select: {
    width: '300px'
  },
}));
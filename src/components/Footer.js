import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import useWindowPosition from '../hook/useWindowPosition';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10vh',
      fontFamily: 'Nunito',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    appbar: {
      background: 'none',
    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
    },
    appbarTitle: {
      color: '#8f85d8',
      flexGrow: '5',
    },
    icon: {
      color: '#5f4b8b',
      fontSize: '2rem',
    },
    colorText: {
      color: '#8f85d8',
    },
    container: {
      textAlign: 'center',
    },
    title: {
      color: '#5f4b8b',
      fontSize: '4.5rem',
    },
    goDown: {
      color: '#8f85d8',
      fontSize: '4rem',
    },
  }));
  export default function Footer() {
    const classes = useStyles();
    //const checked = useWindowPosition('place-to-visit');
    // const [checked, setChecked] = useState(false);
    //useEffect(() => {
      //setChecked(true);
    //}, []);
    return (
        <div className={classes.root}>
            <div className={classes.AppBar}>
                    <h1 className={classes.appbarTitle}>
                        &copy;{new Date().getFullYear()} Made with &#10084;&#65039; By Arya Tri Putra Majiah
                    </h1>
            </div>
        </div>
    );
  }
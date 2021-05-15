import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import useWindowPosition from '../hook/useWindowPosition';
import ScrollAnimation from 'react-animate-on-scroll';
import { IconButton } from '@material-ui/core';
import useSound from 'use-sound';

//import GitHubIcon from '@material-ui/icons/GitHub';
//import TelegramIcon from '@material-ui/icons/Telegram';
import { GitHub, Telegram, MailOutline, WhatsApp, Instagram } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    icon: {
        color: '#5f4b8b',
        fontSize: '10rem',
        margin: '1rem',
      },
  }));
  export default function () {
    const classes = useStyles();
    const soundUrl = '/assets/click.mp3';
    
    const [play, { stop }] = useSound(
      soundUrl,
      { volume: 0.5 }
    );
  
    const [isHovering, setIsHovering] = React.useState(
      false
    );
    
    

    return (
      <div className={classes.root} id="contact">
        <ScrollAnimation animateIn="fadeInDown">
            
                <IconButton href="https://github.com/aryatriputram" onMouseEnter={() => {setIsHovering(true); play();}}
                                                                    onMouseLeave={() => {setIsHovering(false); stop(); }}>
                    <GitHub className={classes.icon} href="https://github.com/aryatriputram" isHovering={isHovering}/>
                </IconButton>
                <IconButton href="https://telegram.me/karinaro_Bot">
                    <Telegram className={classes.icon}/>
                </IconButton>
                <IconButton href="mailto:09ofarya@gmail.com">
                    <MailOutline className={classes.icon}/>
                </IconButton>
                <IconButton href="https://www.instagram.com/aryatripm/">
                    <Instagram className={classes.icon}/>
                </IconButton>
            
        </ScrollAnimation>
        
      </div>
    );
  }
  
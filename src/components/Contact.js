import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useWindowPosition from '../hook/useWindowPosition';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, IconButton, Link } from '@material-ui/core';

//import GitHubIcon from '@material-ui/icons/GitHub';
//import TelegramIcon from '@material-ui/icons/Telegram';
import { GitHub, Telegram, MailOutline } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
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
    const checked = useWindowPosition('header');
    return (
      <div className={classes.root} id="contact">
        <ScrollAnimation animateIn="fadeInDown">
            
                <IconButton href="https://github.com/aryatriputram">
                    <GitHub className={classes.icon} href="https://github.com/aryatriputram" />
                </IconButton>
                <IconButton href="https://telegram.me/karinaro_Bot">
                    <Telegram className={classes.icon}/>
                </IconButton>
                <IconButton href="mailto:09ofarya@gmail.com">
                    <MailOutline className={classes.icon}/>
                </IconButton>
            
        </ScrollAnimation>
      </div>
    );
  }
  
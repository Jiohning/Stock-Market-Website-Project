import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { grey } from '@material-ui/core/colors';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { useHistory } from "react-router-dom";
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CircularProgress from '@material-ui/core/CircularProgress';

import Search from './Search';
import { selectExchange, startLoading, getStocks, getGeneralNews } from '../actions/index';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    backgroundColor: grey,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  listRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function TopNav() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openList, setOpenList] = React.useState(false);
  const dispatch = useDispatch();
  const exchanges = useSelector(state => state.exchanges);
  const history = useHistory();
  const exchange = useSelector(state => state.exchange);
  const loading = useSelector(state => state.loading);

  const handleDrawerOpen = () => {
    setOpen(true);
    
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenList(!openList);
  };

  const listClick = (loading) => {
    setTimeout(() => {
      history.push("/list");
    }, 3000);
  }

  const homeClick = () => {
    history.push("/");
  }

  const newsClick= () => {
    setTimeout(() => {
      history.push("/news");
    }, 2000);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{ background: 'transparent' , backgroundColor: '#00695f'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          {loading && 
            <>
              <Typography className={classes.title} variant="overline" noWrap
                onClick={homeClick}>
                FASTOCK 
              </Typography>
              {exchange !== null && <Search/>}
              <CircularProgress color="secondary" />
            </>
            
          }
          {!loading && 
            <>
            <Typography className={classes.title} variant="overline" noWrap
              onClick={homeClick}>
              FASTOCK 
            </Typography>
            {exchange !== null && <Search/>}
          </>
          }
          

          

        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            </ListSubheader>
          }
          className={classes.listRoot}
        >
          <ListItem button onClick={handleClick}>
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary="EXCHANGE" />
            {openList ? <ExpandLess /> : <ExpandMore />}
          </ListItem>

          <Collapse in={openList} timeout="auto" unmountOnExit>
            {
              exchanges.map(item => (
                <List key={item.name} component="div" disablePadding>
                  <ListItem button className={classes.nested} onClick={handleDrawerClose}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary={item.name} onClick={() => {
                      dispatch(startLoading())
                      dispatch(getStocks(item.code))
                      dispatch(selectExchange(item))
                      listClick()
                    }}/>
                  </ListItem>
                </List>))
            }
          </Collapse>

          <ListItem button onClick={() => {
            dispatch(getGeneralNews())
            newsClick()}}>
            <ListItemIcon>
              <AnnouncementIcon />
            </ListItemIcon>
            <ListItemText primary="NEWS"/>
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>
    </div>
  );
}

export default TopNav;
import React from "react";
import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import PlaylistAddCheck from '@mui/icons-material/PlaylistAddCheck';
import ArrowBackIosNew from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import AppBar from '@mui/material/AppBar';
import MovieAutocomplete from './MovieAutoComplete';
import CardsList from './CardsList';
import {CardType} from './enums/enums';
import {PlayListManager} from './PlayListManager';
import PlayList from './PlayList';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default class App extends React.Component<{
  API: API
}, {
  cards: any,
}> {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
      isDrawerOpen: false,
    }
    this.playListManager = new PlayListManager(props.API);
  }

  showTitle = (imdbID: string) => {
    this.setState({cards: {type: CardType.SingleFull, id: imdbID }});
  }

  showSearch = (term: string) => {
    this.setState({cards: {type: CardType.ListShort, id: term, page: 0 }});
  }

  addToQueue = (imdbID: string) => {
    this.playListManager.addToCurrentPlayList(imdbID);
  }

  toggleDrawer = (isDrawerOpen) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;
    this.setState({isDrawerOpen});
  };

  prev = () => {
    if (this.state.cards?.page) this.setState({cards: {...this.state.cards, page: this.state.cards.page - 1}});
  }

  next = () => {
    console.log(this.state.cards?.page);
    // undefined is not >= 0 (fix this later)
    if (this.state.cards?.page >= 0) this.setState({cards: {...this.state.cards, page: this.state.cards.page + 1}});
  }

  render() {
    return (
      <div className="fast-movie-app">
      <AppBar position="static">
        <Typography variant="h6" component="div">
          Fast Movie Demo App
        </Typography>
      </AppBar>
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'auto', pt: 2, pl: 2, pr: 2, pb: 1}}>
        <MovieAutocomplete
          API={this.props.API}
          showTitle={this.showTitle}
          showSearch={this.showSearch}
        />
        <CardsList
          API={this.props.API}
          movies={this.state.cards}
          addToQueue={this.addToQueue}
        />
      </Box>
      <BottomNavigation showLabels>
        <BottomNavigationAction onClick={this.prev} label="Prev" icon={<ArrowBackIosNew />} />
        <BottomNavigationAction onClick={this.toggleDrawer(true)} label="Playlist" icon={<PlaylistAddCheck />} />
        <BottomNavigationAction onClick={this.next} label="Next" icon={<ArrowForwardIos />} />
        </BottomNavigation>
      <Drawer
        anchor='bottom'
        open={this.state.isDrawerOpen}
        onClose={this.toggleDrawer(false)}
      >
      <PlayList PlayListManager={this.playListManager} />
      </Drawer>
      </div>
    );
  }
}

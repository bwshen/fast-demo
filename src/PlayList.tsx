import React from "react";
import Stack from '@mui/material/Stack';
import {CardType} from './enums/enums';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

export default class PlayList extends React.Component<{
  PlayListManager: PlayListManager
}, {}> {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
        movies: [],
        backgroundColor: 'white'
    };
    this._playListSymbol = Symbol();
  }

  componentDidMount() {
    this.setState({movies: this.props.PlayListManager.getCurrentPlaylist()});
    this.props.PlayListManager.addListener(this._playListSymbol, (list) => {
      this.setState({movies: list});
    })
  }

  componentWillUnmount() {
    this.props.PlayListManager.removeListener(this._playListSymbol);
  }

  changeBackgroundColor = (e) => {
    this.setState({backgroundColor: e.target.value});
  }

  render() {
    return (
      <Box sx={{ width: 'auto', minHeight: '60vh', maxHeight: '80vh', pb: 1, pt: 2, backgroundColor: this.state.backgroundColor}}
          role="presentation"
        >
      <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gridGap: '0.5em', alignItems: 'center', justifyItems: 'center'}}>
      { this.state.movies.map((result) => (
      <Card key={result.imdbID} sx={{width: '250px'}}>
        <Grid container>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              width="300"
              image={result.Poster}
            />
          </Grid>
          <Grid item xs={8}>
            <span className="bold">{result.Title}</span><br />
          <span className="italicized">{`(${result.Year}) (${result.Type})`}</span>
          <Box sx={{ display: 'flex', justifyContent: 'end', pl: 1, pb: 1 }}>
            <IconButton aria-label="Remove from Playlist" onClick={() => this.props.PlayListManager.removeFromCurrentPlayList(result.imdbID)}>
              <RemoveFromQueueIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          </Box>
          </Grid>
        </Grid>
      </Card>
    ))}
    { this.state.movies.length === 0 &&
      <Typography sx={{fontStyle: 'italicized', color: '#AAA'}}>Your Playlist is empty</Typography>
    }
    </Box>
    <Box sx={{height: '4em'}}></Box>
    <AppBar position="static" color="primary" sx={{position: 'fixed', bottom: 0, width: '100vw', height: '4em'}}>
      <Container maxWidth="md">
        <Toolbar>
          My favorite color is
          <NativeSelect value={this.state.backgroundColor} id="playlist_color" onChange={this.changeBackgroundColor}>
            <option value="white">White</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </NativeSelect>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
  }
}

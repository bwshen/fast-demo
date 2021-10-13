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
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import IconButton from '@mui/material/IconButton';

export default class CardsList extends React.Component<{
  API: API,
  movies: {type: CardType, id: string, page: number}
}, {}> {
  constructor(props) {
    super(props);
    this.state = {
        cards: {
          type: null,
          results: []
        }
    };
  }

  componentDidUpdate(prevProps) {
     if (this.props.movies?.type === prevProps.movies?.type && this.props.movies?.id === prevProps.movies?.id && this.props.movies?.page ===  prevProps.movies?.page) return;
     if (this.props.movies?.type === CardType.SingleFull) this.showId(this.props.movies.id);
     if (this.props.movies?.type === CardType.ListShort) this.search(this.props.movies.id);
  }

  showId(imdbID: string) {
    this.props.API.getId(imdbID).then(results => {
      // Add in error handling later
      if (results?.data?.Response !== 'True') return;
      this.setState({cards: {type: CardType.SingleFull, results: [results.data]}});
    })
  }

  search(term: string) {
    const page = this.props.movies?.page;
    this.props.API.search(term, page).then((function(results){
      if (this.props.movies?.type !== CardType.ListShort || term !== this.props.movies?.id || !results.data?.Search || page != this.props.movies?.page) return;
      this.setState({cards: {type: CardType.ListShort, results: results.data?.Search}});
    }).bind(this));
  }

  renderFullCard() {
      const result = this.state.cards.results[0];
      return (
        <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        pt={1}
        >
        <Card key={result.imdbID} sx={{maxWidth: '900px'}}>
          <CardHeader
            title={result.Title}
            subheader={`(${result.Year}) (${result.Type})`}
          />
          <Grid container>
            <Grid item xs={4}>
              <CardMedia
                component="img"
                width="300"
                height="458"
                image={result.Poster}
              />
            </Grid>
            <Grid item xs={8}>
              {result.Plot}
              {result.Director && result.Director !== 'N/A' && <div><Divider variant="middle" />Director: {result.Director}</div>}
              {result.Writer && result.Writer !== 'N/A' && <div><Divider variant="middle" />Writer: {result.Writer}</div>}
              {result.Actors && result.Actors !== 'N/A' && <div><Divider variant="middle" />Actors: {result.Actors}</div>}
            </Grid>
          </Grid>
        </Card>
        </Stack>
      );
  }

  renderShortCard() {
    return (
      <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gridGap: '0.5em', alignItems: 'center', justifyItems: 'center', pt: 1}}>
      { this.state.cards.results.map((result) => (
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
            <IconButton aria-label="Add to Playlist" onClick={() => this.props.addToQueue(result.imdbID)}>
              <AddToQueueIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
          </Box>
          </Grid>
        </Grid>
      </Card>
    ))}
    </Box>
  );
  }

  render() {
        switch(this.state.cards.type) {
          case CardType.SingleFull:
             return this.renderFullCard();
            break;
          case CardType.ListShort:
            return this.renderShortCard();
            break;
          default:
            return '';
            break;
        }
  }
}

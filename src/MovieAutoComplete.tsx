import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Grid';

export default class MovieAutocomplete extends React.Component<{
  API: API,
  showTitle: (a: string) => void,
  showSearch: (a: string) => void
}, {
  results: []
}> {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e: React.SyntheticEvent) {
    if (e.target.value === this.state.searchTerm) return;
    this.state.searchTerm = e.target.value;
    if (this.state.searchTerm.length <= 2) return;
    const searchedValue = this.state.searchTerm;
    this.props.API.search(searchedValue).then((function(results){
      if (searchedValue !== this.state.searchTerm) return;
      this.setState({
        results: results.data?.Search ? results.data?.Search : []
      });
    }).bind(this));
  }

  render() {
    return (
      <Grid container>
          <Autocomplete
            sx={{ flexGrow: 1, marginRight: '4px' }}
            onChange={(event, newValue) => {
              newValue?.id ? this.props.showTitle(newValue.id) : this.props.showSearch(this.state.searchTerm);
            }}
            freeSolo
            options={this.state.results.map(result => ({label: result.Title, id: result.imdbID}))}
            renderInput={(params) => <TextField {...params} value={this.state.searchTerm} onKeyUp={this.handleInput} onInput={this.handleInput} label="Search Openmdb" />}
          />
        <Button variant="contained" onClick={() => {this.props.showSearch(this.state.searchTerm)}}>Search</Button>
      </Grid>
    );
  }
}

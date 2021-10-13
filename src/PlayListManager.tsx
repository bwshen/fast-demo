

export class PlayListManager {
  private _API: API;
  private _playLists: [];

  constructor(API: API){
    this._API = API;
    //We'll stick with a single one for now.
    this._playLists = [{}];
    this._listeners = {};
  }

  addToCurrentPlayList(imdbID) {
    this._API.getId(imdbID,'short').then(results => {
      // Add in error handling later
      if (results?.data?.Response !== 'True' || this._playLists[0][results.data.imdbID]) return;
      this._playLists[0][results.data.imdbID] = results.data;
      this.triggerChanges();
    })
  }

  removeFromCurrentPlayList(imdbID) {
    if (!this._playLists[0][imdbID]) return;
    delete this._playLists[0][imdbID];
    this.triggerChanges();
  }

  addListener(sym, callback) {
    this._listeners[sym] = callback;
  }

  removeListener(sym) {
    if (this._listeners.hasOwnProperty(sym)) delete this._listeners[sym];
  }

  getCurrentPlaylist() {
    return Object.getOwnPropertyNames(this._playLists[0]).map(name => this._playLists[0][name]);
  }

  triggerChanges() {
    const playListItems = this.getCurrentPlaylist();
    Object.getOwnPropertySymbols(this._listeners).forEach(symbol => {
        try {
          this._listeners[symbol](playListItems);
        } catch (e){
          console.log('wtf', e);
        }
    });
  }
}

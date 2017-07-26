import Civ5Save from 'civ5save';
import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import { createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import { MuiThemeProvider } from 'material-ui/styles';
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import './App.css';

const darkTheme = createMuiTheme({
  palette: createPalette({
    type: 'dark',
  }),
});

const styleSheet = createStyleSheet( () => ({
  '@global': {
    body: {
      background: darkTheme.palette.background.default,
      color: darkTheme.palette.text.primary,
    }
  }
}));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // TODO: hack until we find a better way to handle where savegame might be undefined
      savegame: ''
    };

    this.handleNewSavegame = this.handleNewSavegame.bind(this);
  }

  handleNewSavegame(newSavegame) {
    this.setState({
      savegame: newSavegame
    });
  }

  render() {
    return (
      <MuiThemeProvider className="App" theme={darkTheme}>
        <Grid container>
          <Grid item>
            <Grid
              align="flex-start"
              container
              direction="column"
            >
              <FileUploader
                onNewSavegame={this.handleNewSavegame}
              />
              <FileDownloader
                savegame={this.state.savegame}
              />
            </Grid>
          </Grid>
          <Grid item>
              <SavePropertiesList
                savegame={this.state.savegame}
              />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

class FileDownloader extends Component {
  constructor(props) {
    super(props);

    // Store URL in a variable so we can revoke it when we're done with it
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL#Notes
    this.downloadURL = null;
  }

  createDownloadURL() {
    // TODO: hack until we find a better way to handle where savegame might be undefined
    if (this.props.savegame !== "") {
      if (!isNullOrUndefined(this.downloadURL)) {
        URL.revokeObjectURL(this.downloadURL);
      }

      this.downloadURL = window.URL.createObjectURL(this.props.savegame.toFile('New.Civ5Save'));
      return this.downloadURL;
    }
  }

  render() {
    // TODO: Disable the download link if a save file hasn't been loaded yet
    return (
      <Button
        download="New.Civ5Save"
        href={this.createDownloadURL()}
      >
        <Icon>file_download</Icon>
        Download
      </Button>
    );
  }
}

class FileUploader extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleChange(event) {
    if (this.refs.fileUploader.files.length > 0) {
      let newSavegame = await Civ5Save.fromFile(this.refs.fileUploader.files[0]);

      // TODO: testing
      newSavegame.timeVictory = false;

      this.props.onNewSavegame(newSavegame);
    }
  }

  handleClick(event) {
    this.refs.fileUploader.click();
  }

  render() {
    return (
      <Button
        onClick={this.handleClick}
      >
        <Icon>folder_open</Icon>
        Open
        <input type="file" ref="fileUploader" onChange={this.handleChange} style={{display: "none"}} />
      </Button>
    );
  }
}

class SavePropertiesList extends Component {
  render() {
    return (
      <ul>
        <li>
          Game build: {this.props.savegame.gameBuild}
        </li>
        <li>
          {/* TODO: Handle if this is undefined */}
          Game version: {String(this.props.savegame.gameVersion)}
        </li>
        <li>
          Current turn: {this.props.savegame.currentTurn}
        </li>
        <li>
          Player 1 civilization: {this.props.savegame.player1Civilization}
        </li>
        <li>
          Difficulty {this.props.savegame.difficulty}
        </li>
        <li>
          Starting era: {this.props.savegame.startingEra}
        </li>
        <li>
          Current era: {this.props.savegame.currentEra}
        </li>
        <li>
          Game pace: {this.props.savegame.gamePace}
        </li>
        <li>
          Map size: {this.props.savegame.mapSize}
        </li>
        <li>
          Map file: {this.props.savegame.mapFile}
        </li>
        <li>
          Max turns: {this.props.savegame.maxTurns}
        </li>
        <li>
          {/*TODO: Remove String() cast*/}
          Time victory: {String(this.props.savegame.timeVictory)}
        </li>
        <li>
          {/*TODO: Remove String() cast*/}
          Science victory: {String(this.props.savegame.scienceVictory)}
        </li>
        <li>
          {/*TODO: Remove String() cast*/}
          Domination victory: {String(this.props.savegame.dominationVictory)}
        </li>
        <li>
          {/*TODO: Remove String() cast*/}
          Cultural victory: {String(this.props.savegame.culturalVictory)}
        </li>
        <li>
          {/*TODO: Remove String() cast*/}
          Diplomatic victory: {String(this.props.savegame.diplomaticVictory)}
        </li>
      </ul>
    );
  }
}

export default withStyles(styleSheet)(App);

// https://stackoverflow.com/a/416327/399105
function isNullOrUndefined(variable) {
  return typeof variable === 'undefined' || variable === null;
}

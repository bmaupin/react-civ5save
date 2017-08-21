import AppBar from 'material-ui/AppBar';
import Checkbox from 'material-ui/Checkbox';
import { CircularProgress } from 'material-ui/Progress';
import Civ5PropertyNumberTextField from './Civ5PropertyNumberTextField';
import Civ5Save from 'civ5save';
import Collapse from 'material-ui/transitions/Collapse';
import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import createTypography from 'material-ui/styles/typography';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { MuiThemeProvider } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Radio, { RadioGroup } from 'material-ui/Radio';
import React, { Component } from 'react';
import SvgIcon from 'material-ui/SvgIcon';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { createStyleSheet, withStyles } from 'material-ui/styles';
import './App.css';

const darkTheme = (() => {
  const palette = createPalette({
    type: 'dark',
  });

  // The default font for all Material UI elements is handled here. For everything else use CSS
  const typography = createTypography(palette, {
    fontFamily: '"Tw Cen W01 Medium", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 'initial',
  });

  // Nested properties can be defined in createTypography()
  typography.body1.fontSize = 'initial';
  typography.subheading.fontSize = '1.17em';
  typography.title.fontSize = '1.5em';

  return createMuiTheme({
    palette: palette,
    typography: typography,
  });
})();

const styles = createStyleSheet(theme => ({
  paper: {
    backgroundColor: darkTheme.palette.background.contentFrame,
    margin: '10px 20px 20px 20px',
  },
}));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savegame: null,
      savegameState: App.SAVEGAME_STATES.NOT_LOADED,
    };

    this.changeSavegameState = this.changeSavegameState.bind(this);
    this.handleNewSavegame = this.handleNewSavegame.bind(this);
    this.handlePropertyChange = this.handlePropertyChange.bind(this);
    this.isSavegamePropertyDefined = this.isSavegamePropertyDefined.bind(this);
  }

  changeSavegameState(newState) {
    console.log('changeSavegameState');
    this.setState({
      savegameState: newState,
    });
  }

  handleNewSavegame(newSavegame) {
    this.setState({
      savegame: newSavegame,
      savegameState: App.SAVEGAME_STATES.LOADED,
    });
  }

  handlePropertyChange(propertyName, newValue) {
    this.setState((previousState) => {
      previousState.savegame[propertyName] = newValue;
      return previousState;
    });
  }

  isSavegamePropertyDefined(propertyName) {
    return !isNullOrUndefined(this.state) && !isNullOrUndefined(this.state.savegame) && typeof this.state.savegame[propertyName] !== 'undefined';
  }

  render() {
    return (
      <MuiThemeProvider className="App" theme={darkTheme}
        style={{
          height: '100%',
        }}>
        <div style={{
          height: '100%',
        }}>
          <AppBar
             style={{
              // Make sure app bar doesn't cover up page content
              position: 'relative',
            }}>
            <Toolbar>
              <Typography type="title"
                // This makes sure the button is aligned on the right
                style={{ flex: '1' }}>
                {/* TODO: make this a constant */}
                Civilization V save editor
              </Typography>
              {/* TODO: make the URL a constant */}
              <IconButton color="contrast" href="https://github.com/bmaupin/react-civ5save">
                <SvgIcon>
                  <path d="M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z" />
                </SvgIcon>
              </IconButton>
            </Toolbar>
          </AppBar>
          <div
            style={{
              background: darkTheme.palette.background.default,
              color: darkTheme.palette.text.primary,
              display: 'flex',
              // TODO: we've subtracted the appbar height to prevent overflow. Is there a more elegant way to do this?
              minHeight: 'calc(100% - 64px)',
            }}>
            <div
              style={{
                minHeight: '100%',
              }}>
              <List style={{
                backgroundColor: darkTheme.palette.background.paper,
                // TODO: we've subtracted the padding height to prevent overflow. Is there a more elegant way to do this?
                height: 'calc(100% - 8px)',
                padding: '8px 0 0',
              }}>
                <FileUploader
                  changeSavegameState={this.changeSavegameState}
                  onNewSavegame={this.handleNewSavegame}
                />
                <FileDownloader
                  disabled={this.state.savegameState !== App.SAVEGAME_STATES.LOADED}
                  savegame={this.state.savegame}
                />
              </List>
            </div>
            <div
              style={{
                flex: '1',
              }}>
              {this.state.savegameState === App.SAVEGAME_STATES.NOT_LOADED &&
                <List style={{
                  opacity: '0.8',
                  padding: '8px',
                }}>
                  <ListItem>
                    <ListItemText primary="← Open Civilization V save file from your computer" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="← Download new save file with changes" />
                  </ListItem>
                </List>
              }
              {this.state.savegameState === App.SAVEGAME_STATES.LOADING &&
                <div
                  style={{
                    alignItems: 'center',
                    display: 'flex',
                    height: '100%',
                    justifyContent: 'center',
                  }}
                >
                  <div>
                    <CircularProgress size={50} />
                  </div>
                </div>
              }
              {this.state.savegameState === App.SAVEGAME_STATES.LOADED &&
                <div
                  style={{
                    // TODO: adjust this as necessary
                    maxWidth: '900px',
                  }}>
                  <ReadOnlyPropertiesList
                    isSavegamePropertyDefined={this.isSavegamePropertyDefined}
                    savegame={this.state.savegame}
                  />
                  <div
                    style={{
                      display: 'flex',
                    }}>
                    <AdvancedOptions
                      classes={this.props.classes}
                      isSavegamePropertyDefined={this.isSavegamePropertyDefined}
                      onPropertyChanged={this.handlePropertyChange}
                      savegame={this.state.savegame}
                    />
                    <HiddenOptions
                      classes={this.props.classes}
                      isSavegamePropertyDefined={this.isSavegamePropertyDefined}
                      onPropertyChanged={this.handlePropertyChange}
                      savegame={this.state.savegame}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexFlow: 'column nowrap',
                      }}>
                      <VictoryTypes
                        classes={this.props.classes}
                        isSavegamePropertyDefined={this.isSavegamePropertyDefined}
                        onPropertyChanged={this.handlePropertyChange}
                        savegame={this.state.savegame}
                      />
                      {
                        (this.state.savegame.gameMode === Civ5Save.GAME_MODES.MULTI ||
                        this.state.savegame.gameMode === Civ5Save.GAME_MODES.HOTSEAT) &&
                        <MultiplayerOptions
                          classes={this.props.classes}
                          isSavegamePropertyDefined={this.isSavegamePropertyDefined}
                          onPropertyChanged={this.handlePropertyChange}
                          savegame={this.state.savegame}
                        />
                      }
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
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
    if (!isNullOrUndefined(this.props.savegame)) {
      if (!isNullOrUndefined(this.downloadURL)) {
        URL.revokeObjectURL(this.downloadURL);
      }

      this.downloadURL = window.URL.createObjectURL(this.props.savegame.toFile('New.Civ5Save'));
      return this.downloadURL;
    }
  }

  render() {
    return (
      <ListItem button
        component="a"
        disabled={this.props.disabled}
        download="New.Civ5Save"
        href={this.createDownloadURL()}
      >
        <ListItemIcon>
          <Icon>file_download</Icon>
        </ListItemIcon>
        <ListItemText primary="Download" />
      </ListItem>
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
      this.props.changeSavegameState(App.SAVEGAME_STATES.LOADING);
      let newSavegame = await Civ5Save.fromFile(this.refs.fileUploader.files[0]);
      this.props.onNewSavegame(newSavegame);
    }
  }

  handleClick(event) {
    this.refs.fileUploader.click();
  }

  render() {
    return (
      <ListItem button
        onClick={this.handleClick}
      >
        <ListItemIcon>
          <Icon>folder_open</Icon>
        </ListItemIcon>
        <ListItemText primary="Open save file" />
        <input type="file" ref="fileUploader" onChange={this.handleChange} style={{display: "none"}} />
      </ListItem>
    );
  }
}

class AdvancedOptions extends Component {
  constructor(props) {
    super(props);

    this.advancedOptions = {
      'policySaving': 'Allow policy saving',
      'promotionSaving': 'Allow promotion saving',
      'completeKills': 'Complete kills',
      // TODO: newRandomSeed should only be shown for singleplayer and hotseat games
      'newRandomSeed': 'New random seed',
      'noBarbarians': 'No barbarians',
      'noCityRazing': 'No city razing',
      'oneCityChallenge': 'One-city challenge',
      'ragingBarbarians': 'Raging barbarians',
      'randomPersonalities': 'Random personalities',
    }

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  handleCheckboxClick(event) {
    this.props.onPropertyChanged(event.target.value, event.target.checked);
  }

  render () {
    return (
      <div>
        <Typography type="subheading"
          style={{
            margin: '20px 0 0 20px',
          }}>
          Advanced options
        </Typography>
        <Paper
          className={this.props.classes.paper}
        >
          <FormGroup
            style={{
              fontSize: darkTheme.typography.fontSize,
              padding: '10px 20px',
            }}
          >
            {Object.keys(this.advancedOptions).map(propertyName =>
              this.props.isSavegamePropertyDefined(propertyName) &&
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.props.savegame[propertyName]}
                      onClick={this.handleCheckboxClick}
                      value={propertyName}
                    />
                  }
                  key={propertyName}
                  label={this.advancedOptions[propertyName]}
                />
            )}
          </FormGroup>
        </Paper>
      </div>
    );
  }
}

class HiddenOptions extends Component {
  constructor(props) {
    super(props);

    this.hiddenOptions = {
      'alwaysPeace': 'Always peace',
      'alwaysWar': 'Always war',
      'noChangingWarPeace': 'No changing war or peace',
      'lockMods': 'Lock mods',
      'noCultureOverviewUI': 'No culture overview UI',
      'noEspionage': 'No espionage',
      'noHappiness': 'No happiness',
      'noPolicies': 'No policies',
      'noReligion': 'No religion',
      'noScience': 'No science',
      'noWorldCongress': 'No world congress',
    }

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  handleCheckboxClick(event) {
    this.props.onPropertyChanged(event.target.value, event.target.checked);
  }

  render () {
    return (
      <div>
        <Typography type="subheading"
          style={{
            margin: '20px 0 0 20px',
          }}>
          Hidden options
        </Typography>
        <Paper
          className={this.props.classes.paper}
        >
          <FormGroup
            style={{
              fontSize: darkTheme.typography.fontSize,
              padding: '10px 20px',
            }}
          >
            {Object.keys(this.hiddenOptions).map(propertyName =>
              this.props.isSavegamePropertyDefined(propertyName) &&
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.props.savegame[propertyName]}
                      onClick={this.handleCheckboxClick}
                      value={propertyName}
                    />
                  }
                  key={propertyName}
                  label={this.hiddenOptions[propertyName]}
                />
            )}
          </FormGroup>
        </Paper>
      </div>
    );
  }
}

class MultiplayerOptions extends Component {
  constructor(props) {
    super(props);

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleRadioGroupChange = this.handleRadioGroupChange.bind(this);
  }

  handleCheckboxClick(event) {
    this.props.onPropertyChanged(event.target.value, event.target.checked);
  }

  handleRadioGroupChange(event) {
    this.props.onPropertyChanged(event.target.name, event.target.value);
  }

  render() {
    return (
      <div>
        <Typography type="subheading"
          style={{
            margin: '20px 0 0 20px',
          }}>
          Multiplayer options
        </Typography>
        <Paper
          className={this.props.classes.paper}
        >
          <FormGroup
            style={{
              fontSize: darkTheme.typography.fontSize,
              padding: '10px 20px',
            }}
          >
            {this.props.savegame.gameMode === Civ5Save.GAME_MODES.MULTI &&
              this.props.isSavegamePropertyDefined('pitboss') &&
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.savegame.pitboss}
                    onClick={this.handleCheckboxClick}
                    value="pitboss"
                  />
                }
                label="Pitboss"
              />
            }
            {this.props.savegame.gameMode === Civ5Save.GAME_MODES.MULTI &&
              this.props.isSavegamePropertyDefined('privateGame') &&
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.savegame.privateGame}
                    onClick={this.handleCheckboxClick}
                    value="privateGame"
                  />
                }
                label="Private game"
              />
            }
            {this.props.isSavegamePropertyDefined('turnTimerEnabled') &&
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.savegame.turnTimerEnabled}
                    onClick={this.handleCheckboxClick}
                    value="turnTimerEnabled"
                  />
                }
                label="Turn timer"
              />
            }
            {this.props.isSavegamePropertyDefined('turnTimerLength') &&
              <Civ5PropertyNumberTextField
                disabled={!this.props.savegame.turnTimerEnabled}
                label={this.props.savegame.pitboss === true ? 'Hours' : 'Seconds'}
                onPropertyChanged={this.props.onPropertyChanged}
                propertyName="turnTimerLength"
                value={this.props.savegame.turnTimerLength}
              />
            }
            {this.props.savegame.gameMode === Civ5Save.GAME_MODES.MULTI &&
              this.props.isSavegamePropertyDefined('turnMode') &&
              <div>
                <Typography type="body1"
                  style={{
                    paddingTop: '12px',
                  }}>
                  Turn mode
                </Typography>
                <RadioGroup
                  name="turnMode"
                  onChange={this.handleRadioGroupChange}
                  selectedValue={this.props.savegame.turnMode}
                  style={{
                    padding: '0 12px',
                  }}
                >
                  <FormControlLabel value={Civ5Save.TURN_MODES.HYBRID} control={<Radio />} label={Civ5Save.TURN_MODES.HYBRID} />
                  <FormControlLabel value={Civ5Save.TURN_MODES.SEQUENTIAL} control={<Radio />} label={Civ5Save.TURN_MODES.SEQUENTIAL} />
                  <FormControlLabel value={Civ5Save.TURN_MODES.SIMULTANEOUS} control={<Radio />} label={Civ5Save.TURN_MODES.SIMULTANEOUS} />
                </RadioGroup>
              </div>
            }
          </FormGroup>
        </Paper>
      </div>
    );
  }
}

class ReadOnlyPropertiesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };

    this.readOnlyProperties = {
      'gameBuild': 'Game build',
      'gameVersion': 'Game version',
      'gameMode': 'Game mode',
      'currentTurn': 'Current turn',
      'player1Civilization': 'Player 1 civilization',
      'difficulty': 'Difficulty',
      'startingEra': 'Starting era',
      'currentEra': 'Current era',
      'gamePace': 'Game pace',
      'mapSize': 'Map size',
      'mapFile': 'Map',
    }
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render () {
    return (
      <div
        style={{
          margin: '14px 0 0 20px',
        }}
      >
        <IconButton
          aria-expanded={this.state.expanded}
          aria-label="Game details"
          onClick={this.handleExpandClick}
          style={{
            fontSize: darkTheme.typography.fontSize,
            height: 'initial',
            width: 'initial',
          }}
        >
          <Typography type="subheading">
            Game details
          </Typography>
          <Icon
            style={{
              margin: '6px',
              transform: (this.state.expanded && 'rotate(180deg)'),
              transition: darkTheme.transitions.create('transform', {
                duration: darkTheme.transitions.duration.shortest,
              })
            }}
          >expand_more</Icon>
        </IconButton>
        <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
          <Grid container
            style={{
              padding: '8px 16px',
            }}
          >
            {Object.keys(this.readOnlyProperties).map(propertyName =>
              this.props.isSavegamePropertyDefined(propertyName) &&
                <Grid item key={propertyName} xs={2}>
                  <Typography type='body1'>{this.readOnlyProperties[propertyName]}:<br /><em>{this.props.savegame[propertyName]}</em></Typography>
                </Grid>
            )}
            {this.props.isSavegamePropertyDefined('enabledDLC') &&
              <Grid item xs={12}>
                <Typography type='body1'>DLC: <em>{this.props.savegame.enabledDLC.join(', ') || 'None'}</em></Typography>
              </Grid>
            }
          </Grid>
        </Collapse>
      </div>
    );
  }
}

class VictoryTypes extends Component {
  constructor(props) {
    super(props);

    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);

    this.victoryTypeProperties = {
      'scienceVictory': 'Science victory',
      'dominationVictory': 'Domination victory',
      'culturalVictory': 'Cultural victory',
      'diplomaticVictory': 'Diplomatic victory',
    }
  }

  handleCheckboxClick(event) {
    this.props.onPropertyChanged(event.target.value, event.target.checked);

    if (event.target.value === 'timeVictory' && event.target.checked === false) {
      this.props.onPropertyChanged('maxTurns', 0);
    }
  }

  render() {
    return (
      <div>
        <Typography type="subheading"
          style={{
            margin: '20px 0 0 20px',
          }}>
          Victory types
        </Typography>
        <Paper
          className={this.props.classes.paper}
        >
          <FormGroup
            style={{
              fontSize: darkTheme.typography.fontSize,
              padding: '10px 20px',
            }}
          >
            {this.props.isSavegamePropertyDefined('timeVictory') &&
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.savegame.timeVictory}
                    onClick={this.handleCheckboxClick}
                    value="timeVictory"
                  />
                }
                label="Time victory"
              />
            }
            {this.props.isSavegamePropertyDefined('maxTurns') &&
              <Civ5PropertyNumberTextField
                disabled={!this.props.savegame.timeVictory}
                label="Max turns"
                onPropertyChanged={this.props.onPropertyChanged}
                propertyName="maxTurns"
                value={this.props.savegame.maxTurns}
              />
            }
            {Object.keys(this.victoryTypeProperties).map(propertyName =>
              this.props.isSavegamePropertyDefined(propertyName) &&
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.props.savegame[propertyName]}
                      onClick={this.handleCheckboxClick}
                      value={propertyName}
                    />
                  }
                  key={propertyName}
                  label={this.victoryTypeProperties[propertyName]}
                />
            )}
          </FormGroup>
        </Paper>
      </div>
    );
  }
}

App.SAVEGAME_STATES = {
  LOADED: 'Loaded',
  LOADING: 'Loading',
  NOT_LOADED: 'Not loaded',
};

export default withStyles(styles)(App);

// https://stackoverflow.com/a/416327/399105
function isNullOrUndefined(variable) {
  return typeof variable === 'undefined' || variable === null;
}

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Symbol from '../Symbol/Symbol';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 19,
  },
  input: {
    display: 'none',
  },
  menu: {
    width: 200,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});
``; //
const symbols = [
  {
    label: 'EKG',
  },
  {
    label: 'MAB',
  },
  {
    label: 'BABA',
  },
  {
    label: 'ABD',
  },
  {
    label: 'CEF',
  },
  {
    label: 'ISL',
  },
  {
    label: 'KMU',
  },
  {
    label: 'QPO',
  },
  {
    label: 'DRM',
  },
  {
    label: 'RYOB',
  },
  {
    label: 'EKY',
  },
  {
    label: 'TESL',
  },
];

class SymbolsTextFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Cat in the Hat',
      age: '',
      multiline: 'Controlled',
      label: 'EUR',
      chosenSymbols: [],
      displaySymbols: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.pushSymbol = this.pushSymbol.bind(this);
    this.displaySymbols = this.displaySymbols.bind(this);
    this.displaySpecificSymbols = this.displaySpecificSymbols.bind(this);
    this.generateSingle = this.generateSingleSymbol.bind(this);
    this.removeSymbol = this.removeSymbol.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  pushSymbol = () => {
    this.setState({
      chosenSymbols: [...this.state.chosenSymbols, this.state.label],
    });
  };

  // toggle whether the list of chosen symbols is shown
  // toggled by hitting 'Done' button in web app
  displaySymbols = () => {
    this.setState({
      displaySymbols: !this.state.displaySymbols,
    });
  };

  displaySpecificSymbols(arrayOfSymbols) {
    let length = arrayOfSymbols.length;
    let index = 0;

    while (index < length) {
      console.log(arrayOfSymbols[index++]);
    }
  }

  removeSymbol(symbol) {
    let newArray = this.state.chosenSymbols;
    let indexToRemove = newArray.indexOf(symbol);
    if (indexToRemove > -1) {
      newArray.splice(indexToRemove, 1);
    }
    this.setState({
      chosenSymbols: newArray,
    });
  }

  generateSingleSymbol = function() {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0; i < 3; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    // console.log('Key generated: ' + text);
    return text;
  };

  render() {
    let renderedSymbols = null;

    // console.log('displaySymbols is currently ' + this.state.displaySymbols);
    if (this.state.displaySymbols) {
      // console.log('Entered :');
      renderedSymbols = (
        <div>
          {this.state.chosenSymbols.map((symbol, index) => {
            // console.log(symbol);
            return (
              <div onClick={() => this.removeSymbol(symbol)} key={this.generateSingleSymbol()}>
                <Symbol label={symbol} />
              </div>
            );
          })}
        </div>
      );
    }

    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-select-currency"
            select
            label="Select"
            className={classes.textField}
            value={this.state.label}
            onChange={this.handleChange('label')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please select your currency"
            margin="normal"
          >
            {symbols.map(option => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.pushSymbol}
          >
            Enter Symbol
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.displaySymbols}
          >
            Done
          </Button>
        </form>
        {renderedSymbols}
      </div>
    );
  }
}

SymbolsTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SymbolsTextFields);

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  button: {
    backgroundColor: 'red',
    color: 'white'
  }
};

const AppHeader = ({ title, onRefreshClick, classes, onButtonClick, buttonText }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <TableRow>
        <TableCell>
          <Toolbar variant="dense">
            <Typography variant="title" color="inherit">
              {title}
            </Typography>
            <IconButton color="inherit">
              <RefreshIcon onClick={onRefreshClick} />
            </IconButton>
          </Toolbar>
        </TableCell>
        <TableCell>
          <Button className={classes.button} onClick={onButtonClick}>
            {buttonText}
          </Button>
        </TableCell>
      </TableRow>
    </AppBar>
  </div>
);

export default withStyles(styles)(AppHeader);

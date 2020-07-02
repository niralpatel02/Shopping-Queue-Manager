import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '../../utils/menu';
import { styles } from './style';
import PropTypes from 'prop-types';


// NavBar component class
class NavBar extends React.Component {
  state = {
    tabIndex: 0,
  };

  handleTabChange = (event, tabIndex) => {
    this.setState({ tabIndex });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  currPath = () => {
    switch (this.props.currentPath) {
      case '/':
        return 0;
      case '/map':
        return 1;
      case '/queue':
        return 2;
      case '/profile':
        return 3;
      case '/owner-profile':
        return 3;
      case '/admin-profile':
        return 3;
      case '/login':
        return 1;
      case '/register':
        return 2;
      default:
        return 0;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <AppBar
        color="default"
        className={classes.appBar}
      >
        <Toolbar>
          <Grid item xs={12} className={classes.flex}>
            <div className={classes.inline}>
              <Typography variant="h6" color="inherit" noWrap>
                <span className={classes.tagLine}>Shopping Queue</span>
              </Typography>
            </div>

            <div className={classes.productLogo}>
              <Typography>A Pandemic Shopping Manager</Typography>
            </div>

            <div className={classes.tabContainer}>
              <Tabs
                value={this.currPath() || this.state.tabIndex}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleTabChange}
              >
                {Menu().map((item, index) => (
                  <Tab
                    key={index}
                    classes={{ root: classes.tabItem }}
                    label={item.label}
                    href={item.pathname}
                  />
                ))}
              </Tabs>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NavBar);

import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, TextField, Typography, withStyles } from '@material-ui/core';
import { styles } from './style';


class Footer extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.footerWrapper}>
        <div className={classes.footerInner}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6} lg={1}/>
            <Grid item xs={12} md={6} lg={4}>
              <form>
                <Typography variant="h3" paragraph className={classes.bigFont}>
                  Contact Admin
                </Typography>
                <Box display="flex" flexDirection="column">
                  <Box mb={1}>
                    <TextField
                      variant="outlined"
                      multiline
                      placeholder="Question"
                      rows={1}
                      className={classes.inputField}
                      fullWidth
                      required
                    />
                    <TextField
                      variant="outlined"
                      multiline
                      placeholder="Description"
                      rows={3}
                      className={classes.inputField}
                      fullWidth
                      required
                    />
                  </Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    className={classes.button}
                  >
                    Submit
                  </Button>
                </Box>
              </form>
            </Grid>

            <Grid item xs={12} md={6} lg={2}/>

            <Grid item xs={12} md={6} lg={4}>
              <Typography variant="h3" paragraph className={classes.bigFont}>
                About Us
              </Typography>
              <Typography className={classes.paragraph} paragraph>
                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                euismod convallis velit, eu auctor lacus vehicula sit amet.
              </Typography>

            </Grid>
            <Grid item xs={12} md={6} lg={1}/>
          </Grid>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
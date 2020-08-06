import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormTextField from '../../FormTextField';
import RegisterFormButtons from './RegisterFormButtons';
import { styles } from './style';
import { withStyles } from '@material-ui/core';


class ShopperProfile extends React.Component {

  render() {
    const {
      classes,
      handleNext,
      activeStep,
      handleBack,
      handleFormField,
      firstName,
      lastName,
      address,
      remindTime
    } = this.props;

    return (
      <React.Fragment>
        <form onSubmit={handleNext}>
          <Typography variant="h6" gutterBottom>
            Profile details
          </Typography>
          <Grid container spacing={3}>
            <FormTextField
              name="firstName"
              label="First name"
              value={firstName}
              handleFormField={handleFormField}
            />
            <FormTextField
              name="lastName"
              label="Last name"
              value={lastName}
              handleFormField={handleFormField}
            />
            <FormTextField
              name="address"
              label="Address"
              value={address}
              handleFormField={handleFormField}
            />
            <FormTextField
              name="remindTime"
              label="Remind Time (min)"
              value={remindTime}
              type="number"
              handleFormField={handleFormField}
            />
          </Grid>

          <RegisterFormButtons
            activeStep={activeStep}
            classes={classes}
            handleBack={handleBack}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ShopperProfile);
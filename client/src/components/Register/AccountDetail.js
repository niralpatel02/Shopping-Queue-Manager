import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import FormTextField from '../Util/FormTextField';
import FormSelectField from '../Util/FormSelectField';
import RegisterFormButtons from './RegisterFormButtons';
import { registerVerify } from '../../actions/auth';


class AccountDetail extends React.Component {

  handleAccountDetail = (event) => {
    event.preventDefault();

    const { handleNext, username, password, confirmPassword, registerAs, setError } = this.props;
    registerVerify(
      username,
      password,
      confirmPassword,
      registerAs,
      setError,
      handleNext
    );
  };

  render() {
    const { username, email, password, confirmPassword, registerAs, displayError, errorMessage } = this.props;
    const { activeStep, handleBack, comp } = this.props;

    return (
      <React.Fragment>
        <form onSubmit={this.handleAccountDetail}>
          <Typography variant="h6" gutterBottom>
            Register account
          </Typography>
          <Grid container spacing={3}>
            <FormTextField
              name="username"
              label="Username"
              displayError={displayError}
              comp={comp}
              value={username}
            />
            <FormTextField
              name="email"
              label="Email Address"
              type="email"
              displayError={displayError}
              comp={comp}
              value={email}
            />
            <FormTextField
              name="password"
              label="Password"
              type="password"
              displayError={displayError}
              comp={comp}
              value={password}
            />
            <FormTextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              displayError={displayError}
              comp={comp}
              errorMessage={errorMessage}
              value={confirmPassword}
            />
            <FormSelectField
              name="registerAs"
              label="Register For"
              comp={comp}
              value={registerAs}
              menuItems={['Shopper', 'Shop Owner']}
              useIndex
            />
          </Grid>

          <RegisterFormButtons
            activeStep={activeStep}
            handleBack={handleBack}
          />
        </form>
      </React.Fragment>
    );
  }
}

export default AccountDetail;

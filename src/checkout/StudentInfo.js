// import 'date-fns';
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker
} from "material-ui-pickers";

const styles = {
  grid: {
    width: "60%"
  }
};

class StudentInfo extends React.Component {
  state = {
    // The first commit of Material-UI
    selectedDate: new Date("2014-08-18T21:11:54")
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Student Info
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={4}>
            <TextField required id="cardName" label="First Name" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required id="cardNumber" label="Middle Name" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required id="expDate" label="Last Name" fullWidth />
          </Grid>
          <Grid item xs={12} md={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                fullWidth
                margin="normal"
                label="Date of Birth"
                value={selectedDate}
                onChange={this.handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required id="phone" label="Phone" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField required id="email" label="Email" fullWidth />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

StudentInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StudentInfo);

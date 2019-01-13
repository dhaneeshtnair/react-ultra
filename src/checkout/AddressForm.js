import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";
import { makeAVP } from "./actions";

function AddressForm({ avp, onUpdate }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Student Batch Info
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="batchId"
            value={avp.batchId}
            onChange={onUpdate}
            name="Batch ID"
            label="Batch ID"
            fullWidth
            autoComplete="batchId"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={onUpdate}
            value={avp.programName}
            id="programName"
            name="Program Name"
            label="Program Name"
            fullWidth
            autoComplete="programName"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            onChange={onUpdate}
            value={avp.rollNo}
            id="rollNo"
            name="Roll Number"
            label="Roll Number"
            fullWidth
            autoComplete="rollNo"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                onChange={onUpdate}
                checked={avp.lateralEntry}
                id="lateralEntry"
                color="secondary"
                name="lateralEntry"
              />
            }
            label="Lateral Entry"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    avp: state.avp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdate: event => {
      const value =
        event.target.type == "checkbox"
          ? event.target.checked
          : event.target.value;
      const av = makeAVP(event.target.id, value);
      dispatch(av);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressForm);

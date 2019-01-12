import React from "react";
import MUIDataTable from "mui-datatables";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import NewIcon from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link, Route } from "react-router-dom";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  },
  fr: {
    float: "right"
  }
});

class Students extends React.Component {
  render() {
    const { classes } = this.props;

    const columns = [
      {
        name: "ID",
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <FormControl>
                <Button color="primary" className={classes.button}>
                  {value}
                  <EditIcon
                    className={classNames(classes.rightIcon, classes.iconSmall)}
                  />
                </Button>
              </FormControl>
            );
          }
        }
      },
      {
        name: "Name",
        options: {
          filter: false
        }
      },
      {
        name: "Batch",
        options: {
          filter: true
        }
      }
    ];

    const data = [["10000", "Business Analyst", "Los Angeles"]];

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll"
    };
    const MyLink = props => <Link to="/dashboard/Checkout" {...props} />;

    return (
      <React.Fragment>
        <CssBaseline />

        <div className={classes.contentWrapper}>
          <Grid container spacing={24}>
            <Grid item xs={8} />
            <Grid item xs={4}>
              <Button
                variant="contained"
                className={classes.fr}
                component={MyLink}
              >
                <NewIcon
                  className={classNames(classes.rightIcon, classes.iconSmall)}
                />
                Add Student
              </Button>
            </Grid>
          </Grid>
          <br />

          <MUIDataTable
            title={"Students List"}
            data={data}
            columns={columns}
            options={options}
          />
        </div>
      </React.Fragment>
    );
  }
}
Students.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Students);

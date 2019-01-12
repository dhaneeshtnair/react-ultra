import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import FormControl from "@material-ui/core/FormControl";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Cities from "../datatables/Cities";
import { Link, Route } from "react-router-dom";
import classNames from "classnames";
import SaveIcon from "@material-ui/icons/Save";

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

    return (
      <MUIDataTable
        title={"Students List"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}
Students.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Students);

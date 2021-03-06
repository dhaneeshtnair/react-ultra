import React from "react";
import PropTypes from "prop-types";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Navigator from "./Navigator";
import Content from "./Content";
import Header from "./Header";
import Signin from "./Signin";
import Pricing from "./Pricing";
import Checkout from "./checkout/Checkout";
import Albums from "./albums/Albums";
import SimpleTable from "./analytics/SimpleTable";
import DataTable from "./datatables/DataTable";
import Landing from "./dashboard/landing";
import Students from "./students/Students";
import CreateStudent from "./checkout/index";

import {
  Switch,
  Link,
  Route,
  withRouter,
  BrowserRouter
} from "react-router-dom";
import { compose } from "recompose";

let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3"
    }
  },
  shape: {
    borderRadius: 8
  }
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#18202c"
      }
    },
    MuiButton: {
      label: {
        textTransform: "initial"
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none"
        }
      }
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing.unit
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white
      }
    },
    MuiTab: {
      root: {
        textTransform: "initial",
        margin: "0 16px",
        minWidth: 0,
        [theme.breakpoints.up("md")]: {
          minWidth: 0
        }
      },
      labelContainer: {
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing.unit
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "#404854"
      }
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20
        }
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32
      }
    }
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48
    }
  }
};

const drawerWidth = 256;

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column"
  },
  mainContent: {
    flex: 1,
    padding: "48px 36px 0",
    background: "#eaeff1"
  }
};

class Paperbase extends React.Component {
  state = {
    mobileOpen: false,
    clickId: "Dashboard"
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  navItemClick = clickId => {
    // alert("navclick : " + JSON.stringify(clickId));
    this.setState(state => ({
      mobileOpen: !state.mobileOpen,
      clickId: clickId.childId
    }));
  };
  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <CssBaseline />
            <nav className={classes.drawer}>
              <Hidden smUp implementation="js">
                <Navigator
                  navItemClick={this.navItemClick}
                  PaperProps={{ style: { width: drawerWidth } }}
                  variant="temporary"
                  open={this.state.mobileOpen}
                  onClose={this.handleDrawerToggle}
                />
              </Hidden>
              <Hidden xsDown implementation="css">
                <Navigator
                  navItemClick={this.navItemClick}
                  PaperProps={{ style: { width: drawerWidth } }}
                />
              </Hidden>
            </nav>
            <div className={classes.appContent}>
              <Header
                headerName={this.state.clickId}
                onDrawerToggle={this.handleDrawerToggle}
              />
              <main className={classes.mainContent}>
                <Switch>
                  <Route
                    path={"/dashboard/Checkout"}
                    render={props => <CreateStudent {...props} />}
                  />
                  <Route
                    path={"/dashboard/Storage"}
                    render={props => <Content {...props} />}
                  />
                  <Route
                    path={"/dashboard/Pricing"}
                    render={props => <Pricing {...props} />}
                  />
                  <Route
                    path={"/dashboard/Students"}
                    render={props => <Students {...props} />}
                  />
                  <Route
                    path={"/dashboard/Albums"}
                    render={props => <Albums {...props} />}
                  />
                  <Route
                    path={"/dashboard/MachineLearning"}
                    render={props => <SimpleTable {...props} />}
                  />
                  <Route
                    path={"/dashboard/DataLab"}
                    render={props => <DataTable {...props} />}
                  />
                  <Route
                    path={"/dashboard"}
                    render={props => <Landing {...props} />}
                  />
                </Switch>
              </main>
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired
};
export default compose(withStyles(styles))(Paperbase);

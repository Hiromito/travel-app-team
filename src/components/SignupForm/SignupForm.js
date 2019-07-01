import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    CircularProgress,
    Typography,
    withStyles,
    Button,
    TextField,
    Fade
} from "@material-ui/core";
import classnames from 'classnames';
import { Redirect } from 'react-router'


import { auth } from 'actions/auth'
import google from "images/google.svg";

class SignupForm extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            nameValue: "",
            loginValue: "",
            passwordValue: "",
            registerError: null,
            redirect: false
        }
    }

    handleInput = ( e, type ) => {
        switch (type) {
            case "password" : {
                this.setState({passwordValue: e.target.value})
                break
            }
            case "login" : {
                this.setState({loginValue: e.target.value})
                break
            }
            default : {
                this.setState({nameValue: e.target.value})
            }
        }
    }

    handleLoginButtonClick = (e) => {
        e.preventDefault()
        this.props.auth(this.state.loginValue, this.state.passwordValue, this.state.nameValue)
        .then(() => {
            this.setState({redirect: true})
        })
        .catch(e => this.setState({registerError: e.message}))
    }

    render () {
        const { classes } = this.props;
        if (this.state.redirect) {
            return <Redirect to='/home'/>;
        }
        return (
            <React.Fragment>
                <Fade in={this.props.error}>
                    <Typography color="secondary" className={classes.errorMessage}>
                        Something is wrong with your login or password :(
                    </Typography>
                </Fade>
                <TextField
                    id="name"
                    InputProps={{
                        classes: {
                        underline: classes.textFieldUnderline,
                        input: classes.textField
                        }
                    }}
                    value={this.state.nameValue}
                    onChange={e => this.handleInput(e, "name")}
                    margin="normal"
                    placeholder="Full Name"
                    type="email"
                    fullWidth
                />
                <TextField
                    id="email"
                    InputProps={{
                        classes: {
                        underline: classes.textFieldUnderline,
                        input: classes.textField
                        }
                    }}
                    value={this.state.loginValue}
                    onChange={e => this.handleInput(e, "login")}
                    margin="normal"
                    placeholder="Email Adress"
                    type="email"
                    fullWidth
                />
                <TextField
                    id="password"
                    InputProps={{
                        classes: {
                        underline: classes.textFieldUnderline,
                        input: classes.textField
                        }
                    }}
                    value={this.state.passwordValue}
                    onChange={e => this.handleInput(e, "password")}
                    margin="normal"
                    placeholder="Password"
                    type="password"
                    fullWidth
                />
                {
                  this.state.registerError &&
                    <Typography variant="subheading" color="error" className="text-center">
                      Error: {this.state.registerError}
                    </Typography>
                }
                <div className={classes.creatingButtonContainer}>
                    {this.props.isLoading ? (
                        <CircularProgress size={26} />
                    ) : (
                        <Button
                            onClick={this.handleLoginButtonClick}
                            disabled={
                                this.state.loginValue.length === 0 ||
                                this.state.passwordValue.length === 0 ||
                                this.state.nameValue.length === 0
                            }
                            size="large"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className={classes.createAccountButton}
                        >
                            Create your account
                        </Button>
                    )}
                </div>
                <div className={classes.formDividerContainer}>
                    <div className={classes.formDivider} />
                    <Typography className={classes.formDividerWord}>or</Typography>
                    <div className={classes.formDivider} />
                </div>
                <Button
                    size="large"
                    className={classnames(
                        classes.googleButton,
                        classes.googleButtonCreating
                    )}
                >
                    <img src={google} alt="google" className={classes.googleIcon} />
                    &nbsp;Sign in with Google
                </Button>
          </React.Fragment>
        )
    }
}
const styles = theme => ({
    greeting: {
        fontWeight: 500,
        textAlign: "center",
        marginTop: theme.spacing(4)
    },
    subGreeting: {
        fontWeight: 500,
        textAlign: "center",
        marginTop: theme.spacing(2)
    },
    googleButton: {
        marginTop: theme.spacing(6),
        backgroundColor: "white",
        width: "100%",
        textTransform: "none"
    },
    googleButtonCreating: {
        marginTop: 0
    },
    googleIcon: {
        width: 30,
        marginRight: theme.spacing(2)
    },
    creatingButtonContainer: {
        marginTop: theme.spacing(2.5),
        height: 46,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    createAccountButton: {
        height: 46,
        textTransform: "none"
    },
    formDividerContainer: {
        marginTop: theme.spacing(4),
        display: "flex",
        alignItems: "center"
    },
    formDividerWord: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    formDivider: {
        flexGrow: 1,
        height: 1,
        backgroundColor: theme.palette.text.hint + "40"
    },
    errorMessage: {
        textAlign: "center"
    },
    textFieldUnderline: {
        "&:before": {
            borderBottomColor: theme.palette.primary.light
        },
        "&:after": {
            borderBottomColor: theme.palette.primary.main
        },
        "&:hover:before": {
            borderBottomColor: `${theme.palette.primary.light} !important`
        }
    },
    textField: {
        borderBottomColor: theme.palette.background.light
    },
    formButtons: {
        width: "100%",
        marginTop: theme.spacing(4),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    forgetButton: {
        textTransform: "none",
        fontWeight: 400
    },
    loginLoader: {
        marginLeft: theme.spacing(4)
    },
    copyright: {
        marginTop: theme.spacing(4),
        whiteSpace: 'nowrap',
        [theme.breakpoints.up("md")]: {
            position: "absolute",
            bottom: theme.spacing(2),
        }
    }
})

export default connect(
    state => ({
      
    }),
    dispatch => ({ dispatch, ...bindActionCreators({ auth }, dispatch) }),
  )(withStyles(styles, { withTheme: true })(SignupForm));
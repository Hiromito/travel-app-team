import React from 'react';
import {
    CircularProgress,
    Typography,
    withStyles,
    Button,
    TextField,
    Fade
} from "@material-ui/core";
import google from "images/google.svg";


class LoginForm extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            loginValue: "",
            passwordValue: ""
        }
    }

    handleInput = ( e, type ) => {
        if ( type === "login" ) {
            this.setState({loginValue: e.target.value});
        }
        if ( type === "password" ) {
            this.setState({passwordValue: e.target.value})
        }
    }

    render () {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Button size="large" className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                    &nbsp;Sign in with Google
                </Button>
                <div className={classes.formDividerContainer}>
                    <div className={classes.formDivider} />
                    <Typography className={classes.formDividerWord}>or</Typography>
                    <div className={classes.formDivider} />
                </div>
                <Fade in={this.props.error}>
                    <Typography color="secondary" className={classes.errorMessage}>
                        Something is wrong with your login or password :(
                    </Typography>
                </Fade>
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
                <div className={classes.formButtons}>
                {this.props.isLoading ? (
                    <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                    <Button
                        disabled={
                            this.state.loginValue.length === 0 ||
                            this.state.passwordValue.length === 0
                        }
                        onClick={this.props.handleLoginButtonClick}
                        variant="contained"
                        color="primary"
                        size="large"
                    >
                    Login
                    </Button>
                )}
                <Button
                    color="primary"
                    size="large"
                    className={classes.forgetButton}
                >
                    Forget Password
                </Button>
                </div>
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

export default withStyles(styles, { withTheme: true })(LoginForm);
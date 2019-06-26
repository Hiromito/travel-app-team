import React from 'react';
import {
    Grid,
    withStyles,
    Tabs,
    Tab
} from "@material-ui/core";

import { LoginForm } from 'components/LoginForm';
import { SignupForm } from 'components/SignupForm'

class Login extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            activeTabId: 0,
            loginValue: "",
            passwordValue: ""
        }
    }

    handleTabChange = (e, id) => {
        this.setState({activeTabId: id}) 
    }

    render () {
        const { classes } = this.props;
        return (
            <Grid container className={classes.container}>
                <div className={classes.formContainer}>
                    <div className={classes.form}>
                        <Tabs
                            value={this.state.activeTabId}
                            onChange={this.handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Login" classes={{ root: classes.tab }} />
                            <Tab label="Sign up" classes={{ root: classes.tab }} />
                        </Tabs>
                        { this.state.activeTabId === 0 && (
                            <LoginForm />
                        )}
                        { this.state.activeTabId === 1 && (
                            <SignupForm />
                        )}
                    </div>
                </div>
            </Grid>
        )
    }
}

const styles = theme => ({
    container: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0
    },
    formContainer: {
        width: "40%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          width: "50%"
        }
    },
    form: {
        width: 320
    },
    tab: {
        fontWeight: 400,
        fontSize: 18
    },
})

export default withStyles(styles, { withTheme: true })(Login);

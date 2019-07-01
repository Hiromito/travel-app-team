import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MaterialTable from 'material-table'

import { create } from 'actions/travel'

class DashBoard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            columns: [
                { title: 'Destination', field: 'destination' },
                { title: 'Start Date', field: 'startDate', type: 'date' },
                { title: 'End Date', field: 'endDate', type: 'date' },
                { title: 'Comment', field: 'comment' },
            ],
            data: [
                {
                    destination: 'Zerya Betül',
                    startDate: 2016,
                    endDate: 2017,
                    comment: "This is the best travl shcedule"
                },
                {
                    destination: 'fefsfe sdffsfe',
                    startDate: 2016,
                    endDate: 2017,
                    comment: "This is the best travl shcedule"
                },
            ],
            username: "",
            error: false,
        }
    }

    componentDidMount() {
        const username = this.props.email
        this.setState({username})
    }

    addtravel = (newData,data) => {
        const state = this.state
        const username = this.props.email
        console.log("zxcvbnm",username)
        this.props.create(username, newData.destination, newData.startDate, newData.endDate, newData.comment)
        .then(() => {
           
        })
        .catch(() => {
          this.setState({error: true})
        })
        this.setState({ ...state, data });
    }

    edittravel = (data, newData) => {
        const state = this.state
        this.setState({ ...state, data });
        console.log(newData)
    }

    removetravel = (data) => {
        const state = this.state
    }

    render () {
        const state = this.state
        console.log(this.state.username)
        return (
            <MaterialTable
                title="Travel"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data.push(newData);
                        this.addtravel(newData,data)
                        }, 600);
                    }),
                    onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data[data.indexOf(oldData)] = newData;
                        this.edittravel(data, newData);
                        }, 600);
                    }),
                    onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                        resolve();
                        const data = [...state.data];
                        data.splice(data.indexOf(oldData), 1);
                        this.removetravel(data)
                        }, 600);
                    }),
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    email: state.auth.email
  });

export default connect(
    mapStateToProps,
    dispatch => ({ dispatch, ...bindActionCreators({ create }, dispatch) }),
  )(DashBoard);
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ErrorBoundary from './ErrorBoundary';
import AppointmentForm from './AppointmentForm';

export class Appointments extends Component {
    static renderAppointmentList(appointmentList) {
        return (
            <div className="row">

                <div className="col-sm-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>City</th>
                                <th>Mobile No</th>
                                <th>Appointment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointmentList.map(appointment =>
                                    <tr key={appointment.name}>
                                        <td>{appointment.name}</td>
                                        <td>{appointment.city}</td>
                                        <td>{appointment.mobileNumber}</td>
                                        <td>{appointment.appointmentDate}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    displayName = Appointments.name;

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            appointmentList: [], loading: true, name: '', city: '', mobileNumber: '', appointmentDate: '', showPopup: false
        };

        fetch("api/SampleData/GetAppointments")
            .then(Response => Response.json())
            .then(data => { this.setState({ appointmentList: data, loading: false, name: '', city: '', mobileNumber: '', appointmentDate: '', showPopup: false }); });
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var appointments = {};
        appointments.name = this.state.name;
        appointments.city = this.state.city;
        appointments.mobileNumber = this.state.mobileNumber;
        appointments.appointmentDate = this.state.appointmentDate;

        fetch('api/SampleData/SubmitInfo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointments)
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        let appointmentData = this.state.loading
            ?
            <p> loading...</p>
            : Appointments.renderAppointmentList(this.state.appointmentList);
        return (
            <div>
                <div className="col-sm-12 p-t">
                    <Button variant="contained" color="primary" className="pull-right" onClick={this.togglePopup.bind(this)}>
                        Add New
                    </Button>
                    <ErrorBoundary>
                        {
                            this.state.showPopup ?
                                <AppointmentForm
                                    closePopup={this.togglePopup.bind(this)} />
                                : null
                        }
                    </ErrorBoundary>
                </div>
                <div className="col-sm-12">
                    {appointmentData}
                </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import DoctorRow from './DoctorRow';
import DoctorForm from './DoctorForm';

export class Doctors extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false, data: { name: 'John', lastName: 'Honai' }
        };

        fetch("api/SampleData/GetPatients")
            .then(Response => Response.json())
            .then(data => { this.setState({ patientList: data, loading: false, name: '', company: '', address: '', patients: data }); });
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }
    render() {
        return (
            <div className='app'>
                <button onClick={this.togglePopup.bind(this)} className="pull-right">show popup</button>
                <ErrorBoundary>
                        {
                        this.state.showPopup ?
                        <DoctorForm
                            data={this.state.data}
                            closePopup={this.togglePopup.bind(this)} />
                        : null
                        }
                </ErrorBoundary>      
            </div>
            );
        }
    }
    
 
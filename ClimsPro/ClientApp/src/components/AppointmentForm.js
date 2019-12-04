import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';
import CreatableSelect from 'react-select/lib/Creatable';

export default class AppointmentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            company: '',
            address: '',
            country: '',
            countries : [
                { label: "Singapore", value: 1 },
                { label: "Australia", value: 3 },
                { label: "India", value: 4 },
                { label: "Malysia", value: 5 },
                { label: "Indonesia", value: 6 },
                { label: "Thailand", value: 7 },
                { label: "New Zealand", value: 8 },
                { label: "Sri Lanka", value: 9 },
            ],
            showPopup: false
        };
    }
    
    onSubmit(e) {
        e.preventDefault();
        var appointments = {};
        appointments = {
            fullname: this.state.fullname,
            company: this.state.company,
            address: this.state.address
        }
        console.log(appointments.fullname);
        console.log(appointments.company);
        console.log(appointments.address);
    }
    onChange = (e) => {
        this.setState({ [e.target.fullname]: e.target.value });
        this.setState({ [e.target.company]: e.target.value });
        this.setState({ [e.target.address]: e.target.value });
    }
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="col-sm-12 n-p-l n-p-r">
                        <div className="col-sm-12 popup-header n-p-l n-p-r"> Appointment Form<button className="close-button pull-right" onClick={this.props.closePopup}>X</button></div>
                        <div className='col-sm-12'>
                            <form className="form-horizontal col-sm-12 p-t" role="form" onSubmit={this.onSubmit.bind(this)}>
                                <div className="col-sm-12 p-b p-t">
                                    <div className="col-sm-4">
                                        <label >Name</label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input required type="text" className="form-control" placeholder="fullname" arial-describedby="basic-addon1" onChange={event => this.setState({ fullname: event.target.value })}  value={this.state.fullname} />
                                    </div>
                                </div>
                                <div className="col-sm-12 p-b">
                                    <div className="col-sm-4">
                                        <label>Company</label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input required type="text" className="form-control" placeholder="company" arial-describedby="basic-addon1" onChange={event => this.setState({ company: event.target.value })} value={this.state.company}  />
                                    </div>
                                </div>
                                <div className="col-sm-12 p-b">
                                    <div className="col-sm-4">
                                        <label>Country</label>
                                    </div>
                                    <div className="col-sm-8">
                                        <Select options={this.state.countries} isMulti="true" />
                                    </div>
                                </div>
                                <div className="col-sm-12 p-b">
                                    <div className="col-sm-4">
                                        <label>Address</label>
                                    </div>
                                    <div className="col-sm-8">
                                        <input required type="text" className="form-control" placeholder="address" aria-describedby="basic-addon1" onChange={event => this.setState({ address: event.target.value })} value={this.state.address}  />
                                    </div>
                                </div>
                                <div className="col-sm-12 p-b">
                                    <div className="col-sm-offset-4 col-sm-8">
                                        <div className="col-sm-3 n-p-l">
                                            <input type="submit" value="Save" className="btn btn-primary" />
                                        </div>                                       
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
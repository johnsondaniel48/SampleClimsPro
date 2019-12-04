import React, { Component } from "react";
import PatientRow from "./PatientRow";
import ErrorBoundary from "./ErrorBoundary";
import BuggyCounter from "./BuggyCounter";

export class Patients extends Component {

    constructor(props) {
        super(props);
        this.state = { patientList: [], loading: true, input: 'Submit', name: '', company: '', address: '', patients: [] };
        fetch("api/SampleData/GetPatients")
            .then(Response => Response.json())
            .then(data => { this.setState({ patientList: data, loading: false, name: '', company: '', address: '', patients: data }); });
    }
    onSubmit(e) {
        e.preventDefault();
        var pats = {};
        if (this.submitInput.value === 'Submit') {
            pats = {
                name: this.state.name,
                company: this.state.company,
                address: this.state.address
            };
            this.setState({ patients: [...this.state.patients, pats], name: '' });
        } else
            if (this.submitInput.value === 'Edit') {
                const pos = Number(this.rowRef.value);
                this.state.patients[pos].name = this.inputName.value;
                this.state.patients[pos].company = this.inputCompany.value;
                this.state.patients[pos].address = this.inputAddress.value;
                pats.name = this.inputName.value;
                pats.company = this.inputCompany.value;
                pats.address = this.inputAddress.value;
                this.submitInput.value = 'Submit';
                this.clearInputs();
                this.forceUpdate();
            }

        fetch('api/SampleData/AddPatients', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pats)
        });
    }
    clearInputs() {
        this.inputName.value = '';
        this.inputCompany.value = '';
        this.inputAddress.value = '';
        this.state.name = '';
        this.state.company = '';
        this.state.address = '';
    }
    deleteRow(row) {
        var pos = this.state.patients.indexOf(row);
        this.setState({ patients: this.state.patients.slice(0, pos) });
        this.clearInputs();
    }
    editRow(row) {
        var pos = this.state.patients.indexOf(row);
        this.inputName.value = this.state.patients[row].name;
        this.state.name = this.state.patients[row].name;
        this.inputCompany.value = this.state.patients[row].company;
        this.state.company = this.state.patients[row].company;
        this.inputAddress.value = this.state.patients[row].address;
        this.state.address = this.state.patients[row].address;
        this.state.input = 'Edit';
        this.forceUpdate();
    }
    render() {
        return (
            <div className="row" >
                <ErrorBoundary>
                    <div className="row">
                        <form className="form-horizontal col-sm-12" role="form" onSubmit={this.onSubmit.bind(this)}>
                            <div className="input-group">
                                <span className="input-group-addon">Name</span>
                                <input required type="text" ref={(ref) => this.inputName = ref} onChange={event => this.setState({ name: event.target.value })} value={this.state.name} className="form-control" placeholder="name" arial-describedby="basic-addon1" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">Company</span>
                                <input type="text" required ref={(ref) => this.inputCompany = ref} onChange={event => this.setState({ company: event.target.value })} value={this.state.company} className="form-control" placeholder="company" arial-describedby="basic-addon1" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">Address</span>
                                <input type="text" required ref={(ref) => this.inputAddress = ref} onChange={event => this.setState({ address: event.target.value })} value={this.state.address} className="form-control" placeholder="address" aria-describedby="basic-addon1" />
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="submit" ref={(ref) => this.submitInput = ref} value={this.state.input} className="btn btn-default" />
                                </div>
                            </div>
                            <input type="hidden" className="row-ref" value="" ref={(ref) => this.rowRef = ref} />
                        </form>
                    </div>
                    <div className="col-sm-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Company</th>
                                    <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.state.patients.map((data, index) => {

                                    return <PatientRow editRow={this.editRow.bind(this)} users={this.state.patients} data={data} key={index} row={index} deleteRow={this.deleteRow.bind(this)} />
                                })}
                            </tbody>
                        </table>
                    </div>                  
                </ErrorBoundary>              
            </div>
        );
    }
}



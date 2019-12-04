import React, { Component } from 'react';

export default class PatientRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.company}</td>
                <td>{this.props.data.address}</td>
                <td className="glyphicon glyphicon-trash" onClick={() => { this.props.deleteRow(this.props.row) }}></td>
                <td className="glyphicon glyphicon-edit"  onClick={() => { this.props.editRow(this.props.row) }} ></td>
            </tr>
        );
    }
}
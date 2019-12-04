import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';

const currencies = [
    {
        value: 'USD',
        label: '$'
    },
    {
        value: 'EUR',
        label: '€'
    },
    {
        value: 'BTC',
        label: '฿'
    },
    {
        value: 'JPY',
        label: '¥'
    }
];

export default class DoctorForm extends Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR'
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="col-sm-12">
                        <div className="col-sm-12"><button className="pull-right" onClick={this.props.closePopup}>X</button></div>
                        <form>
                            <div className='col-sm-12'>
                                <input
                                    id="standard-name"
                                    label="Name"
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                    margin="normal"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
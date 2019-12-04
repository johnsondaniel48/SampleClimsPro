import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Appointments } from './components/Appointments';
import { Patients } from './components/Patients';
import { Doctors } from './components/Doctors';

export default class App extends Component {
  displayName = App.name
  render() {
    return (
      <Layout>       
        <Route path='/Appointments' component={Appointments} />
        <Route path='/patients'     component={Patients} />
        <Route path='/doctors'      component={Doctors} />
      </Layout>
    );
  }
}

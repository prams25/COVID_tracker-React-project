import React from 'react';

import { Cards, CountryPicker, Chart, Buttons } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import Header from './Header';
import { Typography } from '@material-ui/core';

import image from './images/image.png';



class App extends React.Component {
  // declare state for data and country
  state = {
    data: {},
    country: '',
  }

  // for collecting and setting data for  global
  async componentDidMount() {
    this.handleCountryChange('Australia');
  }

  showSummary = async () => {
    const data = await fetchData();

    this.setState({ data, country: '' });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country); // fetch country data from api

    this.setState({ data, country: country }); // set state to country's data
  }


  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Header />
        <Cards data={data} />
        <Typography variant="label" className={styles.Labels}>Frequently Checked</Typography>
        <Buttons chooseCountry={this.handleCountryChange} showSummary={this.showSummary}/>
        <Typography variant="label"  className={styles.Labels}>Country List</Typography>
        <CountryPicker handleCountryChange={this.handleCountryChange} cVal={this.state.country}/>
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;
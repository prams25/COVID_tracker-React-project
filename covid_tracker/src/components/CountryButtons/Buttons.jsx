import React, { Component } from 'react';
import { ButtonGroup, Button, Typography }  from  '@material-ui/core';

import styles from './Buttons.module.css';


class countryButtons extends Component {
    render(){
        return (
            <ButtonGroup className={styles.btnGroup} size="large" variant="contained" aria-label="contained primary button group">
                <Button value="Australia" onClick={(e) => {this.props.chooseCountry(e.currentTarget.value)} }>Austraila</Button>
                <Button value="India" onClick={(e) => {this.props.chooseCountry(e.currentTarget.value)} }>India</Button>
                <Button value="US" onClick={(e) => {this.props.chooseCountry(e.currentTarget.value)} }>US</Button>
                <Button value="Singapore" onClick={(e) => {this.props.chooseCountry(e.currentTarget.value)} }>Singapore</Button>
                <Button onClick={this.props.showSummary} >Global</Button>
            </ButtonGroup>

        );
    }
    
}

export default countryButtons;
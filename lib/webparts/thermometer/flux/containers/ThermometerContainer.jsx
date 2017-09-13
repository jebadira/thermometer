import React from 'react';
import Utils from 'flux/utils';
import Thermometer from '../../components/Thermometer.jsx';
import ThermometerActions from '../actions/ThermometerActions.js';
import ThermometerStore from '../stores/ThermometerStore.jsx';


class ThermometerContainer extends React.Component{
    static getStores(){
        return [];
    }

    static calculateState(prevState, props){


        return {
            actions : {
                CropImage : ThermometerActions.CropImage,
                LoadImage : ThermometerActions.LoadImage,
            },
           // image : ThermometerStore.getState().get('imageData'),
        }
    }

    render(){

        return <Thermometer actions={this.state.actions} image={this.state.image} />

    }
}

export default Utils.Container.create(ThermometerContainer);

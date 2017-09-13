import {ReduceStore} from 'flux/utils';
import Dispatcher from '../dispatchers/dispatcher.js';
import Immutable from 'immutable';
import ThermometerActions from '../actions/ThermometerActions.js';
import ThermometerActionTypes from '../actions/ThermometerActionTypes.js';


class ThermometerStore extends ReduceStore{
    
    constructor(){
        super(Dispatcher);
    }

    getInitialState(){
         const init = Immutable.Map();
         var originalimage = new Image();
         originalimage.src = "https://asuep.sharepoint.com/sites/DeviLink/Documents/ngcdash.png";
         //originalimage.onLoad = ThermometerActions.LoadImage(originalimage);
         const set = init.merge({
            image : originalimage,
            imageData : ''
         });
         return set;
    }

    reduce(state, action){

        switch(action.type){

            case ThermometerActionTypes.CROPIMAGE:
                return state.merge({
                    imageData : action.image
                });

                break; 
            default :
                return state;
                break;   
        
        }
    }
}

export default new ThermometerStore();
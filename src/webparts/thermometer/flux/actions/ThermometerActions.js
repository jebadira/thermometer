import Dispatcher from '../dispatchers/dispatcher.js';
import ThermometerActionTypes from './ThermometerActionTypes.js';

const actions = {
    CropImage(image){
        debugger;
        var width = 370;
        var height = 570;
        var x = 116;
        var y = 98;

        var tnCanvas = document.createElement('canvas');
        tnCanvas.style.cssText = "display:none;";
        var tnCanvasContext = tnCanvas.getContext('2d');
        tnCanvas.width = width;
        tnCanvas.height = height;
        var bufferCanvas = document.createElement('canvas');
        bufferCanvas.style.cssText = "display:none;";
        bufferCanvas.width = image.width;
        bufferCanvas.height = image.height;
        var bufferContext = bufferCanvas.getContext('2d');
        bufferContext.drawImage(image, 0, 0);
        tnCanvasContext.drawImage(bufferCanvas, x, y , width, height, 0, 0, width, height);
        var dataUri = tnCanvas.toDataURL();
      
        debugger;
        return dataUri;
      /*  Dispatcher.dispatch({
            type: ThermometerActionTypes.CROPIMAGE,
            image : dataUri,
        });*/
},
    LoadImage(image){
        debugger;
        var closure = this;
        var loadTimer;
        if(loadTimer != null){
            clearTimeout(loadTimer);
        }
        if(!image.complete){
            
            loadTimer = setTimeout(function(){
                closure.LoadImage(image);
            }, 3);
        }else{
            return closure.CropImage(image);
        }
    }

}


export default actions;
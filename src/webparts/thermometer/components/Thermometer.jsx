import React from 'react';
export default class Thermometer extends React.Component{
    constructor(props){
        super(props);
        this.state = {imageUri : ''}
        this.CropImage = this.CropImage.bind(this);
        this.LoadImage = this.LoadImage.bind(this);
    }
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
        this.setState({

            imageUri : dataUri
        });
    }
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
                closure.CropImage(image);
        }
    }
    componentDidMount(){
         var originalimage = new Image();
         originalimage.src = "https://asuep.sharepoint.com/sites/DeviLink/Documents/ngcdash.png";
         originalimage.onLoad = this.LoadImage(originalimage);
    }    

    render(){

        return(
            <div style={{width: "100%", height: "100%", textAlign: "center"}}>
                {this.state.imageUri ? 
                <img src={this.state.imageUri} style={{maxHeight: 540, width: "100%", maxWidth:350}}/>
                : null }
            </div>
        )
    }
}
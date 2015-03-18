
function inicioPageZoomFoto() {
    if(_sZoomFotoOrigen=='Inventario'){
        if(_sZoomFoto != ''){
            MostrarFoto();
        }
        else{
            HacerFoto();
        }
    }
    else{
        MostrarFoto();
    }

}

function HacerFoto() {
    try {
        navigator.camera.getPicture(hacerfotoOK, hacerFotoERROR, {
            quality: 20,
            destinationType: Camera.DestinationType.DATA_URL,
            correctOrientation: true,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: true
        });
    }
    catch (ex) {
        mensaje(ex.message);
    }
}
function hacerfotoOK(imageData) {
    _sZoomFoto = imageData;
    if(_sZoomFotoOrigen=='Inventario'){
        _sInventarioFoto=_sZoomFoto;
    }
    MostrarFoto();
}
function hacerFotoERROR(error) {
    _sZoomFoto = '';
    mensaje(error.message);
}

function MostrarFoto(){
    var imagen = document.getElementById('imgZoomFoto');
    if (_sZoomFoto == '') {
        imagen.src = "img/sinfoto.png";
    }
    else {
        imagen.src = "data:image/jpeg;base64," + _sZoomFoto;
    }
}
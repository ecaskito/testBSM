
function inicioPageZoomFoto() {
    if(_sZoomFotoOrigen=='Inventario'){
        document.getElementById("btnZoomFotoBorrar").style.visibility="visibility";
        document.getElementById("btnZoomFotoRefrescar").style.visibility="visibility";
        document.getElementById("btnZoomFotoAceptar").style.visibility="visibility";
        if(_sZoomFoto != ''){
            MostrarFoto();
        }
        else{
            HacerFoto();
        }
    }
    else{
        document.getElementById("btnZoomFotoBorrar").style.visibility="hidden";
        document.getElementById("btnZoomFotoRefrescar").style.visibility="hidden";
        document.getElementById("btnZoomFotoAceptar").style.visibility="hidden";
        MostrarFoto();
    }

}

function BorrarFoto() {
    var v_mensaje = "Vol el·liminar la foto?";
    var v_titulo = "El·liminar foto";
    var v_botones = "SI,NO";

    if (navigator.notification && navigator.notification.confirm) {
        navigator.notification.confirm(v_mensaje, borrarFotoRespuesta, v_titulo, v_botones);
    }
    else {
        var v_retorno = confirm(v_mensaje);
        if (v_retorno) {
            borrarFotoRespuesta(1);
        }
        else {
            borrarFotoRespuesta(2);
        }
    }
}

function borrarFotoRespuesta(respuesta){

    if (respuesta==1) {

        _sZoomFoto == '';
        MostrarFoto();
    }
}

function RefrescarFoto(){
    HacerFoto();
}

function HacerFoto() {
    try {
        navigator.camera.getPicture(hacerfotoOK, hacerFotoERROR, {
            quality: 20,
            destinationType: Camera.DestinationType.DATA_URL,
            correctOrientation: true,
            sourceType: Camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: false
        });
    }
    catch (ex) {
        mensaje(ex.message);
    }
}
function hacerfotoOK(imageData) {
    _sZoomFoto = imageData;
    MostrarFoto();
}
function hacerFotoERROR(error) {
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

function AceptarFoto() {
    if(_sZoomFotoOrigen=='Inventario'){
        _sInventarioFoto=_sZoomFoto;
        mostrarFotoInventario();
    }
    handleBackButton();
}

function CancelarFoto() {
    handleBackButton();
}


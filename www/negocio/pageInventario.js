
function inicioPageInventario(){
    $('#divInventarioTexto').hide();
    $('#divInventarioNumero').hide();
    $('#divInventarioLista').hide();
    $('#trIncidencias').hide();

    if (_sIdActivo ==null || _sIdActivo==""){
        _sInventarioDefinicion="";
        _sInventarioMarca="";
        _sInventarioModelo="";
    }
    else{
        _sInventarioDefinicion=_sElemento2Definicion;
        _sInventarioMarca=_sElemento2Marca;
        _sInventarioModelo=_sElemento2Modelo;
    }

    $('#labelINVENTARIO_SIDUBICACION').text(_sIdUbicacion);
    $('#labelINVENTARIO_SIDACTIVO').text(_sIdActivo);

    $('#labelINVENTARIO_SDEFINICION').text(_sInventarioDefinicion);
    $('#labelINVENTARIO_SMARCA').text(_sInventarioMarca);
    $('#labelINVENTARIO_SMODELO').text(_sInventarioModelo);

    $('#labelINVENTARIO_SNUMSERIE').text(_sInventarioNumSerie);
    $('#labelINVENTARIO_SETIQUETA').text(_sInventarioEtiqueta);
    $('#labelINVENTARIO_SDESIGNACION').text(_sInventarioDesignacion);
    $('#labelINVENTARIO_SOBSERVACIONES').text(_sInventarioObservaciones);

    $('#labelINVENTARIO_ICANTIDAD').text('1');
    $('#labelINVENTARIO_SNUMSERIE').text(' ');

    mostrarFotoInventario();
    mostrarCoordGPSInventario();
}



function AbrirTexto(p_elemento,p_label){
    _tempInventarioLabelText=p_label;
    _tempInventarioCampoText=p_elemento;

    $('#labelINVENTARIOTEXTO').text(p_elemento);

    $('#textareaInventario').val('');
    var v_texto='';
    v_texto=$('#'+p_label).text();
    $('#textareaInventario').val(v_texto);

    $('#divInventarioTexto').show();

}


function AceptarTexto(){

    var v_texto=$('#textareaInventario').val();
    $('#'+_tempInventarioLabelText).text(v_texto);
    _tempInventarioLabelText=null;
    _tempInventarioCampoText=null;
    $('#divInventarioTexto').hide();

}

function CancelarTexto(){
    _tempInventarioLabelText=null;
    _tempInventarioCampoText=null;
    $('#textareaInventario').text('  ');
    $('#divInventarioTexto').hide();

}

function AbrirNumero(p_elemento,p_label){
    _tempInventarioLabelText=p_label;
    _tempInventarioCampoText=p_elemento;

    $('#labelINVENTARIONUMERO').text(p_elemento);

    var v_texto='1';
    v_texto=$('#'+p_label).text();
    $('#number').val(v_texto);

    $('#divInventarioNumero').show();

}


function AceptarNumero(){

    var v_texto=$('#number').val();
    $('#'+_tempInventarioLabelText).text(v_texto);
    _tempInventarioLabelText=null;
    _tempInventarioCampoText=null;
    $('#divInventarioNumero').hide();

}

function CancelarNumero(){
    _tempInventarioLabelText=null;
    _tempInventarioCampoText=null;
    $('#number').text('1');
    $('#divInventarioNumero').hide();

}

function AbrirLista(p_elemento,p_label){
    _tempInventarioLabelText=p_label;
    _tempInventarioCampoText=p_elemento;

    $('#labelINVENTARIOLISTA').text(p_elemento);

    $('#divInventarioLista').show();

}


function AceptarLista(p_estado){

    $('#'+_tempInventarioLabelText).text(p_estado);
    _tempInventarioLabelText=null;
    _tempInventarioCampoText=null;
    $('#divInventarioLista').hide();

}

function CancelarLista(){
    _tempInventarioLabelText=null;
    _tempInventarioCampoText=null;
    $('#divInventarioLista').hide();

}

function MostrarIncidencia(){
    $('#trIncidencias').show();
    $('#divFatanDatos').css("background-color","rgba(26,154,220,0.3)");
    $('#divNoFatanDatos').css("background-color","#f3f3f3");
}

function OcultarIncidencia(){
    $('#trIncidencias').hide();
    $('#divFatanDatos').css("background-color","#f3f3f3");
    $('#divNoFatanDatos').css("background-color","rgba(26,154,220,0.3)");
}


function abrirZoomFotoInventario(){
    _sZoomFotoOrigen='Inventario';
    if (_sActivoFoto!=''){
        _sZoomFotoOrigen='InventarioActivo';
        _sZoomFoto=_sActivoFoto;
        abrirPagina("pageZoomFoto");
    }
    else if (_sInventarioFoto != ''){
        _sZoomFoto=_sInventarioFoto;
        abrirPagina("pageZoomFoto");
    }
    else{
        HacerFoto1();
    }

}

function HacerFoto1() {
    try {
        navigator.camera.getPicture(hacerfotoOK1, hacerFotoERROR1, {
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
function hacerfotoOK1(imageData) {
    _sZoomFoto = imageData;
    _sZoomFotoOrigen='Inventario';
    abrirPagina("pageZoomFoto");
}
function hacerFotoERROR1(error) {
}


function mostrarFotoInventario(){
    var imagen = document.getElementById('imgInventarioFoto');
    if (_sActivoFoto == '') {
        if (_sInventarioFoto=='')
        {
            imagen.src = "img/sinfoto.png";
        }
        else{
            imagen.src = "data:image/jpeg;base64," + _sInventarioFoto;
        }
    }
    else {
        imagen.src = "data:image/jpeg;base64," + _sActivoFoto;
    }
}
function abrirGPSInventario(){
    _GPSTemPosicion=_sInventarioPosicion;
    abrirPagina("pageGPS");
}

function mostrarCoordGPSInventario() {

    if (_sInventarioPosicion == null) {
        $('#imgInventarioGPS').show();
        $('#divMapaInventarioGPS').hide();
    }
    else {
        try {
            $('#imgInventarioGPS').hide();
            $('#divMapaInventarioGPS').show();

            //Coordenadas
            var sCoords = "";
            var sCoord_X = "";
            var sCoord_Y = "";
            if (_sInventarioPosicion != null) {
                sCoords = _sInventarioPosicion.toString().replace(" ", "").replace("(", "").replace(")", "");
                if (sCoords != null && sCoords.trim() != '') {
                    sCoord_X = sCoords.split(",")[0];
                    sCoord_Y = sCoords.split(",")[1];
                }
            }

            var v_posAlta = new google.maps.LatLng(sCoord_X, sCoord_Y);
            var v_mapOptions = {
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                disableDefaultUI: true,
                accuracy: 5,
                enabledHighAccuracy: true,
                overviewMapControl: false,
                panControl: false,
                rotateControl: false,
                scaleControl: false,
                zoomControl: false,
                streetViewControl: false,
                center: v_posAlta,
                maximumAge: 0//,timeout:1000
            };
            var v_mapAlta = new google.maps.Map(document.getElementById('divMapaInventarioGPS'), v_mapOptions);

            var v_marcador = new google.maps.Marker({
                position: v_posAlta,
                map: v_mapAlta
            });
try{
    v_mapAlta.refresh()
}
catch (ex){}
        }
        catch (ex) {
            alert(ex.message);
        }

    }
}


function Limpiar(){



    _dicFamiliaImagen= {};
    _dicFamiliaNombre= {};
    _dicFamiliaCodigo= {};

    _iIdFamilia = null;
    _sIdFamilia = null;
    _sFamilia = null;


    _dicActivoCodigo= {};
    _dicActivoFamilia= {};
    _dicActivoSubFamilia= {};
    _dicActivoEquipo= {};
    _dicActivoElemento1= {};
    _dicActivoElemento2= {};
    _dicActivoElemento3= {};
    _dicActivoFoto= {};
    _dicActivoEtiquetable= {};


    _tempIdSubFamilia=null;
    _dicSubFamiliaCodigo= {};
    _dicSubFamiliaNombre= {};


    _iIdSubFamilia = null;
    _sIdSubFamilia = null;
    _sSubFamilia = null;

    _tempIdEquipo=null;
    _dicEquipoCodigo= {};
    _dicEquipoNombre= {};

    _iIdEquipo = null;
    _sIdEquipo = null;
    _sEquipo = null;

    _tempIdElemento1=null;
    _dicElemento1Codigo= {};
    _dicElemento1Nombre= {};

    _iIdElemento1 = null;
    _sIdElemento1 = null;
    _sElemento1 = null;

    _tempIdElemento2=null;
    _dicElemento2Codigo= {};
    _dicElemento2Definicion= {};
    _dicElemento2Modelo= {};
    _dicElemento2Marca= {};
    _dicElemento2Foto= {};

    _iIdElemento2 = null;
    _sIdElemento2 = null;
    _sElemento2Definicion = null;
    _sElemento2Marca = null;
    _sElemento2Modelo = null;
    _sElemento2Foto = null;

    _iIdActivo = null;
    _sIdActivo = null;
    _sActivoFoto='';
    _sActivoEtiqueta=null;

    _sInventarioDefinicion="";
    _sInventarioMarca="";
    _sInventarioModelo="";
    _sInventarioEstado="";
    _sInventarioNumSerie="";
    _sInventarioEtiqueta="";
    _sInventarioDesignacion="";
    _sInventarioNumero="";
    _sInventarioObservaciones="";
    _sInventarioFaltanDatos="";
    _sInventarioIncidencia="";
    _sInventarioFoto='';
    _sInventarioPosicion=null;

    _tempInventarioLabelText=null;
    _tempInventarioCampoText=null;

    abrirPagina("pageFamilia");


}

function EnviarInventario(){
    Limpiar();
}

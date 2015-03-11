

function inicioPageCentros(){
    _dicCentroImagen= {};
    _dicCentroClasif= {};
    _dicCentroNombre= {};
    _dicCentroCodigo= {};

    //alert('antes');
    leeXMLCentro();
    cargaListaCentros();
    //alert('fin');

}

function leeXMLCentro() {
    $.ajax({
        type: "GET",
        url: "tablas/Centro.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Centro').each(function () {

                var v_clasif = $(this).find('IIDCLASIFICACION').text();
                if (_iIdClasifCentro == $(this).find('IIDCLASIFICACION').text() ) {
                    _dicCentroImagen[$(this).find('IIDCENTRO').text()] = $(this).find('IMAGEN').text();
                    //_dicCentroClasif[$(this).find('IIDCENTRO').text()] = $(this).find('IIDCLASIFICACION').text();
                    _dicCentroNombre[$(this).find('IIDCENTRO').text()] = $(this).find('SCENTRO').text();
                    _dicCentroCodigo[$(this).find('IIDCENTRO').text()] = $(this).find('SIDCENTRO').text();
                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}


function cargaListaCentros(){

    //alert('1');
    $('#lvCentros').children().remove('li');


    var v_li = "";

    for(v_id  in _dicCentroNombre)
    {
        //alert(_dicCentroNombre[v_id]);
        //alert(_dicCentroCodigo[v_id]);

        v_li ="<div style='width:27%;height:48px;float: left;background-color: #efefef;border: 1px solid #efefef;margin: 2px;line-height: 48px;text-align: center'>";
        v_li +="<img src='img/"+_dicCentroImagen[v_id]+"' style='max-width:100%;max-height:50px;display: inline-block;vertical-align:middle' />";
        v_li +="</div>"
        v_li +=" <div style='width:70%;float: right'>";
        v_li +=" <table cellpadding='0' cellspacing='0' border='0' style='width: 100%;table-layout: fixed'>";
        v_li +=" <tr><td style='font-weight: normal'>"+_dicCentroNombre[v_id]+"</td></tr>";
        v_li +=" <tr><td style='overflow: hidden;text-overflow: ellipsis;white-space: nowrap' >"+_dicCentroCodigo[v_id]+"</td></tr>";
        v_li +=" </table></div>";




        $('#lvCentros').append($('<li/>', {
            'id': "fila_" + v_id
        }).append($('<a/>', {
            'href': '',
            'onclick': "mostrarSector1('"+v_id+"')",
            'data-mini':"true",
            'data-inline':"false",
            'data-role':"button",
            'data-theme':"c",
            'class':"ui-link ui-btn ui-btn-c ui-shadow ui-corner-all ui-mini",
            'html': v_li
        })));
    }
    try{
        $('#lvCentros').listview('refresh');
    }
    catch (ex){}
}

function mostrarSector1(p_id){
    _iIdCentro=p_id;
    _sIdCentro=_dicCentroCodigo[p_id];
    _sCentro=_dicCentroNombre[p_id];

    _dicUbicacionesCodigo= {};
    _dicUbicacionesCentro= {};
    _dicUbicacionesSector1= {};
    _dicUbicacionesSector2= {};
    _dicUbicacionesDep1= {};
    _dicUbicacionesDep2= {};
    _dicUbicacionesIni= {};
    _dicUbicacionesFin= {};

    leeXMLUbicacion();
    abrirPagina("pageSector1");

}


function leeXMLUbicacion() {
    $.ajax({
        type: "GET",
        url: "tablas/Ubicacion.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Ubicacion').each(function () {

                if (_iIdCentro == $(this).find('IIDCENTRO').text() ) {
                    _dicUbicacionesCodigo[$(this).find('IIDUBICACION').text()]= $(this).find('SIDUBICACION').text();
                    _dicUbicacionesCentro[$(this).find('IIDUBICACION').text()]= $(this).find('IIDCENTRO').text();
                    _dicUbicacionesSector1[$(this).find('IIDUBICACION').text()]= $(this).find('IIDSECTOR1').text();
                    _dicUbicacionesSector2[$(this).find('IIDUBICACION').text()]= $(this).find('IIDSECTOR2').text();
                    _dicUbicacionesDep1[$(this).find('IIDUBICACION').text()]= $(this).find('IIDDEPENDENCIA1').text();
                    _dicUbicacionesDep2[$(this).find('IIDUBICACION').text()]= $(this).find('IIDDEPENDENCIA2').text();
                    _dicUbicacionesIni[$(this).find('IIDUBICACION').text()]= $(this).find('DFINIINV').text();
                    _dicUbicacionesFin[$(this).find('IIDUBICACION').text()]= $(this).find('DFFININV').text();


                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}

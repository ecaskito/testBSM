

function inicioPageFamilia(){
    _dicFamiliaImagen= {};
    _dicFamiliaNombre= {};
    _dicFamiliaCodigo= {};

    //alert('antes');
    leeXMLFamilia();
    cargaListaFamilia();
    //alert('fin');

}

function leeXMLFamilia() {
    $.ajax({
        type: "GET",
        url: "tablas/familia.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Familia').each(function () {

                    _dicFamiliaImagen[$(this).find('IIDFAMILIA').text()] = $(this).find('IMAGEN').text();
                    _dicFamiliaNombre[$(this).find('IIDFAMILIA').text()] = $(this).find('SFAMILIA').text();
                    _dicFamiliaCodigo[$(this).find('IIDFAMILIA').text()] = $(this).find('SIDFAMILIA').text();
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}


function cargaListaFamilia(){

    //alert('1');
    $('#lvFamilia').children().remove('li');


    var v_li = "";

    for(v_id  in _dicFamiliaNombre)
    {

        v_li ="<div style='width:27%;height:48px;float: left;background-color: #efefef;border: 1px solid #efefef;margin: 2px;line-height: 48px;text-align: center'>";
        v_li +="<img src='img/"+_dicFamiliaImagen[v_id]+"' style='max-width:100%;max-height:50px;display: inline-block;vertical-align:middle' />";
        v_li +="</div>"
        v_li +=" <div style='width:70%;float: right'>";
        v_li +=" <table cellpadding='0' cellspacing='0' border='0' style='width: 100%;table-layout: fixed'>";
        v_li +=" <tr><td style='font-weight: normal'>"+_dicFamiliaNombre[v_id]+"</td></tr>";
        v_li +=" <tr><td style='overflow: hidden;text-overflow: ellipsis;white-space: nowrap' >"+_dicFamiliaCodigo[v_id]+"</td></tr>";
        v_li +=" </table></div>";




        $('#lvFamilia').append($('<li/>', {
            'id': "fila_" + v_id
        }).append($('<a/>', {
            'href': '',
            'onclick': "mostrarSubFamilia('"+v_id+"')",
            'data-mini':"true",
            'data-inline':"false",
            'data-role':"button",
            'data-theme':"c",
            'class':"ui-link ui-btn ui-btn-c ui-shadow ui-corner-all ui-mini",
            'html': v_li
        })));
    }
    try{
        $('#lvFamilia').listview('refresh');
    }
    catch (ex){}
}

function mostrarSubFamilia(p_id){
    _iIdFamilia=p_id;
    _sIdFamilia=_dicFamiliaCodigo[p_id];
    _sFamilia=_dicFamiliaNombre[p_id];

    _dicActivoCodigo= {};
    _dicActivoFamilia= {};
    _dicActivoSubFamilia= {};
    _dicActivoEquipo= {};
    _dicActivoElemento1= {};
    _dicActivoElemento2= {};
    _dicActivoElemento3= {};
    _dicActivoFoto= {};
    _dicActivoEtiquetable= {};

    leeXMLActivo();
    abrirPagina("pageSubFamilia");

}


function leeXMLActivo() {
    $.ajax({
        type: "GET",
        url: "tablas/activo.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Activo').each(function () {

                if (_iIdFamilia == $(this).find('IIDFAMILIA').text() ) {
                    _dicActivoCodigo[$(this).find('IIDACTIVO').text()]= $(this).find('SIDACTIVO').text();
                    _dicActivoFamilia[$(this).find('IIDACTIVO').text()]= $(this).find('IIDFAMILIA').text();
                    _dicActivoSubFamilia[$(this).find('IIDACTIVO').text()]= $(this).find('IIDSUBFAMILIA').text();
                    _dicActivoEquipo[$(this).find('IIDACTIVO').text()]= $(this).find('IIDEQUIPO').text();
                    _dicActivoElemento1[$(this).find('IIDACTIVO').text()]= $(this).find('IIDELEMENTO1').text();
                    _dicActivoElemento2[$(this).find('IIDACTIVO').text()]= $(this).find('IIDELEMENTO2').text();
                    _dicActivoElemento3[$(this).find('IIDACTIVO').text()]= $(this).find('IIDELEMENTO3').text();
                    _dicActivoEtiquetable[$(this).find('IIDACTIVO').text()]= $(this).find('IETIQUETABLE').text();
                    _dicActivoFoto[$(this).find('IIDACTIVO').text()]= $(this).find('SFOTO').text();
                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}


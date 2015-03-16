function inicioPageDependencia2(){
    _dicDependencia2Codigo= {};
    _dicDependencia2Nombre= {};

    $('#labelDEPENDENCIA2_CENTRE').text(_sIdCentro+" - "+_sCentro);
    $('#labelDEPENDENCIA2_SECTOR1').text(_sIdSector1+" - "+_sSector1);
    $('#labelDEPENDENCIA2_SECTOR2').text(_sIdSector2+" - "+_sSector2);
    $('#labelDEPENDENCIA2_DEPENDENCIA1').text(_sIdDependencia1+" - "+_sDependencia1);

    for(v_id  in _dicUbicacionesSector1) {
        if (_iIdSector1 == _dicUbicacionesSector1[v_id]){
            if(_iIdSector2 == _dicUbicacionesSector2[v_id]){
                if(_iIdDependencia1 ==_dicUbicacionesDep1[v_id]){
                    _tempIdDependencia2=_dicUbicacionesDep2[v_id];
                    leeXMLDependencia2();
                }
            }
        }
    }

    if (_dicDependencia2Codigo[_tempIdDependencia2]=='##'){
        mostrarUbicacion(_tempIdDependencia2);
    }
    else {
        cargaListaDependencia2();
    }
}

function leeXMLDependencia2() {
    $.ajax({
        type: "GET",
        url: "tablas/dependencia2.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Dependencia2').each(function () {
                if (_tempIdDependencia2 == $(this).find('IIDDEPENDENCIA2').text() ) {
                    _dicDependencia2Codigo[$(this).find('IIDDEPENDENCIA2').text()] = $(this).find('SIDDEPENDENCIA2').text();
                    _dicDependencia2Nombre[$(this).find('IIDDEPENDENCIA2').text()] = $(this).find('SDEPENDENCIA2').text();
                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}

function cargaListaDependencia2(){

    //alert('1');
    $('#lvDependencia2').children().remove('li');


    var v_li = "";

    for(v_id  in _dicDependencia2Codigo)
    {

        v_li =" <div>";
        v_li +=" <table cellpadding='0' cellspacing='0' border='0' style='width: 100%;table-layout: fixed'>";
        v_li +=" <tr><td style='width:10%;'>"+_dicDependencia2Codigo[v_id]+"</td>";
        v_li +=" <td style='width:90%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap' >"+_dicDependencia2Nombre[v_id]+"</td></tr>";
        v_li +=" </table></div>";




        $('#lvDependencia2').append($('<li/>', {
            'id': "fila_" + v_id
        }).append($('<a/>', {
            'href': '',
            'onclick': "mostrarUbicacion('"+v_id+"')",
            'data-mini':"true",
            'data-inline':"false",
            'data-role':"button",
            'data-theme':"c",
            'class':"",
            'html': v_li
        })));
    }
    try{
        $('#lvDependencia2').listview('refresh');
    }
    catch (ex){}
}

function mostrarUbicacion(p_id){
    _iIdDependencia2=p_id;
    _sIdDependencia2=_dicDependencia2Codigo[p_id];
    _sDependencia2=_dicDependencia2Nombre[p_id];

    ObtenerUbicacion();
    abrirPagina("pageUbicacion");

}




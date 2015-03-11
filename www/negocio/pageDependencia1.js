function inicioPageDependencia1(){
    _dicDependencia1Codigo= {};
    _dicDependencia1Nombre= {};

    $('#labelDEPENDENCIA1_CENTRE').text(_sIdCentro+" - "+_sCentro);
    $('#labelDEPENDENCIA1_SECTOR1').text(_sIdSector1+" - "+_sSector1);
    $('#labelDEPENDENCIA1_SECTOR2').text(_sIdSector2+" - "+_sSector2);

    for(v_id  in _dicUbicacionesSector1) {
        if (_iIdSector1 == _dicUbicacionesSector1[v_id]){
            if(_iIdSector2 == _dicUbicacionesSector2[v_id]){
                _tempIdDependencia1=_dicUbicacionesDep1[v_id];
                leeXMLDependencia1();
            }
        }
    }
    if (_dicDependencia1Codigo[_tempIdDependencia1]=='##'){

        mostrarDependencia2(_tempIdDependencia1);
    }
    else{
        cargaListaDependencia1();
    }
}

function leeXMLDependencia1() {
    $.ajax({
        type: "GET",
        url: "tablas/Dependencia1.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Dependencia1').each(function () {
                if (_tempIdDependencia1 == $(this).find('IIDDEPENDENCIA1').text() ) {
                    _dicDependencia1Codigo[$(this).find('IIDDEPENDENCIA1').text()] = $(this).find('SIDDEPENDENCIA1').text();
                    _dicDependencia1Nombre[$(this).find('IIDDEPENDENCIA1').text()] = $(this).find('SDEPENDENCIA1').text();
                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}

function cargaListaDependencia1(){

    //alert('1');
    $('#lvDependencia1').children().remove('li');


    var v_li = "";

    for(v_id  in _dicDependencia1Codigo)
    {

        v_li =" <div>";
        v_li +=" <table cellpadding='0' cellspacing='0' border='0' style='width: 100%;table-layout: fixed'>";
        v_li +=" <tr><td style='width:10%;'>"+_dicDependencia1Codigo[v_id]+"</td>";
        v_li +=" <td style='width:90%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap' >"+_dicDependencia1Nombre[v_id]+"</td></tr>";
        v_li +=" </table></div>";




        $('#lvDependencia1').append($('<li/>', {
            'id': "fila_" + v_id
        }).append($('<a/>', {
            'href': '',
            'onclick': "mostrarDependencia2('"+v_id+"')",
            'data-mini':"true",
            'data-inline':"false",
            'data-role':"button",
            'data-theme':"c",
            'class':"",
            'html': v_li
        })));
    }
    try{
        $('#lvDependencia1').listview('refresh');
    }
    catch (ex){}
}

function mostrarDependencia2(p_id){
    _iIdDependencia1=p_id;
    _sIdDependencia1=_dicDependencia1Codigo[p_id];
    _sDependencia1=_dicDependencia1Nombre[p_id];

    abrirPagina("pageDependencia2");

}



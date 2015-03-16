function inicioPageSector2(){
    _dicSector2Codigo= {};
    _dicSector2Nombre= {};

    $('#labelSECTOR2_CENTRE').text(_sIdCentro+" - "+_sCentro);
    $('#labelSECTOR2_SECTOR1').text(_sIdSector1+" - "+_sSector1);
    for(v_id  in _dicUbicacionesSector1) {
        if (_iIdSector1 == _dicUbicacionesSector1[v_id]){
            _tempIdSector2=_dicUbicacionesSector2[v_id];
            leeXMLSector2();
        }
    }
    if (_dicSector2Codigo[_tempIdSector2]=='##'){

        mostrarDependencia1(_tempIdSector2);
    }
    else{
        cargaListaSector2();
    }
}

function leeXMLSector2() {
    $.ajax({
        type: "GET",
        url: "tablas/sector2.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Sector2').each(function () {
                if (_tempIdSector2 == $(this).find('IIDSECTOR2').text() ) {
                    _dicSector2Codigo[$(this).find('IIDSECTOR2').text()] = $(this).find('SIDSECTOR2').text();
                    _dicSector2Nombre[$(this).find('IIDSECTOR2').text()] = $(this).find('SSECTOR2').text();
                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}

function cargaListaSector2(){

    //alert('1');
    $('#lvSector2').children().remove('li');


    var v_li = "";

    for(v_id  in _dicSector2Codigo)
    {

        v_li =" <div>";
        v_li +=" <table cellpadding='0' cellspacing='0' border='0' style='width: 100%;table-layout: fixed'>";
        v_li +=" <tr><td style='width:10%;'>"+_dicSector2Codigo[v_id]+"</td>";
        v_li +=" <td style='width:90%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap' >"+_dicSector2Nombre[v_id]+"</td></tr>";
        v_li +=" </table></div>";




        $('#lvSector2').append($('<li/>', {
            'id': "fila_" + v_id
        }).append($('<a/>', {
            'href': '',
            'onclick': "mostrarDependencia1('"+v_id+"')",
            'data-mini':"true",
            'data-inline':"false",
            'data-role':"button",
            'data-theme':"c",
            'class':"",
            'html': v_li
        })));
    }
    try{
        $('#lvSector2').listview('refresh');
    }
    catch (ex){}
}

function mostrarDependencia1(p_id){
    _iIdSector2=p_id;
    _sIdSector2=_dicSector2Codigo[p_id];
    _sSector2=_dicSector2Nombre[p_id];

    abrirPagina("pageDependencia1");

}


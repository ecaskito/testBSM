


function inicioPageSector1(){
    _dicSector1Codigo= {};
     _dicSector1Nombre= {};

    $('#labelSECTOR1_CENTRE').text(_sIdCentro+" - "+_sCentro);
    for(v_id  in _dicUbicacionesSector1) {
        _tempIdSector1=_dicUbicacionesSector1[v_id];
        leeXMLSector1();
    }
    if (_dicSector1Codigo[_tempIdSector1]=='##'){

        mostrarSector2(_tempIdSector1);
    }
    else{
        cargaListaSector1();
    }
}

function leeXMLSector1() {
    $.ajax({
        type: "GET",
        url: "tablas/sector1.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Sector1').each(function () {
                if (_tempIdSector1 == $(this).find('IIDSECTOR1').text() ) {
                    _dicSector1Codigo[$(this).find('IIDSECTOR1').text()] = $(this).find('SIDSECTOR1').text();
                    _dicSector1Nombre[$(this).find('IIDSECTOR1').text()] = $(this).find('SSECTOR1').text();
                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}

function cargaListaSector1(){

    //alert('1');
    $('#lvSector1').children().remove('li');


    var v_li = "";

    for(v_id  in _dicSector1Codigo)
    {

        v_li =" <div>";
        v_li +=" <table cellpadding='0' cellspacing='0' border='0' style='width: 100%;table-layout: fixed'>";
        v_li +=" <tr><td style='width:10%;'>"+_dicSector1Codigo[v_id]+"</td>";
        v_li +=" <td style='width:90%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap' >"+_dicSector1Nombre[v_id]+"</td></tr>";
        v_li +=" </table></div>";




        $('#lvSector1').append($('<li/>', {
            'id': "fila_" + v_id
        }).append($('<a/>', {
            'href': '',
            'onclick': "mostrarSector2('"+v_id+"')",
            'data-mini':"true",
            'data-inline':"false",
            'data-role':"button",
            'data-theme':"c",
            'class':"",
            'html': v_li
        })));
    }
    try{
        $('#lvSector1').listview('refresh');
    }
    catch (ex){}
}

function mostrarSector2(p_id){
    _iIdSector1=p_id;
    _sIdSector1=_dicSector1Codigo[p_id];
    _sSector1=_dicSector1Nombre[p_id];

    abrirPagina("pageSector2");

}

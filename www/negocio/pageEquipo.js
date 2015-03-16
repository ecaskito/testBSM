function inicioPageEquipo(){
    _dicEquipoCodigo= {};
    _dicEquipoNombre= {};

    $('#labelEQUIPO_FAMILIA').text(_sIdFamilia+" - "+_sFamilia);
    $('#labelEQUIPO_SUBFAMILIA').text(_sIdSubFamilia+" - "+_sSubFamilia);
    for(v_id  in _dicActivoEquipo) {
        if (_iIdSubFamilia == _dicActivoSubFamilia[v_id]){
            _tempIdEquipo=_dicActivoEquipo[v_id];
            leeXMLEquipo();
        }
    }
    if (_dicEquipoCodigo[_tempIdEquipo]=='##'){

        mostrarElemento1(_tempIdEquipo);
    }
    else{
        cargaListaEquipo();
    }
}

function leeXMLEquipo() {
    $.ajax({
        type: "GET",
        url: "tablas/equipo.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Equipo').each(function () {
                if (_tempIdEquipo == $(this).find('IIDEQUIPO').text() ) {
                    _dicEquipoCodigo[$(this).find('IIDEQUIPO').text()] = $(this).find('SIDEQUIPO').text();
                    _dicEquipoNombre[$(this).find('IIDEQUIPO').text()] = $(this).find('SEQUIPO').text();
                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}

function cargaListaEquipo(){

    //alert('1');
    $('#lvEquipo').children().remove('li');


    var v_li = "";

    for(v_id  in _dicEquipoCodigo)
    {

        v_li =" <div>";
        v_li +=" <table cellpadding='0' cellspacing='0' border='0' style='width: 100%;table-layout: fixed'>";
        v_li +=" <tr><td style='width:10%;'>"+_dicEquipoCodigo[v_id]+"</td>";
        v_li +=" <td style='width:90%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap' >"+_dicEquipoNombre[v_id]+"</td></tr>";
        v_li +=" </table></div>";




        $('#lvEquipo').append($('<li/>', {
            'id': "fila_" + v_id
        }).append($('<a/>', {
            'href': '',
            'onclick': "mostrarElemento1('"+v_id+"')",
            'data-mini':"true",
            'data-inline':"false",
            'data-role':"button",
            'data-theme':"c",
            'class':"",
            'html': v_li
        })));
    }
    try{
        $('#lvEquipo').listview('refresh');
    }
    catch (ex){}
}

function mostrarElemento1(p_id){
    _iIdEquipo=p_id;
    _sIdEquipo=_dicEquipoCodigo[p_id];
    _sEquipo=_dicEquipoNombre[p_id];

    abrirPagina("pageElemento1");

}



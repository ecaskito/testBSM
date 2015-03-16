function inicioPageElemento1(){
    _dicElemento1Codigo= {};
    _dicElemento1Nombre= {};

    $('#labelELEMENTO1_FAMILIA').text(_sIdFamilia+" - "+_sFamilia);
    $('#labelELEMENTO1_SUBFAMILIA').text(_sIdSubFamilia+" - "+_sSubFamilia);
    $('#labelELEMENTO1_EQUIPO').text(_sIdEquipo+" - "+_sEquipo);

    for(v_id  in _dicActivoElemento1) {
        if (_iIdSubFamilia == _dicActivoSubFamilia[v_id]){
            if(_iIdEquipo == _dicActivoEquipo[v_id]){
                _tempIdElemento1=_dicActivoElemento1[v_id];
                leeXMLElemento1();
            }
        }
    }
    if (_dicElemento1Codigo[_tempIdElemento1]=='##'){

        mostrarElemento2(_tempIdElemento1);
    }
    else{
        cargaListaElemento1();
    }
}

function leeXMLElemento1() {
    $.ajax({
        type: "GET",
        url: "tablas/elemento1.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Elemento1').each(function () {
                if (_tempIdElemento1 == $(this).find('IIDELEMENTO1').text() ) {
                    _dicElemento1Codigo[$(this).find('IIDELEMENTO1').text()] = $(this).find('SIDELEMENTO1').text();
                    _dicElemento1Nombre[$(this).find('IIDELEMENTO1').text()] = $(this).find('SELEMENTO1').text();
                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}

function cargaListaElemento1(){

    //alert('1');
    $('#lvElemento1').children().remove('li');


    var v_li = "";

    for(v_id  in _dicElemento1Codigo)
    {

        v_li =" <div>";
        v_li +=" <table cellpadding='0' cellspacing='0' border='0' style='width: 100%;table-layout: fixed'>";
        v_li +=" <tr><td style='width:10%;'>"+_dicElemento1Codigo[v_id]+"</td>";
        v_li +=" <td style='width:90%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap' >"+_dicElemento1Nombre[v_id]+"</td></tr>";
        v_li +=" </table></div>";




        $('#lvElemento1').append($('<li/>', {
            'id': "fila_" + v_id
        }).append($('<a/>', {
            'href': '',
            'onclick': "mostrarElemento2('"+v_id+"')",
            'data-mini':"true",
            'data-inline':"false",
            'data-role':"button",
            'data-theme':"c",
            'class':"",
            'html': v_li
        })));
    }
    try{
        $('#lvElemento1').listview('refresh');
    }
    catch (ex){}
}

function mostrarElemento2(p_id){
    _iIdElemento1=p_id;
    _sIdElemento1=_dicElemento1Codigo[p_id];
    _sElemento1=_dicElemento1Nombre[p_id];

    abrirPagina("pageElemento2");

}




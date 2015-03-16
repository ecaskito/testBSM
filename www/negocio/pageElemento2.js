function inicioPageElemento2(){
    _dicElemento2Codigo= {};
    _dicElemento2Definicion= {};
    _dicElemento2Marca= {};
    _dicElemento2Modelo= {};
    _dicElemento2Foto= {};

    $('#labelELEMENTO2_FAMILIA').text(_sIdFamilia+" - "+_sFamilia);
    $('#labelELEMENTO2_SUBFAMILIA').text(_sIdSubFamilia+" - "+_sSubFamilia);
    $('#labelELEMENTO2_EQUIPO').text(_sIdEquipo+" - "+_sEquipo);
    $('#labelELEMENTO2_ELEMENTO1').text(_sIdElemento1+" - "+_sElemento1);

    for(v_id  in _dicActivoElemento2) {
        if (_iIdSubFamilia == _dicActivoSubFamilia[v_id]){
            if(_iIdEquipo == _dicActivoEquipo[v_id]){
                if(_iIdElemento1 ==_dicActivoElemento1[v_id]){
                    _tempIdElemento2=_dicActivoElemento2[v_id];
                    leeXMLElemento2();
                }
            }
        }
    }

    if (_dicElemento2Codigo[_tempIdElemento2]=='###'){
        mostrarActivo(_tempIdElemento2);
    }
    else {
        cargaListaElemento2();
    }
}

function leeXMLElemento2() {
    $.ajax({
        type: "GET",
        url: "tablas/elemento2.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('Elemento2').each(function () {
                if (_tempIdElemento2 == $(this).find('IIDELEMENTO2').text() ) {
                    _dicElemento2Codigo[$(this).find('IIDELEMENTO2').text()] = $(this).find('SIDELEMENTO2').text();
                    _dicElemento2Definicion[$(this).find('IIDELEMENTO2').text()] = $(this).find('SDEFINICION').text();
                    _dicElemento2Marca[$(this).find('IIDELEMENTO2').text()] = $(this).find('SMARCA').text();
                    _dicElemento2Modelo[$(this).find('IIDELEMENTO2').text()] = $(this).find('SMODELO').text();
                    _dicElemento2Foto[$(this).find('IIDELEMENTO2').text()]="";
                    //_dicElemento2Foto[$(this).find('IIDELEMENTO2').text()] = $(this).find('SELEMENTO2').text();
                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}

function cargaListaElemento2(){

    //alert('1');
    $('#lvElemento2').children().remove('li');


    var v_li = "";

    for(v_id  in _dicElemento2Codigo)
    {

        v_li =" <div>";
        v_li +=" <table cellpadding='0' cellspacing='0' border='0' style='width: 100%;table-layout: fixed'>";
        v_li +=" <tr><td style='width:10%;'>"+_dicElemento2Codigo[v_id]+"</td>";
        v_li +=" <td style='width:90%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap' >"+_dicElemento2Definicion[v_id]+"</td></tr>";
        v_li +=" </table></div>";




        $('#lvElemento2').append($('<li/>', {
            'id': "fila_" + v_id
        }).append($('<a/>', {
            'href': '',
            'onclick': "mostrarActivo('"+v_id+"')",
            'data-mini':"true",
            'data-inline':"false",
            'data-role':"button",
            'data-theme':"c",
            'class':"",
            'html': v_li
        })));
    }
    try{
        $('#lvElemento2').listview('refresh');
    }
    catch (ex){}
}

function mostrarActivo(p_id){
    alert('1');
    _iIdElemento2=p_id;
    alert('2');
    _sIdElemento2=_dicElemento2Codigo[p_id];
    alert('3');
    _sElemento2Definicion=_dicElemento2Definicion[p_id];
    alert('4');
    _sElemento2Marca=_dicElemento2Marca[p_id];
    alert('5');
    _sElemento2Modelo=_dicElemento2Modelo[p_id];
    alert('6');
    _sElemento2Foto=_dicElemento2Foto[p_id];

    alert('7');
    ObtenerActivo();
    alert('8');
    abrirPagina("pageActivo");

}





function inicioPageSubFamilia(){
    _dicSubFamiliaCodigo= {};
    _dicSubFamiliaNombre= {};

    $('#labelSUBFAMILIA_FAMILIA').text(_sIdFamilia+" - "+_sFamilia);
    for(v_id  in _dicActivoSubFamilia) {
        _tempIdSubFamilia=_dicActivoSubFamilia[v_id];
        leeXMLSubFamilia();
    }
    if (_dicSubFamiliaCodigo[_tempIdSubFamilia]=='##'){

        mostrarSector2(_tempIdSubFamilia);
    }
    else{
        cargaListaSubFamilia();
    }
}

function leeXMLSubFamilia() {
    $.ajax({
        type: "GET",
        url: "tablas/subfamilia.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('SubFamilia').each(function () {
                if (_tempIdSubFamilia == $(this).find('IIDSUBFAMILIA').text() ) {
                    _dicSubFamiliaCodigo[$(this).find('IIDSUBFAMILIA').text()] = $(this).find('SIDSUBFAMILIA').text();
                    _dicSubFamiliaNombre[$(this).find('IIDSUBFAMILIA').text()] = $(this).find('SSUBFAMILIA').text();
                }
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}

function cargaListaSubFamilia(){

    //alert('1');
    $('#lvSubFamilia').children().remove('li');


    var v_li = "";

    for(v_id  in _dicSubFamiliaCodigo)
    {

        v_li =" <div>";
        v_li +=" <table cellpadding='0' cellspacing='0' border='0' style='width: 100%;table-layout: fixed'>";
        v_li +=" <tr><td style='width:10%;'>"+_dicSubFamiliaCodigo[v_id]+"</td>";
        v_li +=" <td style='width:90%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap' >"+_dicSubFamiliaNombre[v_id]+"</td></tr>";
        v_li +=" </table></div>";




        $('#lvSubFamilia').append($('<li/>', {
            'id': "fila_" + v_id
        }).append($('<a/>', {
            'href': '',
            'onclick': "mostrarEquipo('"+v_id+"')",
            'data-mini':"true",
            'data-inline':"false",
            'data-role':"button",
            'data-theme':"c",
            'class':"",
            'html': v_li
        })));
    }
    try{
        $('#lvSubFamilia').listview('refresh');
    }
    catch (ex){}
}

function mostrarEquipo(p_id){
    _iIdSubFamilia=p_id;
    _sIdSubFamilia=_dicSubFamiliaCodigo[p_id];
    _sSubFamilia=_dicSubFamiliaNombre[p_id];

    abrirPagina("pageEquipo");

}


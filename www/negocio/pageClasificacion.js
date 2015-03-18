
function inicioPageClasificacion() {

    _dicClasifImagen= {};
    _dicClasifNombre= {};

    leeXMLClasificacion();
    cargaListaClasificacion();
}

function leeXMLClasificacion() {
    $.ajax({
        type: "GET",
        url: "tablas/clasificacioncentro.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('ClasificacionCentro').each(function () {
                _dicClasifImagen[$(this).find('IIDCLASIFICACION').text()] = $(this).find('IMAGEN').text();
                _dicClasifNombre[$(this).find('IIDCLASIFICACION').text()] = $(this).find('SCLASIFICACION').text();
            });
        },
        error: function () {
            mensaje("Error processant arxiu XML","error");
        }, async: false
    });
}

function cargaListaClasificacion() {
    var sTagImg = "";
    var nInd = 0;
    var nIndVis = 0;
    for (v_id in _dicClasifImagen) {
        sTagImg += "<a href='' onclick='" + "mostrarCentros(" + v_id + ")' data-mini='false' data-inline='false' data-role='button' data-theme='c' data-corners='true' data-shadow='true' data-iconshadow='true' data-wrapperels='span' class='ui-btn ui-shadow ui-btn-corner-all ui-fullsize ui-btn-block ui-first-child ui-btn-up-c'>"
        sTagImg += "<img alt='' src='img/"+_dicClasifImagen[v_id]+"' style='width:45px' />"
        sTagImg += "<div>" + _dicClasifNombre[v_id] + "</div>"
        sTagImg += "</a>"
    }
    $('#divTipoInci').html(sTagImg);

};

function mostrarCentros(p_clasif){

    _iIdClasifCentro=p_clasif;
    abrirPagina("pageCentros");
}


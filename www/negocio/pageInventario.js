
function inicioPageInventario(){
    $('#divInventarioTexto').hide();

    if (_sIdActivo ==null || _sIdActivo==""){
        _sInventarioDefinicion="";
        _sInventarioMarca="";
        _sInventarioModelo="";
    }
    else{
        _sInventarioDefinicion=_sElemento2Definicion;
        _sInventarioMarca=_sElemento2Marca;
        _sInventarioModelo=_sElemento2Modelo;
    }

    $('#labelINVENTARIO_SIDUBICACION').text(_sIdUbicacion);
    $('#labelINVENTARIO_SIDACTIVO').text(_sIdActivo);

    $('#labelINVENTARIO_SDEFINICION').text(_sInventarioDefinicion);
    $('#labelINVENTARIO_SMARCA').text(_sInventarioMarca);
    $('#labelINVENTARIO_SMODELO').text(_sInventarioModelo);

    $('#labelINVENTARIO_SNUMSERIE').text(' ');
    $('#labelINVENTARIO_SETIQUETA').text(' ');
    $('#labelINVENTARIO_SDESIGNACION').text(' ');
    $('#labelINVENTARIO_SOBSERVACIONES').text(' ');

}


function EnviarInventario(){

}

function AbrirTexto(p_elemento,p_label){
    _tempInventarioLabelText=p_label;
    _tempInventarioCampoText=p_elemento;

    $('#labelINVENTARIOTEXTO').text(p_elemento);

    var v_texto=$('#'+p_label).val();
    $('#textareaInventario').text(v_texto);

    $('#divInventarioTexto').show();

}


function AceptarTexto(){

    var v_texto=$('#textareaInventario').val();
    $('#'+_tempInventarioLabelText).text(v_texto);
    _tempInventarioLabelText=null;
    _tempInventarioCampoText=null;
    $('#divInventarioTexto').hide();

}

function CancelarTexto(){
    _tempInventarioLabelText=null;
    _tempInventarioCampoText=null;
    $('#textareaInventario').text('');
    $('#divInventarioTexto').hide();

}

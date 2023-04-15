var rut = document.getElementById('rut');
var nombre = document.getElementById('nombre');
var apellido_paterno = document.getElementById('apellido paterno');
var apellido_materno = document.getElementById('apellido_materno');
var fecha_nacimiento = document.getElementById('fecha_nacimiento');
var edad = document.getElementById('edad');
var genero = document.getElementById('genero');
var email = document.getElementById('email');
var celular = document.getElementById('celular');
var profesion = document.getElementById('profesion');
var comentario = document.getElementById('comentario');
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario(){
    console.log ('Enviando formulario');

    var mensajesError=[];

    if(nombre.value===null || nombre.value==='' || nombre.value<2 && nombre.value>21){
        mensajesError.push('Favor ingresa un nombre válido entre 3 y 20 caracteres');
    }

    if(apellido_paterno.value===null || apellido_paterno.value==='' || apellidoP.value<2 && apellidoP.value>21){
        mensajesError.push('Favor ingresa un apellido paterno válido entre 3 y 20 caracteres');
    }

    if(apellido_materno.value===null || apellido_materno.value==='' || apellidoM.value<2 && apellidoM.value>21){
        mensajesError.push('Favor ingresa un apellido materno válido entre 3 y 20 caracteres');
    }

    if(rut.value===null || rut.value==='' || rut.value<8 && rut.value>11){
        mensajesError.push('Favor ingresa un rut válido');
    }
    if(celular.value===null ||celular.value==='' || celular.value<8 && celular.value>13){
        mensajesError.push('Favor ingresa un teléfono válido');
    }
    if(edad.value===null || edad.value==='' || edad.value<17 && edad.value>36){
        mensajesError.push('Favor ingresa una edad entre 18 y 35 años');
    }
    if (fecha_nacimiento.value===null || fecha_nacimiento.value===''){
        mensajesError.push('Favor ingresa tu fecha de nacimiento');
    }
    if (genero.value===null || genero.value===''){
        mensajesError.push('Favor ingresa el género con el que te identificas');
    }
    if (email.value===null || email.value===''){
        mensajesError.push('Favor ingresa tu correo');
    }
    if (profesion.value===null || profesion.value===''){
        mensajesError.push('Favor ingresa tu profesión');
    }
    if (comentario.value===null || comentario.value===''){
        mensajesError.push('Favor ingresa tu motivación para ser parte del equipo');
    }


    error.innerHTML = mensajesError.join('<br>');

    






    return false;




}
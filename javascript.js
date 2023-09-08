function validarForma (formulario){ // formulario reemplaza a THIS
    var usuario = formulario.usuario 
 if (usuario.value==" " || usuario.value== "Escribir usuario"){
alert("Debe proporcionar un nombre de usuario")
usuario.focus();
usuario.select();
return false ;
 }

var password = formulario.password
if (password.value == " " || password.value.lenght <3){
    alert ("Debes proporcionar una contraseña mayor a 3 digitos ")
    password.focus(); // FOCUS apunta una direccion
    password.select(); // selecciona una direccion
return false;
}

var tecnologia = formulario.tecnologia 
for (i=0 ; i< tecnologia.lenght; i++){
    if (tecnologia[i], checked){ //estudiar esto ...
        sheckseleccion = true 
    }
} 
if (!checkseleccion ){ //entender que es el if 
    alert ("Debe selccioonar una tecnologia ");
    return false;

}
 var genero = formulario.genero ;
 var radioseleccion = false;

 for(i=0; i< genero.lenght; i++){ // entender que es el for
    if (genero[i].checked){
    radioseleccion = true 
 }
}

 if (!radioseleccion){
    alert ("debe selecionar un genero");

 }
 var ocupacion = formulario.ocupacion
 if(ocupacion.value = ""){
    alert ("debe seleccionar la ocupacion");
    return false;

 }

 alert ("formulario valido , enviados datos al servicio ");
 return true;
}
$(document).on("ready",inicio);
function inicio(){
	$("#dialogo").dialog({
		autoOpen: false,
		height:400,
		width:300,
		modal:true,
		buttons:{
			"Crear Usuario": function(){
								
				enviar($("#formulario").serialize());
								
				$(this).dialog("close");
			},
			Cancel: function(){
				$(this).dialog("close");
			}
		}
	});

	$("#addUsr").on('click',abredialogo);
	function abredialogo(){
		$('#dialogo').dialog('open');
	}

}

function enviar(datos){
	var url ="crearUsuario.php";
	alert(datos);
	$.ajax({
		type: "POST",
		url: "crearUsuario.php",
		data: $("#formulario").serialize(),
		success: llegadaDatos,
		timeout: 4000,
		error: problemas
	});
}
function llegadaDatos(datos){

	alert("exito!!!");
	/*$("#users tbody").append("<tr>"+
		"<td>"+$("#nombre").val()+"</td>"+
		"<td>"+$("#puesto").val()+"</td>"+
		"<td>"+$("#nickname").val()+"</td>"+
		"<td>"+$("#status").val()+"</td>"+
		"<td><button class='btn btn-default btn-xs'>Editar</button></td>"+
		"<tr>");*/
}

function problemas(){
	alert("error");
}
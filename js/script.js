function valida_dados()
 {
	//NOME

    var valNome = document.getElementById("nomeremetente").value;
    if(valNome != "" && valNome != null)
    {
        document.getElementById("erroNome").innerHTML= "";
        document.getElementById("nomeremetente").style.backgroundColor= "while";
        if (valNome.length <3)
        {
            document.getElementById("erroNome").innerHTML= "Too short";
        }
    } else
    {
        document.getElementById("erroNome").innerHTML= "Required Field"
        document.getElementById("nomeremetente").style.backgroundColor="transparent";

    }


	//E-MAIL

	var valEmail = document.getElementById("emailremetente").value;
    if(valEmail != "" && valEmail != null)
    {
        document.getElementById("erroEmail").innerHTML= "";
        document.getElementById("emailremetente").style.backgroundColor= "white";
        if (valEmail.length <3)
        {
            document.getElementById("erroEmail").innerHTML= "Too short";
        }
    } else
    {
        document.getElementById("erroEmail").innerHTML= "E-mail Field"
        document.getElementById("emailremetente").style.backgroundColor= "#ccc";

    }


	//TELEFONE
	var valTelefone = document.getElementById("telefone").value;
	if (valTelefone != "" && valTelefone != null)
	{
		document.getElementById("erroTelefone").innerHTML="";
		document.getElementById("telefone").style.backgroundColor="white";
		if (valTelefone.length <3)
		{
			document.getElementById("erroTelefone").innerHTML="Too short";
		}
	}else
	{
		document.getElementById("erroTelefone").innerHTML="Phone or Celphone required";
		document.getElementById("telefone").style.backgroundColor="#ccc";

	}


	//MENSAGEM
	var valMensagem = document.getElementById("mensagem").value;
	if(valMensagem != "" && valMensagem != null)
	{
		document.getElementById("erroMensagem").innerHTML="";
		document.getElementById("mensagem").style.backgroundColor="white";
		if(valMensagem.length <4)
		{
			document.getElementById("erroMensagem").innerHTML="Texto curto";
		}
	}else
	{
	  document.getElementById("erroMensagem").innerHTML="Mensage required";
	  document.getElementById("mensagem").style.backgroundColor="#ccc";
	  return false

	}

}


function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
	v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

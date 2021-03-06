//alerts personalizados bootstrap
//tipos de alerts:
//SUCCESS, WARNING, DANGER, INFO, QUIMICAMENTE
//como usar:
//msg('tipo do alerta', 'texto do alerta');
function msg(alerta, texto) {
     var resposta = '';
     $("#alerta").empty();

     if (alerta === 'success') {
       resposta = "<div class='alert alert-success' role='alert'>" +
         "<button type='button' class='close' data-dismiss='alert' class='close'>&times;</button>" +
         texto + "</div>";
     } 
	 else if (alerta === 'warning') {
       resposta = "<div class='alert alert-warning' role='alert'>" +
         "<button type='button' class='close' data-dismiss='alert' class='close'>&times;</button>" +
         texto + "</div>";
     } 
	 else if (alerta === 'danger') {
       resposta = "<div class='alert alert-danger' role='alert'>" +
         "<button type='button' class='close' data-dismiss='alert' class='close'>&times;</button>" +
         texto + "</div>";
     }
	 else if(alerta === 'info'){
		resposta = "<div class='alert alert-info' role='alert'>" +
         "<button type='button' class='close' data-dismiss='alert' class='close'>&times;</button>" +
         texto + "</div>";
	 }
	 else if(alerta === 'quimicamente'){
		resposta = "<div class='alert alert-quimicamente' role='alert'>" +
         "<button type='button' class='close' data-dismiss='alert' class='close'>&times;</button>" +
         texto + "</div>";
	 }

     $("#alerta").append(resposta);

     $(".alert").click(function() {
       $(".alert").hide();
     });
}
//Login
function faz_login(){
	var email = $("#txtEmail").val();
	var senha = $("#txtSenha").val();
	$.ajax({
	  type: 'post',
	  url: 'CONTROL.php',
	  data: {
		action:"login", email:email, senha:senha
	  },
	  success: function (response) {
		if (response.indexOf("logged") >= 0){
			msg('success', '<b> Sucesso </b> ao efetuar o Login.');
			setTimeout('window.location="MODEL/teste.php"', 5000);
			//window.location="teste.php";
			//alert('SPFC');
		}
		else if (response.indexOf("errAlreadyLogged") >= 0){ 
			msg('danger', '<b> Erro </b> ao efetuar o Login, ainda existe uma sessão aberta.');
			//Alert.error('<button type="button" class="close" data-dismiss="alertError" class="close">&times;</button> <b> Erro </b> ao efetuar o Login.');
			//document.getElementById('alertError').style.display = "block";
			//document.getElementById('alertError').innerHTML = '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> <b> Erro: </b> Erro ao efetuar o Login.';
			//document.getElementById('54546544565465').innerHTML = "dsaçdkçldskaç";
			//mensagem2(response);
			//alert('COR');
		}
		else if (response.indexOf("errInvalidCredentials") >= 0){ 
			msg('danger', '<b> Erro </b> Usuário ou senha incorretos.');
		}
		else{
			msg('warning', '<b> Atenção </b> Tente novamente mais tarde');
		}
	  },
	  error: function(XMLHttpRequest, textStatus, errorThrown) { 
		var erro = ("Um erro ocorreu. Tente novamente mais tarde." + errorThrown); 
		msg('warning', erro);
	  }
	 });
	return false;
}

//Cadastro
function Cadastro(){
	var nome = $("#nome").val();
	var senha = $("#senha").val();
	var conf_senha = $("#conf_senha").val();
		$.ajax({
	  type: 'post',
	  url: 'cadastro.php',
	  data: {
		nome:nome, senha:senha, conf_senha:conf_senha
	  },
	  success: function (response) {
		if (response.indexOf("Cadastro realizado com sucesso.") >= 0){
			Alert.render(response);
			location.reload();
		}
		else if (response.indexOf("Usuário já cadastrado.") >= 0){ 
			Alert.error("Atenção: "+response);
		}
		else if (response.indexOf("As senhas não conferem!") >= 0){ 
			Alert.error("Atenção: "+response);
		}
		else if (response.indexOf("Senha muito curta.") >= 0){ 
			Alert.error("Atenção: "+response);
		}
		else{
			Alert.error("Atenção: Tente novamente mais tarde.");
		}
	  },
	  error: function(XMLHttpRequest, textStatus, errorThrown) { 
		Alert.error("Um erro ocorreu. Tente novamente mais tarde. " + errorThrown); 
	  }
	 });
	return false;
}

//Mensagem de erro personalizada
function CustomAlert(){
	//Mensagem de erro
    this.error = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('alertError').innerHTML = dialog;
		setTimeout("limpa()", 2000);
    }
	//Mensagem ok
	this.render = function(dialog){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxbody').style.color = "#aaa";
		document.getElementById('dialogboxbody').style.borderRadius = "7px";
		document.getElementById('dialogboxbody').style.border = "1px solid grey";
		//setTimeout(limpa(), 3000);
    }
}
var Alert = new CustomAlert();

function limpa(){
		document.getElementById('dialogboxbody').innerHTML = "";
		document.getElementById('dialogboxbody').style.color = "";
		document.getElementById('dialogboxbody').style.borderRadius = "";
		document.getElementById('dialogboxbody').style.border = "";
}

//Validar Login
function ValidarLogin(strLogin,strSenha)
{
//linha de debug
//alert("Login " + strLogin + "\n" + "Senha: " + strSenha);
     if (strLogin == "")
      { 
         response = "Preencha o campo Login.";
		 Alert.error("Atenção: "+response);
		 document.frmLogin.login.focus();
		 return false;
      }
     else if (strSenha == "")
      { 
         response = "Preencha o campo Senha.";
		 Alert.error("Atenção: "+response);
		 document.frmLogin.senha.focus();
		 return false;
      }
     else 
      { 
        return true;
      }
}

//Função loading
/* DESENVOLVIDO POR FERNANDO NETO (Merece seus devidos créditos em nosso tcc)*/
$(document).ready(function(){
		// ESCONDE O CONTEUDO
		$('div#mae').hide(); 
		// DAR O EFEITO ... E MUDA DE COR
		function loadProgress(){ 
			var atribuicao = "div#loading span";
			var loadRet = setInterval(function(){$(atribuicao).append('');}, 500);
			var cor     = setInterval(function(){$("div#loading").css('color','#777');}, 500);
			setInterval(function(){
			clearInterval(loadRet);
			clearInterval(cor);
			$(atribuicao).html('')
			$("div#loading").css('color','#000');
			}, 2000);
		}
		loadProgress();
		setInterval(loadProgress, 0);
		
		
// MOSTRA O CONTEUDO QUANDO O SITE FOR CARREGADO POR COMPLETO
$(window).load(function(){
	$('div#loading').fadeOut();
	$('div#mae').fadeIn();
});

});

//Voltar ao topo
$(document).ready(function(){
    // hide #back-top first
    $('#backtopo').hide();
       
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('#backtopo').fadeIn();
            } else {
                $('#backtopo').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#backtopo').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

		$('.click-scroll').click(function () {
			$('html, body').animate({
				scrollTop: $("#title").offset().top
				}, 800); // Tempo em ms que a animação irá durar
		});
    });

});

//Mascara para o campo data
function mascaraData( campo, e )
{
	var kC = (document.all) ? event.keyCode : e.keyCode;
	var data = campo.value;
	
	if( kC!=8 && kC!=46 )
	{
		if( data.length==2 )
		{
			campo.value = data += '/';
		}
		else if( data.length==5 )
		{
			campo.value = data += '/';
		}
		else
			campo.value = data;
	}
}

//Apenas letras
function letras(){
	tecla = event.keyCode;
	if (tecla >= 48 && tecla <= 57){
	    return false;
	}else{
	   return true;
	}
}

//Apenas números
function numeros(){
	tecla = event.keyCode;
	if (tecla >= 48 && tecla <= 57){
	    return true;
	}else{
	   return false;
	}
}

//verifica senha
function verifica_senha() {
	senha = document.getElementById("senha").value;
	barra_forca = document.getElementById("barra_forca");
	forca = 0;
	if(senha.length < 6){
		forca += 0;
	}else if((senha.length >= 6) && (senha.length < 8)){
		forca += 10;
	}else {
		forca += 25;
	}
	if(senha.length >= 6){ //sÃ³ vai avaliar a senha se jÃ¡ tiver 6+ caracteres
		if(senha.match(/[a-z]+/)){ //letras minÃºsculas (uma ou mais)
			forca += 10;
		}
		if(senha.match(/[A-Z]+/)){ //letras maiÃºsculas (uma ou mais)
			forca += 20;
		}
		if(senha.match(/[0-9]+/)){ //dÃ­gitos (um ou mais)
			forca += 20;
		}
		if(senha.match(/.[!@#$%^&*?_~]+/)){ //caracteres especiais (um ou mais)
			forca += 25;
		}
	}
	//mostra_forca.innerHTML = "forÃ§a: " + forca;
	if(forca == 0){
		barra_forca.style.backgroundColor = "#000";
	}else if((forca > 0) && (forca < 30)){
		barra_forca.style.backgroundColor = "#B20000";
	}else if((forca >= 30) && (forca < 60)){
		barra_forca.style.backgroundColor = "#FF9900";
	}else if((forca >= 60) && (forca < 85)){
		barra_forca.style.backgroundColor = "#99CC00";
	}else{
		barra_forca.style.backgroundColor = "#009900";
	}
	var w = forca*0.99; //daquele jeito
	if (w==0) w=3;
	barra_forca.style.width = w+"%";
}
//Função menu lateral
jQuery(document).ready(function() {
		jQuery('ul.form li a').click(
			function(e) {
				e.preventDefault(); // prevent the default action
				e.stopPropagation; // stop the click from bubbling
				jQuery(this).closest('ul').find('.selected').removeClass('selected');
				jQuery(this).parent().addClass('selected');
			});
});
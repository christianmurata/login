<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="../css/style.css"/>
	<link rel="stylesheet" href="../css/css_form.css"/>
	<link rel="stylesheet" href="../css/hover.css">
	<link rel="stylesheet" href="../css/elements.css"/>
	<link rel="stylesheet" href="../assets/bootstrap/css/bootstrap.css">
	<link rel="stylesheet" href="../assets/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="../assets/css/style.css">
	<script type="text/javascript" src="../js/java.js"></script>
	<script type="text/javascript" src="../js/jquery.js"></script>
	<script type="text/javascript" src="../js/ajax.js"></script>
	<link rel="shortcut icon" href="../images/logo.ico">
	<title> Cadastro | Quimicamente </title>
</head>
<body>
	<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a href="#"><img id="img" src="../imagens/logoQuim.png"/></a>
				</div>
				<div id="navbar" class="navbar-collapse collapse navbar-right">
					<ul class="nav navbar-nav navbar-text">
						<li><a href="index.html" class="menu">Home</a></li>
						<li><a href="sobre.html" class="menu">Sobre</a></li>
						<li><a href="cadastro.html" class="menu ativo">Cadastro</a></li>
						<li><a href="login.php" class="menu">Login </a></li>
					</ul>
				</div><!--/.nav-collapse -->
			</div>
		</nav>
		<!-- Bootstrap core JavaScript
		================================================== -->
		<script src="../js/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
		<script src="../js/bootstrap.min.js"></script>
	<!--Corpo da página-->
	<section id="cadastro">
		<div id="alerta"></div>
		<form role="form" action="" method="POST" class="f1" onsubmit="return Cadastro();">
			<center>
				<div class="f1-steps">
															<div class="f1-progress">
																<div class="f1-progress-line" data-now-value="16.66" data-number-of-steps="3" style="width: 16.66%;"></div>
															</div>
															<div class="f1-step active">
																<div class="f1-step-icon"><i class="fa fa-user"></i></div>
																<h4>Dados Pessoais</h4>
															</div>
															<div class="f1-step">
																<div class="f1-step-icon"><i class="fa fa-key"></i></div>
																<h4>Conta</h4>
															</div>
															<div class="f1-step">
																<div class="f1-step-icon"><i class="fa fa-check-square-o"></i></div>
																<h4>termos e condições</h4>
															</div>
					</div><!--f1-steps--><br>
					<div class="panel panel-default">
							<!--<div class="panel-heading">
								<h1> Cadastro </h1>
							</div>-->
							<div class="panel-body">
								<br><br><br>
								<div class="container">
									<div class="col-md-5">
										<div id="tipo">
											<h2> Crie uma conta gratuitamente</h2><br>
											<p> Ao se cadastrar você terá acesso a todos os conteúdos do site</p><br><br>
											<div class="form-group" align="left">
													<input type="radio" id="priority" name="tipo" onclick="pagina(3)">
													<label for="priority"><p> Aluno </p> </label>
											</div>
											<div class="form-group" align="left">
													<input type="radio" id="priority2" name="tipo" onclick="pagina(2)">
													<label for="priority2"><p> Professor </p> </label><br>
											</div>
										</div>
									</div>
									<div class="col-md-7">
										<div id="form">
											
										</div><!--form-->
									</div>
								</div><!--container-->
								<br><br><br><br>
								<p>*O cadastro é gratuito e da direito de acesso a todos os conteúdos do site. </p>
							</div><!--panel-body-->
						</div><!--panel-->
				<!-- Javascript -->
				<script src="../assets/js/jquery-1.11.1.min.js"></script>
				<script src="../assets/bootstrap/js/bootstrap.min.js"></script>
				<script src="../assets/js/jquery.backstretch.min.js"></script>
				<script src="../assets/js/retina-1.1.0.min.js"></script>
				<script src="../assets/js/scripts.js"></script>
				<script> 
					if(document.getElementById("priority").checked==false  && document.getElementById("priority2").checked==false){
						$("#form").load("usuario.php");
						document.getElementById("priority").checked = true;
					}
				</script>
			</center>
		</form>
	</section>
	<!---->
	<footer id="footer" class="hidden-xs">
	<ul class="icons">
						<li><a href="https://www.facebook.com/cti.unesp.bauru/?fref=ts" target="_blank">Facebook</a><br></li>
						<li><a href="http://quarkztech.blogspot.com.br" target="_blank">Blog dos Desenvolvedores</a></li>
						<li><a href="http://www.cti.feb.unesp.br/" target="_blank">Site do CTI</a></li>
					<br><br>
						<li><a href="https://www.facebook.com/quarkzQuimicamente" target="_blank"><img src="../images/ico_face.png" width="50" /></a></li>
						<li><img src="../imagens/ico_twitter.png" width="50" /></li>
						<li><img src="../imagens/ico_blog.png" width="50"/></li>
						<li><img src="../imagens/ico_link.png" width="50" /></li>
	</ul>
		<div class="container">
					<ul class="copyright">
						<li>&copy; 2017 Quimicamente </li>
						<li>Desenvolvido por: Quarkz Technology </li> 
					</ul>
		</div>
	</footer>
	<footer id="footer" class="visible-xs">
		<ul class="copyright">
				<li>Desenvolvido por: Quarkz Technology </li> 
		</ul>
	</footer>
	
</body>
</html>
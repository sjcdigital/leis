!function(){"use strict";angular.module("lawsApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap","mgcrea.ngStrap","angular-input-stars"]).directive("loading",["$http",function(a){return{restrict:"A",link:function(t,i,s){t.isLoading=function(){return a.pendingRequests.length>0},t.$watch(t.isLoading,function(a){a?i.removeAttr("style"):i.attr("style","display:none")})}}}])}(),function(){"use strict";angular.module("lawsApp").config(["$stateProvider",function(a){a.state("politician",{url:"/politicos",templateUrl:"app/politician/list/politician.html",controller:"PoliticianCtrl"})}])}(),function(){"use strict";angular.module("lawsApp").controller("PoliticianCtrl",["$scope","$http","URI","TOTAL_ITENS",function(a,t,i,s){function o(){t.get(i+"autores?total="+a.totalPorPg+"&pg="+(a.pgAtual-1)).success(function(t,i,o){a.politicians=t,a.totalItens=o(s)}).error(function(a,t,i){console.log(a)})}a.totalPorPg=9,a.pgAtual=1,o(),a.pageChanged=function(){o()}}])}(),function(){"use strict";angular.module("lawsApp").config(["$stateProvider",function(a){a.state("politicanDetails",{url:"/politicos/:idItem",templateUrl:"app/politician/details/politicanDetails.html",controller:"PoliticanDetailsCtrl"})}])}(),function(){"use strict";angular.module("lawsApp").controller("PoliticanDetailsCtrl",["$scope","$http","$stateParams","URI","TOTAL_ITENS",function(a,t,i,s,o){function e(e){e="undefined"!=typeof e&&e?e:1;var l=s+"leis/filtra?total="+a.totalPorPg+"&pg="+(e-1)+"&idAutor="+i.idItem;l="undefined"!=typeof a.filtro.situacao.id&&a.filtro.situacao.id?l+"&idSituacao="+a.filtro.situacao.id:l,l="undefined"!=typeof a.filtro.classe.id&&a.filtro.classe.id?l+"&idClasse="+a.filtro.classe.id:l,l="undefined"!=typeof a.filtro.tipo.id&&a.filtro.tipo.id?l+"&idTipo="+a.filtro.tipo.id:l,l="undefined"!=typeof a.filtro.ano&&a.filtro.ano?l+"&ano="+a.filtro.ano.ano:l,t.get(l).success(function(t,i,s){a.laws=t,a.totalItens=s(o)}).error(function(a,t,i){console.log(a)})}function l(){t.get(s+"leis/anos?idAutor="+i.idItem).success(function(t){a.anos=t}).error(function(a){console.log(a)}),t.get(s+"tipo").success(function(t){a.tipos=t}).error(function(a){console.log(a)}),t.get(s+"situacao-simplificada").success(function(t){a.situacoes=t}).error(function(a){console.log(a)}),t.get(s+"classe").success(function(t){a.classes=t}).error(function(a){console.log(a)})}function n(a,t,i){var s=[];angular.forEach(a,function(a){s.push({data:[a.valor],name:a.label})}),Highcharts.chart(t.nomeChart,{chart:{type:"column"},title:{text:t.titulo},subtitle:{text:t.subtitle},xAxis:{categories:[i]},yAxis:{min:0,title:{text:"Quantidade"}},series:s})}i.idItem?(a.totalPorPg=10,a.filtro={situacao:{},classe:{},tipo:{},ano:null},e(),l(),a.tipoChart={nomeChart:"tipo_chart",titulo:"Tipo x Quantidade",subtitle:"Mostra a quantidade de documentos agrupados por tipo"},a.situacaoChart={nomeChart:"situacao_chart",titulo:"Situação x Quantidade",subtitle:"Mostra a quantidade de documentos agrupados por situação"},a.classificacao={nomeChart:"classificacao_tipo",titulo:"Classificação x Quantidade",subtitle:"Mostra a quantidade de documentos agrupados por situação"},Highcharts.setOptions({lang:{decimalPoint:",",thousandsSep:".",numericSymbols:[" mil"," milhões"," bilhões","T","P","E"]}}),t.get(s+"autores/"+i.idItem).success(function(t){a.politicians=t}).error(function(a){console.log(a)}),a.filtrar=function(){e()},a.limpar=function(){a.filtro={situacao:{},classe:{},tipo:{},ano:null},e()},a.pageChanged=function(a){e(a)},t.get(s+"autores/"+i.idItem+"/grafico").success(function(t){n(t.leisChart.tipo,a.tipoChart,"Tipo"),n(t.leisChart.situacao,a.situacaoChart,"Situação"),n(t.leisChart.classe,a.classificacao,"Classificação")}).error(function(a){console.log(a)})):console.log("tratar")}])}(),function(){"use strict";angular.module("lawsApp").config(["$stateProvider",function(a){a.state("laws",{url:"/leis",templateUrl:"app/laws/list/laws.html",controller:"LawsCtrl"}).state("laws-alderman",{url:"/politicos/:name/leis",templateUrl:"app/laws/list/laws.html",controller:"LawsCtrl"})}])}(),function(){"use strict";angular.module("lawsApp").controller("LawsCtrl",["$scope","$http","$stateParams","URI","TOTAL_ITENS",function(a,t,i,s,o){function e(){t.get(s+"leis/anos").success(function(t){a.anos=t}).error(function(a){console.log(a)}),t.get(s+"tipo").success(function(t){a.tipos=t}).error(function(a){console.log(a)}),t.get(s+"situacao-simplificada").success(function(t){a.situacoes=t}).error(function(a){console.log(a)}),t.get(s+"classe").success(function(t){a.classes=t}).error(function(a){console.log(a)})}function l(){var i=s+"leis/filtra?total="+a.totalPorPg+"&pg="+(a.pgAtual-1);i="undefined"!=typeof a.filtro.situacao.id&&a.filtro.situacao.id?i+"&idSituacao="+a.filtro.situacao.id:i,i="undefined"!=typeof a.filtro.classe.id&&a.filtro.classe.id?i+"&idClasse="+a.filtro.classe.id:i,i="undefined"!=typeof a.filtro.tipo.id&&a.filtro.tipo.id?i+"&idTipo="+a.filtro.tipo.id:i,i="undefined"!=typeof a.filtro.ano&&a.filtro.ano?i+"&ano="+a.filtro.ano.ano:i,t.get(i).success(function(t,i,s){a.laws=t,a.totalItens=s(o),a.lawOrder="id"}).error(function(a,t,i){console.log(a)})}a.totalPorPg=10,a.pgAtual=1,a.direction="desc",a.filtro={situacao:{},classe:{},tipo:{},ano:null},e(),l(),a.filtrar=function(){l()},a.limpar=function(){a.filtro={situacao:{},classe:{},tipo:{},ano:null},l()},a.pageChanged=function(){l()}}])}(),function(){"use strict";angular.module("lawsApp").config(["$stateProvider",function(a){a.state("lawDetails",{url:"/leis/:id",templateUrl:"app/laws/details/lawDetails.html",controller:"LawDetailsCtrl"})}])}(),function(){"use strict";angular.module("lawsApp").controller("LawDetailsCtrl",["$scope","$http","$stateParams","URI",function(a,t,i,s){a.alert={show:!1,type:"",message:""},i.id&&t.get(s+"leis/"+i.id).success(function(t){a.law=t}).error(function(a){console.log(a)}),a.clickRating=function(t){Number.isInteger(t)&&t>0&&6>t&&a.vote(t)},a.vote=function(o){t.put(s+"leis/"+i.id+"/vota?rating="+o).success(function(t){a.law=t,a.alert={show:!0,type:"success",message:"Voto computado!"}}).error(function(t){console.log(t),a.alert={show:!0,type:"danger",message:t.mensagem}})},a.close=function(){a.alert={show:!1,type:"",message:""},a.law.rating=0}}])}(),function(){"use strict";function a(){function a(){}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return t}angular.module("lawsApp").directive("acmeNavbar",a)}(),function(){"use strict";angular.module("lawsApp").config(["$stateProvider",function(a){a.state("termos",{url:"/entenda-os-termos",templateUrl:"app/terms/terms.html",controller:"TermsCtrl"})}])}(),function(){"use strict";angular.module("lawsApp").controller("TermsCtrl",["$scope","$http","$stateParams","URI",function(a,t,i,s){t.get(s+"tipo").success(function(t){a.tipos=t}).error(function(a){console.log(a)}),t.get(s+"situacao-simplificada").success(function(t){a.situacoes=t}).error(function(a){console.log(a)}),t.get(s+"classe").success(function(t){a.classes=t}).error(function(a){console.log(a)})}])}(),function(){"use strict";angular.module("lawsApp").config(["$stateProvider",function(a){a.state("ranking",{url:"/ranking",templateUrl:"app/ranking/ranking.html",controller:"RankingCtrl"})}])}(),function(){"use strict";angular.module("lawsApp").controller("RankingCtrl",["$scope","$http","$stateParams","URI",function(a,t,i,s){function o(a,t,i){var s=[];angular.forEach(a,function(a){s.push({data:[a.valor],name:a.label})}),Highcharts.chart(t.nomeChart,{chart:{type:"column"},title:{text:t.titulo},subtitle:{text:t.subtitle},xAxis:{categories:[i]},yAxis:{min:0,title:{text:"Quantidade"}},series:s})}a.tipoChart={nomeChart:"tipo_chart",titulo:"Tipo x Quantidade",subtitle:"Mostra a quantidade de documentos agrupados por tipo"},a.situacaoChart={nomeChart:"situacao_chart",titulo:"Situação x Quantidade",subtitle:"Mostra a quantidade de documentos agrupados por situação"},a.classificacao={nomeChart:"classificacao_tipo",titulo:"Classificação x Quantidade",subtitle:"Mostra a quantidade de documentos agrupados por situação"},Highcharts.setOptions({lang:{decimalPoint:",",thousandsSep:".",numericSymbols:[" mil"," milhões"," bilhões","T","P","E"]}}),t.get(s+"leis/grafico").success(function(t){a.dataChart=t,o(t.tipo,a.tipoChart,"Tipo"),o(t.situacao,a.situacaoChart,"Situação"),o(t.classe,a.classificacao,"Classificação")}).error(function(a){console.log(a)})}])}(),function(){"use strict";function a(){}angular.module("lawsApp").controller("MainController",a)}(),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("lawsApp").run(a)}(),function(){"use strict";function a(a,t){a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("lawsApp").config(a)}(),function(){"use strict";angular.module("lawsApp").constant("moment",moment).constant("TOTAL_ITENS","TOTAL_ITENS").constant("URI","http://104.131.106.85:8080/api/v2/")}(),function(){"use strict";function a(a){a.debugEnabled(!0)}a.$inject=["$logProvider"],angular.module("lawsApp").config(a)}(),angular.module("lawsApp").run(["$templateCache",function(a){a.put("app/main/main.html",'<div class="container"><div><acme-navbar></acme-navbar></div></div><header><div class="container"><div class="row"><div class="col-lg-12"><img class="img-responsive" src="assets/images/profile.png" alt=""><div class="intro-text"><span class="name">Monitor Legislativo</span><div class="col-md-6"><a href="https://twitter.com/share" class="twitter-share-button" data-via="MonitorLegSJC" data-size="small" data-hashtags="monitorLegislativoSJC">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script></div><div class="col-md-6"><div class="fb-like" data-href="https://www.facebook.com/Monitor-Legislativo-S&#xe3;o-Jos&#xe9;-dos-Campos-443593182709156/" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="true"></div></div><br><hr class="star-light"><span class="skills">Acesse todas as leis municipais de São José dos Campos de forma descomplicada.</span></div></div></div></div></header><section id="portfolio"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>Participe!</h2><hr class="star-primary"></div></div><div class="row"><div class="col-sm-4 portfolio-item"><a href="#portfolioModal1" class="portfolio-link" data-toggle="modal"><div class="caption"><div class="caption-content"><i class="fa fa-search-plus fa-3x"></i><h3>Analise o Ranking do legislativo</h3></div></div><img src="assets/images/01.jpg" class="img-responsive" alt=""></a></div><div class="col-sm-4 portfolio-item"><a href="#portfolioModal2" class="portfolio-link" data-toggle="modal"><div class="caption"><div class="caption-content"><i class="fa fa-search-plus fa-3x"></i><h3>Analise a listagem das leis</h3></div></div><img src="assets/images/02.jpg" class="img-responsive" alt=""></a></div><div class="col-sm-4 portfolio-item"><a href="#portfolioModal3" class="portfolio-link" data-toggle="modal"><div class="caption"><div class="caption-content"><i class="fa fa-search-plus fa-3x"></i><h3>Analise o perfil dos Políticos</h3></div></div><img src="assets/images/03.jpg" class="img-responsive" alt=""></a></div></div></div></section><section class="success" id="about"><div class="container"><div class="row"><div class="col-lg-12 text-center"><h2>Sobre</h2><hr class="star-light"></div></div><div class="row"><div class="col-lg-4 col-lg-offset-2"><p>Quantos projetos de lei foram criados no período de 2012 a 2016 pelo vereador X? Quantos desses projetos foram nomes de rua ou tiveram uma relevância significativa na melhoria da comunidade? Qual foi o vereador que mais criou projetos de leis relevantes? O objetivo do monitor legislativo é tentar responder algumas dessas perguntas e fazer com que as pessoas sejam mais engajadas na vida política de São José dos Campos.</p></div><div class="col-lg-4"><p>Sabemos que esses dados não são os únicos a se levar em consideração quanto a análise da qualidade do legislativo, mas iniciativas como essa já são um grande passo em direção ao esclarecimento das nossas dúvidas! Nossos sistemas são de código-aberto o que permite que você possa contribuir, estudar, modificar, copiar sem nenhuma restrição, além dos dados, que são fornecidos diretamente através de uma <a href="https://github.com/sjcdigital/temis-api" target="_blank">API</a></p></div><div class="col-lg-8 col-lg-offset-2 text-center"><a href="https://github.com/sjcdigital/leis" target="_blank" class="btn btn-lg btn-outline"><i class="fa fa-download"></i> Acesse nosso Github</a></div></div></div></section>'),a.put("app/ranking/ranking.html",'<div class="col-md-12"><br><div class="container"><header ng-include="\'app/components/navbar/navbar.html\'"></header><div class="row"><div class="col-md-12"><div class="panel panel-default"><div class="panel-heading">Por Tipo</div><div class="panel-body"><div class="col-md-12"><div id="{{tipoChart.nomeChart}}">Placeholder for chart</div></div><div class="col-md-12"><table class="table table-hover"><caption>Dados Tipo</caption><thead><tr><th>Nome</th><th>Valor</th></tr></thead><tbody><tr ng-repeat="data in dataChart.tipo"><td>{{data.label}}</td><td>{{data.valor}}</td></tr></tbody></table></div></div></div></div></div><br><div class="row"><div class="col-md-12"><div class="panel panel-default"><div class="panel-heading">Por Situação</div><div class="panel-body"><div class="col-md-12"><div id="{{situacaoChart.nomeChart}}">Placeholder for chart</div></div><div class="col-md-12"><table class="table table-hover"><caption>Dados Tipo</caption><thead><tr><th>Nome</th><th>Valor</th></tr></thead><tbody><tr ng-repeat="data in dataChart.situacao"><td>{{data.label}}</td><td>{{data.valor}}</td></tr></tbody></table></div></div></div></div></div><br><div class="row"><div class="col-md-12"><div class="panel panel-default"><div class="panel-heading">Por Classificação</div><div class="panel-body"><div class="col-md-12"><div id="{{classificacao.nomeChart}}">Placeholder for chart</div></div><div class="col-md-12"><table class="table table-hover"><caption>Dados Tipo</caption><thead><tr><th>Nome</th><th>Valor</th></tr></thead><tbody><tr ng-repeat="data in dataChart.classe"><td>{{data.label}}</td><td>{{data.valor}}</td></tr></tbody></table></div></div></div></div></div></div></div>'),a.put("app/terms/terms.html",'<div class="col-md-12"><br><div class="container"><header ng-include="\'app/components/navbar/navbar.html\'"></header><div class="row"><div class="col-md-12"><table class="table table-hover"><caption>Termos Tipos</caption><thead><tr><th>Termo</th><th>Descrição</th></tr></thead><tbody><tr ng-repeat="tipo in tipos"><td>{{::tipo.nome}}</td><td>{{::tipo.descricao}}</td></tr></tbody></table><table class="table table-hover"><caption>Termos Situação</caption><thead><tr><th>Termo</th><th>Descrição</th></tr></thead><tbody><tr ng-repeat="situacao in situacoes"><td>{{::situacao.nome}}</td><td>{{::situacao.descricao}}</td></tr></tbody></table><table class="table table-hover"><caption>Termos Classificação</caption><thead><tr><th>Termo</th><th>Descrição</th></tr></thead><tbody><tr ng-repeat="classe in classes"><td>{{::classe.nome}}</td><td>{{::classe.descricao}}</td></tr></tbody></table></div></div></div></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-default navbar-fixed-top navbar-custom" bs-navbar=""><div class="container-fluid"><div class="navbar-header page-scroll"><button type="button" class="navbar-toggle" ng-init="navCollapsed = true" ng-click="navCollapsed = !navCollapsed"><span class="glyphicon glyphicon-menu-hamburger"></span></button> <a class="navbar-brand" href="#/">Monitor Legislativo <span data-loading=""><i class="fa fa-refresh fa-spin"></i></span></a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" ng-class="!navCollapsed && \'in\'"><ul class="nav navbar-nav navbar-right"><li data-match-route="/ranking"><a ng-href="#/ranking">Ranking</a></li><li data-match-route="/leis"><a href="#/leis">Leis</a></li><li data-match-route="/politicos"><a href="#/politicos">Políticos</a></li><li data-match-route="/termos"><a href="#/entenda-os-termos">Entenda os Termos</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"></ul></div></div></nav>'),a.put("app/laws/details/lawDetails.html",'<br><div class="col-md-12"><div class="container" ng-model="laws"><header ng-include="\'app/components/navbar/navbar.html\'"></header><br><div class="row"><div uib-alert="" ng-class="\'alert-\' + (alert.type || \'warning\')" ng-show="alert.show" close="close()">{{alert.message}}</div></div><div class="row"><div class="col-md-6"><span class="label label-info">{{::law.tipo.nome}}</span> <span class="label label-success">{{::law.situacaoSimplificada.nome}}</span> <span class="label label-warning">{{law.classe.nome || \'Sem Classificação\'}}</span></div><div class="col-md-6"><div class="col-md-3"><div class="fb-share-button" data-href="http://leis.sjcdigital.com/#/leis/{{law.id}}" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F%23%2Fleis%2F32&amp;src=sdkpreparse">Compartilhar</a></div></div><div class="col-md-3"><a href="https://twitter.com/share" class="twitter-share-button" data-via="MonitorLegSJC" data-size="small" data-hashtags="monitorLegislativoSJC" data-text="Veja está proposta do(a) {{law.autor.nome}} de São José dos Campos">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script></div></div></div><br><div class="row"><div class="progress"><div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="{{law.relevancia}}" aria-valuemin="0" aria-valuemax="100" style="width:{{law.relevancia}}%">{{law.relevancia}}% é a relevância desta lei</div></div></div><br><div class="row"><h5>Número do Processo {{ ::law.numeroProcesso }}</h5><h5>Número da Propositura {{ ::law.numeroPropositura }}</h5><h5>Autor <a href="#/politicos/{{::law.autor.id}}">{{ ::law.autor.nome }}</a> - {{::law.autor.partidoPolitico.nome}} ({{::law.autor.partidoPolitico.sigla}})</h5></div><br><div class="row"><h3>{{law.ementa}} - Realize o <a href="{{::law.pdfLei}}" target="_blank">download deste documento</a>.</h3></div><br><div class="row"><div class="panel panel-default"><div class="panel-heading"><h3>Vote na Relevância deste documento</h3></div><div class="panel-body"><input-stars max="5" ng-model="law.rating" on-star-click="clickRating(law.rating)"></input-stars>Quantidade de votos: {{law.quantidadeDeVotos || 0}}</div></div></div><br></div></div>'),a.put("app/laws/list/laws.html",'<div class="col-md-12"><div class="container"><header ng-include="\'app/components/navbar/navbar.html\'"></header><div><h2>Listagem de leis</h2></div><div class="well"><form class="form-horizontal" role="form" name="filtroForm" ng-submit="filtrar()"><div class="controls form-inline"><div class="form-group"><label for="_tipo" class="col-sm-2 control-label">Tipo</label><div class="col-sm-4"><select id="_tipo" class="form-control input-sm" ng-model="filtro.tipo" ng-options="tipo.nome for tipo in tipos track by tipo.id"></select></div></div><div class="form-group"><label for="_situacao" class="col-sm-4 control-label">Situação</label><div class="col-sm-4"><select id="_situacao" class="form-control input-sm" ng-model="filtro.situacao" ng-options="situacao.nome for situacao in situacoes track by situacao.id"></select></div></div><div class="form-group"><label for="_clase" class="col-sm-4 control-label">Classificação</label><div class="col-sm-4"><select id="_tipo" class="form-control input-sm" ng-model="filtro.classe" ng-options="classe.nome for classe in classes track by classe.id"></select></div></div><div class="form-group"><label for="_ano" class="col-sm-4 control-label">Ano</label><div class="col-sm-4"><select id="_ano" class="form-control input-sm" ng-model="filtro.ano" ng-options="a.ano for a in anos.anos"></select></div></div></div><br><div class="controls form-inline"><div class="form-group"><div class="col-sm-offset-2 col-sm-5"><button type="submit" class="btn btn-success">Buscar</button></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-5"><button ng-click="limpar()" class="btn btn-warning">Limpar</button></div></div></div></form></div><div class="row"><div class="col-12 col-sm-6 col-lg-6" ng-repeat="item in laws | filter: query | orderBy: lawOrder:direction"><a class="thumbnail" href="#/leis/{{::item.id}}" tooltip-placement="top" uib-tooltip="{{::item.numeroProcesso}}" tooltip-trigger="\'mouseenter\'"><div class="caption"><span class="label label-info">{{::item.tipo.nome}}</span> <span class="label label-success">{{::item.situacaoSimplificada.nome}}</span> <span class="label label-warning">{{::item.classe.nome || \'Sem Classificação\'}}</span><h3 style="text-transform:capitalize;">{{ ::item.numeroProcesso }}</h3><h5 class="text-justify">{{ ::item.ementa | limitTo: 97}} ...</h5><h5>{{::item.autor.nome}}</h5></div></a></div></div><div class="row"><div class="i-am-centered"><ul uib-pagination="" last-text="Último" next-text="Próximo" first-text="Primeiro" previous-text="Anterior" total-items="totalItens" items-per-page="totalPorPg" ng-model="pgAtual" max-size="10" class="pagination-sm" boundary-links="true" ng-change="pageChanged()"></ul></div></div></div></div>'),a.put("app/politician/details/politicanDetails.html",'<header ng-include="\'app/components/navbar/navbar.html\'"></header><br><div class="container backgroundBlue" ng-model="politicians"><div class="row profile"><div class="col-md-3"><div class="profile-sidebar"><div class="profile-userpic"><img ng-src="{{politicians.foto}}" alt="Photo of {{politicians.nome}}" class="img-responsive"></div><div class="profile-usertitle"><div class="profile-usertitle-name">{{politicians.nome}}</div><p><small>{{::politicians.legislatura}}</small></p><div class="profile-usertitle-job text-justifty">{{politicians.info}}</div><div class="profile-usertitle-job">{{politicians.partidoPolitico.nome}} - {{politicians.partidoPolitico.sigla}}</div><div class="profile-usertitle-job">Quantidade de projetos propostos: {{politicians.quantidadeDeLeis}}</div></div><div class="profile-userbuttons"><div class="fb-share-button" data-href="http://leis.sjcdigital.com/#/politicos/{{politicians.id}}" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2F%23%2Fleis%2F32&amp;src=sdkpreparse">Compartilhar</a></div><a href="https://twitter.com/share" class="twitter-share-button" data-via="MonitorLegSJC" data-size="small" data-hashtags="monitorLegislativoSJC" data-text="Veja o perfil do(a) Vereador(a) {{politicians.nome}} - {{politicians.partidoPolitico.sigla}} de São José dos Campos">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script></div></div></div><div class="col-md-9"><div class="profile-content"><uib-tabset active="active"><uib-tab index="0" heading="Gráficos"><br><div class="row"><div class="col-md-12"><div class="panel panel-default"><div class="panel-heading">Por Tipo</div><div class="panel-body"><div id="{{tipoChart.nomeChart}}">Placeholder for chart</div></div></div></div></div><br><div class="row"><div class="col-md-12"><div class="panel panel-default"><div class="panel-heading">Por Situação</div><div class="panel-body"><div id="{{situacaoChart.nomeChart}}">Placeholder for chart</div></div></div></div></div><br><br><div class="row"><div class="col-md-12"><div class="panel panel-default"><div class="panel-heading">Por Classificação</div><div class="panel-body"><div id="{{classificacao.nomeChart}}">Placeholder for chart</div></div></div></div></div></uib-tab><uib-tab index="1" heading="Projetos"><br><form name="mainForm" class="form-horizontal" ng-submit="filtrar()"><div class="form-group"><label for="_tipo" class="col-sm-2 control-label">Tipo</label><div class="col-sm-10"><select id="_tipo" class="form-control input-sm" ng-model="filtro.tipo" ng-options="tipo.nome for tipo in tipos track by tipo.id"></select></div></div><div class="form-group"><label for="_clase" class="col-sm-2 control-label">Classificação</label><div class="col-sm-10"><select id="_tipo" class="form-control input-sm" ng-model="filtro.classe" ng-options="classe.nome for classe in classes track by classe.id"></select></div></div><div class="form-group"><label for="_situacao" class="col-sm-2 control-label">Situação</label><div class="col-sm-10"><select id="_situacao" class="form-control input-sm" ng-model="filtro.situacao" ng-options="situacao.nome for situacao in situacoes track by situacao.id"></select></div></div><div class="form-group"><label for="_ano" class="col-sm-2 control-label">Ano</label><div class="col-sm-10"><select id="_ano" class="form-control input-sm" ng-model="filtro.ano" ng-options="a.ano for a in anos.anos"></select></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-10"><button type="submit" class="btn btn-success" ng-disabled="mainForm.$invalid">Buscar</button> <button ng-click="limpar()" class="btn btn-warning" ng-disabled="mainForm.$invalid">Limpar</button></div></div></form><div class="row"><div class="col-12 col-sm-6 col-lg-6" ng-repeat="item in laws | filter: query | orderBy: lawOrder:direction"><a class="thumbnail" href="#/leis/{{::item.id}}" tooltip-placement="top" uib-tooltip="{{::item.numeroProcesso}}" tooltip-trigger="\'mouseenter\'"><div class="caption"><span class="label label-info">{{::item.tipo.nome}}</span> <span class="label label-success">{{::item.situacaoSimplificada.nome}}</span> <span class="label label-warning">{{::item.classe.nome || \'Sem Classificação\'}}</span><h3 style="text-transform:capitalize;">{{ ::item.numeroProcesso }}</h3><h6 class="text-justify">{{ ::item.ementa | limitTo: 97}} ...</h6></div></a></div></div><div class="row"><div class="i-am-centered"><ul uib-pagination="" last-text="Último" next-text="Próximo" first-text="Primeiro" previous-text="Anterior" total-items="totalItens" items-per-page="totalPorPg" ng-model="pgAtual" max-size="10" class="pagination-sm" boundary-links="true" ng-change="pageChanged(pgAtual)"></ul></div></div></uib-tab></uib-tabset></div></div></div></div>'),a.put("app/politician/list/politician.html",'<div class="container"><header ng-include="\'app/components/navbar/navbar.html\'"></header><div class="row"><h2>Vereadores de São José dos Campos</h2></div><br><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="item in politicians | filter: query | orderBy: politicianOrder:direction"><div class="[ info-card ]"><img style="width: 100%" alt="Photo of {{ ::item.nome }}" ng-src="{{ ::item.foto }}"><div class="[ info-card-details ] animate"><div class="[ info-card-header ]"><h1>{{::item.nome}}</h1><h3>{{::item.partidoPolitico.nome}}</h3></div><div class="[ info-card-detail ]"><p class="text-justify">{{::item.info}}</p><p class="text-left">{{::item.legislatura}}</p><p class="text-left">{{::item.telefone}}</p><p class="text-left">{{::item.quantidadeDeLeis}} Leis Criadas</p><p class="text-left">{{::item.email}}</p><hr><p class="text-center"><a href="#/politicos/{{::item.id}}">Ver Perfil</a></p></div></div></div></div></div><div class="row"><div class="i-am-centered"><ul uib-pagination="" last-text="Último" next-text="Próximo" first-text="Primeiro" previous-text="Anterior" total-items="totalItens" items-per-page="totalPorPg" ng-model="pgAtual" max-size="10" class="pagination-sm" boundary-links="true" ng-change="pageChanged()"></ul></div></div></div>')}]);
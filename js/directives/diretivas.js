angular.module('minhasDiretivas', []).directive('diretivaAlerta', function () {

    return {
		templateUrl: 'js/directives/templateAlerta.html',
		//substitui o elemento pelo conteúdo do template
		replace: true,
		restrict: 'E',
        scope: {
         texto: '@'
        }
	};

})
/*.directive('meuAccordion', function () {

    var ddo = {};

    ddo.restrict = "E";
    ddo.replace = true;

   //botão chamado na página principal.html, para remover a foto
    ddo.templateUrl = 'js/directives/templateAccordion.html';

    return ddo;

}) */
.directive('meuBotaoPerigo', function(){

    var ddo = {};

    //A - restrita ao atributo do elemento <div alert></div>
    //E - restrita ao elemento <alert></alert>
    //C - restrita a classe do elemento <div class="alert"></div>
    //M - restrita ao comentário do elemento
    //<!-- directive: alert -->
    //<div></div>

    ddo.restrict = "E";

    //escopo da diretiva com seus atributos
    ddo.scope = {

        //string
        nome: '@',
        //é passado uma expressão, não uma string, por isso o &
        acao: '&'
    };

    //botão chamado na página principal.html, para remover a foto
    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

    return ddo;

});

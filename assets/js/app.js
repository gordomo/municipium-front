(function(){
    'use strict';
    
    angular
            .module('Municipium', ['ngMaterial'])
            .controller('HomeController', HomeController);
    
    function HomeController(){
        
        var vm = this;
        
        vm.back = "url(assets/img/back1.png)";
        vm.grid = [ {name: "Noticias",color: "rgba(132, 255, 255, 0.7)",icono: "fa-newspaper-o",ancho: "1",alto: "1", id: "1"},
                    {name: "Teléfonos Útiles",color: "rgba(179, 136, 255, 0.7)",icono: "fa-phone",ancho: "1",alto: "1", id: "2"},
                    {name: "Alertas",color: "rgba(255, 138, 128, 0.7)",icono: "fa-bell-o",ancho: "1",alto: "1", id: "3"},
                    {name: "Emergencias",color: "rgba(255, 255, 141, 0.7)",icono: "fa-exclamation-circle",ancho: "1",alto: "1", id: "4"},
                    {name: "Servicios Onlines",color: "rgba(104, 157, 204, 0.7)",icono: "fa-cloud",ancho: "1",alto: "1", id: "5"},
                    {name: "Guia Comercial",color: "rgba(164, 179, 191, 0.7)",icono: "fa-building-o ",ancho: "1",alto: "1", id: "6"},
                    {name: "Transporte Público",color: "rgba(127, 255, 212, 0.7)",icono: "fa-bus",ancho: "1",alto: "1", id: "7"},
                    {name: "Salud",color: "rgba(64, 224, 208, 0.7)",icono: "fa-ambulance",ancho: "1",alto: "1", id: "8"},
                    {name: "Agenda Cultural",color: "rgba(95, 158, 160, 0.7)",icono: "fa-calendar",ancho: "1",alto: "1", id: "9"},
                    {name: "Espacios Culturales",color: "rgba(0, 139, 139, 0.7)",icono: "fa-paint-brush",ancho: "1",alto: "1", id: "10"}];
        vm.go = function(id){
            console.log(id);
        };
        
    }
    
})();
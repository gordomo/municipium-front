(function(){
    'use strict';
    
    angular
            .module('Municipium',['ngAnimate'])
            .controller('HomeController', HomeController);
    
    function HomeController(){
        
        var vm = this;
        vm.login = true;
        vm.home = false;
        vm.menuDisplayed = false;
        vm.back = "url(assets/img/back1.png)";
        vm.grid = [ {name: "Noticias",color: "rgba(132, 255, 255, 0.7)",icono: "fa-newspaper-o",espacio:"uno", id: "1", estado:"standar"},
                    {name: "Teléfonos Útiles",color: "rgba(179, 136, 255, 0.7)",icono: "fa-phone",espacio:"uno", id: "2", estado:"standar" },
                    {name: "Servicios Onlines",color: "rgba(104, 157, 204, 0.7)",icono: "fa-cloud",espacio:"dos", id: "5", estado:"standar"},
                    {name: "Alertas",color: "rgba(255, 138, 128, 0.7)",icono: "fa-bell-o",espacio:"uno", id: "3", estado:"standar"},
                    {name: "Emergencias",color: "rgba(255, 255, 141, 0.7)",icono: "fa-exclamation-circle",espacio:"uno", id: "4", estado:"standar"},
                    {name: "Farmacias de turno",color: "rgba(128, 230, 131, 0.7)",icono: "fa-plus-square-o",espacio:"uno", id: "11", estado:"standar"},
//                    {name: "Guia Comercial",color: "rgba(164, 179, 191, 0.7)",icono: "fa-building-o ",espacio:"uno", id: "6", estado:"standar"},
//                    {name: "Transporte Público",color: "rgba(127, 255, 212, 0.7)",icono: "fa-bus",espacio:"uno", id: "7", estado:"standar"},
//                    {name: "Salud",color: "rgba(64, 224, 208, 0.7)",icono: "fa-ambulance",espacio:"uno", id: "8", estado:"standar"},
//                    {name: "Agenda Cultural",color: "rgba(95, 158, 160, 0.7)",icono: "fa-calendar",espacio:"uno", id: "9", estado:"standar"},
//                    {name: "Espacios Culturales",color: "rgba(0, 139, 139, 0.7)",icono: "fa-paint-brush",espacio:"uno", id: "10", estado:"standar"}
                    ];
        vm.appTitle = 'Municipium';
        
        vm.ingresar = function(){
            vm.login = false;
            vm.home = true;
        };
        vm.go = function(id){
            console.log(id);
        };
        
        vm.getLogIn = function(){
            return vm.login;
        };
        vm.login = vm.getLogIn();
        
        vm.showMenu = function(){
            vm.menuDisplayed = true;
        };
        
        vm.hideMenu = function(){
            vm.menuDisplayed = false;
        };
        
        vm.menuToogle = function(){
            vm.menuDisplayed = !(vm.menuDisplayed);
        };
        
        vm.logout = function(){
                vm.login = true;
                vm.home = false;
            };
            
        vm.open = function(gridItem){
                vm.grid.forEach(function(item){
                
                    item.estado = "closed";
                
                });
                gridItem.estado = "open";
            };
        
        vm.closed = function(){
                vm.grid.forEach(function(item){
                
                    item.estado = "standar";
                
                });
                vm.hideMenu();
            };
            
        };
    }
)();
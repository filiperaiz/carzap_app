// Modulo Principal
angular.module('carzap', ['ionic', 'slick', 'ngCordova', 'carzap.controllers'])

// Run
.run(function($ionicPlatform, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      $cordovaStatusbar.overlaysWebView(true)
      $cordovaStatusBar.style(1)
    }
  });
})

// Config
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('app.favoritos', {
      url: '/favoritos',
      views: {
        'menuContent': {
          templateUrl: 'templates/favoritos.html'
        }
      }
    })
    .state('app.quem-somos', {
      url: '/quem-somos',
      views: {
        'menuContent': {
          templateUrl: 'templates/quem-somos.html'
        }
      }
    })
    .state('app.anuncio', {
      url: '/anuncio',
      views: {
        'menuContent': {
          templateUrl: 'templates/anuncio.html',
          controller: 'AnuncioCtrl'
        }
      }
    })
    .state('app.novo-anuncio', {
      url: '/novo-anuncio',
      views: {
        'menuContent': {
          templateUrl: 'templates/novo-anuncio.html'
        }
      }
    })
    .state('app.meus-anuncios', {
      url: '/meus-anuncios',
      views: {
        'menuContent': {
          templateUrl: 'templates/meus-anuncios.html'
        }
      }
    })
    .state('app.configuracoes', {
      url: '/configuracoes',
      views: {
        'menuContent': {
          templateUrl: 'templates/configuracoes.html'
        }
      }
    })
    .state('app.editar-perfil', {
      url: '/editar-perfil',
      views: {
        'menuContent': {
          templateUrl: 'templates/editar-perfil.html'
        }
      }
    })
    .state('app.notificacoes', {
      url: '/notificacoes',
      views: {
        'menuContent': {
          templateUrl: 'templates/notificacoes.html'
        }
      }
    })
    .state('app.fale-conosco', {
      url: '/fale-conosco',
      views: {
        'menuContent': {
          templateUrl: 'templates/fale-conosco.html'
        }
      }
    });
  $urlRouterProvider.otherwise('/app/home');
});

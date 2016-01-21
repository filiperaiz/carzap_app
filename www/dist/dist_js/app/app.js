//============ Módulo: Carzap ===//
angular.module('carzap', ['ionic', 'slick', 'ngCordova', 'carzap.controllers', 'templates'])

//============ Run Application ===//
.run(['$ionicPlatform', '$cordovaStatusbar', function($ionicPlatform, $cordovaStatusbar) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusBar.style(1);
    }
  });
}])

//============ Config Application ===//
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    // State: app //
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'menu.html',
      controller: 'AppController'
    })
    // State: app.home //
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'home.html',
          controller: 'HomeController'
        }
      }
    })
    // State: app.favoritos //
    .state('app.favoritos', {
      url: '/favoritos',
      views: {
        'menuContent': {
          templateUrl: 'favoritos.html'
        }
      }
    })
    // State: app.quem-somos //
    .state('app.quem-somos', {
      url: '/quem-somos',
      views: {
        'menuContent': {
          templateUrl: 'quem-somos.html'
        }
      }
    })
    // State: app.anuncio //
    .state('app.anuncio', {
      url: '/anuncio',
      views: {
        'menuContent': {
          templateUrl: 'anuncio.html',
          controller: 'AnuncioController'
        }
      }
    })
    // State: app.novo-anuncio //
    .state('app.novo-anuncio', {
      url: '/novo-anuncio',
      views: {
        'menuContent': {
          templateUrl: 'components/novo-anuncio.html'
        }
      }
    })
    // State: app.meus-anuncios //
    .state('app.meus-anuncios', {
      url: '/meus-anuncios',
      views: {
        'menuContent': {
          templateUrl: 'meus-anuncios.html'
        }
      }
    })
    // State: app.configuracoes //
    .state('app.configuracoes', {
      url: '/configuracoes',
      views: {
        'menuContent': {
          templateUrl: 'configuracoes.html'
        }
      }
    })
    // State: app.editar-perfil //
    .state('app.editar-perfil', {
      url: '/editar-perfil',
      views: {
        'menuContent': {
          templateUrl: 'editar-perfil.html'
        }
      }
    })
    // State: app.notificacoes //
    .state('app.notificacoes', {
      url: '/notificacoes',
      views: {
        'menuContent': {
          templateUrl: 'notificacoes.html'
        }
      }
    })
    // State: app.fale-conosco //
    .state('app.fale-conosco', {
      url: '/fale-conosco',
      views: {
        'menuContent': {
          templateUrl: 'fale-conosco.html'
        }
      }
    });
  $urlRouterProvider.otherwise('/app/home');
}]);

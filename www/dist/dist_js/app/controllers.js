//============ Módulo: Carzap.Controllers ===//
angular.module('carzap.controllers', [])

//============ Controller: AppController ===//
.controller('AppController', ['$scope', '$ionicModal', '$ionicPopup', '$timeout', '$state', function($scope, $ionicModal, $ionicPopup, $timeout, $state) {

  $scope.myTitle = '<img class="title-image" src="img/logo.svg" width="88" />';

  $scope.loginData = {};

  $ionicModal.fromTemplateUrl('templates/components/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalLogin = modal;
  });
  $scope.closeModalLogin = function() {
    $scope.modalLogin.hide();
  };
  $scope.openModalLogin = function() {
    $scope.modalLogin.show();
  };
  $scope.doLogin = function() {
    console.log('Logado', $scope.loginData);
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  // Adicionar Anúncio
  $ionicModal.fromTemplateUrl('templates/components/novo-anuncio.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalAnuncio = modal;
  });
  $scope.closeModalAnuncio = function() {
    $scope.modalAnuncio.hide();
  };
  $scope.openModalAnuncio = function() {
    $scope.modalAnuncio.show();
  };

  // Sair
  $scope.logout = function() {
    $scope.data = {};

    var logoutPopup = $ionicPopup.show({
      title: 'Sair',
      subTitle: 'Tem certeza que deseja sair?',
      scope: $scope,
      buttons: [
        { text: 'Cancelar' },
        {
          text: '<b>Sair</b>',
          type: 'button-delete',
          onTap: function(e) {
            if (!$scope.data.wifi) {
              e.preventDefault();
            } else {
              return $scope.data.wifi;
            }
          }
        }
      ]
    });

    logoutPopup.then(function(res) {
      console.log('Apertou!', res);
    });

   };

   $scope.config = function (){
    $state.go('app.configuracoes');
  };


}])

//============ Controller: LoginController ===//
.controller('LoginController', ['$scope', '$state', '$ionicModal', function($scope, $state, $ionicModal) {
  $scope.recuperarSenha = function(){
    $('body').addClass('show-recuperar-senha');
  };
  $scope.closeRecuperar = function(){
    $('body').removeClass('show-recuperar-senha');
  };
  // Adicionar Anuncio
  $ionicModal.fromTemplateUrl('templates/components/cadastro.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalCadastro = modal;
  });
  $scope.closeModalCadastro = function() {
    $scope.modalCadastro.hide();
  };
  $scope.openModalCadastro = function() {
    $scope.modalLogin.hide();
    $scope.modalCadastro.show();
  };
  $scope.goApp = function(){
    $state.go('app.home');
  };
}])

//============ Controller: CadastroController ===//
.controller('CadastroController', ['$scope', '$state', function($scope, $state) {}])

//============ Controller: HomeController ===//
.controller('HomeController', ['$scope', '$ionicModal', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/components/pesquisar.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modalBusca = modal;
  });
  $scope.openModalBusca = function() {
    $scope.modalBusca.show();
  };
  $scope.closeModalBusca = function() {
    $scope.modalBusca.hide();
  };
  $scope.$on('$destroy', function() {
    $scope.modalBusca.remove();
  });
}])

//============ Controller: PesquisarController ===//
.controller('PesquisarController', ['$scope', '$stateParams', '$ionicPopup', function($scope, $stateParams, $ionicPopup) {
  $scope.dropdownMarca = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha a marca',
     template: '<label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
  };
  $scope.dropdownModelo = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha o modelo',
     template: '<label class="item item-radio"><input type="radio" name="group"><div class="item-content">Modelo X</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
  };
  $scope.dropdownEstado = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha o estado',
     template: '<label class="item item-radio"><input type="radio" name="group"><div class="item-content">Piauí</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
  };
  $scope.dropdownCidade = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha a cidade',
     template: '<label class="item item-radio"><input type="radio" name="group"><div class="item-content">Teresina</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
  };

}])

//============ Controller: AnuncioController ===//
.controller('AnuncioController', ['$scope', '$stateParams', '$ionicActionSheet', '$ionicModal', '$timeout', function($scope, $stateParams, $ionicActionSheet, $ionicModal, $timeout) {
  // Dados Fictícios (Anúncio);
   $scope.car = {
    id: 1,
    images: [{
      url:'img/img1.jpg'
    }, {
      url:'img/img2.jpg'
    }, {
      url:'img/img3.jpg'
    }, {
      url:'img/img4.jpg'
    }],
    title: 'GM - Chevrolet SPIN LTZ 1.8 8V Econo.Flex 5p Aut.',
    model: 'Fiesta 1.0 8V Flex/Class 1.0 8V Flex 5p',
    mark: 'Ford',
    port: '5',
    price: '46.900',
    year: '2011/2012',
    gasoline: 'Flex',
    plate: 'XXX-XXX7 (Teresina-PI)',
    km: '100.000 km',
    color: 'Branco',
  };

  // Simulação
  $ionicModal.fromTemplateUrl('templates/components/simulacao.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalSimulacao = modal;
  });
  $scope.closeModalSimulacao = function() {
    $scope.modalSimulacao.hide();
  };
  $scope.openModalSimulacao = function() {
    $scope.modalSimulacao.show();
  };

  // Eu quero
  $ionicModal.fromTemplateUrl('templates/components/eu-quero.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalEuquero = modal;
  });
  $scope.closeModalEuquero = function() {
    $scope.modalEuquero.hide();
  };
  $scope.openModalEuquero = function() {
    $scope.modalEuquero.show();
  };

  // Compartilhar Anúncio;
 $scope.shareAnuncio = function() {
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<i class="ion-social-facebook"></i><b>Facebook</b>' },
       { text: '<i class="ion-social-whatsapp"></i><b>Whatsapp</b>' }
     ],
     titleText: 'Divulgue com seus amigos',
     cancelText: 'Cancelar',
     cancel: function() {
       console.log('Cancelou');
     },
     buttonClicked: function(index) {
       return true;
     }
   });
   $timeout(function() {
     hideSheet();
   }, 9000);
 };

}])

//============ Controller: NovoAnuncioController ===//
.controller('NovoAnuncioController', ['$scope', '$stateParams', '$ionicPopup', '$ionicModal', '$cordovaCamera', function($scope, $stateParams, $ionicPopup, $ionicModal, $cordovaCamera) {

  $scope.addImage = function (){
    var alertPopup = $ionicPopup.show({
     title: 'Escolha a opção',
     scope: $scope,
     buttons: [{
        text: '<i class="ion-camera"></i><span>TIRAR FOTO</span>',
        type: 'button button-block button-camera button-positive',
        onTap: function(e) {
          e.preventDefault();
          var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation:true
          };

          $cordovaCamera.getPicture(options).then(function(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
          }, function(err) {
            // error
          });
        }
      },
      {
        text: '<i class="ion-archive"></i><span>UPLOAD</span>',
        type: 'button button-upload button-block button-default',
        onTap: function(e) {
          e.preventDefault();
          var options = {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
          };

          $cordovaCamera.getPicture(options).then(function(imageURI) {
            var image = document.getElementById('myImage');
            image.src = imageURI;
          }, function(err) {
            // error
          });
        }
      }]
    }).then(function(result){
      console.log('Tapped', result);
    }, function(error){
      console.log('error', error);
    }, function(popup){
      popup.close();
    });
  };


  // Termos
  $ionicModal.fromTemplateUrl('templates/components/termos.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalTermos = modal;
  });
  $scope.closeTermos = function() {
    $scope.modalTermos.hide();
  };
  $scope.openTermos = function() {
    $scope.modalTermos.show();
  };

  $scope.dropdownMarca = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha a marca',
     template: '<label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Audi</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
  };
  $scope.dropdownModelo = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha o modelo',
     template: '<label class="item item-radio"><input type="radio" name="group"><div class="item-content">Modelo X</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
  };
  $scope.dropdownEstado = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha o estado',
     template: '<label class="item item-radio"><input type="radio" name="group"><div class="item-content">Piauí</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
  };
  $scope.dropdownCidade = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha a cidade',
     template: '<label class="item item-radio"><input type="radio" name="group"><div class="item-content">Teresina</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
  };
  $scope.dropdownCombustivel = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha o combustível',
     template: '<label class="item item-radio"><input type="radio" name="group"><div class="item-content">Gasolina</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Flex</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Diesel</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">Alcool</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
  };

  $scope.dropdownPortas = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha quantas portas',
     template: '<label class="item item-radio"><input type="radio" name="group"><div class="item-content">1</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">2</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content">3</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
  };

  $scope.dropdownCor = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Escolha a cor',
     template: '<div class="colors"><label class="item item-radio"><input type="radio" name="group"><div class="item-content"><small class="color-azul"></small>Azul</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content"><small class="color-vermelho"></small>Vermelho</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content"><small class="color-verde"></small>Verde</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content"><small class="color-amarelo"></small>Amarelo</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content"><small class="color-roxo"></small>Roxo</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content"><small class="color-preto"></small>Preto</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="radio" name="group"><div class="item-content"><small class="color-laranja"></small>Laranja</div><i class="radio-icon ion-android-radio-button-off"></i></label></div>'
   });
  };

  $scope.addOpcoes = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Itens opcionais',
     template: '<label class="item item-radio"><input type="checkbox" name="group"><div class="item-content">Ar condicionado</div><i class="radio-icon ion-android-radio-button-off"></i></label><label class="item item-radio"><input type="checkbox" name="group"><div class="item-content">Direção Hidraulica</div><i class="radio-icon ion-android-radio-button-off"></i></label>'
   });
  };


}])

//============ Controller: ListCarsController ===//
.controller('ListaCarrosController', ['$scope', '$stateParams', function($scope, $stateParams) {
     // Dados Fictícios (Lista de Anúncio);
     $scope.cars = [
      {
        id: 1,
        image: 'img/img1.jpg',
        title: 'GM - Chevrolet SPIN LTZ 1.8 8V Econo.Flex 5p Aut.',
        price: '46.900',
        year: '2011/2012',
        km: '100.000 km',
        color: 'Branco'
      },
      {
        id: 2,
        image: 'img/img2.jpg',
        title: 'Toyota Hilux CD SRV D4-D 4x4 3.0 TDI Diesel',
        price: '84.490,00',
        year: '2009/2009',
        km: '333.000 km',
        color: 'Preto'
      },
      {
        id: 3,
        image: 'img/img3.jpg',
        title: 'Honda CITY Sedan LX 1.5 Flex 16V 4p Aut.',
        price: '30.990',
        year: '2010/2011',
        km: '87.760 km',
        color: 'Branco'
      },
      {
        id: 4,
        image: 'img/img4.jpg',
        title: 'Toyota Hilux CD SRV D4-D 4x4 3.0 TDI Diesel',
        price: '84.490,00',
        year: '2009/2009',
        km: '333.000 km',
        color: 'Preto'
      },
    ];
}])

//============ Controller: EditarPerfilController ===//
.controller('EditarPerfilController', ['$scope', '$ionicPopup', function($scope, $ionicPopup) {
  $scope.addPhone = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Adicione um telefone',
     template: '<div class="row"><label class="item item-input item-stacked-label"><span class="input-label">Operadora</span><input type="text" placeholder="TIM"></label></div><div class="row"><div class="col-20"><label class="item item-input item-stacked-label"><span class="input-label">DDD</span><input type="number" placeholder="(86)"></label></div><div class="col-80"><label class="item item-input item-stacked-label"><span class="input-label">Telefone</span><input type="number" placeholder="9999 - 9999"></label></div></div>'
   });
  };
}])

//============ Controller: ConfiguracoesController ===//
.controller('ConfiguracoesController', ['$scope', '$state', function($scope, $state) {
  $scope.editarPerfil = function(){
    $state.go('app.editar-perfil');
  };
  $scope.meusAnuncios = function(){
    $state.go('app.meus-anuncios');
  };
}])

//============ Controller: MeusAnunciosListaControtroller ===//
.controller('MeusAnunciosListaController', ['$scope', '$state', '$stateParams', '$ionicModal', function($scope, $state, $stateParams, $ionicModal) {

    // Adicionar Anuncio
    $ionicModal.fromTemplateUrl('templates/components/novo-anuncio.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modalAnuncio = modal;
    });
    $scope.closeModalAnuncio = function() {
      $scope.modalAnuncio.hide();
    };
    $scope.openModalAnuncio = function() {
      $scope.modalAnuncio.show();
    };
    $scope.doLogin = function() {
      console.log('Novo Anuncio', $scope.loginData);
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };


     // Dados Fictícios (Lista Meus Anuncios);
     $scope.cars = [{
        id: 1,
        image: 'img/img1.jpg',
        title: 'GM - Chevrolet SPIN LTZ 1.8 8V Econo.Flex 5p Aut.',
        price: '46.900',
        year: '2011/2012',
        km: '100.000 km',
        color: 'Branco',
        plate: 'ABC1235 (Timon/MA)',
        status: 'publicado',
        published: '19/01/2016, 10:35'
      }, {
       id: 2,
       image: 'img/img4.jpg',
       title: 'A3 Sedan 1.4 16V TB FSI  S-tronic 4p - 2015/2015 - 1231123 km',
       price: '90.900',
       year: '2015/2015',
       km: '87.000 km',
       color: 'Prata',
       plate: 'ABC1235 (Teresina/PI)',
       status: 'aguardando',
       published: '19/01/2016, 10:35'
     }];
}]);

function ContactController() {
  var vm = this

  vm.name = "Yechiel"
  vm.email = "contact@yechiel.me"
  vm.phone = "3474733258"

  this.changeName = function() {
    vm.name = "Yankel"
    console.log(vm.name);
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)

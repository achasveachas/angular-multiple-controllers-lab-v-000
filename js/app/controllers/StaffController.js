function StaffController() {
  var vm = this

  this.name = "Moshe"
  this.email = "Staff@yechiel.me"
  this.phone = "3474733258"

}

angular
  .module('app')
  .controller('StaffController', StaffController)

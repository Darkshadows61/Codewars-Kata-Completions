//8kyu Is This UpperCase?
String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }
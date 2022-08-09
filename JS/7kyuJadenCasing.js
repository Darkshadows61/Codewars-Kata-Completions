//7kyu Jaden Casing
String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }
  //test str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real")
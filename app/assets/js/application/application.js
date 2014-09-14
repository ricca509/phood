// greeter.js
class Greeter {
  sayHi(name = 'Non so chi sei') {
    console.log(`Hi ${name}!`);
  }
}

var greeter = new Greeter();
greeter.sayHi();

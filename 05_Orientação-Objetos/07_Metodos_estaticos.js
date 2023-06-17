/* 
class Calculadora {

    Soma(a, b) {
        console.log(a + b);
    }

    Sub(a, b) {
        console.log(a - b);
    }
}

var calc = new Calculadora()

calc.Soma(10, 20);
calc.Sub(100, 50);
*/


// Com método estático
class Calculadora {

    static Soma(a, b) {
        console.log(a + b);
    }

    static Sub(a, b) {
        console.log(a - b);
    }
}

Calculadora.Soma(10, 20);
Calculadora.Sub(100, 50);
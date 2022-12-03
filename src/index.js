//Arrays
//Also known as lists, is a linear form of data structure to store values

//Simple form to construct arrays
const array = ["Vanessa", "Xavier", "Jacqueline"];

//Constructing array with classes

class MyArray {
    constructor(){
        this.length = 0;
        //total length of the array

        this.data = {};
        //data will be our object, containing keys as indexes and values as keys's values
    }
    get(index){
        return this.data[index];
    //returning the value stored in that key sent as index
    }
    push(item){
        this.data[this.length] = item;
        //storing the in the last key the item as value
        this.length++;
        //length is summed 1 every time we add a new element
        return this.data;
    }
    pop(){
        const lastItem = this.data[this.length - 1]
        //store in a variable the last element
        delete this.data[this.length - 1];
        //reserved word "delete" to erase last element from the array
        this.length--;
        //reduce length value to imply we're erasing the last element
        return lastItem;
        //pop() should return this last element to know which was
    }
    delete(index){
        const item = this.data[index];
        //storing in item the value we want to erase 
        
        this.shiftIndex(index);
        //use the method shiftIndex to delete such element from the array
        
        return item;
        //we must know which was the deleted element
    }
    shiftIndex(index){
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
            //the value in data[i] will be the next value, therefore data[i + 1]
        }
        delete this.data[this.length - 1];
        //deleting last element of the array
        
        this.length--;
        //reducing length of the array
    }
}

const myArray = new MyArray();
//instancing the class

console.log(myArray.push('Savannah'));
//pushing an element in the structure

console.log(myArray.get(0));
//getting to know the first element

console.log(myArray.pop());
//deleting the last element

console.log(myArray.push('Vanessa'))
console.log(myArray.push('Xavier'))
console.log(myArray.push('Jacqueline'))
console.log(myArray.push('Diego'))
console.log(myArray.push('Ana'))
console.log(myArray.push('fernanda'))
console.log(myArray.push('Andres'))
console.log(myArray.push('Herminia'))


console.log(myArray)

console.log(myArray.delete(4))
//deleting element in position 1

console.log(myArray)


//challenge: implement my own version of unshift

// Crea tu propia implementación de unshift
// En este desafío tendrás que crear tu propia implementación del método unshift.

// La implementación del método unshift nos debe permitir agregar un elemento al inicio de un array y retornar la nueva longitud del array. En caso de no enviar ningún elemento, este de igual forma nos retornará la longitud actual.

// La solución debería tener un input y output como los siguientes:

// Input

// const myArray = new MyArray()

// myArray.unshift("!!!")
// myArray.unshift("Platzinauta")
// myArray.unshift("lograste")
// myArray.unshift("lo")

// myArray.data

// myArray.data retorna todos los elementos de nuestro array, no te debes preocupar por esta parte, ya está implementado en el código.

// Output

// 1
// 2
// 3
// 4

// { 0: "lo", 1: "Lograste", 2: "Platzinauta", 3: "!!!" }

class MyArray2 {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    
    unshift(item){
            for (let i = 0; i < this.length; i++) {
                this.data[this.length - i] = this.data[this.length - i - 1];
            }
            this.length++; 
            this.data[0] = item;
            return this
    }
  }

const myarray2 = new MyArray2();
console.log(myarray2.unshift("!!!"))
// MyArray2 { length: 1, data: { '0': '!!!' } }

console.log(myarray2.unshift("Platzinauta"))
// MyArray2 { length: 2, data: { '0': 'Platzinauta', '1': '!!!' } }

console.log(myarray2.unshift("lograste"))
// MyArray2 {
//  length: 3,
//   data: { '0': 'lograste', '1': 'Platzinauta', '2': '!!!' }
// }

console.log(myarray2.unshift("lo"))
// MyArray2 {
//     length: 4,
//     data: { '0': 'lo', '1': 'lograste', '2': 'Platzinauta', '3': '!!!' }
//   }

//teacher's solution:
// export class MyArray {
//     constructor() {
//       this.length = 0;
//       this.data = {};
//     }
    
//     unshift(item){
//       if(!item){
//         return this.length;
//       }
  
//       if(this.length === 0){
//         this.data[0] = item;
//         this.length++;
//         return this.length;
//       }
      
//       for(let i = this.length; i > 0; i--){
//         this.data[i] = this.data[i - 1];
//       }
      
//       this.data[0] = item;
  
//       this.length++;
//       return this.length;
//     }
//   }
  

//Crea tu propia implementación de shift

// En este desafío tendrás que crear tu propia implementación del método shift.

// Contrario al reto anterior, aquí tendrás que hacer tu propio método shift para borrar el primer elemento que exista en tu array y retornar el elemento eliminado (no olvides modificar la longitud).

// En caso de ser un array vacío, este método deberá devolver undefined.

// Tu implementación debería tener un input y output como los siguientes:

// Input

// const myArray = new BetterArray()
// myArray.unshift("Suerte")
// myArray.unshift("Con el")
// myArray.unshift("desafio")
// myArray.unshift("platzinauta")
// myArray.unshift("Un 🐱 random en el desafío")

// myArray.shift()

// Output

// "Un 🐱 random en el desafío"

export class BetterArray extends MyArray2 {
  constructor(){
    super()
    this.length = 0
    this.data = {}
  }

  shift(){
    // Tu código aquí 👈
    
  }
}

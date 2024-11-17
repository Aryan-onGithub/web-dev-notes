class animal{
    tiger() {
        console.log('i am a tiger');
    }
}

let a = new animal()
a.tiger()

class Car {
    // This is the constructor
    constructor(brand, model) {
      this.brand = brand; // Initialize the brand property
      this.model = model; // Initialize the model property
    }
  
    // A method to display car details
    displayDetails() {
      console.log(`Car: ${this.brand} ${this.model}`);
    }
  }
  
  // Creating a new instance of the Car class
  const myCar = new Car('Toyota', 'Corolla');
  
  // Using the method to display details
  myCar.displayDetails(); // Output: Car: Toyota Corolla
  
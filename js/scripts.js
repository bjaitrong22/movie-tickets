function Tickets(time, age, release)  {
  this.time = time;
  this.release = release;
  this.age = age;
  this.price = 10;
} 

Tickets.prototype.getPrice = function() {
  if( this.age >= 65 || this.time === "matinee" || this.release === "nonFirstRelease") {
    return this.price - 2;
  } else {
    return this.price;  
  }
};

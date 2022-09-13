function Tickets(time, age)  {
  this.time = time;
  this.release = release;
  this.age = age;
  this.price = 10;
}

Tickets.prototype.getPrice = function() {
  if( this.age >= 65 || this.time === "matinee" || release === "nonFirstRelease") {
    return this.price - 2;
  } else {
    return this.price;  
  }
};

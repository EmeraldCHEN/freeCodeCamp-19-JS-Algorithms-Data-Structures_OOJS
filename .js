							
let motionModule = (function () {
  return {
    glideMixin: function (obj) {   // Use a Mixin to add common behavior between unrelated objects

      obj.glide = function() {
        console.log(obj.name + " is gliding on the water.");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("The plane - " + obj.name +" is flying, wooosh!");
      };
    }
  }
}) (); // The two parentheses cause the function to be immediately invoked

let plane = {
  name: "A737"
};
motionModule.flyMixin(plane);

plane.fly(); // The plane - A737 is flying, wooosh!


function Bird(name){
  this.name= name
};
let duck = new Bird("The duck"); // There's a principle in programming called Don't Repeat Yourself (DRY). Inheritance helps.
motionModule.glideMixin(duck);

duck.glide();  // The duck is gliding on the water.




// Retrieved from https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming




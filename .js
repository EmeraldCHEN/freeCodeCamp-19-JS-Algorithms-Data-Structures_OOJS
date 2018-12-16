							

let motionModule = (function () {
  return {
    glideMixin: function (obj) {
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
let duck = new Bird("The duck");
motionModule.glideMixin(duck);

duck.glide();  // The duck is gliding on the water.




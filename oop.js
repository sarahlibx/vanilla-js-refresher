// object oriented programming = programming paradigm centered around objects rather than functions

// factory function -- more popular 
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);

// constructor function 
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log(draw);
    }
}

const another = new Circle(1);
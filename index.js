
//* USS Assembly 

class USSAssembly {
    name = "The USS Assembly"
    hull = 20 
    //total hitpoints
    firepower = 5
    //firepower stays consistent 
    accuracy = .7
    //the chance between 0 and 1 that the ship will hit its target

    attack(){
        console.log(`${this.name} is attacking with ${this.firepower} firepower each time`);
    }
    retreat(){
        console.log(`${this.name} is retreating!`);
    }
    takeDamage(hullPoints){
        this.hull -= hullPoints
        console.log(`${this.name} has ${this.hull} hull points so far..`);
    }
    destroyed(){
        console.log(`${this.name} is destroyed`);
    }
}

//* Alien Ship
class AlienShip {
    constructor(name, hull,firepower,accuracy){
        this.name = name
        this.hull = (Math.floor(Math.random() * 4) +3)
        this.firepower = (Math.floor(Math.random() * 3) + 2)
        this.accuracy = (Math.floor(Math.random() * 3) + 6) /10
    }
    attack(){
        console.log(`${this.name} is attacking with ${this.firepower} this time`);
    }
    takeDamage(hullPoints){
        this.hull -= hullPoints
        //this.hull = this.hull - hullpoints
        console.log(`${this.name} has ${this.hull} hull point(s) so far..`);
    }
    destroyed(){
        console.log(`${this.name} is destroyed`);
    }
}

const ship1 = new USSAssembly(20,5,.7)
console.log(ship1);

const alien1 = new AlienShip("Alien Ship 1")
const alien2 = new AlienShip("Alien Ship 2")
const alien3 = new AlienShip("Alien Ship 3")
const alien4 = new AlienShip("Alien Ship 4")
const alien5 = new AlienShip("Alien Ship 5")
const alien6 = new AlienShip("Alien Ship 6")
console.log(alien1);

//* Alien Array
let aliens = [alien1, alien2, alien3, alien4, alien5, alien6]
console.log(aliens);


// alien1.attack()
// alien1.takeDamage()
// alien1.destroyed()

// ship1.attack()
// ship1.takeDamage()
// ship1.retreat()
// ship1.destroyed()

//console.log(aliens[0].accuracy);

//* Conditionals (if statements)

//This function is targetting to aliens 
// const attack = (aliens) => {
//     if (Math.random() < aliens.accuracy) {
//         console.log('You have been hit!');
//     } else if (Math.random() > aliens.accuracy){
//         console.log('Try again');
//     }
// }

// attack(aliens[5])



if(Math.random() < ship1.accuracy){
    ship1.attack()
    alien1.takeDamage(ship1.firepower)
}

if (alien1.hull === 0) {
    alien1.destroyed()
}

//if math.random which is range of 0 and 1 including decimals is less than alien accuracy (range of .6 and .8)
if (Math.random() < alien1.accuracy){
    alien1.attack()
    ship1.takeDamage(alien1.firepower)
    //ship1 takes damage and passes through the hull points it now has 
} 
if (ship1.hull === 0) {
    ship1.destroyed()
}

if(Math.random() < ship1.accuracy){
    ship1.attack()
    alien1.takeDamage(ship1.firepower)
} else if(alien1.hull === 0){
    alien1.destroyed()
}

//create each alien ship into a function that continues using ship1 or do a for loop that goes through each alien ship until ship 1 hull is 0 or alien ship hull is 0 

//hull - firepower
//if hull reaches 0 or less, ship is destroyed
//firepower is amount of damage done to hull with sucessful hit
//accuracy is chance between 0 and 1 that ship will hit its target



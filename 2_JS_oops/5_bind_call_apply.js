const parent = {
  health: 50,
  addHealth(n1, n2) {
    console.log(this);
    this.health += n1 + n2;
  },
};

const child = {
  health: 70,
};

parent.addHealth(10, 20);
parent.addHealth.call(child, 20, 30);
parent.addHealth.apply(child, [20, 30]);

const logthis = () => {
  console.log(this);
};
const myobj = {
  name: "vishal",
};
logthis.call(myobj);

let cap = {
  name: "Steve",
  team: "Cap",
  petersTeam: function (mem1, mem2, ...otherMem) {
    console.log(
      `Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`
    );
    console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
  },
};
let ironMan = {
  name: "Tony",
  team: "Iron Man",
};

cap.petersTeam("black panther", "Winter soldier");

// borrow a fn from another obj another object
// used to call it
cap.petersTeam.call(ironMan, "Natsha", "WarMachine");

// apply -> borrow for n number of paramters
cap.petersTeam.apply(ironMan, [
  "Natsha",
  "WarMachine",
  "doctor strange",
  "loki",
  "thor",
]);

// bind -> copies function that you can call later with the same this
let ironManStolenMem = cap.petersTeam.bind(ironMan);

ironManStolenMem("Natsha", "WarMachine", "doctor strange");

ironManStolenMem("loki", "thor");

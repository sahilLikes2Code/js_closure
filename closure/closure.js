//First problem
function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  // blab();
  // setTimeout(blab, 2000);
  return blab;
}

var blabLater = nonsense("random");

var blabAgainLater = nonsense("shizz");

blabLater();
blabAgainLater();

//Second Problem

var lastNameTrier = function(firstName) {
  // var fixedFirstName = firstName;
  var innerFunction = function(lastName) {
    console.log(firstName + " " + lastName);
  };
  return innerFunction;
};
var firstNameFarmer = lastNameTrier("Farmer");
firstNameFarmer("Brown"); //logs 'Farmer Brown'

// Third Problem

function storyWriter() {

  var myObject = {
    string: "",
    addWords: function(stringArg) {
      myObject.string += stringArg;
      return myObject.string;
    },
    erase: function() {
      return "";
    }
  };
  return myObject;
}
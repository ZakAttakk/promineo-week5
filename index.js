// #1: Makes a class called School.  The constructor should create the following properties: name, size, minGrade, maxGrade, city



//#2: Add a function to the class called compareSize.  The compare size function should have 2 parameters: otherSchool and size.  Inside the function, there should be a conditional that checks if this.size < size.  If this.size < size is true, the function should log "That school is bigger".  Otherwise, it should log "That school is smaller."



//#3: Create a variable called testSchool.  The variable should store a new object using the School class.  You can make up a name, size, etc. for this object.



//#4: Run compareSize on testSchool to make sure it works.



//#5: Create a class called PublicSchool that extends School.  It should have access to all the properties and functions of School, plus two additional properties: this.charter and this.magnet (which will be booleans).  Test to make sure this new PublicSchool class works by creating a testSchool2 variable and storing an object in it.



//#6: Create a class called PrivateSchool that extends School.  It should have access to all the properties and functions of School, plus three additional properties: this.tuition, this.boarding, and this.magnet.  Test to make sure this new PrivateSchool class works by creating a testSchool3 variable and storing an object in it.



//#7: Add a function called calcRealTuitionFromIncome to the PrivateSchool class.  The function should have a parameter called income.  If income > 250000, then the function should just return the regular tuition.  If income <= 250000 and income > 150000, the function should return 70% of the tuition.  If income <= 150000, the function should return 30% of the tuition.

//Run this new function on testSchool3 to make sure that it works.



//#8: Here is an array of pretend school names:

var schoolNames = [
  "Deer Valley",
  "Laguna Bay",
  "Oak Park",
  "Spring Gardens",
  "Littlewood",
  "Hawking",
  "Greenfield",
  "Bear River",
  "Elk Creek",
  "Golden Oak",
  "Summit Technical",
  "Maple Hills",
  "Elk Creek",
  "Oak Hills",
  "Pinewood",
  "Summerfield",
  "Mountainridge",
  "Waterford",
];

// And here is an empty array:

var schoolObjects = [];

// Loop through the schoolNames array.  For each school name, use the regular School class to create a new object.  The "name" property of each new object should be one of the names from the schoolNames array.  The minGrade property of each object should be "K".  The maxGrade property of each object should be a random number from 4 to 12.  The size of each object should be a random number from 200 to 1000.  The city of each object should be "Pleasantville."

// After each object is created, push the object to the schoolObjects array.  Then log the schoolObjects array to the console.


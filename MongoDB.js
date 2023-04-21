// MongoDB 
// Course from: https://www.youtube.com/watch?v=c2M-rlkkT5o

// On the MongoDBShell
mongosh // to establish a connection
exit // to exit
cls // clean the screen

// Create new Database
show dbs // show current databases
use <dbname> // to use a database
use <newdbname> // writing a name that doesn't exist create a new db
use school // not yet visible because is empty
db.createCollection("students") // create a collection of students
db.dropDatabase() // to drop a database, not longer visible

// Insertion
db.students.InsertOne({name:"Spongbob", age:30, gpa:3.2}) // insert an element
db.students.find() // return all documents
db.students.insertMany([{name:"Patrick", age:38, gpa:1.5},{name:"Sandy", age:27, gpa:4.0},{name:"Gary", age:18, gpa:2.5}]) // insert many elements at one time

// Data types
 db.students.insertOne({
  name:"Larry", // String
  age: 32, // Integer
  gpa: 2.8, //Float
  fullTime: false, // Boolean 
  registerDate: new Date(), //Datatype
  gradutionDate: null, // no value
  courses: ["Biology", "Chemistry"], // Arrays
  address: {street:"123 Fake St.", city:"Bikini Bottom",zip:12345}}) // nested documents

//sorting
db.students.find().sort({name:1}) // sort by alfabetical order
db.students.find().sort({name:-1}) // sort by reverse alfabetical order
db.students.find().sort({gpa:1}) // sorting by ascending order
db.students.find().sort({gpa:-1}) // sorting by descending order
//limiting
db.students.find().limit(1) // only first element
db.students.find().limit(3) // only three document
// Sorting and limiting
db.students.find().sort({gpa:-1}).limit(1) // return only who has the greatest gpa value


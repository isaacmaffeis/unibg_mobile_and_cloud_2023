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
db.students.InsertOne({name:"Spongebob", age:30, gpa:3.2}) // insert an element
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

// Find
db.students.find() // all documents in this collections
.find({query},{projection})
db.students.find({name:"Spongebob"}) // all students with the specified name 
db.students.find({gpa:4.0,fullTime:true}) // AND with comma ','
db.students.find({},{name:1})    // query {} --> return every document
db.students.find({},{name:true}) // projection {name:true} --> but only give them name (and id by default)
db.students.find({},{_id:false, name:true}) // only the name
db.students.find({},{name:false}) // all the parameters except the name
db.students.find({},{name:false,gpa:true}) // MongoServerError

// Update
.updateOne(filter, update)
.updateMany(filter, update)
db.students.updateOne({name:"Spongebob"},{$set:{fullTime:true}}) // set a new field or update if existing
db.students.updateOne({_id:ObjectId("6442fec9fcb7787b7a3543a9")}, {$set:{fullTime:false}}) // safer with object id that is unique
db.students.updateOne({_id:ObjectId("6442fec9fcb7787b7a3543a9")}, {$unset:{fullTime:""}}) // remove a field
db.students.updateMany({},{$set:{fullTime:false}}) // set for everybody
db.students.updateMany({fullTime:{$exists:false}}, {$set:{fullTime:true}}) // only set if the field doesn't exist

// Delete
db.students.deleteOne({name:"Larry"}) // delete onee element with that name
db.students.deleteMany({fullTime:false}) // delete all elements with that criteria
db.students.deleteMany({registerDate:{$exists:false}}) // if the field doesn't exist delete that documents

// Comparison operators
db.students.find({name:{$ne:"Spongebob"}}) // every name that is not equal (!=) to Spongebob
db.students.find({age:{$lt:20}}) // less than (<)
db.students.find({age:{$lte:27}}) // less than equal (<=)
db.students.find({age:{$gt:27}}) // greater than (>)
db.students.find({age:{$gte:27}}) // greater than (>=)
db.students.find({gpa:{$gte:3,$lte:4}}) // between (range)
db.students.find({name:{$in:["Spongebob","Patrick","Sandy"]}}) // all documents in which the name is in the array
db.students.find({name:{$nin:["Spongebob","Patrick","Sandy"]}}) // all documents where name isn't in the array

// Logical operetors
db.students.find({$and: [{fullTime:true}, {age:{$lte:22}}]}) // AND (more conditions)
db.students.find({$or: [{fullTime:true}, {age:{$lte:22}}]})  // OR
db.students.find({$nor: [{fullTime:true}, {age:{$lte:22}}]}) // NOR (every condition must be false)
db.students.find({age: {$not:{$gte:30}}}) // NOT (also give null value)

// Indexes
db.students.find({name:"Larry"}).explain("executionStats") // linear search
db.students.createIndex({name: 1}) // create an index
name_1 // result
db.students.find({name:"Larry"}).explain("executionStats") // linear search
// now it only examinates one document
db.students.getIndexes() // display all the indexes
db.students.dropIndex("name_1") // drop an index
// applying an index to a field allows for quick lookup of that field
// but it takes more memory and it slows insert, update and remove operations
// (because you have to update the B-Tree)
// use for searching but not for updating

// Collections
show collections // show all the collections (students)
db.createCollection("teachers", {capped:true, size:1000*1024, max:100}, {autoIndexId:false})
// params: capped --> Max size 10MBytes and 100 max documents
 
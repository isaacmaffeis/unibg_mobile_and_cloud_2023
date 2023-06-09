/* Tema d'esame 25/06/2020
In MongoDB, si consideri una collezione denominata Giochi, che contiene documenti che descrivono dei giochi.
 Un paio di esempi potrebbero essere:
{   
    "Codice": "G001", 
    "Nome": "Briscola", 
    "Strumento": "Carte Bergamasche", 
    "Giocatori": 2
}, { 
    "Codice": "G002", 
    "Nome": "Briscola Chiamata", 
    "Strumento": "Carte Bergamasche", 
    "Giocatori": {"minimo": 4, "massimo":5}
}
Si scriva una query che conta quanti sono i giochi nella collezione con numero variabile di giocatori 
(campo strutturato come nel secondo documento di esempio). */

db.giochi.find({"Giocatori.minimo":{$exists:true}, "Giocatori.massimo": {$exists:true}, $expr:{$ne:["$Giocatori.minimo","$Giocatori.massimo"]}}).count()

// ------------------------------------------------------ //
/* Query su MongoDB per filtrare i dati di una collection */

// 1) Dalle Collection dei Clienti, estrarre nome e cognome dei clienti residenti in Lombardia:
db.Clienti.find({RegioneResidenza:"Lombardia"}, {_id:false, nome:true, cognome:true})

// 2) Dalle Collection dei Clienti, estrarre nome e cognome dei clienti residenti in Lombardia o in Campania
db.Clienti.find({RegioneResidenza:{$in:["Lombardia","Campania"]}},{_id:false, nome:true, cognome:true})

// 3) Dalla Collection dei Clienti, estrarre i clienti che hanno la chiave FlagUe.
db.Clienti.find({FlagUe:{$exist:true}})
// Se voglio estrarre soltanto i documenti dove FlagUE è valorizzato e diverso da null dovrò scrivere
db.Clienti.find({FlagUE:{$ne:null}})

// 4) Dalla Collection dei Clienti, estrarre i clienti con data di nascita nel 2018
db.Clienti.find({annoDiNascita:{$eq:2018}})
db.Clienti.find({$expr:{$eq:[{$year:{$toDate:"$DataNascita"}}, 2018]}})

// 5) Find documents where the spent amount exceeds the budget:
db.monthlyBudget.find({ $expr: { $gt: [ "$spent" , "$budget" ]}})

// --------------------------------------------- //
/* https://www.w3resource.com/mongodb-exercises/ */

// 1. Write a MongoDB query to display all the documents in the collection restaurants.
db.restaurants.find();

//2. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine 
// for all the documents in the collection restaurant.
restaurants> db.restaurants.find({},{"restaurant_id" : true,"name":true,"borough":true,"cuisine" : true});

//3. Write a MongoDB query to display the fields restaurant_id, name, borough and cuisine, 
// but exclude the field _id for all the documents in the collection restaurant.
restaurants> db.restaurants.find({},{"_id": false , "restaurant_id" : true,"name":true,"borough":true,"cuisine" : true});

//4. Write a MongoDB query to display the fields restaurant_id, name, borough and zip code, 
// but exclude the field _id for all the documents in the collection restaurant.
restaurants> db.restaurants.find({},{"_id":false, "name" : true, "borough" : true, "address.zipcode": true});

//5. Write a MongoDB query to display all the restaurant which is in the borough Bronx.
db.restaurants.find({"borough": "Bronx"});

//6. Write a MongoDB query to display the first 5 restaurant which is in the borough Bronx.
db.restaurants.find({"borough": "Bronx"}).limit(5);

//7. Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5);

//8. Write a MongoDB query to find the restaurants who achieved a score more than 90.
restaurants> db.restaurants.find({grades : { $elemMatch : { score : { $gt: 90}}}})

//9. Write a MongoDB query to find the restaurants that achieved a score is more than 80 but less than 100.
db.restaurants.find({grades : { $elemMatch:{score:{$gt : 80 , $lt :100}}}});

//10. Write a MongoDB query to find the restaurants which locate in a latitude value less than -95.754168.
db.restaurants.find({"address.coord.0" : {$lt : -95.754168}});

//11. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American'
// and their grade score more than 70 and lattitude less than -65.754168.
db.restaurants.find({$and : [ {cuisine:{$ne : 'American'}}, {grades : { $elemMatch : { "score" : {$gt: 9}}}}, {"address.coord.0" : {$lt : -65.754168}}]})

//12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' 
// and achieved a score more than 70 and located in the longitude less than -65.754168.
//Note : Do this query without using $and operator.
db.restaurants.find( {cuisine:{$ne : 'American'}, grades : { $elemMatch : { "score" : {$gt: 90}}}, "address.coord.0" : {$lt : -65.754168}})

//13 Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' 
// and achieved a grade point 'A' not belongs to the borough Brooklyn.
// he document must be displayed according to the cuisine in descending order.
db.restaurants.find({"cuisine" : {$ne : "American"}, "grades.grade" :"A", "borough": {$ne : "Brooklyn"}}).sort({"cuisine":-1});

//14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants 
// which contain 'Wil' as first three letters for its name.
db.restaurants.find({name: /^Wil/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

//15. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as last three letters for its name.
db.restaurants.find({name: /ces$/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

//16. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'Reg' as three letters somewhere in its name.
db.restaurants.find({"name": /.*Reg.*/},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

//17. Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dish.
db.restaurants.find({borough : "Bronx", $or: [{cuisine:"American"}, {cuisine:"Chinese"}]})

//18. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
db.restaurants.find({$or : [{borough:"Staten Island"}, {borough:"Bronx"}, {borough: "Brooklyn"}] }, {restaurant_id:1, name:1, borough:1, cuisine:1})
db.restaurants.find({"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}}, {"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

//19. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which are not belonging to the borough Staten Island or Queens or Bronxor Brooklyn.
db.restaurants.find({"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}}, {"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

//20. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which achieved a score which is not more than 10.
db.restaurants.find({"grades.score" : { $not: {$gt : 10} }}, {"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

//21. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which prepared dish except 'American' and 'Chinees' or restaurant's name begins with letter 'Wil'.
db.restaurants.find({$or: [{name: /^Wil/},{$and: [{"cuisine" : {$ne :"American "}}, {"cuisine" : {$ne :"Chinees"}}]}]},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/fruitsDb", {useNewUrlParser : true});

const fruitSchema = new mongoose.Schema({
  name : 
  {
    type : String,
    required : [true, "Primary key is required !!"]
  },
  rating : 
  {
    type : Number,
    min : 1,
    max : 10
  },
  review : String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  name : "pineapple",
  rating : 10,
  review : "tastes good"
})

// fruit.save();

const personSchema = new mongoose.Schema({
  name : String,
  age : Number,

  // embedding a schema
  favoriteFruit : fruitSchema
})

const Person = mongoose.model("Person", personSchema);

// Adding a single person to the personSchema
const person = new Person({
  name : "John",
  age : "22",

  // embedding the schema
  favoriteFruit : fruit
})
// person.save();

// Adding multiple person to the personSchema

// const p1 = new Person({
//   name : "Shubh",
//   age : 21
// })

// const p2 = new Person({
//   name : "Saurabh",
//   age : 21
// })

// const p3 = new Person({
//   name : "Aadhar",
//   age : 25
// })

// Person.insertMany([p1, p2, p3], function(err)
// {
//   if(err){console.log(err);}
//   else {console.log("successfully added all the three person to the personSchema");}
// })

// finding the data
// Person.find(function(err, person)
// {
//   if(err)console.log(err);
//   else
//   {
//     // for(var i = 0; i < person.length; i ++)
//     // {
//     //   console.log(person[i].name);
//     // }

//     //    OR

//     person.forEach(function(data)
//     {
//       console.log(data.name);
//     })

//     mongoose.connection.close();
//   }
// })

// Updating the data
// Person.updateOne({name : "Shubh"}, {name : "Shubham"}, function(err)
// {
//   if(err)console.log(err);
//   else console.log("successfully updated the data");
// })
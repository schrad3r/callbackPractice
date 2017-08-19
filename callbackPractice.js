/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });
   
and what you should write is the sayHi function that makes the code above work, 
    
   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });
    
*/


// 1. Write a function called first that returns the first item of the array using a callback function

  // Code Here
function first(array, callback) {
  callback(array[0]);
}
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ' + firstName);
  return firstName;
});



// 2. Write a function called last which returns the last item of the array using a callback function.

  //Code Here
function last(array, callback) {
  callback(array[array.length - 1]);
}

last(names, function(lastName){
  console.log('The last name in names is ' + lastName);
  return lastName;
});



// 3. Write a function called multiply that multiplies two numbers. Invoke the callback with the result of the multiplication. 

  //Code Here
function multiply(num1, num2, callback) {
  var total = num1 * num2;
  callback(total);
}


multiply(4, 3, function(answer){
  console.log('The answer is ' + answer); //should console.log 12
})



// 4. Write a function called contains that checks if a name exists in an array. 
// If it does, invoke the callback with true as an argument. 
// If the name does not exist, invoke the callback with false as an argument.

  //Code Here 
function contains(array, name, callback) {
 for (var i=0; i < array.length; i++) {
   if (array[i] == name) {
    callback(true);
   } else {
    callback(false);
   }
  }
}

contains(names, 'Colt', function(result){
  if(result === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});



// 5. Write a function called uniq that takes the names array and removes all duplicates.
// Invoke the callback with the modified array as an argument.

  //Code Here
function uniq(names, callback) {
  names = names.reverse().filter(function (e, i, arr) {
    return names.indexOf(e, i+1) === -1;
    }).reverse();
  callback(names);
}


uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


// 6. Write a function called each that takes in an array of names. For each name in the array, invoke the callback and pass in the name and the name's index as arguments.

    //Code Here 
function each(names, callback) {
  var index = 1;
  for (var i=0; i<names.length; i++) {
    callback(names[i], index);
  }
}


each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



// 7. Write a function called getUserById that looks at the array of user objects (users) and searches for a user by ID.
// When the correct user object is found, invoke the callback with the user object as an argument.

// Code here
function getUserById(users, id, callback) {
  for (var i=0; i<users.length; i++) {
    if (id == users[i].id) {
      callback(users[i]);
    }
  }
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});
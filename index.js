//CODING CHALLENGE[Profile Lookup]

var contacts = [
{
"firstName": "Akira", 
"lastName": "Laine",
"number": "0923929389",
"likes": ["Pizza", "Coding", "Brownie Points"]
},

{
"firstName": "Harry", 
"lastName": "Potter",
"number": "0994329889",
"likes": ["Hogwarts", "Magic", "Hagrid"]
},

{
"firstName": "Sherlock", 
"lastName": "Holmes",
"number": "048739989",
"likes": ["Intriguing Cases", "Violin"]
},

{
"firstName": "Kristian", 
"lastName": "Vos",
"number": "Unknown",
"likes": ["JavaScript", "Gaming", "Doves"]
},

];

function lookUpProfile(name, prop)
{
    //the first thing we'll do is iterate through each element in the contacts list
    //...to do this, we make a for loop.
    for (var i = 0; i < contacts.length; i++)
    {
        //the next thing we'll do is check if the name is a name in this list
        if(contacts[i].firstName === name) //'name' here, refers to the name that was passed in.
        {
            //if so, we're going to do something.


        }
            //if not, we're going to do something.

    }
    
}

var data = lookUpProfile("Akira", "likes");
const fs = require('fs');
const readline = require('readline');

let rl = readline.createInterface({  //I think this creates a user input feature in the terminal
    input: process.stdin,
    output: process.stdout
})

let importPhonebook = function () {
    fs.readFile('phonebook.txt', 'utf8', function(error, contacts) {
        let parsedPhonebook = JSON.parse(contacts);
        contactList = parsedPhonebook;
        return contactList;
    });
}
importPhonebook();

let stringifyPhonebook = function(phonebook){
    let phonebookInAString = JSON.stringify(phonebook);
    return phonebookInAString;
};

let writeToPhonebook = function(phonebookInAString) {
    fs.writeFile('phonebook.txt', phonebookInAString, function(err){
    });
};

let menu1 = 'Electronic Phone Book \n';
let menu2 = '===================== \n';
let menu3 = '1. Find a contact \n';
let menu4 = '2. Enter a contact \n';
let menu5 = '3. Delete a contact \n';
let menu6 = '4. List all contacts \n';
let menu7 = '5. Quit \n';

let menuList = menu1+ menu2 + menu3 + menu4 + menu5 + menu6 + menu7;

console.log(menuList);


let userPrompt = function (){
    rl.question('Enter number for selection ', function(option){
    if(option === "1"){
        findContact()
    }
    else if(option === "2"){
        enterContact()
    }
    else if(option === "3"){
        deleteContact()
    }
    else if(option === "4"){
        listContacts()
    }
    else if(option === "5"){
        goodBye()
    }
    else {
        badEntry()
    };
    rl.close;
});
}

userPrompt();

let contactList = {};





let findContact = function(){
    console.log("you selected one");
    rl.question('Enter Name:', function(name){
        rl.close();
        fs.readFile('phonebook.txt', 'utf8', function (err, contacts) {
            let parsePhonebook = JSON.parse(contacts);
            if (parsePhonebook.hasOwnProperty(name)){
                console.log(name + " " + parsePhonebook[name]);
            }
            else {
                console.log("not found");
            }
    });
    })
    userPrompt();
};

let enterContact = function(){
    rl.question('Name: ', function(name){
            let enteredName = name;
        rl.question('Number: ', function(number){
            contactList[name] = number;
            writeToPhonebook(stringifyPhonebook(contactList));
            console.log(enteredName + " added to phonebook with number:" + contactList[name])
            userPrompt();
        });
       
    });

}

let deleteContact = function(){
    rl.question("enter name to delete: ", function(removeName){
        fs.readFile('phonebook.txt', 'utf8', function (err, contacts) {
            let parsePhonebook = JSON.parse(contacts);
    })
    userPrompt();
        
};

let listContacts = function(){
    console.log('4. List All Entries')
    fs.readFile('phonebook.txt', 'utf8', function(err, contacts){
        let parsedPhonebook = JSON.parse(contacts);
            console.log(parsedPhonebook);
        });
    userPrompt();
    };


let goodBye = function(){
    console.log("Bye");
    process.exit();
};

let badEntry = function(){
    console.log("not a valid entry")
    userPrompt();
};

class AddressBookData{
   
    //constructor
    constructor(...params){
        this.fName=params[0];
        this.lName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phNo=params[6];
        this.email=params[7];

    }

    //getter and setter method
    get fName() {return this._fName;}
    set fName(fName){
        const regexFName = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(regexFName.test(fName)){
            this._fName=fName;
        }
        else
            throw "Invalid First Name";
    }
    get lName() {return this._lName;}
    set lName(lName){
        const regexLName = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(regexLName.test(lName))
            this._lName=lName;
        else
            throw "Invalid Last Name";    
    }
    get address(){
        return this._address;
    }
    set address(address){
        const regexAddress = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(regexAddress.test(address)){
           this._address = address;
        }
        else
            throw "Invalid Address";    
    }

    get city(){
        return this._city;
    }
    set city(city){
        const regexCity = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(regexCity.test(city))
            this._city = city;
        else
            throw "Invalid City";
    }

    get state(){
        return this._state;
    }
    set state(state){
        const regexState = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(regexState.test(state))
            this._state = state;
        else
            throw "Invalid State";
    }
    
    get zip(){
        return this._zip;
    }
    set zip(zip){
        const regexZip = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if(regexZip.test(zip))
            this._zip = zip;
        else
            throw "Invalid ZipCode";    
    }
    
    get phNo(){
        return this._phNo;
    }
    set phNo(phNo){
        const regexPhNo = RegExp("^[0-9]{2}[ ]{1}[0-9]{10}$");
        if(regexPhNo.test(phNo))
            this._phNo = phNo
        else
            throw "Invalid Phone No";    
    }

    get email(){
        return this._email
    }
    set email(email){
        const regexEmail = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$")
        if(regexEmail.test(email))
            this._email = email;
        else
            throw "Invalid Email";    

    }

    //method
    toString(){
        return "FirstName = " + this.fName + ", LastName = " + this.lName + ", Address = " + this.address + ", City = " + this.city + ", State = " + this.state + ", Zipcode = " + this.zip + ", PhoneNo = " + this.phNo + ", Email = " + this.email
    }
}

function updateContact(name)
{
    let flag=0;
for(let i=0; i<addressBookArray.length; i++)
{
    if(addressBookArray[i].fName==name)
    {
        const prompt=require('prompt-sync')();
        let fname=prompt("Enter New First Name")
        addressBookArray[i].fName=fname

        let lname=prompt("Enter New Last Name")
        addressBookArray[i].lName=lname

        let address=prompt("Enter New Address ")
        addressBookArray[i].address=address

        let city=prompt("Enter New City")
        addressBookArray[i].city=city

        let state=prompt("Enter New State")
        addressBookArray[i].state=state

        let zip=prompt("Enter New Zip")
        addressBookArray[i].zip=zip

        let phone=prompt("Enter New Phone Number")
        addressBookArray[i].phNo=phone

        let email=prompt("Enter New Email")
        addressBookArray[i].email=email

        console.log(addressBookArray)
        flag=1
        return
    }
    
}
if(flag==0)
console.log("Contact not found")
}

function deleteContact(name)
{
    let flag=0;
for(let i=0; i<addressBookArray.length; i++)
{
    if(addressBookArray[i].fName==name)
    {
        addressBookArray.splice(i,1);
        console.log(addressBookArray)
        flag=1
        return
    }
    
}
if(flag==0)
console.log("Contact not found")
}

function getCount(){
    return addressBookArray.reduce(count=> count+1,0);
}
function checkExists(fName, lName){
    let contactDetails;
    addressBookArray.forEach(contact => {
        if(contact.fName == fName && contact.lName == lName){
            contactDetails = contact;
        }
    });
    return contactDetails;
}
function addDetails(contact){
    if(checkExists(contact.fName,contact.lName) == null){
        addressBookArray.push(contact);
    }
    else{
        throw "Already Exists!!";
    }
}

function getPersonByCity(fName,city){
    return addressBookArray.filter(contact=> contact.fName==fName && contact.city==city);
    
}
function getPersonByState(fName,state){
    return addressBookArray.filter(contact=>contact.fName==fName &&  contact.state==state);
}

function personCountByCity(city){
    listCity=addressBookArray.filter(contact=> contact.city==city);
    return listCity.reduce(count=> count+1,0);
}
function personCountByState(state){
    listState=addressBookArray.filter(contact=> contact.state==state);
    return listState.reduce(count=> count+1,0);
}

function sortByPersonFirstName(){
    addressBookArray.sort((person1, person2) => person1.fName.localeCompare(person2.fName));
}
function sortByCity(){
    addressBookArray.sort((person1, person2) => person1.city.localeCompare(person2.city));
}
function sortByState(){
    addressBookArray.sort((person1, person2) => person1.state.localeCompare(person2.state));
}
function sortByZip(){
    addressBookArray.sort((person1, person2) => person1.zip-person2.zip);
}

function menu()
{   const prompt=require('prompt-sync')();
    let x=prompt("Press 1 to add new contact or Press 2 to edit contact or Press 3 to delete contact or Press 4 to count contacts or Press 5 to find person by city or Press 6 to find person by state or Press 7 to exit ")
    return x
}




console.log("Welcome to Address Book")
console.log("------------------------")
let addressBookArray = new Array()
while(true){
let option=menu()
switch(option)
{
case "1":
    let addressBookData = new AddressBookData("Ashutosh", "Aggarwal", "Abcstreet", "Amritsar", "Punjab", "143001", "91 9888888888", "ashutosh@gmail.com");
    let addressBookData1 = new AddressBookData("Test", "Test", "Abcstreet", "Abccity", "Abcstate", "143001", "91 9888888888", "test@gmail.com");
    let addressBookData2 = new AddressBookData("Testfirst", "Testfrist", "Streetabcd", "Ctestcityfirst", "Hteststatefirst", "151002", "91 9999999997", "test1@gmail.com");
    let addressBookData3 = new AddressBookData("Testsecond", "Testsecond", "Streetabcd", "Ktestcityfirst", "Eteststatefirst", "151005", "91 9999999997", "test1@gmail.com");
    addDetails(addressBookData3);
    addDetails(addressBookData2);
    addDetails(addressBookData1)
    addDetails(addressBookData)
    console.log(addressBookArray)
    sortByPersonFirstName()
    console.log(addressBookArray)
    sortByCity()
    console.log(addressBookArray)
    sortByState()
    console.log(addressBookArray)
    sortByZip()
    console.log(addressBookArray)
    
    break
case "2":
    const prompt=require('prompt-sync')();
    let name=prompt("Enter name of the contact to be updated: ");
    updateContact(name);
   

    break
case "3":
    const prompt1=require('prompt-sync')();
    let name1=prompt1("Enter name of the contact to be deleted: ");
    deleteContact(name1)

    break
 case "4":
        console.log(getCount())

    break
case "5":
    const prompt2=require('prompt-sync')();
    let city=prompt2("Enter name of the city ");
    let fname=prompt2("Enter First Name")
        console.log(getPersonByCity(fname,city))
        console.log(personCountByCity(city))

        break
case "6":
    const prompt3=require('prompt-sync')();
    let state=prompt3("Enter name of the state ");
    let fname1=prompt3("Enter First Name")
    console.log(getPersonByState(fname1,state))
    console.log(personCountByState(state))

        break
case "7":
    console.log("Good Bye")
    return
default:
    console.log("Enter valid option")

}}


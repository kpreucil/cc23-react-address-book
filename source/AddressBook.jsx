var React = require('react');
var AddressForm = require("./AddressForm.jsx");
var Person = require("./Person.jsx");


function PersonRecord(firstName, lastName, email, number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.number = number
};
    
var AddressBook = React.createClass({
    getInitialState: function() {
        return {
            people: [],
            businesses: []
        }
    },
    addPerson: function (){
        var newPerson = this.state.people;
        newPerson.push(new PersonRecord(this.state.firstName, this.state.lastName, this.state.email, this.state.number));
        this.setState({
            people: newPerson,
            firstName: "",
            lastName: "",
            email: "",
            number: ""
        });
    },
    
	render: function() {
		var peopleHTML = [];
        for (var i=0; i < this.state.people.length; i++) {
            peopleHTML.push(<Person
            firstName = {this.state.people[i].firstName}
            lastName = {this.state.people[i].lastName}
            email = {this.state.people[i].email}
            number = {this.state.people[i].number}
            key = {i}
            />)
        }
        return (
            <div>
               <AddressForm />
               <Person />
                {peopleHTML}
            </div>);
	},
});

module.exports = AddressBook;

//where do the functions go to add new people.
//walk through what is happening in my code.
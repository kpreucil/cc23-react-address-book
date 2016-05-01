/** addressform **/
submit: function () {
        this.props.addPerson(this.state.firstName, this.state.lastName, this.state.email, this.state.number);
    },
        
/** addressbook **/
        addPerson: function (firstName, lastName, email, number){
        var newPerson = this.state.people;
        newPerson.push(new PersonRecord(firstName, lastName, email, number));
        this.setState({
            people: newPerson
        });
    },
        
        var React = require('react');
var AddressFormPerson = require("./AddressFormPerson.jsx");
var AddressFormBiz = require("./AddressFormBiz.jsx");
var Person = require("./Person.jsx");
var Biz = require("./Biz.jsx");


function PersonRecord(firstName, lastName, email, number) {
    this.firstName = firstName +" ";
    this.lastName = lastName + " ";
    this.email = email + " ";
    this.number = number
};

function BizRecord(firstName, lastName, email, number, bizName, website) {
    this.firstName = firstName +" ";
    this.lastName = lastName + " ";
    this.email = email + " ";
    this.number = number + " ";
    this.bizName = bizName + " ";
    this.website = website
};

/** In case putting everything into 1 array does not work **/
    
var AddressBook = React.createClass({
    getInitialState: function() {
        return {
            people: [],
            businesses: [],
            contacts: []
        }
    },
    addPerson: function (firstName, lastName, email, number){
        var newPerson = this.state.people;
        newPerson.push(new PersonRecord(firstName, lastName, email, number));
        this.setState({
            people: newPerson,
            
        });
    },
    addBiz: function (firstName, lastName, email, number, bizName, website){
        var newBiz = this.state.businesses;
        newBiz.push(new PersonRecord(firstName, lastName, email, number, bizName, website));
        this.setState({
            businesses: newBiz,
            
        });
    },
    
	render: function() {
		var peopleHTML = [];
        var bizHTML = [];
        for (var i=0; i < this.state.people.length; i++) {
            peopleHTML.push(<Person
            firstName = {this.state.people[i].firstName}
            lastName = {this.state.people[i].lastName}
            email = {this.state.people[i].email}
            number = {this.state.people[i].number}
            key = {i}
            />)
        }
        for (var i=0; i < this.state.businesses.length; i++) {
            bizHTML.push(<Biz
            firstName = {this.state.businesses[i].firstName}
            lastName = {this.state.businesses[i].lastName}
            email = {this.state.businesses[i].email}
            number = {this.state.businesses[i].number}
            bizName = {this.state.businesses[i].bizName}
            website = {this.state.businesses[i].website}
            key = {i}
            />)
        }
        return (
            <div >
                <div className="bold gray caps">
                  <h2>Add A Friend</h2>
                   <AddressFormPerson addPerson = {this.addPerson} />
                   <br />
               </div>
                <div className="bold gray caps">
                  <h2>Add A Business</h2>
                   <AddressFormBiz addBiz = {this.addBiz} />
                   <br />
               </div>
                <div className="bkgGray">
                    {peopleHTML}
                    {bizHTML}
                </div>
            </div>
            );
	},
});

module.exports = AddressBook;

//where do the functions go to add new people.
//walk through what is happening in my code.
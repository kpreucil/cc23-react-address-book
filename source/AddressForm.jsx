var React = require('react');
var AddressBook = require("./AddressBook.jsx");

var AddressForm = React.createClass({
    getInitialState: function () {
        return {
            firstName: "",
            lastName: "",
            email: "",
            number: ""
        }
    },
    changeFirstName: function (evt) {
        this.setState({
            firstName:evt.target.value
        })
    },
    changeLastName: function (evt) {
        this.setState({
            lastName:evt.target.value
        })
    },
    changeEmail: function (evt) {
        this.setState({
            email:evt.target.value
        })
    },
    changeNumber: function (evt) {
        this.setState({
            number:evt.target.value
        })
    },
    handleSubmit: function () {
        this.props.addPerson();
    },
    render: function () {
        return (
            <div>
                <label >First Name </label>
                {this.props.firstName}
                    <input 
                      type="text" 
                      value={this.state.firstName}
                      onChange = {this.changeFirstName} />
                        <br /><br />
                
                {this.props.lastName}
                <label >Last Name </label>
                    <input 
                      type="text" 
                      value={this.state.lastName}
                      onChange = {this.changeLastName} />
                    <br /><br />
                    
                {this.props.email}
                <label >Email </label>
                     <input 
                      type="text" 
                      value={this.state.email}
                      onChange = {this.changeEmail} />
                        <br /><br />
                 
                {this.props.number}       
                <label >Phone </label>
                    <input 
                      type="text" 
                      value={this.state.number}
                      onChange = {this.changeNumber} />
                    <br /><br />
                <button onClick = {this.handleSubmit}>Save</button>
            </div>
        )
    }
});

module.exports = AddressForm;
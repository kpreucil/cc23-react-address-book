var React = require('react');
var AddressBook = require("./AddressBook.jsx");

var AddressForm = React.createClass({
    getInitialState: function () {
        return {
            firstName: "",
            lastName: "",
            email: "",
            number: "",
            bizName: "",
            website: ""
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
    changeBizName: function (evt) {
        this.setState({
            bizName:evt.target.value
        })
    },
    changeWebsite: function (evt) {
        this.setState({
            website:evt.target.value
        })
    },
    handleSubmit: function (evt) {
        this.props.addBiz(this.state.firstName, this.state.lastName, this.state.email, this.state.number, this.state.bizName, this.state.website);
    },
    render: function () {
        return (
            <div>
                <label>First Name </label>
                {this.props.firstName}
                    <input 
                      type="text" 
                      value={this.state.firstName}
                      onChange = {this.changeFirstName} />
                        <br /><br />
                
                {this.props.lastName}
                <label>Last Name </label>
                    <input 
                      type="text" 
                      value={this.state.lastName}
                      onChange = {this.changeLastName} />
                    <br /><br />
                    
                {this.props.email}
                <label>Email </label>
                     <input 
                      type="text" 
                      value={this.state.email}
                      onChange = {this.changeEmail} />
                        <br /><br />
                 
                {this.props.number}       
                <label>Phone </label>
                    <input 
                      type="text" 
                      value={this.state.number}
                      onChange = {this.changeNumber} />
                    <br /><br />
                    
                {this.props.bizName}       
                <label>Business Name </label>
                    <input 
                      type="text" 
                      value={this.state.bizName}
                      onChange = {this.changeBizName} />
                    <br /><br />
                    
                {this.props.website}       
                <label >Website </label>
                    <input 
                      type="text" 
                      value={this.state.website}
                      onChange = {this.changeWebsite} />
                    <br /><br />
                <button onClick = {this.handleSubmit}>Save</button>
            </div>
        )
    }
});

module.exports = AddressForm;


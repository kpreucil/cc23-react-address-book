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
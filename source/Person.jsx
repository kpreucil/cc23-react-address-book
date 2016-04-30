var React = require('react');


var Person = React.createClass({
	render: function() {
        return (
            <div>
              {this.props.firstName}
               {this.props.lastName}
               {this.props.email}
               {this.props.number}
            </div>)
	},
});

module.exports = Person;
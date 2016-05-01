var React = require('react');


var Biz = React.createClass({
	render: function() {
        return (
            <div>
              {this.props.firstName}
               {this.props.lastName}
               {this.props.email}
               {this.props.number}
               {this.props.bizName}
               {this.props.website}
            </div>)
	},
});

module.exports = Biz;
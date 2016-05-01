var React = require('react');

var SearchBar = React.createClass({
  render: function(){
    return (
      <ul>
      {
        
        this.props.contacts.map(function(item, index) {
          return <li key={index}>{item}</li>
        })
       }
      </ul>
    )  
  }
});

module.exports = SearchBar;


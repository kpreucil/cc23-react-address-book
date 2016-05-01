var React = require('react');
/** var SearchBar = require("./SearchBar.jsx"); **/

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

var FilteredSearch = React.createClass({
    
    getInitialState: function(){
         return { 
           contacts: this.state.people.concat(this.state.businesses),
           searchArr: [] 
         }
    },
    
    filterList: function(event){
        var updatedList = this.state.contacts; 
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({searchArr: updatedList}); 
    },
    componentWillMount: function(){ 
        this.setState({searchArr: this.state.contacts}) 
    },

    render: function(){
        return (
          <div className="filter-list">
             <input type="text" placeholder="Search" onChange={this.filterList}/> 
             <SearchBar searchArr={this.state.searchArr}/>
          </div>
        );
      }
    });

module.exports = FilteredSearch;
<FilterSearch filterList = {this.filterList}/>

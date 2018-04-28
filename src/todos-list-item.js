import React, { Component } from 'react';

export class TodosListItem extends Component {
  constructor (props){
    super(props);

    this.state = {
isEditing: false
    };
  }
  renderTaskSection(){
    return(
<td>{this.props.task}</td>
    );
  }
  renderActionSection(){
    if(this.state.isEditing) {
      return(
        <td>
<button>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
          </td>
      );
    }
    return(
      <td>
<button onClick={this.onEditClick.bind(this)}>Edit</button>
          <button>Delete</button>
          </td>
    );
  }
  render() {
    return (
        <tr>
         {this.renderTaskSection()}
         {this.renderActionSection()}
        </tr>
    );
  }
  onEditClick(){
    this.setState({ isEditing: true});
  }
  onCancelClick(){
    this.setState({ isEditing: false});
  }
}
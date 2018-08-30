import React, { Component } from 'react';
import { Segment, Button, Icon } from "semantic-ui-react";

import "./Item.css";



class Item extends Component {
  state = {
    completed: false
  }

  handleCompleteBtn = id => {
    this.setState({completed: !this.state.completed});
    this.props.completedItem(id);
  }

  render () {
    const { todo, deleteItem } = this.props; 
    return (
      <Segment attached className="single-item">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button className="completed_btn" circular basic={ this.state.completed ? false : true } color="green" icon="check" size="tiny" onClick={() => this.handleCompleteBtn(todo.id)}/>
          <p>{ todo.title }</p>
        </div>
        <div>
          {/* <Icon name="ellipsis vertical" size="large"/> */}
          <Button circular basic color="red" icon="trash alternate" onClick={() => deleteItem(todo.id)}/>
        </div>
      </Segment>
        
    );
  }
}

export default Item;


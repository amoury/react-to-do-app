import React, { Component } from "react";
import { Segment, Container, Button, Icon, Form } from "semantic-ui-react";

class ItemInput extends Component {
  state = {
    inputValue: ""
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  onAddItem = (e) => {
    if(this.state.inputValue.length <= 0) return null;
    const newTodo = {};
    newTodo.id = +new Date();
    newTodo.title = this.state.inputValue;

    this.props.addItem(newTodo);
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      <Segment raised>
        <Container>
          <Form>
            <div className="ui fluid action input">
              <input 
                type="text" 
                name="title" 
                placeholder="Enter a new To Do Item" 
                value={this.state.inputValue}
                onChange={this.handleInputChange}
              />

              <Button color="teal" labelPosition="right" icon onClick={this.onAddItem}>
                <Icon name="add circle" />
                Add
              </Button>
            </div>
          </Form>


          
        </Container>
      </Segment>
    );
  }
}

export default ItemInput;

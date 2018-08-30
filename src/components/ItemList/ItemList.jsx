import React from 'react';
import { Container } from 'semantic-ui-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Item from '../Item';
import './ItemList.css';

const ItemList = ({todos, deleteItem, completedItem}) => {

  const renderTodos = todos.map( todo => (
    <CSSTransition key={todo.id} in={true} appear={true} timeout={1000} classNames="fade">  
      <Item key={todo.id} todo={todo} deleteItem={deleteItem} completedItem={completedItem}/>
    </CSSTransition>
  ));

  return (
    <Container style={{ position: "relative" }}>
      <TransitionGroup>
          { renderTodos }
      </TransitionGroup>
    </Container>
  )
}

export default ItemList

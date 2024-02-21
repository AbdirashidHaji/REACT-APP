import React from 'react';

const TodoItem = ({ todo }) => {
  return (
    <li>
      {todo.text} - Created At: {todo.createdAt.toLocaleString()}
    </li>
  );
};

export default TodoItem;

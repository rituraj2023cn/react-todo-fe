import React from "react";
import axios from "axios";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const handleUpdate = async () => {
    try {
      const updatedTodo = {
        ...todo,
        completed: !todo.completed,
      };
      await updateTodo(todo.id, updatedTodo);
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={handleUpdate} />
      <span>{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;

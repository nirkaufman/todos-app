import {useContext, useEffect, useRef, useState} from "react";
import {ListContext} from "../providers/list-context";
import {AuthContext} from "../providers/auth-context";

export function Header({ title }) {
  const inputRef = useRef(null);
  const { addTodo } = useContext(ListContext);
  const { role, name } = useContext(AuthContext);

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  function handleTaskInput(event) {
    if(role !== 'admin') {
      alert('YOU ARE NOT AN ADMIN');
      return
    }
    if(event.key === 'Enter') {
      addTodo(event.target.value)
    }
  }

  return (
      <header className="header">
        <h1>{title}</h1>
        <input className="new-todo"
               ref={inputRef}
               placeholder={`Hello ${name}`}
               onKeyUp={handleTaskInput}
               autoFocus/>
      </header>
  );
}

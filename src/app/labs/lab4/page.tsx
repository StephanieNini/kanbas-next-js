"use client"
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariable from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ChildStateComponent from "./ChildStateComponent";
import store from "./store";
import { Provider } from "react-redux"
import AddRedux from "./ReduxExamples/AddRedux";
import CounterRedux from "./ReduxExamples/CounterRedux";
import HelloRedux from "./ReduxExamples/HelloRedux";
import TodoForm from "./ReduxExamples/todos/TodoForm";
import TodoList from "./ReduxExamples/todos/TodoList";
import TodoItem from "./ReduxExamples/todos/TodoItem";


export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <Provider store={store}>
    <div id="wd-passing-functions">
        <h2>Lab 4</h2>
        <ClickEvent />
        <PassingDataOnEvent />
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariable />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />
        <ParentStateComponent />
        <ReduxExamples />
        <HelloRedux />
        <CounterRedux />
        <AddRedux />

        <TodoList />


    </div>
    </Provider>
  );
}

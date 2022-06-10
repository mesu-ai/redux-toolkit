import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todosReducer from "../features/todos/todosSlice";

const store=configureStore({
    reducer: {
        counter: counterReducer,
        todos:todosReducer,
    }


});
// console.log(store);

export default store;
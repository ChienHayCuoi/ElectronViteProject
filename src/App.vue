<script setup lang="ts">
import { ref } from "vue";

const newTodo = ref("");
const todos = ref<string[]>([]);
const message = ref("");

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value.trim());
    newTodo.value = "";
    message.value = "";
  } else {
    message.value = "Vui lòng nhập nội dung todo!";
  }
};

const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
};

const clearAll = () => {
  todos.value = [];
};
</script>

<template>
  <div class="app">
    <h2>Todo App</h2>
    <div class="input-group">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add your new todo"
      />
      <button @click="addTodo" class="add">✚</button>
    </div>
    <div v-if="message" class="message">{{ message }}</div>
    <div class="status-row" v-if="todos.length">
      <span>Bạn có {{ todos.length }} pending tasks </span>
      <button @click="clearAll" class="clear">Clear All</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button class="delete" @click="removeTodo(index)">🗑️</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.app {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  font-family: sans-serif;
}
input {
  width: calc(100% - 50px);
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
}
.buttons {
  display: flex;
  margin-bottom: 1rem;
  vertical-align: top;
}
button {
  padding: 0.4rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.add {
  background: #10b981;
  color: white;
  margin-left: 5px;
  padding: 0.5rem 1rem;
}
.clear {
  background: #ef4444;
  color: white;
  width: 95px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f3f4f6;
  margin-bottom: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  position: relative;
}
li:hover .delete {
  display: inline;
}
.delete {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  display: none;
  transition: color 0.2s;
}
li:hover .delete {
  color: white;
}
.input-group {
  display: flex;
  margin-bottom: 1rem;
}
.input-group input {
  flex: 1;
  border-radius: 8px 0 0 8px;
  border-right: none;
  margin-bottom: 0;
}
.input-group .add {
  border-radius: 0 8px 8px 0;
  margin-left: 0;
  background: #a259fa;
  color: #fff;
  font-size: 1.2rem;
  width: 44px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.status-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  background: #f3f4f6;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 1rem;
  gap: 15px;
}
.message {
  color: #ef4444;
  font-size: 0.9rem;
  margin: -0.5rem 0 1rem 0;
  padding: 0.5rem;
  background: #fee2e2;
  border-radius: 6px;
}
</style>

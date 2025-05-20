<script setup lang="ts">
import { ref } from "vue";
import Button from "primevue/button";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import InputText from "primevue/inputtext";

const toast = useToast();
const newTodo = ref("");
const todos = ref<string[]>(["Học bài", "Đá bóng", "Xem phim"]);

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value.trim());
    newTodo.value = "";
    toast.add({
      severity: "success",
      summary: "Thành công",
      detail: "Đã thêm todo mới!",
      life: 3000,
    });
  } else {
    toast.add({
      severity: "error",
      summary: "Lỗi",
      detail: "Vui lòng nhập nội dung todo!",
      life: 3000,
    });
  }
};

const removeTodo = (index: number) => {
  todos.value.splice(index, 1);
  toast.add({
    severity: "success",
    summary: "Thành công",
    detail: "Đã xóa todo!",
    life: 3000,
  });
};

const clearAll = () => {
  todos.value = [];
  toast.add({
    severity: "info",
    summary: "Thông báo",
    detail: "Đã xóa tất cả todo!",
    life: 3000,
  });
};
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-8"
  >
    <Toast />
    <div class="w-full max-w-lg mx-auto px-4">
      <div class="bg-white rounded-2xl shadow-2xl p-8 border border-indigo-100">
        <h2
          class="text-3xl font-extrabold text-indigo-700 mb-8 text-center tracking-tight drop-shadow-sm"
        >
          <span class="inline-block align-middle">📝</span> Todo App
        </h2>

        <div class="flex gap-3 mb-6">
          <InputText
            v-model="newTodo"
            @keyup.enter="addTodo"
            placeholder="Thêm todo mới..."
            class="flex-1 !border !border-black !rounded-lg focus:!ring-2 px-4 py-2"
          />
          <Button
            icon="pi pi-plus"
            @click="addTodo"
            class="!bg-indigo-500 !px-4 !py-2 !rounded-lg transition-all duration-200 hover:!shadow-lg hover:!scale-105 [&_.p-button-icon]:!text-sm"
          />
        </div>

        <div
          v-if="todos.length"
          class="bg-indigo-50 p-4 rounded-lg mb-6 flex justify-between items-center border border-indigo-100"
        >
          <span class="text-indigo-700 font-medium mr-4">
            Bạn có <span class="font-bold">{{ todos.length }}</span> công việc
            cần làm
          </span>
          <Button
            label="Xóa tất cả"
            @click="clearAll"
            class="!bg-red-500 hover:!bg-red-500 !px-4 !py-2 !rounded-lg transition-all duration-200 hover:!shadow-lg hover:!scale-105"
          />
        </div>

        <ul class="space-y-4">
          <li
            v-for="(todo, index) in todos"
            :key="index"
            class="bg-white p-4 rounded-xl flex justify-between items-center group border border-gray-100 shadow hover:shadow-lg transition cursor-pointer hover:bg-indigo-50"
          >
            <span class="text-gray-800 text-base">{{ todo }}</span>
            <Button
              icon="pi pi-trash"
              @click="removeTodo(index)"
              class="p-button-danger p-button-rounded p-button-text hover:!bg-red-600 !px-4 !py-2 !rounded-lg transition-all duration-200 hover:!scale-110"
            />
          </li>
        </ul>

        <div v-if="!todos.length" class="text-center text-gray-400 mt-8">
          <span>🎉 Không có công việc nào!</span>
        </div>
      </div>
    </div>
  </div>
</template>

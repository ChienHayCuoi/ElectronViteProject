import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.component("InputText", InputText);
app.component("Button", Button);
app.component("Toast", Toast);

app.mount("#app").$nextTick(() => {
  // Use contextBridge
  window.ipcRenderer?.on?.("main-process-message", (_event, message) => {
    console.log(message);
  });
});

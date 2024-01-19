import { createPinia } from 'pinia';


export function installPinia (app) {
    app.use(createPinia());
}

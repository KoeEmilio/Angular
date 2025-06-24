import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';  
import { appConfig } from './app/app.config';  // Cambiar 'config' por 'appConfig'

const bootstrap = () => bootstrapApplication(App, appConfig);  // Usar 'appConfig'

export default bootstrap;
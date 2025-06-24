import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';  // Importar App en lugar de AppComponent
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
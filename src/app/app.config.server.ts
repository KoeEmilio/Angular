import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';
import { appConfig } from './app.config';
import { routes } from './app.routes';

// Fusionar la configuración del cliente con la del servidor
export const serverConfig = mergeApplicationConfig(appConfig, {
  providers: [
    provideServerRendering()
  ]
});

import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false, // يمنع الـ auto switching مع الـ OS
        },
      },
      license:
        'eyJpZCI6ImYyY2Q2MDZjLTU1OTUtNDEzYi05ZTU4LTAyYzYyYzI4NzVjYyIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODY1MDI5MDgsImV4cCI6MTgxODAzODkwOH0.rTgkvlubNxFzNzzlEHxCd05zVAfUaRODHtvJoXynveWUIdo6KMglUp7Ijuj-BsyAVl9AsD7NDPReCCK4RLC-Aw',
    }),
  ],
};

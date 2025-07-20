import { bootstrapApplication } from '@angular/platform-browser';
//import { ApologyComponent } from './app/apology.component';
import { ApologyComponent } from './app/apology/apology.component';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(ApologyComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(BrowserAnimationsModule)
  ]
});

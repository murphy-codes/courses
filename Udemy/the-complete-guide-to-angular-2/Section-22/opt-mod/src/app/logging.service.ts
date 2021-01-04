import { Injectable } from '@angular/core';

// @Injectable({ providedIn: 'root' })
export class LoggingService {
  lastlog: string;

  printLog(message: string) {
    console.log('New Message = ', message);
    console.log('Old Message = ', this.lastlog);
    this.lastlog = message;
  }
}

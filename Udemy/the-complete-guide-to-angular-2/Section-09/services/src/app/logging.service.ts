export class LoggingService { // we could precede this class decaration with "@Injectable()" but that is only *needed* on classes that will receive an injection
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
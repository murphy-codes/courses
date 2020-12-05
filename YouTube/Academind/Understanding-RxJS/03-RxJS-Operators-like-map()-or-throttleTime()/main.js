var observable = Rx.Observable.interval(1000);
var observer = {
	next: function(value) {
  	console.log(value);
  }
};

observable.map(function(value) {
	return 'Number: ' + value;
}).throttleTime(2100).subscribe(observer);
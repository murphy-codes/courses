var observable = Rx.Observable.interval(250);

observable
.filter(function(value) {
	return value % 4 == 0;
})
.subscribe({
	next: function(value) {
  	console.log(value);
  },
  error: function(error) {
  	console.log('Error: ', error);
  }
});
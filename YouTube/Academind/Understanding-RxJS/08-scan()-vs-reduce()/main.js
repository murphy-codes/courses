var observable = Rx.Observable.of(1,2,3,4,5);

// emits each element *of* list synchronously, immediately
/* observable
.subscribe({
  next: function(value) {
    console.log(value);
  }
}); */

// Functions like Array.reduce() ... only emitting the final value
/* observable
.reduce((total, currentValue) => {
  return total + currentValue;
}, 0)
.subscribe({
  next: function(value) {
    console.log(value);
  }
}); */

// Works like reduce, but also emits each successive value
observable
.scan((total, currentValue) => {
  return total + currentValue;
}, 0)
.subscribe({
	next: function(value) {
  	console.log(value);
  }
});
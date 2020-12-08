var input = document.querySelector('input');
var observable = Rx.Observable.fromEvent(input, 'input');

// Here our distinctUntilChanged() will not function as intended 
//   because A NEW EVENT WAS EMITTED?
/* observable
.debounceTime(500)
.distinctUntilChanged()
.subscribe({
  next: function(event) {
    console.log(event.target.value);
  }
}); */

// We could solve using map(T, R), which emits values after a function
/* observable
.map(event => event.target.value)
.debounceTime(500)
.distinctUntilChanged()
.subscribe({
  next: function(value) {
    console.log(value);
  }
}); */

//pluck(T, R) is intended for this - picking one (nested) property
observable
.pluck('target', 'value')
.debounceTime(500)
.distinctUntilChanged()
.subscribe({
	next: function(value) {
  	console.log(value);
  }
});
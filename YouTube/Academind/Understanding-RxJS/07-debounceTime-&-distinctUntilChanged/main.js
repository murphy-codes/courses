var input = document.querySelector('input');
var observable = Rx.Observable.fromEvent(input, 'input');

/* observable
.subscribe({
  next: function(event) {
    console.log(event.target.value);
  }
}); */

observable
.map(event => event.target.value)
.debounceTime(500)
.distinctUntilChanged()
.subscribe({
  next: function(value) {
    console.log(value);
  }
});
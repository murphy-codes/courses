var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');

var span = document.querySelector('span');

var obs1 = Rx.Observable.fromEvent(input1, 'input');
var obs2 = Rx.Observable.fromEvent(input2, 'input');

/* obs1.subscribe(
  (event) => span.textContent = event.target.value
);

obs2.subscribe(
  (event) => span.textContent = event.target.value
); */

obs1.mergeMap(
  event1 => {
    return obs2.map(
      event2 => event1.target.value + ' ' + event2.target.value
    )
  }
).subscribe(
  combinedValue => span.textContent = combinedValue
);
var button = document.querySelector('button');

var obs1 = Rx.Observable.fromEvent(button, 'click');
var obs2 = Rx.Observable.interval(1000);

// truing this method will result in creating multiple
/* obs1.subscribe(
  (event) => obs2.subscribe(
    (value) => console.log(value)
  )
); */

// switchMap will cancel old subscriptions
obs1.switchMap(
  event => {
    return obs2
  }
).subscribe(
 (value) => console.log(value)
);
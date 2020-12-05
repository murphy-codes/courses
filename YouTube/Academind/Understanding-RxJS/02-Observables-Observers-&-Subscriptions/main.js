var button = document.querySelector('button');

var observer = {
	next: function(value) {
  	// console.log(value);
  	console.log(value. clientX, value. clientY);
  },
  error: function(error) {
  	console.log(error);
  },
  complete: function() {
  	console.log('Completed');
  }
};

/* Rx.Observable.fromEvent(button, 'click') */
var subscription = Rx.Observable.create(function(obs) {
	//obs.next('A value');
  //obs.error('Error');
  //setTimeout(function() {
  //	obs.complete();
  //  obs.next('A 2nd value');
  //}, 2000);
  button.onclick = function(event) {
  	obs.next(event);
  }
})
	.subscribe(
    observer
  	/* (value) => console.log(value. clientX, value. clientY) */
  );
  
setTimeout(function() {
	subscription.unsubscribe();
}, 5000);
<img src="https://i.ytimg.com/vi/X9fdpGthrXA/maxresdefault.jpg" width="10%" height="10%">

# [Fix your RxJS 6 Imports & Operators](https://www.youtube.com/watch?v=X9fdpGthrXA)

RxJS 6 was released and unlike older RxJS versions, it requires you to adjust your code. The import paths changed due to internal structure changes and you'll also have to use operators a bit differently.

---

### The quick fix for updating a project to RxJS6

> `npm install --save rxjs-compat`

This should ensure backward compatibility, not requiring changes to old code, and not (bloating) adding too much size to your bundle

---

### `pipe()`

RxJS6 changed their package structure (resulting in a smaller bundle size, but also requiring updated import statements and operators) and pipeable operators.


from: `import { Observable } from 'rxjs/Observable'`
&nbsp;&nbsp;&nbsp; to: `import { Observable } from 'rxjs'`

from: `import 'rxjs/add/operator/map'`
&nbsp;&nbsp;&nbsp; to: `import { map } from 'rxjs/operators'`

from: `import 'rxjs/add/observable/fromPromise'`
&nbsp;&nbsp;&nbsp; to: `import { fromPromise } from 'rxjs'`

<br>

from:
```
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/throttle';
someObservable
  .map(...)
  .throttle(...)
  .subscribe(...)
```
&nbsp;&nbsp;&nbsp; to:
```
import { map, throttle } from 'rxjs/operators'

someObservable
  .pipe(map(...),
        throttle(...))
  .subscribe(...)
```

<br>

Due to pipeable operators, some operators needed to be renamed because they clashed with reserved words in JavaScript → because we're not calling them as methods anymore, they're now normal functions so they can't be named JS keywords. We see the following changes:

| prev        | new            |
| ----------- | -------------- |
| `do()`      | `tap()`        |
| `catch()`   | `catchError()` |
| `switch()`  | `switchAll()`  |
| `finally()` | `finalize()`   |
| `throw()`   | `throwError()` |
# reactive-extensions

Reactive Extensions for JS

* Observables
  * Observable
  * Streamable (Flowable)
  * [Maybe](https://github.com/LXSMNSYC/rx-maybe)
  * [Single](https://github.com/LXSMNSYC/rx-single)
  * [Completable](https://github.com/LXSMNSYC/rx-completable)
* Subjects
  * ObservableSubject
  * MaybeSubject
  * SingleSubject
  * CompletableSubject
* [Scheduler](https://github.com/LXSMNSYC/rx-scheduler)

All Observables are extended in this package to allow observable conversion, scheduling, and other features.

## Installation

* NPM

```bash
npm i reactive-extensions
```

* CDN
  * jsDelivr
  
  ```html
  <script src="https://cdn.jsdelivr.net/npm/rx-scheduler/dist/index.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/rx-maybe/dist/index.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/rx-single/dist/index.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/rx-completable/dist/index.min.js"></script>
  ```

  * unpkg

  ```html
  <script src="https://unpkg.com/rx-scheduler/dist/index.min.js"></script>
  <script src="https://unpkg.com/rx-maybe/dist/index.min.js"></script>
  <script src="https://unpkg.com/rx-single/dist/index.min.js"></script>
  <script src="https://unpkg.com/rx-completable/dist/index.min.js"></script>
  ```

## Difference between reactive-extensions and RxJS

There is already an existing ReactiveX implementation in JS called [RxJS](https://github.com/ReactiveX/rxjs). `reactive-extensions` does not intend to replace RxJS, as this library was meant for educational purposes but evolved into a library that can be used for production. You can use either of two, but both libraries does not interop with one another.

Below is the comparison table between `reactive-extensions` and RxJS

| Behavior | reactive-extensions | RxJS |
| --- | --- | --- |
| Code | Written in pure JavaScript. | Written in TypeScript. |
| Observable Extensions | Supports `Maybe`, `Single`, `Completable` and `Streamable`/`Flowable` | None |
| Operator Composition | Can both wrap the `Emitter` (through `compose`) and the `Observer` (through `lift`). | Wraps the `Subscriber`. |
| Operators | Bundled with their respective classes. Other operators returns a different type of Observable. | Exportable as an individual module. |
| Pipelines | Using `compose`. | Using `pipe` |
| Subscription | Uses the [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) | Uses the `Subscription` class. |
| [TC39 Observable](https://github.com/tc39/proposal-observable) | No. | Yes. | 
| Performance | `needs testing` | `needs testing` |

## Useful Links

* [Official Reactive Extensions Website](http://reactivex.io/)
* [ReactiveX Marbles](https://rxmarbles.com/)
* [Using the AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
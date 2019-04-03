import AbortController from 'abort-controller';
import Scheduler from 'rx-scheduler';
import Single from 'rx-single';

/**
 * @ignore
 */
function subscribeActual(observer) {
  const { onSuccess, onError, onSubscribe } = observer;

  const { amount, scheduler } = this;

  const controller = new AbortController();

  const { signal } = controller;

  onSubscribe(controller);

  if (signal.aborted) {
    return;
  }

  const c = scheduler.delay(() => {
    this.source.subscribeWith({
      onSubscribe(ac) {
        signal.addEventListener('abort', () => ac.abort());
      },
      onSuccess(x) {
        onSuccess(x);
        controller.abort();
      },
      onError(x) {
        onError(x);
        controller.abort();
      },
    });
  }, amount);

  signal.addEventListener('abort', () => c.abort());
}
/**
 * @ignore
 */
export default (source, amount, scheduler = Scheduler.current) => {
  if (typeof amount !== 'number') {
    return source;
  }
  if (!(scheduler instanceof Scheduler.interface)) {
    return source;
  }
  const single = new Single();
  single.source = source;
  single.amount = amount;
  single.scheduler = scheduler;
  single.subscribeActual = subscribeActual.bind(single);
  return single;
};
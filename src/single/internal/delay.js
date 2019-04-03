import AbortController from 'abort-controller';
import Scheduler from 'rx-scheduler';
import Single from 'rx-single';
/**
 * @ignore
 */
function subscribeActual(observer) {
  const { onSuccess, onError, onSubscribe } = observer;

  const { amount, scheduler, doDelayError } = this;

  const controller = new AbortController();

  const { signal } = controller;

  onSubscribe(controller);

  if (signal.aborted) {
    return;
  }

  this.source.subscribeWith({
    onSubscribe(ac) {
      signal.addEventListener('abort', () => {
        ac.abort();
      });
    },
    onSuccess(x) {
      const ac = scheduler.delay(() => {
        onSuccess(x);
        controller.abort();
      }, amount);

      signal.addEventListener('abort', () => {
        ac.abort();
      });
    },
    onError(x) {
      const ac = scheduler.delay(() => {
        onError(x);
        controller.abort();
      }, doDelayError ? amount : 0);

      signal.addEventListener('abort', () => {
        ac.abort();
      });
    },
  });
}
/**
 * @ignore
 */
export default (source, amount, scheduler = Scheduler.current, doDelayError) => {
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
  single.doDelayError = doDelayError;
  single.subscribeActual = subscribeActual.bind(single);
  return single;
};

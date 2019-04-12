import Completable from 'rx-completable';
import { LinkedCancellable } from 'rx-cancellable';
import { cleanObserver } from '../utils';


function subscribeActual(observer) {
  const { onComplete, onError, onSubscribe } = cleanObserver(observer);

  const controller = new LinkedCancellable();

  onSubscribe(controller);

  this.source.subscribeWith({
    onSubscribe(ac) {
      controller.link(ac);
    },
    onSuccess() {
      onComplete();
    },
    onError,
  });
}

export default (source) => {
  const completable = new Completable(subscribeActual);
  completable.source = source;
  return completable;
};

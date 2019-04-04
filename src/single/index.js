import Single from 'rx-single';

import delay from './internal/delay';
import delaySubscription from './internal/delaySubscription';

export default class SingleEx extends Single {
  delay(amount, doDelayError, scheduler) {
    return delay(this, amount, scheduler, doDelayError);
  }

  delaySubscription(amount, scheduler) {
    return delaySubscription(this, amount, scheduler);
  }
}

import Single from 'rx-single';

import delayScheduled from './internal/delay';
import delaySubscriptionScheduled from './internal/delaySubscription';


Single.prototype.delay = function (amount, delayOnError, scheduler) {
  return delayScheduled(this, amount, scheduler, delayOnError);
};

Single.prototype.delaySubscription = function (amount, scheduler) {
  return delaySubscriptionScheduled(this, amount, scheduler);
};

export default Single;

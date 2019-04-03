import Single from 'rx-single';

import delayScheduled from './internal/delayScheduled';
import delaySubscriptionScheduled from './internal/delaySubscriptionScheduled';


Single.prototype.delay = function (amount, delayOnError, scheduler) {
  return delayScheduled(this, amount, scheduler, delayOnError);
};

Single.prototype.delaySubscription = function (amount, scheduler) {
  return delaySubscriptionScheduled(this, amount, scheduler);
};

export default Single;

import { identity, throwError, isFunction } from "../utils";

/**
 * @ignore
 */
export const cleanObserver = x => ({
  onSubscribe: x.onSubscribe,
  onSuccess: isFunction(x.onSuccess) ? x.onSuccess : identity,
  onError: isFunction(x.onError) ? x.onError : throwError,
});
import Single from './single/index';
import Scheduler from 'rx-scheduler';

Single.just('Hello World').delay(1000, Scheduler.current).subscribe(console.log);
Single.just('Hello immediate').delay(1000, Scheduler.immediate).subscribe(console.log);
Single.just('Hello tick').delay(1000, Scheduler.tick).subscribe(console.log);
Single.just('Hello async').delay(1000, Scheduler.async).subscribe(console.log);
Single.just('Hello timeout').delay(1000, Scheduler.timeout).subscribe(console.log);

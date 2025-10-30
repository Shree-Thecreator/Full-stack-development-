import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const eventEmitter = new MyEmitter();

eventEmitter.on('waterfall', () => {
    console.log('Please turn off the tap');
    setTimeout(() => {
        console.log('This is ok it will turn it off soon');
    }, 3000);
});

console.log('Starting, Starting');

eventEmitter.emit('waterfall');
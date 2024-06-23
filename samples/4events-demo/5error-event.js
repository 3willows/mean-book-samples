const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

// Comment out the event listener and console will print long error message
// 为error事件注册监听器
myEmitter.on('error', (err) => {
    console.error('错误信息');
});

// 模拟触发error事件
// Can Change '错误信息' in the line below without affecting output
myEmitter.emit('error', new Error('错误信息'));
// 抛出错误

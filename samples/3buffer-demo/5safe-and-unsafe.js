// 创建一个长度为10的零填充缓冲区
const safeBuf = Buffer.alloc(10, 'waylau');

console.log(safeBuf.toString());

// 数据有可能包含旧数据
// in practice I did not see any odd beahviour.  But I can see form my 42 days how this may happen.
const unsafeBuf = Buffer.allocUnsafe(10);

console.log(unsafeBuf.toString());

const unsafeBuf2 = Buffer.allocUnsafe(10);
// 用0填充清理掉旧数据
unsafeBuf2.fill(0);

console.log(unsafeBuf2.toString());

// running "node --zero-fill-buffers 5safe-and-unsafe.js" did not make an immediately obvious difference, but should improve safety
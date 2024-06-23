const buf = Buffer.allocUnsafe(2);

// Change 2nd parameter to anything other than 0 or 1 and get OUT_OF_RANGE error
buf.writeInt8(2, 0);
buf.writeInt8(4, 1);

console.log(buf);
// 输出: <Buffer 02 04>
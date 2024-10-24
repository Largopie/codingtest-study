const date = new Date();

console.log(`${date.getUTCFullYear()}\n${(date.getUTCMonth() + 1).toString().padStart(2, '0')}\n${date.getUTCDate().toString().padStart(2, '0')}`);
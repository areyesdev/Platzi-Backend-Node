const promiseFunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return resolve("hello world");
        } else {
            reject(new Error('hello error'));
        }
    }, 1000);
});

async function asyncAwait() {
    try {
        const msg = await promiseFunction();
        console.log('message', msg);
    } catch (error) {
        console.log('error', error);
    }
}

asyncAwait();
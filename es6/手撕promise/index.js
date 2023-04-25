// promise 有三个状态 => fulfilled rejected pendding

window.Promise = class Promise {
    PromiseState;
    PromiseResult;
    callback;
    resolve;
    reject;
    constructor(fn) {
        this.PromiseState = 'pendding';
        this.PromiseResult = undefined;
        this.callback = [];
        // promise对象生成新的实例时入参是会立即执行的
        fn(rel => {
            // resolve
            this.PromiseState = 'fulfilled'
            this.PromiseResult = rel;
            this.callback.forEach(item => {
                if (this.PromiseResult instanceof Promise) {
                    this.PromiseResult.then(newRel => {
                        item.onResolve && item.onResolve(newRel);
                    })
                    return;
                }
                item.onResolve && item.onResolve(this.PromiseResult);
            })
        }, err => {
            // reject
            this.PromiseState = 'rejected'
            this.PromiseResult = err;
        });
    }
    then(resolveFn, rejectFn) {
        return new Promise((resolve, reject) => {
            if (this.PromiseState === 'pendding') {
                this.callback.push({
                    onResolve(rel) {
                        resolve(resolveFn(rel));
                    },
                    onReject(rel) {
                        reject(rejectFn(rel));
                    }
                });
            }
            if (this.PromiseState === 'fulfilled') {
                resolve(resolveFn(this.PromiseResult));
            }
            if (this.PromiseState === 'rejected') {
                resolve(rejectFn(this.PromiseResult));
            }
        });
    }
    catch(errorejectFn) {

    }
    finaly() {}
}
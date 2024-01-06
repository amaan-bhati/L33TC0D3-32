class MinStack {
    constructor() {
        this._top = -1;
        this.data = [];
        this.min = Number.MAX_SAFE_INTEGER;
    }
    push(n) {
        this.data[++this._top] = this.min;
        this.data[++this._top] = n;
        n < this.min && (this.min = n);  
    }
}

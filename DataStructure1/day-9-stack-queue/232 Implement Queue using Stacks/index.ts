class MyQueue {

    private stack: (number | undefined)[];

    constructor(queue: number[] = []) {

        let aux: number[] = queue;
        this.stack = [];

        while (aux.length > 0) {

            this.stack.push(aux.pop());

        };

    };

    push(x: number): void {

        let aux: (number | undefined)[] = [];

        while (this.stack.length > 0) {
            aux.push(this.stack.pop());
        };

        aux.push(x);

        while (aux.length > 0) {
            this.stack.push(aux.pop());
        };

    }

    pop(): number | undefined {
        return this.stack.pop();
    }

    peek(): number {
        return this.stack[this.stack.length - 1] || -1;
    }

    empty(): boolean {
        return this.stack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
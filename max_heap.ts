import { Order } from "./order";

class MaxHeap {
    public heap: Order[];
    private n: number; 

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
    }

    public checkMax(): Order {
        return this.heap[1];
    }

    public isEmpty(): boolean {
        return this.n == 0;
    }

    public getQuantity(): number {
        return this.n;
    }

    public insert(value: Order): void {
        if (this.n == (this.heap.length - 1))
            this.resize(2 * this.heap.length)
        this.n++;
        this.heap[this.n] = value;
        this.swap(this.n);
    }

    private swap(i: number): void {
        let father: number = Math.floor(i / 2);
        while (i > 1 && this.heap[father].getPrice() < this.heap[i].getPrice()) {
            let temp: Order = this.heap[father];
            this.heap[father] = this.heap[i];
            this.heap[i] = temp;
            i = father;
            father = Math.floor(i / 2);
        }
    }

    private resize(newSize: number): void {
        let newHeap: Order[] = new Array(newSize);
        for (let i = 1; i < this.heap.length; i++)
            newHeap[i] = this.heap[i];
        this.heap = newHeap;
    }

    public CheckMax(): Order {
        return this.heap[1];

    }

    private sink(i: number): void {
        while (2*i <= this.n) {
            let j: number = 2*i; // empezamos asumiendo que el hijo izquierdo es el mayor
            if (j < this.n && this.heap[j].getPrice() < this.heap[j+1].getPrice())
                j++; // cambia a hijo derecho si este es el mayor
            if (this.heap[i] >= this.heap[j])
                break;
            // Hacemos intercambio burbuja entre los nodos para que el mayor quede en la raíz
            let temp: Order = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;
            // verificamos si procede otro intercambio hacia abajo
            i = j;
        }
    }
}



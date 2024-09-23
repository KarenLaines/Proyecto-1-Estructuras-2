export class Order{
    private company: string;
    private price: number;
    private quantity: number;

    constructor(company: string, price: number, quantity: number) {
        this.company = company
        this.price = price
        this.quantity = quantity
    }
    public getCompany() {
        return this.company;
    }
    public getPrice() {
        return this.price;
    }

    public setQuantity(num: number) {
        this.quantity = num;
    }

    public getQuantity() {
        return this.quantity;
    }

    public show(): string{
        return "Compañía: " + this.company + "\nCantidad disponible: " + this.quantity + "\nPrecio: " + this.price
    }
}
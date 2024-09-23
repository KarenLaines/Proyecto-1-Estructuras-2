export class Orders{
    private company: string;
    private price: number;
    private numOfShares: number;

    constructor(company: string, price: number, numOfShares: number) {
        this.company = company
        this.price = price
        this.numOfShares = numOfShares
    }
    public getCompany() {
        return this.company;
    }
    public getPrice() {
        return this.price;
    }

    public setNumOfShares(num: number) {
        this.numOfShares = num;
    }

    public getNumOfShares() {
        return this.numOfShares;
    }
}
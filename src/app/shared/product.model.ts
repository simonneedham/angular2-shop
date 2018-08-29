export class Product {
  id: number;
  name: string;
  price: string;
  best_seller: boolean;
  categories: number[];
  img: string;
  description: string;
  stockLevel?: number;

  constructor(init: Partial<Product>) {
    Object.assign(this, init);

    this.stockLevel = !this.stockLevel ? 0 : this.stockLevel;
  }

  get available(): boolean {
    return this.stockLevel && this.stockLevel > 0;
  }
}

// abstract class-> They are used to create a base class from which other classes can be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members.

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSapia(): string;
  getReal(): string {
    return "Real in TakePhoto";
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSapia(): string {
    return "Sapia";
  }
  getReal(): string {
    return "Real in Instagram";
  }
}
const tc = new Instagram("auto", "black and white", 2);
tc.getReal();
function identityOne(val: boolean): boolean | number {
  return val;
}
function identityTwo(val: any): any {
  return val;
}
function identityThree<T>(val: T): T {
  return val;
}
identityThree(2);
identityThree("2");
identityThree(true);

interface Bootle {
  name: string;
  price: number;
}

function bootleInfo<T extends Bootle>(val: T): T {
  return val;
}
bootleInfo({ name: "Pepsi", price: 2 });
bootleInfo<Bootle>({
  name: "Pepsi",
  price: 2,
});

function getSearchProduct<T>(products: T[]): T {
  return products[0];
}

const getMoreProduct = <T>(products: T[]): T => {
  return products[0];
};
function anotherFunction<Y, U extends number>(val: Y, val2: U): object {
  return {
    val,
    val2,
  };
}

interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}
// generic class
class Sellable<T> {
  public cart: T[] = [];
  public addProduct(product: T): void {
    this.cart.push(product);
  }
}

export {};

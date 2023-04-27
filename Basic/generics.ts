// Проверка
type TypeIsNumber<T> = T extends number ? "yes" : "no";
type Type1 = TypeIsNumber<number>;
type Type2 = TypeIsNumber<string>;

type TypeBrand = "bmw" | "mclaren" | "mercedes";
type TypePrice = "$1222" | "$233333" | "$43222";

type TypeCar = `${TypeBrand} ${TypePrice}`;

const carSale: TypeCar = "bmw $233333";

// !/--

function genericFunc<T>(args: T): T {
  return args;
}

genericFunc<number>(1);
genericFunc<string>("1");

const genericFunc2 = <T>(args: T): T => {
  return args;
};

genericFunc2<number>(1);
genericFunc2<string>("1");

class genClass<T> {
  private name: T;

  constructor(name: T) {
    this.name = name;
  }
  getName(): T {
    return this.name;
  }
}

new genClass<string>("gfds");
new genClass<number>(1123);

//

interface IPair<K, V> {
  key: K;
  value: V;
}

const pair1: IPair<string, number> = {
  key: "fds",
  value: 1,
};

const pair2: IPair<string, string> = {
  key: "fds",
  value: "fvsdv",
};

type TypeLength = {
  length: number;
};
const getNameLength = <T extends TypeLength>(ent: T): number => {
  return ent.length;
};

getNameLength("vhjk");
getNameLength([0, 1, 2]);

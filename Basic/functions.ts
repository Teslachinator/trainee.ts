function getName(name: string) {
  return { name };
}

type TypeNameReturn = {
  name: string;
};

function nameReturn(name: string): TypeNameReturn {
  return { name };
}

type TypeArrFunc = (name: string) => TypeNameReturn;

const nameArrReturn: TypeArrFunc = (name) => {
  return { name };
};

const getNumbers = (...numbers: number[]) => {
  return numbers;
};

// перегрузки

// function getCar(name: string, price?: number): string;
function getCar(name: string, price?: number): string {
  return price ? `Название${name}, Цена ${price}` : `Название${name}`;
}

const car1 = getCar("bmw", 1221);

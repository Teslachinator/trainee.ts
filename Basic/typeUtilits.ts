interface ICar {
  id: number;
  name: string;
  price: number;
  yearBuilt: number;
}

interface ICarCreate extends Omit<ICar, "id"> {}
interface ICarId extends Pick<ICar, "id"> {}
interface ICarOptional extends Partial<ICar> {}
interface ICarOnlyRead extends Readonly<ICar> {}
// interface ICarRequired extends Required<ICar> {} делает все поля обязательными

type TypeCarRecord = Record<"name" | "price", string | number>;

const carCreate: ICarCreate = {
  name: "123",
  price: 123,
  yearBuilt: 123312,
};
const carId: ICarId = {
  id: 123124,
};
const carOptional: ICarOptional = {};
const carOnlyRead: ICarOnlyRead = {
  id: 123,
  name: "asd",
  price: 123,
  yearBuilt: 123,
};

const carRecord: TypeCarRecord = {
  price: 123,
  name: 123,
};

type TypeGetName = () => string;
type Return = ReturnType<TypeGetName>;

type NotNull = NonNullable<string | number | null | undefined>;

//  const car: IReq

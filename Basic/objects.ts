let entity: number;

entity = 456;

type TypeUser = {
  name: string;
  age: number;
  address: string;
};

type TypeAddress = {
  city: string;
  country: string;
};
// type TypeAddress = {
//   city: string;
//   country: string;
// } & TypeUser;

const user: TypeUser = {
  address: "Spb",
  age: 24,
  name: "nik",
};

const address: TypeAddress = {
  city: "Konakovo",
  country: "Russia",
};

const common: TypeUser & TypeAddress = {
  ...user,
  ...address,
};

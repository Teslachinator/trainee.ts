interface IUserAge {
  age: number;
}

interface IUser extends IUserAge {
  name: string;
  mail: string;
}

const iUser: IUser = {
  mail: "asdfev123@dds.qw",
  name: "nik",
  age: 21,
};

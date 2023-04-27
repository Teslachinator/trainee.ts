enum EnumRoles {
  ADMIN,
  GUEST,
  USER,
}

interface User {
  role: EnumRoles;
  color: EnumColors;
}
// Лучше использовать через const
const enum EnumColors {
  black,
  pink,
  green,
}
const users: User = {
  role: EnumRoles.ADMIN,
  color: EnumColors.black,
};

export const EMAIL_REGEX = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
//minimum of 6 characters must have atleast one uppercase, one lowercase letter ,one special character and a digit
export const PWD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,12}$"
);
export const NAME_REGEX = new RegExp("^[A-z][A-z0-9-_]{2,23}$");

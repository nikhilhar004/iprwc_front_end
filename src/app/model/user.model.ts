export class UserModel {
  id: number;
  name: string;
  email: string;
  role: string;
  password: string;
  default_pass: boolean;


  constructor(id: number, name: string, email: string, role: string, password: string, default_pass: boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.password = password;
    this.default_pass = default_pass;
  }
}

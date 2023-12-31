import CarInterface from "../../products/interfaces/ProductInterface";

export interface UserInterface {
  name: string;
  phoneNumber: string;
  email: string;
  address: string;
  note: string;
  id: string;
  status: string;
  cars: CarInterface[];
}

export default UserInterface;

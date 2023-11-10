// interfaces
import { MediaTypes, AttachedfileTypes } from "./myProfile";
import { STATUS_TYPES } from "../constants";
export interface ContactTypes {
  id: string | number;
  firstName: string;
  lastName: string;
  profileImage?: any;
  about?: string;
  email: string;
  location: string;
  media?: MediaTypes;
  attachedFiles?: AttachedfileTypes;
  status?: STATUS_TYPES;
  isFavourite?: boolean;
  isArchived?: boolean;
  userAccessToken: string;
}
let contacts: ContactTypes[] = [
  {
    id: "614ecab426f59ce2863e106e",
    firstName: "Patient",
    lastName: "1",
    about: "I'm Patient 1.",
    email: "adc@123.com",
    location: "India",
    status: STATUS_TYPES.ACTIVE,
    userAccessToken: "1cf7fb10701616a7eb9f37786cdcd88ab29916efe14d5263e77491f5fma1c66e507af"
  },
  {
    id: "614ecab426f59ce2863e106f",
    firstName: "Patient",
    lastName: "2",
    about: "I'm Patient 2.",
    email: "adc@123.com",
    location: "India",
    status: STATUS_TYPES.ACTIVE,
    userAccessToken: "f0ef5b2139a1c064370840107090481499afd8fc140fbeaa491f4fga9d467d15a6"
  },
  
];

const onChangeContacts = (newData: Array<ContactTypes>) => {
  contacts = newData;
};
export { contacts, onChangeContacts };

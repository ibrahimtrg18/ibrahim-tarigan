export type About = {
  firstName: string;
  lastName: string;
  fullName: string;
  shortName: string;
  initialName: string;
  email: string;
  phoneNumber: string;
  whoami: string;
  greeting: string;
  description: {
    text: string;
  };
  cv: string;
  lat: null | number;
  lng: null | number;
  location: string;
};

export interface LoginRequest {
  role: string;
  email: string;
  password: string;
}

export interface IFormData {
  photo: string | null;
  name: string;
  profession: string[];
  countryCode: string;
  city: string;
  role: string;
  address: string;
  phoneNumber: string;
  phoneNumber1: string;
  email: string;
  password: string;
  confirm_password: string;
}

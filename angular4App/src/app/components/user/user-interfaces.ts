interface Address {
  street: string;
  city: string;
  state: string;
}

interface Posts {
  id: number,
  title: string,
  body: string,
  userId: number
}

export default Address;
interface UserDTO {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default defineEventHandler(async (event) => {
  const { externalApiUrl } = useRuntimeConfig();

  const users = await $fetch<Array<UserDTO>>(`${externalApiUrl}/users`);

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    phone: user.phone,
    email: user.email,
  }));
});

import { api } from "../lib/axios";

interface UpdateProfileProp {
  name: string,
  description: string
}

export async function updateProfile ({name, description}: UpdateProfileProp)  {
  await api.put('/profile', {
    name,
    description
  })
}
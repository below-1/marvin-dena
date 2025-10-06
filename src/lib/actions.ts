'use server';

import { addKomentar } from "./komentar";

export async function createKomentarAction(formData: FormData) {

  const name = formData.get("name");
  if (typeof name !== 'string') throw new Error("unknown value");
  const message = formData.get("message");
  if (typeof message !== 'string') throw new Error("unknown value");

  const newKomentar = await addKomentar({
    name,
    message
  });

  console.log(newKomentar)
  console.log('newKomentar')
}
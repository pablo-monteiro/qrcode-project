async function permittedCharacters() {
  let permmitted = [];

  if (process.env.UPPERCASE_LETTERS === "true")
    permmitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  if (process.env.LOWERCASE_LETTERS === "true")
    permmitted.push(..."abcdefghijklmnopqrstuvwxyz");

  if (process.env.NUMBERS === "true") permmitted.push(..."0123456789");

  if (process.env.SPECIAL_CHARACTERS === "true")
    permmitted.push(..."!@#$%^&*()-_");

  return permmitted;
}

export async function handlePassword() {
  let characters = [];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;
  characters = await permittedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

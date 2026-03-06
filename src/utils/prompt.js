import prompt from "prompt";

prompt.start();

export function ask(schema) {
  return new Promise((resolve, reject) => {
    prompt.get(schema, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

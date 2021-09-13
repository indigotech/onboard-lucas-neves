export function passwordValidation(value: string): boolean {
  console.log(value.length < 7);
  console.log(/[a-zA-Z]/g.test(value));
  console.log(/\d/g.test(value));
  return value.length < 7 || !(/[a-zA-Z]/g.test(value) && /\d/g.test(value));
}

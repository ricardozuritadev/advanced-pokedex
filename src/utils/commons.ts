export const capitalize = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const startWithZeroes = (arg: number) => arg.toString().padStart(3, '0');

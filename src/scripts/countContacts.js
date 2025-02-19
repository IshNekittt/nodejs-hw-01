import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const currentMass = await readContacts();
  return currentMass.length;
};

console.log(await countContacts());

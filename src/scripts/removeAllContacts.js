import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
};

// one more way to implement this
// import { readContacts } from '../utils/readContacts.js';
// export const removeAllContacts = async () => {
//   const currentMass = await readContacts();
//   currentMass.length = 0;
//   await writeContacts(currentMass);
// };

removeAllContacts();

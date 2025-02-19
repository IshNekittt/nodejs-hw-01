import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const savedContactsMass = await readContacts();
    const newMass = [...savedContactsMass, createFakeContact()];
    await writeContacts(newMass);
  } catch (err) {
    console.log(err.message);
  }
};

addOneContact();

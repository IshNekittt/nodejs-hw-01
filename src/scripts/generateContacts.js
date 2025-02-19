import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  if (number <= 0) return;

  try {
    const savedContactsMass = await readContacts();
    const newMass = [];
    for (let i = number; i > 0; i--) {
      newMass.push(createFakeContact());
    }
    await writeContacts(savedContactsMass.concat(newMass));
  } catch (err) {
    console.log(err.message);
  }
};

generateContacts(5);

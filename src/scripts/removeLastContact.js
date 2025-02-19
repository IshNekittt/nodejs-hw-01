import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const currentMass = await readContacts();
    if (currentMass.length > 0) {
      currentMass.length = currentMass.length - 1;
      await writeContacts(currentMass);
    } else {
      throw new Error('There are no contacts left');
    }
  } catch (err) {
    console.log(err.message);
  }
};

removeLastContact();

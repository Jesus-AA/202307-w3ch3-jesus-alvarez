/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/object-curly-spacing */
/* eslint-disable @typescript-eslint/indent */
import { type Pet } from '../model/pet.js';

export const createPetList = () => {
  const petList: Pet[] = [
    { id: 1, name: 'Kubo', species: 'dog', isAdopted: true },
    { id: 2, name: 'Miau', species: 'cat', isAdopted: true },
    { id: 1, name: 'Orito', species: 'agaporni', isAdopted: true },
    { id: 2, name: 'Lola', species: 'rabbit', isAdopted: true },
  ];
  return petList;
};

/* eslint-disable @typescript-eslint/indent */
import { petList } from '../../data/data-pet.js';
import { Component } from '../component.js';

import { type Pet } from '../../model/pet.js';

export class List extends Component {
  petList: Pet[];

  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.petList = petList;
    this.render();
  }

  showPets() {
    return petList
      .map(
        (pet) =>
          `<li>${pet.name}, ${pet.species}, ${
            pet.isAdopted ? 'en adopción' : 'ADOPTADO'
          }</li>`
      )
      .join('');
  }

  createTemplate() {
    return `
    <ul>
    ${this.showPets()}
    </ul>
    `;
  }
}
// F() input=> nombre raza id ultimo +1, adotpacion

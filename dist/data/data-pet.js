const createPetList = () => {
    const petList = [
        { id: 1, name: 'Kubo', species: 'dog', isAdopted: false },
        { id: 2, name: 'Miau', species: 'cat', isAdopted: true },
        { id: 1, name: 'Orito', species: 'agaporni', isAdopted: true },
        { id: 2, name: 'Lola', species: 'rabbit', isAdopted: true },
    ];
    return petList;
};
export const petList = createPetList();

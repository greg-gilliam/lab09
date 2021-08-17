const URL = 'https://aqueous-coast-92629.herokuapp.com';

export const getDesserts = async () => {
    const resp = await fetch(`${URL}/desserts`);
    const data = await resp.json();
    return data;
};

export const getDessert = async (id) => {
    const resp = await fetch(`${URL}/desserts/${id}`);
    const data = await resp.json();
    return data;
};

export const getTypes = async () => {
    const resp = await fetch(`${URL}/types`);
    const data = await resp.json();
    return data;
};
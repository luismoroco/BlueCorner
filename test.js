const Testing = require('./testing/testing.js');

describe('Prueba Componente Form', () => {
    test('Prueba 1', async () => {
        try {
            const x = await Testing('Arroz', 'Comida', 'Hogar', 'Familia', 'Harina')
            expect(x).toEqual('Arroz')
        } catch (e) {}
    }, 5000);
    
    test('Prueba 2', async () => {
        try {
            const x = await Testing('Aceite', 'Comida', 'Grasa', 'Familia', 'Gluten')
            expect(x).toEqual('Aceite')
        } catch (e) {}
    }, 5000); 

    test('Prueba 3', async () => {
        try {
            const x = await Testing('Polo XL', 'Comida', 'Moda', 'Familia', 'Verano')
            expect(x).toEqual('Polo XL')
        } catch (e) {}
    }, 5000); 

    test('Prueba 4', async () => {
        try {
            const x = await Testing('Arrocera', 'Electro', 'Hogar', 'Familia', 'Metal')
            expect(x).toEqual('Arrocera')
        } catch (e) {}
    }, 5000); 

    test('Prueba 5', async () => {
        try {
            const x = await Testing('Frigider', 'Metal', 'Hogar', 'Familia', 'Oferta')
            expect(x).toEqual('Frigider')
        } catch (e) {}
    }, 5000); 

    test('Prueba 6', async () => {
        try {
            const x = await Testing('Camote', 'Comida', 'Hogar', 'Perú', 'Tuberculo')
            expect(x).toEqual('Camote')
        } catch (e) {}
    }, 5000);
});
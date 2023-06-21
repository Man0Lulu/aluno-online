const Nota = require('../../../src/models/nota');

describe('Calculo da média final', () => {
    test('a media é zero se não tem notas', () => {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.mediaFinal()).toEqual(0);
        nota = new Nota(null, null, null, null)
        expect(nota.mediaFinal()).toEqual(0);
    });

    test('a média é (0.4 * a1) + (0.6 * a2) se tem apenas a1 e a2', () => {
        let nota = new Nota(null, 3, 5, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 7, 4, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 7 + 0.6 * 4);
    });

    test('a média é (0.4 * a3) + (0.6 * a2) se a3 substitui a1', () => {
        let nota = new Nota(null, 0, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 6);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
    });

    test('a média é (0.4 * a1) + (0.6 * a3) se a3 substitui a2', () => {
        let nota = new Nota(null, 6, 0, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 7);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 7);
    });
});

describe('Conceito de Menção usando a função mediaCA', () => {
    test('9,0 – 10  | SS – Superior', () => {
        let nota = new Nota(null, 10, 9, 8);
        expect(nota.mediaCA()).toEqual("SS");
    })
    test('7,0 – 8,9 | MS – Médio Superior', () => {
        let nota = new Nota(null, 9, 8, 8);
        expect(nota.mediaCA()).toEqual("MS");
    })
    test('5,0 – 6,9 | MM – Médio', () => {
        let nota = new Nota(null, 7, 6, 6);
        expect(nota.mediaCA()).toEqual("MM");
    })
    test('3,0 – 4,9 | MI – Médio Inferior', () => {
        let nota = new Nota(null, 5, 4, 3);
        expect(nota.mediaCA()).toEqual("MI");
    })
    test('0,1 – 2,9 | II – Inferior', () => {
        let nota = new Nota(null, 2, 2, 1);
        expect(nota.mediaCA()).toEqual("II");
    })
    test('0,0       | SR – Sem rendimento', () => {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.mediaCA()).toEqual("SR");
    })
})
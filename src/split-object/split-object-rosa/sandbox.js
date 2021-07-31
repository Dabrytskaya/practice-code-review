import { solutionName } from './split-object.js';

export const solutionName = (obj = {}) => {
    // Empty array
    const newArr = [];
    // converting each entry to a new array
    Object.entries(obj).map((entry) => {
      // adding ech entry to array
      newArr.push({ [entry[0]]: entry[1] });
    });
    return newArr;
  };
  

  describe('', () => {
    it('{name: rosa, age: 25, street: Van de Nestlaan} => [{name: rosa}, {age: 25}, {street: Van de Nestlaan}]', () => {
      expect(solutionName({name: 'rosa', age: 25, street: 'Van de Nestlaan'})).toEqual([{name: 'rosa'}, {age: 25}, {street: 'Van de Nestlaan'}]);
    });
    it('{type:"Fiat", model:"500", color:"white"} => [{type:"Fiat"}, {model:"500"}, {color:"white"}]', () => {
      expect(solutionName({type:"Fiat", model:"500", color:"white"})).toEqual([{type:"Fiat"}, {model:"500"}, {color:"white"}]);
    });
    it('{type:"Fiat", model:"500", color:"white"} => [{type:"Fiat"}, {model:"500"}, {color:"white"}]', () => {
      expect(solutionName({type:"Fiat", model:"500", color:"white"})).toEqual([{type:"Fiat"}, {model:"500"}, {color:"white"}]);
    });
    it('{ a: 1, b: 2 }) => [{ b: 2, a: 1 }]', () => {
      expect(solutionName({ a: 1, b: 2 })).toEqual([{a: 1 }, { b: 2}]);
    });
  });
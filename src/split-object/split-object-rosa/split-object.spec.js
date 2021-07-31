import { solutionName } from './split-object.js';

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
});

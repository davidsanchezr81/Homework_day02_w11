const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('T-Rex', 2);
  });

  it('Dinosaur has a type', function(){
    const result = dinosaur.type;
    assert.strictEqual(result,'T-Rex');
  });

  it('Dinosaur has an offsprings number', function(){
    const result = dinosaur.offsprings;
    assert.strictEqual(result,2);
  });



});

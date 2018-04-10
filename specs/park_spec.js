const assert = require('assert');
const Park = require('../park.js');


describe('Park', function(){

  let park;

  beforeEach(function(){
    park = new Park('Jurassic');
  });

  it('Park has a name', function(){
    const result = park.name;
    assert.strictEqual(result,'Jurassic');
  });


  it('Enclosure should start empty', function(){
    const result = park.enclosure;
    assert.deepStrictEqual(result,[]);
  });

  it('Should be able to count Dinosaurs', function(){
    const result = park.enclosure.length;
    assert.deepStrictEqual(result,0);
  })

  it('Should be able to add Dinosaur', function(){
    park.addDinosaur('Velociraptor');
    const result = park.enclosure.length;
    assert.deepStrictEqual(result,1);
  })

  it('Should be able to remove Dinosaur', function(){
    park.addDinosaur('Velociraptor');
    const result1 = park.enclosure.length;
    assert.deepStrictEqual(result1,1);
    park.removeDinosaur('Velociraptor');
    const result2 = park.enclosure.length;
    assert.deepStrictEqual(result2,0);
  })


});

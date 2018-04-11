const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js')


describe('Park', function(){

  let park;

  beforeEach(function(){
    park = new Park('Jurassic');
    dinosaur1 = new Dinosaur('Velociraptor',1);
    dinosaur2 = new Dinosaur('T-Rex',3);
    dinosaur3 = new Dinosaur('T-Rex',4);
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

  it('Should be able to remove Dinosaur by Type', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const result1 = park.enclosure.length;
    assert.deepStrictEqual(result1,3);
    park.removeDinosaurByType('Velociraptor');
    const result2 = park.numberOfDinosaurs();
    assert.deepStrictEqual(result2,1);
  })

  it('Should be able to add Dinosaur by Offspring', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const result1 = park.enclosure.length;
    assert.deepStrictEqual(result1,3);
    const result2 = park.takeDinosaurByOffspring();
    assert.deepStrictEqual(result2.length,2);
  })


});

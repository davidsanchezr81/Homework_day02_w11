const Park = function(name){
  this.name = name;
  this.enclosure = [];
}

Park.prototype.numberOfDinosaurs = function(){
  return this.enclosure.length;
}


Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);

}

Park.prototype.removeDinosaur = function(dinosaur){
  this.enclosure.pop(dinosaur);
}


Park.prototype.removeDinosaurByType = function(type){

  for (let dinosaur of this.enclosure){
    if(dinosaur.type = dinosaur){
      var index = this.enclosure.indexOf(dinosaur);
      this.enclosure.splice(index,1);

    }
  }
}

Park.prototype.takeDinosaurByOffspring = function(){
  let dino = [];
  for (let dinosaur of this.enclosure){
    if(dinosaur.offsprings > 2){
      dino.push(dinosaur);

    }
  }
  return dino;
}





module.exports = Park;

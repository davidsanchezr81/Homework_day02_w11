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


module.exports = Park;

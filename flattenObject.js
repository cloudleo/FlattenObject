var Flattener = function(){
  this.flattenedObject = {};
 }
 
 Flattener.prototype.clear = function(){
  this.flattenedObject = {};
 }


Flattener.prototype.flatten = function(obj,flat,priorkey){
  var self = this;
  for(var currentkey in obj){
     var value = obj[currentkey]; 
      if(obj[currentkey].constructor !== Object){ 
          if (typeof priorkey === "string"){  
            self.flattenedObject[priorkey +"."+ currentkey] = value; 
          }else{
            self.flattenedObject[currentkey] = value; 
          }
      }else{                                
        if (typeof priorkey === "string"){  
          self.flatten(value,self.flattenedObject,priorkey+ "."+ currentkey); 
        }else{
          self.flatten(value,self.flattenedObject, currentkey); 
        }
      }
    }
    return self.flattenedObject;
  }



module.exports = Flattener;


 function flatten(obj,flat,priorkey) {
    var flat = flat || {};
    for(var currentkey in obj){
     var value = obj[currentkey]; 
      if(obj[currentkey].constructor !== Object){ // check to see if it not an object
          if (typeof priorkey === "string"){  // check to see if it has an initial key
            flat[priorkey +"."+ currentkey] = value; //if so then set it into the flat object with the prior key + current key
          }else{
            flat[currentkey] = value; //if not then set it the way it is
          }
      }else{                                // it is an object!!
        if (typeof priorkey === "string"){  // does it have prior key!
          flatten(value,flat,priorkey+ "."+ currentkey) // if recurse and add prior key with the current to make a new prior key
        }else{
          flatten(value,flat, currentkey) // if not then just recurse with the currentkey next being the prior key
        }
      }
    }
    return flat;
  }


var input = {"key1": "1", "key2": {"a": "2", "b": "3", "c": { "d": "3", "e": " 1"}}};
var flat = flatten(input);
//  console.log('totally flat: \n', flat);
 // returns  totally flat: 
 // { key1: '1',
 //  'key2.a': '2',
 //  'key2.b': '3',
 //  'key2.c.d': '3',
 //  'key2.c.e': ' 1' }


















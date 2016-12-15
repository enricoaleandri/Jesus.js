var jesus = require('../src/Jesus');
var createDocument = require ('./createDocument.js');
var test = require('unit.js')

describe('Let Jesus born',function(){
  before(function(done){
    if(typeof jesus.Jesus.bornFromVirgin() === "object") {
      done();
    }
  });

  after(function(){
  });

  it('Jesus shuld be just one, born from virgin object',function(done){
    if(test.object(jesus.Jesus.bornFromVirgin()).is(jesus.Jesus.bornFromVirgin())){
      done();
    }
  });


  describe('Jesus Miracle',function(){
    this.timeout(3 * 24 * 60 * 60 * 3 * 1000 + 60 * 1000); //resurrection time +  60 second to do the other test


    it('He walked on water',function(done){
      createDocument.createDocument();
      jesus.Jesus.walkOnWater();
      done()
    });
    it('He die and resurrected after 3 days',function(done){
      jesus.Jesus.die();

      function isJesusDead (){
        if(jesus.Jesus === undefined){
          setTimeout(isJesusDead, 1000);
        }else{
          done();
        }
      }
      setTimeout(isJesusDead, 1000);
      
    });

  });

});

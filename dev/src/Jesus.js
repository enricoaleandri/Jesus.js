/** 
 *  @license
 * Jesus.js
 * License: MIT
 * Author: Edan Kwan
 * Version: 0.0.2 (2013/6/11)
 */

(function(exports){
    function Jesus(){}

    var undef;
    var _jesusBody;

    // back to life in 3 days ---
    //=====================
    Jesus.walkOnWater = function(){
        var elems = document.querySelectorAll('*');
        for(var i = 0, len = elems.length; i < len; i++) {
            elems[i].style.float = Math.random() < 0.5 ? 'left' : 'right';
        }
    };

    Jesus.die = function(){
        //check if Jesus died to prevent him to die again
        if(_jesusBody) return;
        _jesusBody = exports.Jesus;
        exports.Jesus = undefined;

        // back to life in 3 days ---
        //=====================
        setTimeout(function(){
            exports.Jesus = _jesusBody;
        }, 3 * 24 * 60 * 60 * 1000);
    };

    Jesus.isDead = function(){ return !!_jesusBody;};// I think if Jesus is dead, we cannot check with him if is dead

    Jesus.bornFromVirgin = function(){ // Singletone instance, No more Jesus can exist
        if(typeof Jesus._jesusBody === "undefined"){
            Jesus._jesusBody = new Jesus();
        }
        return Jesus._jesusBody;
    };

    Jesus.raisingLazarus = function(){
        //Create a zombie process ... I have to think about it!
    };

    Jesus.waterToWine = function() {
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp('water', 'gi'), 'wine')
    };

    Jesus.multiplyTheBreadNFishes = function(BreadOrFish){
        var multipliedBreadNFishes = new Array();
        if(Object.prototype.toString.call( Bread )  === '[object Array]'){
            BreadOrFish.forEach(function(breadOrFish) {
                multipliedBreadNFishes.push(JSON.parse(JSON.stringify(breadOrFish)))//I Create a clone of object so on the array there will be Two of them
                multipliedBreadNFishes.push(breadOrFish);
            });
        }else{
            multipliedBreadNFishes.push(JSON.parse(JSON.stringify(BreadOrFish)))//I Create a clone of object so on the array there will be Two of them
            multipliedBreadNFishes.push(BreadOrFish);
        }
        return multipliedBreadNFishes;

    }

    exports.Jesus = Jesus;
}(this));


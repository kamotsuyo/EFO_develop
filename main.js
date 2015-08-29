(function(){
    "use strict";
    var Smart = function(){
      this.name = "smart";
      document.main.log(this.name);

    };
    Smart.prototype={

    };
    function f(){

    }

    var Main = function(){

    };
    Main.prototype={
      handleEvent:function(evt){
        this.log(evt);
      },
      dispatchEvent:function(newType,targetElm){
        var newEvent = document.createEvent("Event");
        newEvent.initEvent(newType,true,true);
        targetElm.addEventListener(newType,this,false);
        targetElm.dispatchEvent(newEvent);
      },
      log:function(msg){
        var counter = 0;
        return function(msg){
          console.log("-------"+(counter++)+"------");
          console.log(msg);
        }
      }()
    };

    function init(){
      document.main = new Main();
      var p = document.createElement('p');
      var smart = new Smart();
      document.main.dispatchEvent("hoge",p);
    }
    if(document.addEventListener){
        document.addEventListener('DOMContentLoaded',init,false);
    }else{
        alert("IE９以降でどうぞ");
    }
}());

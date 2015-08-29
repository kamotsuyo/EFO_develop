var EFOLAB = EFOLAB||{};
EFOLAB.Masquerade = function(caller){
    this.caller = caller;
    this.labels=[];
    this.inputs=[];
    console.log(caller.dispatchEvent);
};
EFOLAB.Masquerade.prototype={
    init:function(){
        this.inputs = document.getElementsByTagName('input');
        this.labels = document.getElementsByTagName('label');
    },
    emurate:function(){

    },
    preventDefault:function(){

    },
    handleEvent:function(evt){
        console.log(evt);
    }

};

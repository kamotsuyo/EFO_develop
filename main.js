/*
サンドボックスパターン
main.startupから始まる
---------------------
main
2015/8/29 ver1.02
*/
(function() {
    "use strict";
    var Main = function() {

    };
    Main.prototype = {
        handleEvent:function(evt){
            switch (evt.type) {
                case "scriptsLoaded":
                    console.log("すべてのスクリプトが読み込み完了した");
                    this.run();

                    break;
                default:

            }
        },
        startup: function() {
            //ここに記述
            this.include(["EFOLAB.Masquerade.js"]);
        },
        run:function(){
            var _ = EFOLAB; //名前空間を変数に代入しておく。（未定義エラーの回避）
            var masq = new _.Masquerade(this);
            masq.init();

            //test
            var input_name = document.getElementById('input_name');
            input_name.addEventListener("focus",masq,false);
        },
        parseDom: function(text) {
            var dom = document.createElement('dom');
            dom.innerHTML = text;
            return dom;
        },
        dispatchEvent: function(newtype, targetElement) {
            var evt = document.createEvent("Event");
            evt.initEvent(newtype, true, true);
            targetElement.addEventListener(newtype, this, false);
            targetElement.dispatchEvent(evt);
        },
        include:function(list){
            var counter = 0;
            var callback = function(evt){
                counter++;
                if(list.length===counter){
                    //今回targetElementは利用しないのでdocumentとしておく。
                    this.dispatchEvent("scriptsLoaded",document);
                }
            };
            for(var i=0;i<list.length;i++){
                var s = document.getElementsByTagName("script")[0];
                var script = document.createElement('script');
                script.src = list[i];

                var _this=this; //***
                script.addEventListener('load',function(){
                    callback.call(_this);
                },false);
                s.parentNode.insertBefore(script, s);
            }
        }
    };

    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function() {
            new Main().startup();
        }, false);
    }else{
        alert("他のブラウザかIE９以降でごらんください。");
    }
}());

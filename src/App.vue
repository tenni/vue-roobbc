<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

;(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=750){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
    font-size: 0.3rem;
    -webkit-overflow-scrolling: touch;
}
*{
    -webkit-tap-highlight-color: transparent;
}
html, body, div, span, applet, object, iframe, h1, h2, h3,
h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address,
big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, table, caption, tbody, tfoot,
thead, tr, th, td,input,textarea {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    line-height: inherit;
    border:none;
    font-family:"Helvetica";
}

html,body{
    height:100%;
}
html{

}
body{
    max-width: 750px;
    margin:0 auto;
}
a{
    text-decoration:none;
    color:inherit;
}
ul{
    list-style: none;
}

a,button,input,optgroup,select,textarea{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}
i{
    font-style: normal;
}
input{
    border-radius:0;
    -webkit-border-radius:0;
}
/*img{
    width:100%;
    height:auto;
}*/
</style>

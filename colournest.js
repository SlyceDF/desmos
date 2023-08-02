// ==UserScript==
// @name         Colournest
// @namespace    https://github.com/slycedf
// @version      0.1
// @description  Colour-coded nested brackets.
// @author       SlyceDF, originally by rownor
// @match        *://www.desmos.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var gradient = ['#281A30', '#4C336B', '#944C6F', '#CD6072', '#DA7765', '#EB9555', '#FCB345', '#C2673E', '#9F3939', '#831B7A', '#490F44'];


    function getNesting(bracket, n=0){
        const parent = bracket.parentNode;
        return parent.classList.contains('dcg-mq-root-block')
        ? n
        : getNesting(parent, n + parent.classList.contains('dcg-mq-bracket-middle'));
    };


    setInterval(function(){document.querySelectorAll('.dcg-mq-paren').forEach(e => (e.style.color = gradient[getNesting(e)%gradient.length]))},10);
})();

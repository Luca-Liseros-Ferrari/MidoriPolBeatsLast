"use strict";!function(){var n,r,t,e=0,o=[];for(r=0;r<256;r++)o[r]=(r+256).toString(16).substr(1);function u(){var r,t=(r=16,(!n||e+r>i.BUFFER_SIZE)&&(e=0,n=i.randomBytes(i.BUFFER_SIZE)),n.slice(e,e+=r));return t[6]=15&t[6]|64,t[8]=63&t[8]|128,t}function i(){var n=u();return o[n[0]]+o[n[1]]+o[n[2]]+o[n[3]]+"-"+o[n[4]]+o[n[5]]+"-"+o[n[6]]+o[n[7]]+"-"+o[n[8]]+o[n[9]]+"-"+o[n[10]]+o[n[11]]+o[n[12]]+o[n[13]]+o[n[14]]+o[n[15]]}i.BUFFER_SIZE=4096,i.bin=u,i.clearBuffer=function(){n=null,e=0},i.test=function(n){return"string"==typeof n&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(n)},"undefined"!=typeof crypto?t=crypto:"undefined"!=typeof window&&void 0!==window.msCrypto&&(t=window.msCrypto),"undefined"!=typeof module&&"function"==typeof require?(t=t||require("crypto"),module.exports=i):"undefined"!=typeof window&&(window.uuid=i),i.randomBytes=function(){if(t){if(t.randomBytes)return t.randomBytes;if(t.getRandomValues)return"function"!=typeof Uint8Array.prototype.slice?function(n){var r=new Uint8Array(n);return t.getRandomValues(r),Array.from(r)}:function(n){var r=new Uint8Array(n);return t.getRandomValues(r),r}}return function(n){var r,t=[];for(r=0;r<n;r++)t.push(Math.floor(256*Math.random()));return t}}()}();
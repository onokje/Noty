(this.webpackJsonpnotey=this.webpackJsonpnotey||[]).push([[0],{11:function(e,c,n){},12:function(e,c,n){"use strict";n.r(c);var t=n(0),a=n(1),s=n.n(a),o=n(5),r=n.n(o),l=(n(11),n(4));function d(e){var c=e.note;return Object(t.jsxs)("div",{className:"sheet",children:[Object(t.jsx)("div",{className:"sheet_line_set treble_clef",children:Object(t.jsx)("span",{className:"sheet_lines",children:Object(t.jsx)("span",{className:"sheet_notes-wrapper",children:"treble"===c.clef&&Object(t.jsx)("span",{className:"sheet-note note-".concat(c.name)})})})}),Object(t.jsx)("div",{className:"sheet_line_set bass_clef",children:Object(t.jsx)("span",{className:"sheet_lines",children:Object(t.jsx)("span",{className:"sheet_notes-wrapper",children:"bass"===c.clef&&Object(t.jsx)("span",{className:"sheet-note note-".concat(c.name)})})})})]})}var b=[{name:"D2",clef:"bass",keyCode:"d"},{name:"E2",clef:"bass",keyCode:"e"},{name:"F2",clef:"bass",keyCode:"f"},{name:"G2",clef:"bass",keyCode:"g"},{name:"A2",clef:"bass",keyCode:"a"},{name:"B2",clef:"bass",keyCode:"b"},{name:"C3",clef:"bass",keyCode:"c"},{name:"D3",clef:"bass",keyCode:"d"},{name:"E3",clef:"bass",keyCode:"e"},{name:"F3",clef:"bass",keyCode:"f"},{name:"G3",clef:"bass",keyCode:"g"},{name:"A3",clef:"bass",keyCode:"a"},{name:"B3",clef:"bass",keyCode:"b"},{name:"C4",clef:"bass",keyCode:"c"},{name:"D4",clef:"bass",keyCode:"d"},{name:"B3",clef:"treble",keyCode:"b"},{name:"C4",clef:"treble",keyCode:"c"},{name:"D4",clef:"treble",keyCode:"d"},{name:"E4",clef:"treble",keyCode:"e"},{name:"F4",clef:"treble",keyCode:"f"},{name:"G4",clef:"treble",keyCode:"g"},{name:"A4",clef:"treble",keyCode:"a"},{name:"B4",clef:"treble",keyCode:"b"},{name:"C5",clef:"treble",keyCode:"c"},{name:"D5",clef:"treble",keyCode:"d"},{name:"E5",clef:"treble",keyCode:"e"},{name:"F5",clef:"treble",keyCode:"f"},{name:"G5",clef:"treble",keyCode:"g"},{name:"A5",clef:"treble",keyCode:"a"},{name:"B5",clef:"treble",keyCode:"b"}],i=n(3),f=n.n(i);function m(e){var c=e.msg;if(!c)return null;var n=c.correct?"That is correct! It is ".concat(c.note):"Sorry, it's not ".concat(c.note);return Object(t.jsx)("div",{className:"notification_wrapper",children:Object(t.jsx)("div",{className:c.correct?"notification_correct":"notification_incorrect",children:Object(t.jsx)("span",{children:n})})})}function j(){return Object(t.jsxs)("div",{className:"introduction",children:[Object(t.jsx)("h1",{children:"Welcome to Notey!"}),Object(t.jsx)("p",{children:"Noty is a simple note reading learning app."}),Object(t.jsx)("h2",{children:"How does it work?"}),Object(t.jsx)("p",{children:"Simply type the name of the notes on your keyboard!"})]})}var y=function(){var e=Math.floor(Math.random()*Math.floor(b.length));return b[e]};var h=function(){var e=Object(a.useState)(y()),c=Object(l.a)(e,2),n=c[0],s=c[1],o=Object(a.useState)(null),r=Object(l.a)(o,2),b=r[0],i=r[1],h=function(){return f.a.unbind(["a","b","c","d","e","f","g"])},k=function(){for(var e=y();e.name===n.name;)e=y();s(e),i("")},C=function(e){n.keyCode===e.key?(i({correct:!0,note:n.name}),h(),setTimeout(k,1e3)):i({correct:!1,note:e.key})};return Object(a.useEffect)((function(){return f.a.bind(["a","b","c","d","e","f","g"],C),h}),[n]),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("header",{className:"App-header",children:"Notey"}),Object(t.jsx)(j,{}),Object(t.jsx)(d,{note:n}),Object(t.jsx)(m,{msg:b})]})};r.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(h,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.4cb20955.chunk.js.map
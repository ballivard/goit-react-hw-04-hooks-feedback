(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{12:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),o=n.n(r),s=(n(12),n(3)),i=n(0),b=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("p",{children:["Good:",t]}),Object(i.jsxs)("p",{children:["Neutral:",n]}),Object(i.jsxs)("p",{children:["Bad:",c]}),Object(i.jsxs)("p",{children:["Total:",a]}),Object(i.jsxs)("p",{children:["Positive feedback:",r," %"]})]})},d=n(6),u=n.n(d),j=n(7),l=n.n(j),h=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(i.jsx)(i.Fragment,{children:t.map((function(e){return Object(i.jsx)("button",{type:"button",className:l.a.Feedback_button,name:e,onClick:n,children:e},u.a.generate())}))})},O=function(e){var t=e.title,n=e.children;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h2",{children:t}),n]})},f=function(e){var t=e.message;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("p",{children:t})})};function g(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),o=Object(s.a)(r,2),d=o[0],u=o[1],j=Object(c.useState)(0),l=Object(s.a)(j,2),g=l[0],x=l[1],k=function(){return n+d+g};return Object(i.jsxs)("div",{children:[Object(i.jsx)(O,{title:"Please leave feedback",children:Object(i.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.name){case"good":a((function(e){return e+1}));break;case"neutral":u((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:return}}})}),0===k()?Object(i.jsx)(f,{message:"No feedback given"}):Object(i.jsx)(O,{title:"Statistics",children:Object(i.jsx)(b,{good:n,neutral:d,bad:g,total:k(),positivePercentage:Math.round(100*n/k())})})]})}var x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root")),x()},7:function(e,t,n){e.exports={Feedback_button:"feedback_Feedback_button__2UgdR"}}},[[22,1,2]]]);
//# sourceMappingURL=main.d1d9a490.chunk.js.map
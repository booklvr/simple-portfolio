(this["webpackJsonpsimple-portfolio"]=this["webpackJsonpsimple-portfolio"]||[]).push([[0],{35:function(n,e){},70:function(n,e){},71:function(n,e){},72:function(n,e){},73:function(n,e){},74:function(n,e){},79:function(n,e,t){"use strict";t.r(e);var i,o=t(1),a=t.n(o),r=t(29),c=t.n(r),s=t(27),d=(0,t(13).createGlobalStyle)(i||(i=Object(s.a)(["\n\n","\n\n:root{\n   /* Colors */\n  --background: #f7f7f7;\n  --black: #000000FF;\n  --purple: #6449E7;\n  --grey: #C7D3D4FF;\n  --white: #fff;\n  --nav: #35353f;\n  --nav2: #3f3d56;\n  --primary: #303f9f;\n  --primaryLight: #7986cd;\n//   --primary: #1a237e;\n  --darkShadow: rgba(136, 143, 140);\n  --lightShadow: rgba(255, 255, 255);\n  --fontWhite: #231f20;\n  --fontLight: #767676;\n  --fontMedium: #35353f;\n\n    --brShadow: 6px 6px 15px rgba(0,0,0,0.5);\n  --tlShadow: -6px -6px 15px rgba(255,255,255,0.8);\n}\n\n*,*::before,*::after{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n    font-family: 'Poppins', sans-serif;\n}\nhtml{\n//   scroll-behavior:smooth;\n}\n    body,\n    html,\n    a {\n        font-family: 'Poppins', sans-serif;\n            }\n    body {\n\n        // margin:0;\n        // padding:0;\n        border: 0;\n        outline: 0;\n        \n\n        overflow-x: hidden;\n    }\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6 {\n        margin:0;\n        padding:0;\n    }\n    a {\n\n        text-decoration: none;\n        outline: none;\n    }\n    button{\n        border:none;\n        outline:none;\n        &:focus{\n            outline:none;\n        }\n    }\n\n    *:focus {\n        outline: none;\n    }\n\n    img {\n        // width: 100%;\n        height: auto;\n    }\n\n    .slick-prev, .slick-next {\n        font-size: 15px !important;\n      }\n      \n       .slick-prev:before, .slick-next:before  {\n        content: '' !important;\n      }\n"])),""),l=t(30),f=t(5),p=t(15),u=t(13),m=t(25),h=t.p+"static/media/resume.da33d158.pdf",b=t(16);function x(){return window.innerWidth}var j=t(4),g=u.default.div.withConfig({displayName:"Resume__ResumePageContainer",componentId:"sc-1a0s6mr-0"})(["display:flex;justify-content:flex-start;align-items:center;flex-direction:column;width:100vw;min-height:100vh;background-color:white;padding-top:10px;"]),w=Object(u.default)(m.a).withConfig({displayName:"Resume__DocumentContainer",componentId:"sc-1a0s6mr-1"})(["overflow-x:hidden;"]),O=Object(u.default)(m.b).withConfig({displayName:"Resume__PDFPage",componentId:"sc-1a0s6mr-2"})(["border:1px solid black;overflow-x:hidden;margin-bottom:5px;"]),y=u.default.div.withConfig({displayName:"Resume__ResumeHeaderContainer",componentId:"sc-1a0s6mr-3"})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 20px 20px;width:100%;@media only Screen and (max-width:42em){padding:0 10px 20px;}a{text-decoration:none;color:#000;cursor:pointer;width:100px;}"]),v=u.default.div.withConfig({displayName:"Resume__PageNumberContainer",componentId:"sc-1a0s6mr-4"})(["display:flex;justify-content:center;align-items:center;p{margin:0 20px;@media only Screen and (max-width:42em){margin:0 5px;}}svg{height:20px;cursor:pointer;}"]),k=u.default.div.withConfig({displayName:"Resume__BackButton",componentId:"sc-1a0s6mr-5"})(["height:20px;width:100px;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;svg{margin-right:5px;}"]),C=function(n){n.location;var e=n.history,t=Object(o.useState)(null),i=Object(p.a)(t,2),a=i[0],r=i[1],c=Object(o.useState)(1),s=Object(p.a)(c,2),d=s[0],l=s[1],f=function(){var n=Object(o.useState)(x()),e=Object(p.a)(n,2),t=e[0],i=e[1];return Object(o.useEffect)((function(){function n(){i(x())}return n(),window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),t>800?600:t-10}();return Object(j.jsxs)(g,{children:[Object(j.jsxs)(y,{children:[Object(j.jsxs)(k,{onClick:function(){e.goBack()},children:[Object(j.jsx)(b.e,{})," Back"]}),Object(j.jsxs)(v,{children:[Object(j.jsx)(b.b,{onClick:function(){d>1&&l(d-1)}}),Object(j.jsxs)("p",{children:["Page ",d," of ",a]}),Object(j.jsx)(b.c,{onClick:function(){d<a&&l(d+1)}})]}),Object(j.jsxs)("a",{style:{textDecoration:"none"},href:h,children:["download ",Object(j.jsx)(b.h,{})]})]}),Object(j.jsx)(w,{file:h,onLoadSuccess:function(n){var e=n.numPages;r(e)},children:Object(j.jsx)(O,{pageNumber:d,width:f})})]})},S=Object(o.lazy)((function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,136))}));var _=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(o.Suspense,{fallback:null,children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(f.c,{children:[Object(j.jsx)(f.a,{path:"/",component:S,exact:!0}),Object(j.jsx)(f.a,{path:"/resume",component:C,exact:!0})]})]})})})};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.5be21fd1.chunk.js.map
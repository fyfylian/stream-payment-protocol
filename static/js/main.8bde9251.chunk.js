(this["webpackJsonpstreamflow-app"]=this["webpackJsonpstreamflow-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"n",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"l",(function(){return m})),n.d(t,"m",(function(){return f})),n.d(t,"k",(function(){return h})),n.d(t,"i",(function(){return x})),n.d(t,"j",(function(){return p}));var r,a=n(24),c="2DvvSEde36Ch3B52g9hKWDYbfmJimLpJwVBV9Cknypi4",s="DrFtxPb9F6SxpHHHFiEtSNXE3SZCUNLXMaHS6r8pkoz2",i="https://www.sollet.io",o=10,l="confirmed",u=0,d=1,b=2,j="address",m="scheduled",f="streaming",h="complete",x="canceled",p=(r={},Object(a.a)(r,m,"gray"),Object(a.a)(r,f,"green"),Object(a.a)(r,h,"blue"),Object(a.a)(r,x,"red"),r)},102:function(e,t,n){},103:function(e,t){},107:function(e,t){},123:function(e,t){},143:function(e,t){},144:function(e,t){},164:function(e,t){},167:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(48),s=n.n(c),i=(n(102),n(5)),o=n(20),l=n(9),u=n(53),d=n(3);function b(e){var t=e.children,n=e.className,r=Object(u.a)(e,["children","className"]);return Object(d.jsx)("button",Object(l.a)(Object(l.a)({className:"block mx-auto px-8 py-4 bg-gradient-to-br from-primary via-primary to-secondary border-transparent font-medium rounded shadow-sm text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary "+n},r),{},{children:t}))}function j(e){return Object(d.jsxs)("div",{className:"max-w-md mx-auto",children:[Object(d.jsx)("iframe",{width:"100%",height:270,src:"https://www.youtube-nocookie.com/embed/7HWzcxu-De0",title:"StreamFlow Finance Demo",frameBorder:"0",allowFullScreen:!0,children:"\xa0"}),Object(d.jsx)(b,{className:"font-bold text-2xl my-5",type:"button",onClick:e.action,children:"Connect"})]})}var m=n(13);function f(e){return Object(d.jsxs)("div",{className:"col-span-full",children:[Object(d.jsx)("label",{htmlFor:"account",className:"block font-medium text-gray-100",children:"Recipient Account"}),Object(d.jsx)("div",{className:"mt-1",children:Object(d.jsx)("input",{type:"text",name:"account",id:"account",defaultValue:e.value,onChange:function(t){return e.onChange(t.target.value)},pattern:"[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{43,44}",className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",placeholder:"Please double check the address","aria-describedby":"account-description",required:!0})})]})}function h(){return Object(d.jsxs)("div",{className:"col-span-2 sm:col-span-1",children:[Object(d.jsx)("label",{htmlFor:"token",className:"block font-medium text-gray-100",children:"Token"}),Object(d.jsxs)("select",{id:"token",name:"token",className:"mt-1 text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",defaultValue:"SOL",children:[Object(d.jsx)("option",{children:"SOL"}),Object(d.jsx)("option",{disabled:!0,children:"ETH - Coming soon\ufe0f\u2122"}),Object(d.jsx)("option",{disabled:!0,children:"BTC - Coming soon\u2122"}),Object(d.jsx)("option",{disabled:!0,children:"USDC - Coming soon\u2122"}),Object(d.jsx)("option",{disabled:!0,children:"Other tokens..."})]})]})}var x=n(14),p=n(16),O=n(22),g=n(23),v=n(27),y=function(e){Object(O.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(x.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hidden:!1},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"relative bg-primary ".concat(this.state.hidden&&"hidden"),children:Object(d.jsxs)("div",{className:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8",children:[Object(d.jsx)("div",{className:"pr-16 sm:text-center sm:px-16",children:Object(d.jsxs)("p",{className:"font-small text-white",children:[Object(d.jsx)("b",{children:"Devnet version. Test freely! "}),Object(d.jsx)("span",{className:"hidden lg:inline",children:"Coming soon\u2122 to mainnet."})]})}),Object(d.jsx)("div",{className:"absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start",children:Object(d.jsxs)("button",{type:"button",onClick:function(){return e.setState({hidden:!0})},className:"flex p-2 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white",children:[Object(d.jsx)("span",{className:"sr-only",children:"Dismiss"}),Object(d.jsx)(v.d,{className:"h-6 w-6 text-white"})]})})]})})}}]),n}(r.Component),w=n(169),N=n(170);function k(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"col-span-3 sm:col-span-1",children:[Object(d.jsxs)("label",{htmlFor:e.title,className:"block font-medium text-gray-100 capitalize",children:[e.title," Date"]}),Object(d.jsx)("div",{className:"mt-1",children:Object(d.jsx)("input",{type:"date",name:e.title,id:e.title,value:e.date,min:Object(w.a)(new Date,"yyyy-MM-dd"),max:Object(w.a)(Object(N.a)(new Date,{years:1}),"yyyy-MM-dd"),onChange:e.updateDate,className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",placeholder:"","aria-describedby":e.title+"-description",required:!0})})]}),Object(d.jsxs)("div",{className:"col-span-2 sm:col-span-1",children:[Object(d.jsxs)("label",{htmlFor:e.title+"_time",className:"block font-medium text-gray-100 capitalize",children:[e.title," time"]}),Object(d.jsx)("div",{className:"mt-1",children:Object(d.jsx)("input",{type:"time",name:e.title+"_time",id:e.title+"_time",value:e.time,onChange:e.updateTime,className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",placeholder:"","aria-describedby":e.title+"_time-description",required:!0})})]})]})}function S(e){return Object(d.jsxs)("div",{className:"col-span-3 sm:col-span-1",children:[Object(d.jsx)("label",{htmlFor:"amount",className:"block font-medium text-gray-100",children:"Amount"}),Object(d.jsx)("div",{className:"mt-1",children:Object(d.jsx)("input",{step:"any",autoFocus:!0,type:"number",name:"amount",id:"amount",defaultValue:e.value,onChange:function(t){return e.onChange(t.target.value)},className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",min:0,max:e.max||Number.MAX_SAFE_INTEGER,placeholder:"0.00","aria-describedby":"amount-description",required:!0})})]})}function C(e){return Object(d.jsx)("div",{className:"fixed top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-90 z-10 ".concat(e.visible?"block":"hidden"),children:Object(d.jsx)("div",{className:"loader",children:" "})})}function D(e){var t=e.type,n=e.color;return Object(d.jsx)("div",{className:"inline",children:Object(d.jsxs)("span",{className:"align-top px-2.5 py-0.5 rounded-full text-xs font-medium bg-".concat(n,"-100 text-").concat(n,"-800 capitalize"),children:[Object(d.jsx)("svg",{className:"mr-1 -ml-1 inline align-baseline h-2 w-2 text-".concat(n,"-400"),fill:"currentColor",viewBox:"0 0 8 8",children:Object(d.jsx)("circle",{cx:4,cy:4,r:3})}),t]})})}function T(e){var t=e.title,n=e.action,r=e.color;return Object(d.jsx)("button",{onClick:n,className:"rounded-md text-sm bg-".concat(r,"-500 hover:bg-").concat(r,"-700 active:bg-").concat(r," text-white py-1 px-2"),children:t})}var B=n(171),F=n(168);function W(e){return Object(d.jsxs)("dt",{className:"col-span-full text-center",children:[Object(w.a)(Object(F.a)(e.start),"yyyy-MM-dd HH:mm")," \u2013 ",Object(w.a)(Object(F.a)(e.end),"yyyy-MM-dd HH:mm")]})}var E=Object(r.memo)(W);function A(e){var t=e.title,n=e.value,r=e.max,a=e.rtl;return n=Number(n).toFixed(2),r=Number(r).toFixed(2),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("dt",{children:t}),Object(d.jsx)("div",{className:"rounded-sm h-3 bg-gray-900 w-full my-auto",children:Object(d.jsx)("div",{className:"bg-gradient-to-r from-primary to-secondary rounded-sm h-full "+(a?"float-right":""),style:{width:n/r*100+"%"}})}),Object(d.jsxs)("label",{className:"ml-2 text-right truncate",children:["\u25ce",n,Object(d.jsxs)("small",{className:"text-gray-400",children:["/",r]})]})]})}var M=n(21),I=n(10);function H(e){var t=e.data,n=t.start,a=t.end,c=t.withdrawn,s=t.amount,i=t.receiver,o=t.sender,l=t.status,u=e.myAddress,b=e.removeStream,j=e.onStatusUpdate,f=e.onCancel,h=e.onWithdraw,x=e.id,p=I.j[l],O=Object(r.useState)(L(n,a,s)),g=Object(m.a)(O,2),y=g[0],w=g[1],N=Object(r.useState)(y-c),k=Object(m.a)(N,2),S=k[0],C=k[1],F=(l===I.m||l===I.k&&c<s)&&u===i,W=(l===I.m||l===I.l)&&u===o;return Object(r.useEffect)((function(){var e=setInterval((function(){w(L(n,a,s)),C(y-c);var e=function(e,t,n){var r=Object(B.a)(new Date);return e===I.l&&r>=t?I.m:e===I.m&&r>=n?I.k:e}(l,n,a);e!==l&&j(e)}),1e3);return function(){return clearInterval(e)}})),Object(d.jsxs)("dl",{className:"text-white my-4 grid gap-y-4 gap-x-2 grid-cols-3 p-4 bg-".concat(p,"-300 bg-opacity-10 hover:bg-opacity-20 shadow rounded-lg"),children:[Object(d.jsxs)("div",{className:"col-span-full",children:[Object(d.jsx)(D,{className:"inline",type:l,color:p}),Object(d.jsx)("button",{onClick:b,className:"p-1.5 h-6 w-6 float-right align-top rounded-sm hover:bg-".concat(p,"-100 focus:outline-none focus:ring-1"),children:Object(d.jsx)(v.d,{className:"float-right w-3 h-3"})})]}),Object(d.jsx)(E,{start:n,end:a}),Object(d.jsx)(_,{url:Object(M.e)(I.b,x),title:"ID"}),Object(d.jsx)(z,{address:x,className:"col-span-2 text-sm text-gray-400"}),Object(d.jsx)(_,{url:Object(M.e)(I.b,i),title:"Recipient"}),Object(d.jsx)(z,{address:i,className:"col-span-2 text-sm text-gray-400"}),Object(d.jsx)(A,{title:"Withdrawn",value:c,max:s}),l===I.i&&Object(d.jsx)(A,{title:"Returned",value:s-c,max:s,rtl:!0}),l!==I.i&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(A,{title:"Streamed",value:y,max:s}),F&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("dt",{children:["Available",Object(d.jsx)("br",{}),Object(d.jsx)("sup",{className:"text-xs text-gray-300 align-top",children:"for withdrawal"})]}),Object(d.jsxs)("dd",{className:"col-span-2",children:["\u25ce",S.toFixed(2)]}),Object(d.jsx)(T,{title:"Withdraw",action:h,color:I.j[I.m]})]}),W&&Object(d.jsx)(T,{title:"Cancel",action:f,color:I.j[I.i]})]})]})}function L(e,t,n,r){return(r=r||Object(B.a)(new Date))<e?0:r>t?n:(r-e)/(t-e)*n}function P(){return Object(d.jsxs)("footer",{className:"mt-40 mb-4 text-center text-sm font-mono text-gray-400",children:[Object(d.jsx)("img",{src:"https://solana.com/branding/horizontal/logo-horizontal-gradient-dark.png",className:"w-40 mx-auto my-2",alt:"Solana logo"}),Object(d.jsxs)("small",{children:[Object(d.jsx)(_,{url:"https://streamflow.finance",title:"StreamFlow",hideIcon:!0}),"@ ",Object(d.jsx)(_,{url:"https://solana.com/solanaszn",title:"SolanaSZN",hideIcon:!0})]})]})}function K(e){return Object(d.jsxs)("div",{className:"mb-8 text-white",children:[Object(d.jsx)("img",{src:e.src,alt:"StreamFlow Finance logo",className:"w-24 mx-auto"}),Object(d.jsxs)("h1",{className:"text-6xl text-center",children:["Stream",Object(d.jsx)("strong",{children:"Flow"})]})]})}function _(e){var t=e.url,n=e.title,r=e.className,a=e.hideIcon||Object(d.jsx)("sup",{children:Object(d.jsx)(v.c,{className:"w-3 h-3 inline"})});return Object(d.jsx)("strong",{className:"text-gray-300 hover:text-white "+r,children:Object(d.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:[n||t," ",a]})})}function z(e){var t=e.address,n=e.className,a="h-4 inline mr-1 cursor-pointer hover:opacity-80 align-text-bottom ",c=Object(r.useState)(!1),s=Object(m.a)(c,2),i=s[0],o=s[1];return Object(d.jsxs)("span",{className:"block truncate "+n,children:[i?Object(d.jsxs)("span",{className:"text-green-300 mr-1",children:[Object(d.jsx)(v.a,{className:a}),Object(d.jsx)("small",{children:"Copied!"})]}):Object(d.jsx)(v.b,{className:a,onClick:function(){Object(M.c)(t),o(!0),setTimeout((function(){o(!1)}),1e3)}}),t]})}var U=n(2),R=n.n(U),V=n(24),q=n(11),J=n(6),X=Object(r.createContext)(void 0);function Y(e){var t=new Date,n=Object(r.useState)(void 0),a=Object(m.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(void 0),o=Object(m.a)(i,2),l=o[0],u=o[1],b=Object(r.useState)(Object(w.a)(t,"yyyy-MM-dd")),j=Object(m.a)(b,2),f=j[0],h=j[1],x=Object(r.useState)(Object(w.a)(Object(N.a)(t,{minutes:1}),"HH:mm")),p=Object(m.a)(x,2),O=p[0],g=p[1],v=Object(r.useState)(f),y=Object(m.a)(v,2),k=y[0],S=y[1],C=Object(r.useState)(O),D=Object(m.a)(C,2),T=D[0],B=D[1];return Object(d.jsx)(X.Provider,{value:{amount:c,setAmount:s,receiver:l,setReceiver:u,startDate:f,setStartDate:h,startTime:O,setStartTime:g,endDate:k,setEndDate:S,endTime:T,setEndTime:B},children:e.children})}var Z=n(91),G=n(92),Q=n(93),$=n(38),ee=Object($.a)((function(e){return{balance:0,setBalance:function(t){return e({balance:t})}}})),te=n(35),ne=Object(r.createContext)(void 0);function re(e){var t=Object(r.useState)(Object(i.i)("devnet")),n=Object(m.a)(t,1)[0],a=Object(r.useState)(I.g),c=Object(m.a)(a,1)[0],s=Object(r.useState)(void 0),o=Object(m.a)(s,2),l=o[0],u=o[1],b=Object(r.useState)(!1),j=Object(m.a)(b,2),f=j[0],h=j[1],x=Object(r.useMemo)((function(){return new i.a(n)}),[n]),p=Object(r.useMemo)((function(){return new te.a(c,n)}),[c,n]);return Object(d.jsx)(ne.Provider,{value:{network:n,providerUrl:c,selectedWallet:l,setSelectedWallet:u,connected:f,setConnected:h,connection:x,urlWallet:p},children:e.children})}function ae(){return Object(r.useContext)(ne)}var ce=Object($.a)((function(e){return{streams:localStorage.streams?JSON.parse(localStorage.streams):{},setStreams:function(t){return e({streams:t})}}}));function se(e){e.loading;var t=e.setLoading,n=i.b.generate(),a=Object(r.useContext)(X),c=a.amount,s=a.setAmount,o=a.receiver,u=a.setReceiver,j=a.startDate,m=a.setStartDate,x=a.startTime,p=a.setStartTime,O=a.endDate,g=a.setEndDate,v=a.endTime,y=a.setEndTime,w=ae(),N=w.connection,C=w.selectedWallet,D=w.network,T=ee(),F=T.balance,W=T.setBalance,E=ce(),A=E.streams,I=E.setStreams;function H(e){var t,n=e.name,r=e.value,a="";switch(n){case"start":a=(t=new Date(r+"T"+x))<new Date?"Cannot start the stream in the past.":"";break;case"start_time":a=(t=new Date(j+"T"+r))<new Date?"Cannot start the stream in the past.":"";break;case"end":a=new Date(r)<new Date(j)?"Umm... end date before the start date?":"";break;case"end_time":t=new Date(j+"T"+x),a=new Date(O+"T"+r)<t?"Err... end time before the start time?":""}e.setCustomValidity(a)}function L(){return P.apply(this,arguments)}function P(){return(P=Object(J.a)(R.a.mark((function e(){var r,a,s,i,u,d,b;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=document.getElementById("form"),a=Object(q.a)(r.elements);try{for(a.s();!(s=a.n()).done;)H(s.value)}catch(m){a.e(m)}finally{a.f()}if(r.checkValidity()){e.next=6;break}return r.reportValidity(),e.abrupt("return",!1);case 6:return i=Object(B.a)(new Date(j+"T"+x)),(u=Object(B.a)(new Date(O+"T"+v)))===i&&(u=i+1),t(!0),d=new M.a(C.publicKey.toBase58(),o,c,i,u),e.next=13,Object(Z.a)(d,N,C,D,n);case 13:b=e.sent,t(!1),b&&(Object(M.f)(n.publicKey.toBase58()),W(F-c),I(Object(l.a)(Object(l.a)({},A),{},Object(V.a)({},n.publicKey.toBase58(),d))));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)("form",{onSubmit:L,id:"form",children:[Object(d.jsxs)("div",{className:"my-4 grid gap-4 grid-cols-5 sm:grid-cols-2",children:[Object(d.jsx)(S,{onChange:s,value:c,max:F}),Object(d.jsx)(h,{}),Object(d.jsx)(f,{onChange:u,value:o}),Object(d.jsx)(k,{title:"start",date:j,updateDate:function(e){return m(e.target.value)},time:x,updateTime:function(e){return p(e.target.value)}}),Object(d.jsx)(k,{title:"end",date:O,updateDate:function(e){return g(e.target.value)},time:v,updateTime:function(e){return y(e.target.value)}})]}),Object(d.jsx)(b,{className:"font-bold text-2xl my-5",onClick:L,type:"button",children:"Stream!"})]})}function ie(e){var t=e.wallet,n=e.loading,a=e.setLoading,c=Object(r.useState)(void 0),s=Object(m.a)(c,2),l=s[0],u=s[1],j=ee(),f=j.balance,h=j.setBalance,x=ae(),p=x.connection,O=x.selectedWallet;function g(){return(g=Object(J.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,p.requestAirdrop(O.publicKey,I.a*i.c);case 3:t=e.sent,u(t),a(!1),o.b.success("Airdrop requested!");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){l&&p.confirmTransaction(l,I.n).then((function(e){e.value.err?o.b.error("Airdrop failed!"):(h(f+I.a),o.b.success("Airdrop confirmed. Balance updated!"))}))}),[l]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"mb-4 text-white",children:[Object(d.jsx)(_,{url:Object(M.e)("address",t.publicKey.toBase58()),title:"My Wallet Address"}),Object(d.jsx)(z,{address:t.publicKey.toBase58(),className:"block truncate"})]}),Object(d.jsxs)("div",{className:"mb-4 clearfix text-white",children:[Object(d.jsx)("strong",{className:"block",children:"Balance"}),Object(d.jsxs)("span",{children:["\u25ce",Number(f).toFixed(4)]}),Object(d.jsx)("button",{type:"button",onClick:function(){return t.disconnect()},className:"float-right items-center px-2.5 py-1.5 shadow-sm text-xs  font-medium rounded bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",children:"Disconnect"}),Object(d.jsx)(b,{type:"button",onClick:function(){return g.apply(this,arguments)},className:"float-right mr-2 px-2.5 py-1.5 text-xs my-0 rounded active:bg-white",disabled:n,children:"Airdrop"})]})]})}function oe(){return Object(d.jsxs)("div",{className:"mx-auto my-10 text-white text-center",children:[Object(d.jsx)("span",{children:"Your streams will appear here."}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"Start streaming!"})]})}function le(){var e=ae(),t=e.network,n=e.selectedWallet,a=e.connection,c=ee(),s=c.balance,u=c.setBalance,b=ce((function(e){return[e.streams,e.setStreams]})),j=Object(m.a)(b,2),f=j[0],h=j[1];function x(){return(x=Object(J.a)(R.a.mark((function e(r){var c,i,o,d,b;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=f[r],i=c.start,o=c.end,d=c.amount,e.next=3,Object(G.a)(r,f[r],a,n,t);case 3:e.sent&&(b=L(i,o,d),u(s+b),h(Object(l.a)(Object(l.a)({},f),{},Object(V.a)({},r,Object(l.a)(Object(l.a)({},f[r]),{},{withdrawn:b})))));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(J.a)(R.a.mark((function e(r){var c,i,o,d,b,j;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=f[r],i=c.start,o=c.end,d=c.amount,b=new Date,j=L(i,o,d),e.next=5,Object(Q.a)(r,f[r],a,n,t);case 5:e.sent&&(u(s+d-j),h(Object(l.a)(Object(l.a)({},f),{},Object(V.a)({},r,Object(l.a)(Object(l.a)({},f[r]),{},{withdrawn:j,canceled_at:Object(B.a)(b),status:I.i})))));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(J.a)(R.a.mark((function e(t,n){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!n,!e.t0){e.next=5;break}return e.next=4,Object(M.b)();case 4:e.t0=e.sent;case 5:if(!e.t0){e.next=9;break}delete(r=Object(l.a)({},f))[t],h(r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=Object(l.a)({},f),t=window.location.hash.substring(1);if(t)try{new i.d(t),e[t]=void 0}catch(c){o.b.error("Stream doesn't exist. Please double check with the sender.")}var n=function(n){if(e.hasOwnProperty(n)){var r=void 0;try{r=new i.d(n)}catch(c){o.b.error(c.message+n)}r&&a.getAccountInfo(new i.d(n)).then((function(e){var r=Object(l.a)({},f);(null===e||void 0===e?void 0:e.data)?r[n]=Object(M.d)(e.data):(n===t&&o.b.error("Stream doesn't exist. Please double check with the sender."),delete r[n]),h(r)}))}};for(var r in e)n(r)}),[]),Object(r.useEffect)((function(){localStorage.streams=JSON.stringify(f)}),[f]),Object(d.jsxs)("div",{children:[Object(d.jsx)("strong",{className:"text-white text-center text-2xl block",children:"My Streams"}),Object.keys(f).length>0?Object.entries(f).sort((function(e,t){var n=Object(m.a)(e,2)[1];return Object(m.a)(t,2)[1].start-n.start})).map((function(e){var t=Object(m.a)(e,2),r=t[0],a=t[1];return Object(d.jsx)(H,{onStatusUpdate:function(e){return h(Object(l.a)(Object(l.a)({},f),{},Object(V.a)({},r,Object(l.a)(Object(l.a)({},f[r]),{},{status:e}))))},onWithdraw:function(){return function(e){return x.apply(this,arguments)}(r)},onCancel:function(){return function(e){return p.apply(this,arguments)}(r)},id:r,data:a,myAddress:n.publicKey.toBase58(),removeStream:function(){return function(e,t){return O.apply(this,arguments)}(r)}},r)})):Object(d.jsx)(oe,{})]})}function ue(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),n=t[0],a=t[1],c=ae().selectedWallet;return Object(d.jsxs)("div",{className:"mx-auto grid grid-cols-1 gap-16 max-w-lg xl:grid-cols-2 xl:max-w-5xl",children:[Object(d.jsxs)("div",{className:"mb-8",children:[Object(d.jsx)(C,{visible:n}),Object(d.jsx)(ie,{wallet:c,loading:n,setLoading:a}),Object(d.jsx)("hr",{}),Object(d.jsx)(se,{loading:n,setLoading:a})]}),Object(d.jsx)(le,{})]})}n(166);var de=n.p+"static/media/logo.c4294b7c.png";var be=function(){var e=ae(),t=e.selectedWallet,n=e.setSelectedWallet,a=e.urlWallet,c=e.connected,s=e.setConnected,l=e.connection,u=ee().setBalance;return Object(r.useEffect)((function(){if(t)return t.on("connect",(function(){s(!0),l.getBalance(t.publicKey).then((function(e){return u(e/i.c)})),o.b.success("Connected to wallet!")})),t.on("disconnect",(function(){s(!1),o.b.info("Disconnected from wallet")})),function(){t.disconnect()}}),[l,t,u,s]),Object(r.useEffect)((function(){n(a)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(y,{}),Object(d.jsxs)("div",{className:"mx-auto bg-blend-darken px-4 my-4",children:[Object(d.jsx)(K,{src:de}),c?Object(d.jsx)(ue,{}):Object(d.jsx)(j,{action:function(){return t.connect()}})]}),Object(d.jsx)(o.a,{hideProgressBar:!0,position:"bottom-left",limit:4}),Object(d.jsx)(P,{})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(re,{children:Object(d.jsx)(Y,{children:Object(d.jsx)(be,{})})})}),document.getElementById("root")),je()},21:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return x})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return v}));var r=n(10),a=n(4),c=n.n(a),s=n(5),i=n(42),o=n(171),l=n(56),u=n.n(l),d=(n(8),n(38)),b=Object(d.a)((function(e){return{network:Object(s.i)("devnet"),setNetwork:function(t){return e({network:t})}}})),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"publicKey";return c.a.blob(32,e)},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uint64";return c.a.blob(8,e)},f=c.a.struct([m("starttime"),m("endtime"),m("amount"),m("withdrawn"),j("sender"),j("recipient")]);function h(e){var t=f.decode(e),n=Number(i.a.fromBuffer(t.starttime)),a=Number(i.a.fromBuffer(t.endtime)),c=Number(i.a.fromBuffer(t.amount))/s.c,l=Number(i.a.fromBuffer(t.withdrawn))/s.c;return new p(new s.d(t.sender).toBase58(),new s.d(t.recipient).toBase58(),c,n,a,l,function(e,t,n){return n<e?r.l:n<t?r.m:r.k}(Number(n),Number(a),Object(o.a)(new Date)))}function x(e,t){var n=b.getState().network,r=function(e){var t=e.match(/https:\/\/api\.(.*)\.solana\.com/);return t?t[1]:null}(n)||"custom&customUrl=".concat(n);return"https://explorer.solana.com/".concat(e,"/").concat(t,"?cluster=").concat(r)}function p(e,t,n,a,c,s,i,o){this.sender=e,this.receiver=t,this.amount=n,this.start=a,this.end=c,this.withdrawn=s||0,this.status=o?r.i:i||r.l,this.canceled_at=o}function O(){return u()({text:"Are you sure?",icon:"warning",buttons:!0})}function g(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function v(e){var t=window.location.origin+"#"+e;u()({button:"Copy Stream URL",icon:"success",title:"Stream created!",content:{element:"a",attributes:{className:"text-primary block truncate max-w-full",href:t,target:"_blank",innerHTML:t}}}).then((function(e){e&&(g(t),u()("Link copied to clipboard!","Send it to the recipient!","success"))}))}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(2),a=n.n(r),c=n(6),s=n(20),i=(n(5),n(27)),o=n(3);function l(e){var t=e.url,n=e.urlText,r=e.nonUrlText;return Object(o.jsxs)("span",{children:[r,Object(o.jsx)("br",{}),Object(o.jsxs)("a",{className:"font-bold",href:t,rel:"noopener noreferrer",target:"_blank",children:[n,Object(o.jsx)(i.c,{className:"ml-1 w-4 h-4 inline"})]})]})}n(35);var u=n(10),d=n(21);function b(e,t,n,r,a,c){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(t,n,r,c,i,b){var j,m,f,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getRecentBlockhash();case 3:return n.recentBlockhash=e.sent.blockhash,s.b.info("Please confirm transaction in your wallet.",{autoClose:15e3}),n.feePayer=c.publicKey,t===u.d&&n.partialSign(b),e.next=9,c.signTransaction(n);case 9:return j=e.sent,e.next=12,r.sendRawTransaction(j.serialize());case 12:return m=e.sent,s.b.dismiss(),s.b.info("Submitted transaction. Awaiting confirmation...",{autoClose:15e3}),f=u.n,e.next=18,r.confirmTransaction(m,f);case 18:return h=Object(d.e)("tx",m),s.b.dismiss(),s.b.success(Object(o.jsx)(l,{url:h,urlText:"View on explorer",nonUrlText:"Transaction ".concat(f,"!")+(f===u.n?" Please allow it some time to finalize.":"")}),{autoClose:2e4,closeOnClick:!1}),e.abrupt("return",!0);case 24:return e.prev=24,e.t0=e.catch(0),console.warn(e.t0),s.b.error("Error: "+e.t0.message),e.abrupt("return",!1);case 29:case"end":return e.stop()}}),e,null,[[0,24]])})))).apply(this,arguments)}},91:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var r=n(2),a=n.n(r),c=n(6),s=n(5),i=n(4),o=n.n(i),l=n(10),u=(n(21),n(39));n(35);function d(e,t,n,r,a){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(t,n,r,c,i){var o,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=j(t,i.publicKey),d=(new s.g).add(o),e.next=4,Object(u.a)(l.d,d,n,r,c,i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){var n=e.sender,r=e.receiver;return new s.h({keys:[{pubkey:new s.d(n),isSigner:!0,isWritable:!0},{pubkey:new s.d(r),isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!0,isWritable:!0},{pubkey:s.f.programId,isSigner:!1,isWritable:!1}],programId:new s.d(l.f),data:m(e)})}function m(t){var n=t.amount,r=t.start,a=t.end,c=o.a.struct([o.a.u8("instruction"),o.a.u32("start"),o.a.u32("end"),o.a.nu64("amount")]),i=e.alloc(c.span);return c.encode({instruction:l.d,start:r,end:a,amount:Math.trunc(n*s.c)},i),i}}).call(this,n(8).Buffer)},92:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var r=n(2),a=n.n(r),c=n(6),s=n(4),i=n.n(s),o=n(10),l=n(5),u=(n(21),n(39));n(35);function d(e,t,n,r,a){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(t,n,r,c,s){var i,d,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.receiver,d=j(t,i),b=(new l.g).add(d),e.next=5,Object(u.a)(o.e,b,r,c,s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return new l.h({keys:[{pubkey:new l.d(t),isSigner:!0,isWritable:!0},{pubkey:new l.d(e),isSigner:!1,isWritable:!0},{pubkey:new l.d(o.h),isSigner:!1,isWritable:!0},{pubkey:l.f.programId,isSigner:!1,isWritable:!1}],programId:new l.d(o.f),data:m()})}function m(){var t=i.a.struct([i.a.u8("instruction"),i.a.nu64("amount")]),n=e.alloc(t.span);return t.encode({instruction:o.e,amount:0},n),n}}).call(this,n(8).Buffer)},93:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var r=n(2),a=n.n(r),c=n(6),s=n(4),i=n.n(s),o=n(10),l=n(5),u=(n(21),n(39));n(35);function d(e,t,n,r,a){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(t,n,r,c,s){var i,d,b,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.sender,d=n.receiver,b=j(t,i,d),m=(new l.g).add(b),e.next=5,Object(u.a)(o.c,m,r,c,s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,n){return new l.h({keys:[{pubkey:new l.d(t),isSigner:!0,isWritable:!0},{pubkey:new l.d(n),isSigner:!1,isWritable:!0},{pubkey:new l.d(e),isSigner:!1,isWritable:!0},{pubkey:l.f.programId,isSigner:!1,isWritable:!1}],programId:new l.d(o.f),data:m()})}function m(){var t=i.a.struct([i.a.u8("instruction")]),n=e.alloc(t.span);return t.encode({instruction:o.c},n),n}}).call(this,n(8).Buffer)}},[[167,1,2]]]);
//# sourceMappingURL=main.8bde9251.chunk.js.map
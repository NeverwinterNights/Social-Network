(this.webpackJsonpnetwork=this.webpackJsonpnetwork||[]).push([[3],{268:function(e,s,a){e.exports={main:"Dialogs_main__2UXer",dialogs:"Dialogs_dialogs__luw1S",dialog:"Dialogs_dialog__19LfF",active:"Dialogs_active__3Kcdw",message:"Dialogs_message__2luxZ"}},269:function(e,s,a){e.exports={main:"Message_main__1xDAO",dialogs:"Message_dialogs__256Ta",dialog:"Message_dialog__1QWPf",active:"Message_active__2HtPS",message:"Message_message__2OemR"}},270:function(e,s,a){e.exports={main:"DialogsItem_main__1Du3v",dialogs:"DialogsItem_dialogs__3HVJ2",dialog:"DialogsItem_dialog__3OiEX",active:"DialogsItem_active__24LO9",message:"DialogsItem_message__iR8I0"}},272:function(e,s,a){"use strict";a.r(s),a.d(s,"mapStateToProps",(function(){return P})),a.d(s,"mapDispatchToProps",(function(){return S}));var i=a(7),t=(a(0),a(268)),n=a.n(t),o=a(269),c=a.n(o),g=a(1),d=function(e){return Object(g.jsx)("div",{className:c.a.message,children:e.message})},l=a(14),r=a(270),u=a.n(r),m=function(e){return Object(g.jsx)("div",{className:u.a.dialog,children:Object(g.jsx)(l.b,{to:"/dialogs/"+e.id,children:e.name})})},_=a(266),j=a(265),b=a(119),O=a(35),f=Object(O.a)(50),h=Object(j.a)({form:"dialogAddMessageFormDialog"})((function(e){return Object(g.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(g.jsx)("div",{children:Object(g.jsx)(_.a,{component:b.a,validate:[O.b,f],name:"newMessageBody",placeholder:"Enter message"})}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{children:"Send"})})]})})),x=a(100),v=a(10),p=a(3),D=a(65),M=a(11),w=function(e){return{isAuth:e.auth.isAuth}};var P=function(e){return{dialogsPage:e.dialogsPage}},S=function(e){return{sendMessage:function(s){e(Object(x.a)(s))}}};s.default=Object(v.d)(Object(i.b)(P,S),(function(e){return Object(i.b)(w)((function(s){var a=s.isAuth,i=Object(D.a)(s,["isAuth"]);return a?Object(g.jsx)(e,Object(p.a)({},i)):Object(g.jsx)(M.a,{to:"/login"})}))}))((function(e){return Object(g.jsxs)("div",{className:n.a.main,children:[Object(g.jsx)("div",{className:n.a.dialogs,children:e.dialogsPage.dialogs.map((function(e){return Object(g.jsx)(m,{name:e.name,id:e.id},e.id)}))}),Object(g.jsxs)("div",{className:n.a.messages,children:[Object(g.jsxs)("div",{children:[" ",e.dialogsPage.messages.map((function(e,s){return Object(g.jsx)(d,{message:e.message},s)}))]}),Object(g.jsx)(h,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})}))}}]);
//# sourceMappingURL=3.ff6cf19d.chunk.js.map
(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{106:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(19),i=c.n(n),r=(c(80),c.p,c(81),c(82),c(3)),l=c(9),o=c.n(l),j=c(6),d=c(0);var b=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),l=i[0],b=i[1],u=Object(s.useState)(""),h=Object(r.a)(u,2),x=h[0],m=h[1],O=Object(s.useState)(""),p=Object(r.a)(O,2),f=p[0],g=p[1],v=Object(s.useState)([]),N=Object(r.a)(v,2),y=N[0],w=N[1],k=Object(s.useState)(!1),S=Object(r.a)(k,2),C=S[0],P=S[1],I=Object(s.useState)(null),q=Object(r.a)(I,2),A=q[0],E=q[1],L=Object(s.useState)("Mobile"),F=Object(r.a)(L,2),T=F[0],D=F[1],_=Object(s.useState)(0),R=Object(r.a)(_,2),B=R[0],M=R[1],Y=localStorage.getItem("admin");return Object(s.useEffect)((function(){o.a.get("http://localhost:4000/products").then((function(e){return w(e.data.data)}))}),[y]),Object(d.jsxs)("div",{children:[Object(d.jsx)(j.b,{children:Object(d.jsx)(j.d,{children:Y?Object(d.jsx)(j.a,{to:"/AdminDashboard"}):Object(d.jsx)(j.a,{to:"/AdminPanel"})})}),Object(d.jsxs)("div",{className:"card w-25 mx-auto mt-5",children:[Object(d.jsx)("h2",{className:"text-center text-primary",children:"Add Product"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(y),o.a.post("http://localhost:4000/products",{name:c,descr:l,price:x,img:f,stock:B,category:T,quantity:1}).then((function(e){return console.log("added")})),alert("Data Added Successfully"),a(""),b(""),m(0)},children:[Object(d.jsx)("input",{onChange:function(e){g(e.target.value)},className:"form-control",type:"text",placeholder:"Enter Link Of Product"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{required:!0,onChange:function(e){a(e.target.value)},value:c,className:"form-control",type:"text",placeholder:"Product Name"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("textarea",{required:!0,onChange:function(e){b(e.target.value)},value:l,className:"form-control",type:"text",placeholder:"Product Description"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{required:!0,onChange:function(e){m(e.target.value)},value:x,className:"form-control",type:"number",placeholder:"Product Price"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("input",{required:!0,onChange:function(e){M(e.target.value)},value:B,className:"form-control",type:"number",placeholder:"Stock Quantity"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"",children:"Category:"}),Object(d.jsx)("br",{}),Object(d.jsxs)("select",{name:"category",onChange:function(e){D(e.target.value)},className:"form-control",id:"",children:[Object(d.jsx)("option",{value:"Mobile",children:"Mobile"}),Object(d.jsx)("option",{value:"Laptop",children:"Laptop"}),Object(d.jsx)("option",{value:"TV",children:"Smart TV"}),Object(d.jsx)("option",{value:"Watches",children:"Watches"}),Object(d.jsx)("option",{value:"Cloth",children:"Cloth"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"submit",className:"btn btn-outline-primary",children:"Add Product"}),C?Object(d.jsx)("button",{className:"btn btn-primary ",onClick:function(){var e;e=A,o.a.put("http://localhost:4000/products/".concat(e),{name:c,descr:l,price:x,path:f,stock:B,category:T}),a(""),b(""),m(0),P(!1)},children:"Update"}):""]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{children:Object(d.jsx)("h3",{className:"text-center",style:{color:"red"},children:"Your Products"})}),Object(d.jsx)("div",{className:"d-flex flex-wrap justify-content-between px-2 ",children:y.map((function(e,t){return Object(d.jsxs)("div",{className:"card text-center p-1 bg-light",id:"cardId",children:[Object(d.jsx)("div",{className:"py-2",children:Object(d.jsx)("img",{src:e.img,alt:"",style:{width:"10vw",height:"20vh"}})}),Object(d.jsx)("div",{className:"uppercase",children:e.name}),Object(d.jsxs)("div",{className:"descr mx-auto my-1",children:["Description: ",e.descr]}),Object(d.jsxs)("div",{className:"descr mx-auto my-1",children:["Category: ",e.category]}),Object(d.jsxs)("div",{className:"descr mx-auto my-1",children:["Stock:   ",e.stock]}),Object(d.jsxs)("div",{className:"d-flex mx-auto",children:[Object(d.jsx)("h2",{className:"productPrice",children:e.price})," ",Object(d.jsx)("h2",{children:"\u20b9"})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"d-flex  justify-content-between",children:[Object(d.jsx)("div",{className:""}),Object(d.jsxs)("div",{className:"w-75",children:[Object(d.jsx)("button",{className:"btn",onClick:function(){!function(e,t){P(!0),a(y[t].name),b(y[t].descr),m(y[t].price),g(y[t].path),D(y[t].category),M(y[t].stock)}(e._id,t),E(e._id)},children:Object(d.jsx)("i",{className:"fa fa-pencil-square-o fa-2x text-success","aria-hidden":"true"})}),Object(d.jsx)("button",{className:"btn",onClick:function(){var t;t=e._id,o.a.delete("http://localhost:4000/products/".concat(t)).then((function(){return console.log("deleyed")}))},children:Object(d.jsx)("i",{className:"fa fa-trash fa-2x text-danger ","aria-hidden":"true"})})]})]})})]})}))})]})},u=(c(56),function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),l=i[0],b=i[1],u=Object(s.useState)(""),h=Object(r.a)(u,2),x=(h[0],h[1]),m=Object(s.useState)(!1),O=Object(r.a)(m,2),p=(O[0],O[1]),f=Object(j.g)();window.screen.width;return Object(d.jsx)("div",{className:"adminPanel",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c&&l?o.a.post("http://localhost:4000/admin",{name:c,password:l}).then((function(e){x(e.data.data),console.log(e.data.data),e.data.success?(console.log("matched"),localStorage.setItem("admin",!0),f.push("/AdminDashboard"),p(!0)):(alert("wrong username or pass"),p(!1),a(""),b(""))})):alert("please enter all fields")},className:"card  mx-auto px-4 pt-2 pb-5 loginCard col-lg-3 col-sm-8 col-md-4 col-10",children:[Object(d.jsxs)("div",{className:"text-center",style:{"font-size":"2rem"},children:[Object(d.jsx)("i",{class:"fa fa-user-circle","aria-hidden":"true"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{style:{"font-weight":"500"},children:"Admin Login"})]}),Object(d.jsxs)("div",{className:"d-flex align-items-center position-relative",children:[Object(d.jsx)("input",{type:"text",className:"  w-100",placeholder:"user name",value:c,onChange:function(e){a(e.target.value)}}),Object(d.jsx)("i",{className:"fa fa-user position-absolute fa-2x",style:{right:"2rem"},"aria-hidden":"true"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"d-flex align-items-center position-relative",children:[Object(d.jsx)("input",{type:"password",className:"w-100",placeholder:"password",value:l,onChange:function(e){b(e.target.value)}}),Object(d.jsx)("i",{className:"fa fa-key position-absolute fa-2x",style:{right:"2rem"},"aria-hidden":"true"})]}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"btn btn-primary ",type:"submit",children:"Login"}),Object(d.jsx)("div",{})]})})}),h=c(11),x=(c(106),function(e){var t=Object(s.useState)([]),c=Object(r.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(""),l=Object(r.a)(i,2),b=l[0],u=l[1],h=Object(j.g)();return Object(s.useEffect)((function(){u(e.location.state.id),console.log(e.location.state),console.log(b.id),o.a.get("http://localhost:4000/singleproduct/".concat(e.location.state.id)).then((function(e){n(e.data.data),console.log(e.data.data)}))}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{class:"product d-flex justify-content-around",children:[Object(d.jsxs)("div",{class:"product-1 ",children:[Object(d.jsx)("img",{alt:"",src:a.img,style:{height:"50vh"}}),Object(d.jsx)("div",{class:"d-flex"})]}),Object(d.jsxs)("div",{class:"product-2",children:[Object(d.jsx)("h2",{children:a.name}),Object(d.jsxs)("h5",{children:[Object(d.jsx)("i",{class:"fa fa-bolt text-danger p-1","aria-hidden":"true"}),a.descr]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)("i",{class:"fa fa-inr p-2","aria-hidden":"true"}),a.price]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{children:"Available Offers"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{class:"fa fa-tag text-success py-2","aria-hidden":"true"}),"  Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{class:"fa fa-tag text-success py-2","aria-hidden":"true"}),"Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction T&C"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{class:"fa fa-tag text-success py-2","aria-hidden":"true"}),"Special PriceGet extra 10% off (price inclusive of discount) T&C"]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("i",{class:"fa fa-calendar-check-o text-primary py-2","aria-hidden":"true"}),"No Cost EMI on Bajaj Finserv EMI Card on cart value above \u20b94499 T&C"]}),Object(d.jsx)("button",{class:"btn btn-warning ",onClick:function(){h.push("/placeorder",{id:e.location.state.id})},children:"Buy Now"})]})]})]})})}),m=(c(124),c(123),c(125),c(23)),O=c(35),p=c.n(O),f=c(47),g=function(e){return function(){var t=Object(f.a)(p.a.mark((function t(c){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"FIND",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){console.log(e.location.state.cat);var t=Object(s.useState)([]),c=Object(r.a)(t,2),a=(c[0],c[1]),n=Object(m.c)((function(e){return e.getProductsReducer}));return Object(m.b)()(g()),console.log(n),Object(d.jsx)("div",{children:n.map((function(e,t){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card text-center p-1 bg-light",id:"cardId",children:[Object(d.jsx)("div",{className:"py-2",children:Object(d.jsx)("img",{src:e.path,alt:"",style:{width:"10vw",height:"20vh"}})}),Object(d.jsx)("div",{className:"uppercase",children:e.name}),Object(d.jsx)("div",{className:"descr mx-auto my-1",children:e.descr}),Object(d.jsxs)("div",{className:"d-flex mx-auto",children:[Object(d.jsx)("h2",{className:"productPrice",children:e.price})," ",Object(d.jsx)("h2",{children:"\u20b9"})]}),Object(d.jsx)("div",{}),Object(d.jsxs)("div",{className:"d-flex  align-items-center ",children:[Object(d.jsxs)("button",{className:"btn btn-dark rounded-pill mx-2 my-2",onClick:function(){a(e._id)},children:[Object(d.jsx)("span",{children:"wishlist "}),Object(d.jsx)("i",{className:"fa fa-heart  text-danger ","aria-hidden":"true"})]}),Object(d.jsx)("button",{className:"btn-danger btn rounded-pill mx-3",onClick:function(){},children:"Buy Now "})]})]})})}))})},N=(c(109),c(120)),y=c(121),w=c(122),k=c(127),S=(c(110),c(126)),C=(c.p,c.p,c(111),function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=(t[0],t[1],Object(m.b)());Object(j.g)();return Object(d.jsxs)("div",{className:"d-flex justify-content-around p-5 text-center",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{className:"catIcon",onClick:function(){c(g("Mobile"))},src:"https://clipart.info/images/ccovers/1503496383Apple-IPhone-Png-mobile.png",alt:""})}),Object(d.jsx)("div",{className:"catTitle",children:"Mobile"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{className:"catIcon",onClick:function(){c(g("Laptop"))},src:"https://www.pngall.com/wp-content/uploads/3/Alienware-Laptop-PNG-File.png",alt:""})}),Object(d.jsx)("div",{className:"catTitle",children:"Laptop"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{className:"catIcon",onClick:function(){c(g("TV"))},src:"https://www.cebuappliancecenter.com/wp-content/uploads/2014/01/p-2713-32SX100-Right.png",alt:""})}),Object(d.jsx)("div",{className:"catTitle",children:"Smart TV"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{onClick:function(){c(g("Watches"))},className:"catIcon",src:"https://pngimg.com/uploads/watches/watches_PNG9884.png",alt:""})}),Object(d.jsx)("div",{className:"catTitle",children:"Watches"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("img",{onClick:function(){c(g("Cloth"))},className:"catIcon",src:"https://cdn2.iconfinder.com/data/icons/app-types-in-grey/512/clothes_512pxGREY.png",alt:""})}),Object(d.jsx)("div",{className:"catTitle",children:"Cloths"})]})]})}),P=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(C,{}),Object(d.jsxs)(S.a,{activeIndex:c,onSelect:function(e,t){a(e)},children:[Object(d.jsx)(S.a.Item,{children:Object(d.jsx)("img",{style:{width:"100%",height:"40vh"},className:"d-block w-100",src:"https://rukminim1.flixcart.com/flap/4000/4000/image/ed8309e40b38c6c3.jpg?q=50",alt:"First slide"})}),Object(d.jsx)(S.a.Item,{children:Object(d.jsx)("img",{style:{width:"100%",height:"40vh"},className:"d-block w-100",src:"https://rukminim1.flixcart.com/flap/4000/4000/image/5adbe11e93bb7f16.jpg?q=50",alt:"Second slide"})}),Object(d.jsx)(S.a.Item,{children:Object(d.jsx)("img",{style:{width:"100%",height:"40vh"},className:"d-block w-100",src:"https://rukminim1.flixcart.com/flap/4000/4000/image/970ff88541dc2e4a.jpg?q=50",alt:"Second slide"})})]})]})},I=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(P,{})})},q=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(r.a)(n,2),l=i[0],b=i[1],u=Object(s.useState)(""),h=Object(r.a)(u,2),x=(h[0],h[1]),O=Object(s.useState)(""),p=Object(r.a)(O,2),f=(p[0],p[1]),g=Object(s.useState)("bottom-end"),v=Object(r.a)(g,2),S=v[0],C=(v[1],localStorage.getItem("userLogin")),P=Object(j.g)(),q=Object(m.c)((function(e){return e.searchReducer})),A=Object(m.c)((function(e){return e.getProductsReducer}));console.log(A),Object(s.useEffect)((function(){o.a.get("http://localhost:4000/products").then((function(e){return b(e.data.data)}))}),[]);var E=function(e){C||P.push("/login"),o.a.post("http://localhost:4000/checkcart",{userid:C,productid:e,quantity:0}).then((function(t){t.data.success?alert("already in cart"):o.a.post("http://localhost:4000/cart/",{userid:C,productid:e,quantity:0}).then((function(){a(!0)})),f(t.data.success)}))};return Object(d.jsxs)("div",{children:[Object(d.jsx)(I,{}),A?Object(d.jsxs)("h1",{children:["|",A]}):Object(d.jsx)("h1",{children:"|Products"}),Object(d.jsx)("div",{className:"d-flex  flex-wrap",children:l.filter((function(e){return""==q||e.name.toLowerCase().includes(q.toLowerCase())?e:void 0})).map((function(e,t){return e.category==A?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card text-center p-1 bg-light",id:"cardId",children:[Object(d.jsx)("div",{className:"py-2",children:Object(d.jsx)("img",{src:e.img,alt:"",style:{width:"100%",height:"20vh"}})}),Object(d.jsx)("div",{className:"uppercase",children:e.name}),Object(d.jsx)("div",{className:"descr mx-auto my-1",children:e.descr}),Object(d.jsxs)("div",{className:"d-flex mx-auto",children:[Object(d.jsx)("h2",{className:"productPrice",children:e.price})," ",Object(d.jsx)("h2",{children:"\u20b9"})]}),Object(d.jsx)("div",{}),Object(d.jsxs)("div",{className:"d-flex  align-items-center ",children:[Object(d.jsxs)("button",{className:"btn btn-dark rounded-pill mx-2 my-2",onClick:function(){x(e._id),E(e._id)},children:[Object(d.jsx)("span",{children:"wishlist "}),Object(d.jsx)("i",{className:"fa fa-heart  text-danger ","aria-hidden":"true"})]}),Object(d.jsx)("button",{className:"btn-danger btn rounded-pill mx-3",onClick:function(){P.push("/productDetails",{id:e._id})},children:"Buy Now "})]})]})}):""==A?Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card text-center p-1 bg-light",id:"cardId",children:[Object(d.jsx)("div",{className:"py-2",children:Object(d.jsx)("img",{src:e.img,alt:"",style:{width:"10vw",height:"20vh"}})}),Object(d.jsx)("div",{className:"uppercase",children:e.name}),Object(d.jsx)("div",{className:"descr mx-auto my-1",children:e.descr}),Object(d.jsxs)("div",{className:"d-flex mx-auto",children:[Object(d.jsx)("h2",{className:"productPrice",children:e.price})," ",Object(d.jsx)("h2",{children:"\u20b9"})]}),Object(d.jsx)("div",{}),Object(d.jsxs)("div",{className:"d-flex  align-items-center ",children:[Object(d.jsxs)("button",{className:"btn btn-dark rounded-pill mx-2 my-2",onClick:function(){x(e._id),E(e._id)},children:[Object(d.jsx)("span",{children:"wishlist "}),Object(d.jsx)("i",{className:"fa fa-heart  text-danger ","aria-hidden":"true"})]}),Object(d.jsx)("button",{className:"btn-danger btn rounded-pill mx-3",onClick:function(){P.push("/productDetails",{id:e._id})},children:"Buy Now "})]})]})}):void 0}))}),Object(d.jsx)(N.a,{children:Object(d.jsx)("div",{style:{position:"relative",bottom:"0rem"},children:Object(d.jsx)(y.a,{xs:6,children:Object(d.jsx)(w.a,{position:S,className:"m-5 position-absolute",children:Object(d.jsxs)(k.a,{position:S,onClose:function(){return a(!1)},show:c,delay:3e3,autohide:!0,children:[Object(d.jsxs)(k.a.Header,{children:[Object(d.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),Object(d.jsx)("strong",{className:"me-auto",children:"PrCart"})]}),Object(d.jsxs)(k.a.Body,{children:["Item Added To Cart",Object(d.jsx)("i",{class:"fa fa-cart-plus text-primary","aria-hidden":"true"})]})]})})})})})]})},A=(c(69),function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),l=i[0],b=i[1],u=Object(s.useState)([]),x=Object(r.a)(u,2),m=x[0],O=x[1],p=Object(s.useState)(!1),f=Object(r.a)(p,2),g=(f[0],f[1]),v=Object(s.useState)(0),N=Object(r.a)(v,2),y=N[0],w=N[1],k=Object(j.g)();Object(j.h)();localStorage.getItem("userLogin")&&k.push("/userDashboard"),Object(s.useEffect)((function(){o.a.get("http://localhost:4000/users/").then((function(e){O(e.data.data)}))}),[]);return Object(d.jsxs)("div",{className:"userlogin ",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"card  mx-auto  px-4 pt-4 pb-5 loginCard col-lg-3 col-sm-7 col-md-4 col-10",children:[Object(d.jsxs)("div",{className:"text-center",style:{"font-size":"2rem"},children:[Object(d.jsx)("i",{class:"fa fa-user-circle fa-2x","aria-hidden":"true"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{style:{"font-weight":"500"},children:"User Login"})]}),Object(d.jsxs)("div",{className:"d-flex position-relative align-items-center",children:[Object(d.jsx)("input",{type:"text",className:"w-100",placeholder:"user name",onChange:function(e){a(e.target.value)}}),Object(d.jsx)("i",{className:"fa fa-user position-absolute fa-2x",style:{right:"2rem"},"aria-hidden":"true"})]}),Object(d.jsxs)("div",{className:"d-flex position-relative align-items-center",children:[Object(d.jsx)("input",{type:"password",className:"w-100",placeholder:" password ",onChange:function(e){b(e.target.value)}}),Object(d.jsx)("i",{class:"fa fa-key position-absolute fa-2x",style:{right:"2rem"},"aria-hidden":"true"})]}),Object(d.jsx)("button",{className:"btn btn-dark",onClick:function(){c&&l?(m.map((function(e,t){e.name==c&&e.password==l&&(g(!0),w(1),localStorage.setItem("userLogin",e._id),k.push("/"))})),0==y&&w(3)):(w(0),alert("all fields required"))},children:"Login"}),Object(d.jsx)("div",{className:"text-center pt-2",style:{color:"blue ",cursor:"pointer"},children:Object(d.jsx)(h.b,{to:"/signup",className:"text-primary",children:"Dont Have Account?"})})]}),3==y?Object(d.jsx)("h1",{className:"text-danger text-center mt-2",children:"Incorrect username or password"}):""]})}),E=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),l=i[0],b=i[1],u=Object(s.useState)(""),h=Object(r.a)(u,2),x=h[0],m=h[1],O=Object(s.useState)(""),p=Object(r.a)(O,2),f=p[0],g=p[1],v=Object(s.useState)([]),N=Object(r.a)(v,2),y=(N[0],N[1]),w=Object(j.g)();Object(s.useEffect)((function(){o.a.get("http://localhost:4000/users").then((function(e){y(e.data)}))}),[]);return Object(d.jsx)("div",{className:"signupMain p-1",children:Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),c&&l&&x&&f?x===f?o.a.post("http://localhost:4000/users",{name:c,email:l,password:x,cpassword:f,quantity:1}).then((function(e){alert("Account Created Successfully")})):alert("password not match"):alert("all field required")},className:"",children:Object(d.jsxs)("div",{className:"container   p-2 px-5 card loginCard col-lg-5 col-sm-8 col-md-4 col-10",children:[Object(d.jsxs)("div",{className:"text-center",style:{"font-size":"2rem"},children:[Object(d.jsx)("i",{class:"fa fa-user-circle fa-2x","aria-hidden":"true"}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{style:{"font-weight":"500"},children:"User Signup"})]}),Object(d.jsxs)("div",{className:"d-flex ",children:[Object(d.jsx)("i",{className:"fa p-2 pt-4 fa-user fa-2x position-absolute","aria-hidden":"true"})," ",Object(d.jsx)("input",{type:"text",className:"w-100 px-5 ",placeholder:"Enter Your Name",onChange:function(e){a(e.target.value)}})]})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"d-flex ",children:[Object(d.jsx)("i",{className:"fa p-2 pt-4 fa-envelope fa-2x position-absolute","aria-hidden":"true"})," ",Object(d.jsx)("input",{type:"email",className:"w-100 px-5 ",placeholder:"Enter Your Email",onChange:function(e){b(e.target.value)}})]})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"d-flex ",children:[" ",Object(d.jsx)("i",{className:"fa p-2 pt-4 fa-lock fa-2x position-absolute","aria-hidden":"true"})," ",Object(d.jsx)("input",{type:"password",className:"w-100 px-5",placeholder:"Enter Your Password",onChange:function(e){m(e.target.value)}})]})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"d-flex ",children:[" ",Object(d.jsx)("i",{className:"fa p-1 pt-3 fa-key fa-2x position-absolute","aria-hidden":"true"})," ",Object(d.jsx)("input",{type:"password",className:"w-100 px-5",placeholder:"Re-enter Password",onChange:function(e){g(e.target.value)}})]})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsx)("button",{type:"submit",className:"btn btn-danger",children:"REGISTER"}),Object(d.jsx)("button",{onClick:function(){w.push("/login")},className:"btn btn-primary",children:"Login"})]})]})})})},L=(c(112),function(){var e=localStorage.getItem("userLogin"),t=Object(j.g)();return e||t.push("/login"),Object(d.jsxs)("div",{className:"d-flex justify-content-around dashboard flex-wrap",style:{backgroundImage:"url('https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?cs=srgb&dl=pexels-picjumbocom-461077.jpg&fm=jpg')",backgroundPosition:"center",backgroundSize:"cover"},children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)(h.b,{to:"/orders",className:"text-decoration-none",children:Object(d.jsxs)("div",{className:"box p-2 m-5 ",children:[Object(d.jsx)("div",{children:Object(d.jsx)("i",{className:"fa m-4 fa-4x fa-shopping-bag text-dark","aria-hidden":"true"})}),Object(d.jsx)("h2",{className:"text-center text-dark ",children:"Your Orders"})]})})}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)(h.b,{to:"/userAccount",className:"text-decoration-none",children:Object(d.jsxs)("div",{className:"box p-2 m-5",children:[Object(d.jsx)("span",{children:Object(d.jsx)("i",{className:"fa m-4 fa-4x fa-user text-dark","aria-hidden":"true"})}),Object(d.jsx)("h2",{className:"text-center text-dark",children:"Account Info"})]})})})]})}),F=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(j.g)(),i=localStorage.getItem("userLogin");return i||n.push("/login"),Object(s.useEffect)((function(){o.a.post("http://localhost:4000/singleuser/",{id:i}).then((function(e){console.log(e),a(e.data.data)}))}),[]),Object(d.jsx)("div",{className:"info",children:Object(d.jsx)("form",{className:"w-50 m-auto mt-5  p-2 loginCard",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"text-center",children:"Account Info"}),Object(d.jsx)("label",{htmlFor:"",children:"Name"}),Object(d.jsx)("input",{disabled:!0,className:"form-control",value:c.name,type:"text"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"",children:"Email"}),Object(d.jsx)("input",{disabled:!0,className:"form-control",value:c.email,type:"text"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"",children:"Password"}),Object(d.jsx)("input",{disabled:!0,className:"form-control",value:c.password,type:"text"})," ",Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"btn btn-outline-light",onClick:function(){localStorage.removeItem("userLogin")},children:"Logout"})]})})})},T=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(r.a)(n,2),l=i[0],b=i[1],u=Object(j.g)(),h=localStorage.getItem("userLogin");return Object(s.useEffect)((function(){o.a.get("http://localhost:4000/getorders/".concat(h)).then((function(e){b(e.data.data),console.log("prod",e.data)})),o.a.get("http://localhost:4000/products").then((function(e){console.log(e),a(e.data.data)}))}),[]),Object(d.jsxs)("div",{style:{height:"80vh"},children:[Object(d.jsx)("h1",{className:"text-center",children:" Your Orders"}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"d-flex justify-content-around flex-wrap",children:[l.map((function(e,t){return c.map((function(t,c){if(e.product==t._id)return Object(d.jsx)("div",{onClick:function(){u.push("/productdetails",{id:t._id})},children:Object(d.jsx)("div",{className:"",children:Object(d.jsxs)("div",{className:"card pCard",children:[Object(d.jsx)("img",{className:"pImg",style:{height:"15rem"},src:e.path,alt:""}),Object(d.jsxs)("div",{className:"pTitle",children:["Name: ",t.name]}),Object(d.jsxs)("div",{className:"pPrice",children:["Price: ",t.price," \u20b9"]}),Object(d.jsxs)("div",{className:"pPrice",children:["Qantity: ",e.quantity," "]})]})},c)})}))})),")"]})]})},D=function(e){var t=localStorage.getItem("userLogin"),c=Object(s.useState)([]),a=Object(r.a)(c,2),n=(a[0],a[1]),i=Object(s.useState)([]),l=Object(r.a)(i,2),b=l[0],u=l[1],h=Object(j.g)(),x=Object(s.useState)(1),m=Object(r.a)(x,2),O=m[0],p=m[1],f=Object(s.useState)(0),g=Object(r.a)(f,2),v=(g[0],g[1]),N=Object(s.useState)([]),y=Object(r.a)(N,2),w=y[0],k=y[1],S=Object(s.useState)([]),C=Object(r.a)(S,2),P=C[0];C[1];Object(s.useEffect)((function(){o.a.get("http://localhost:4000/products").then((function(e){console.log(e.data),n(e.data.data)})),o.a.get("http://localhost:4000/cartproducts/".concat(t)).then((function(e){u(e.data.data),k(e.data.arr),console.log(w),console.log("cart",b)}))}),[]);return t||h.push("/login"),Object(s.useEffect)((function(){o.a.get("http://localhost:4000/cartproducts/".concat(t)).then((function(e){u(e.data.data),k(e.data.arr)}))}),[P]),Object(d.jsxs)("div",{style:{backgroundColor:"#fff"},children:[Object(d.jsxs)("h3",{className:"text-center",children:["Cart",Object(d.jsx)("i",{class:"fa text-dark fa-cart-plus","aria-hidden":"true"})]}),Object(d.jsx)("div",{className:"",children:w.map((function(e,c){return Object(d.jsxs)("div",{className:"d-flex justify-content-around align-items-center mb-5 mb-1",children:[Object(d.jsx)("div",{className:"col-3 col-sm-3 col-lg-1",children:Object(d.jsxs)("div",{className:"card img-fluid ",children:[Object(d.jsx)("img",{className:"w-75 mx-auto mt-2",src:e.img,alt:""}),Object(d.jsx)("div",{className:"pTitle",children:e.name}),Object(d.jsxs)("div",{className:"pPrice",children:[e.price," \u20b9"]})]})},c),Object(d.jsxs)("div",{className:"col-2",children:[Object(d.jsxs)("div",{className:"d-flex ",children:[Object(d.jsx)("button",{className:"btn btn-danger",onClick:function(t){e.quantity>1&&(p(e.quantity-=1),v(e.price*e.quantity))},children:"-"}),Object(d.jsx)("button",{className:"btn ",children:e.quantity}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(t){p(e.quantity+=1),v(e.price*e.quantity)},children:"+"})]}),Object(d.jsx)("div",{className:"my-5",children:Object(d.jsxs)("h6",{children:["Total Price: ",e.price*e.quantity]})}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)("button",{className:" btn btn-outline-primary",onClick:function(){h.push("/productDetails",{_id:e._id,quantity:O})},children:"View Product"})]})]}),Object(d.jsxs)("div",{className:"col-4 d-flex align-items-center",children:[Object(d.jsx)("button",{class:"btn btn-warning m-2",onClick:function(){h.push("/placeorder",{id:e._id,quantity:O})},children:"Buy Now"}),Object(d.jsxs)("button",{className:"btn btn-dark",onClick:function(){!function(e){o.a.post("http://localhost:4000/removecart",{id:e,userid:t}).then((function(e){alert("removed")})),console.log(e)}(e._id)},children:["Remove ",Object(d.jsx)("i",{class:"fa fa-trash text-danger","aria-hidden":"true"})]})]})]})}))})]})},_=(c(113),function(e){var t=Object(s.useState)(e.location.state.id),c=Object(r.a)(t,2);c[0],c[1];console.log(e.location.state);var a=localStorage.getItem("userLogin"),n=Object(j.g)();a||n.push("/login");var i=Object(s.useState)(""),l=Object(r.a)(i,2),b=l[0],u=l[1],h=Object(s.useState)(""),x=Object(r.a)(h,2),m=x[0],O=x[1],p=Object(s.useState)(""),f=Object(r.a)(p,2),g=f[0],v=f[1],N=Object(s.useState)(""),y=Object(r.a)(N,2),w=y[0],k=y[1];return Object(d.jsxs)("div",{className:"parent",children:[Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{className:"main mb-5",onSubmit:function(t){t.preventDefault(),o.a.post("http://localhost:4000/order/",{name:b,mobile:m,address:g,zipcode:w,quantity:e.location.state.quantity,product:e.location.state.id,user:a}).then((function(e){n.push("/ordersuccess")}))},children:[Object(d.jsx)("h1",{children:"Fill out Delivery Details"}),Object(d.jsx)("label",{htmlFor:"",children:"Name"}),Object(d.jsx)("input",{onChange:function(e){u(e.target.value)},name:"sellername",required:!0,className:"form-control",placeholder:"Enter your name",type:"text"}),Object(d.jsx)("label",{htmlFor:"",children:"Mobile No."}),Object(d.jsx)("input",{onChange:function(e){O(e.target.value)},name:"mobile",required:!0,className:"form-control",placeholder:"Enter your number",type:"number"}),Object(d.jsx)("label",{htmlFor:"",children:"Address"}),Object(d.jsx)("textarea",{onChange:function(e){v(e.target.value)},name:"sellercity\r ",required:!0,className:"form-control",placeholder:"Enter your address",type:"text"}),Object(d.jsx)("label",{htmlFor:"",children:"Zip code "}),Object(d.jsx)("input",{onChange:function(e){k(e.target.value)},name:"sellerpincode",required:!0,className:"form-control",placeholder:"Enter your zip code",type:"text"}),Object(d.jsx)("button",{type:"submit",name:"submit",required:!0,className:"btn btn-primary btn-block mt-5 ",children:"Place Order"})]})]})}),R=(c(114),function(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)("bottom-end"),i=Object(r.a)(n,2),l=i[0],o=(i[1],Object(j.g)()),b=Object(s.useState)(2),u=Object(r.a)(b,2),h=u[0],x=u[1];return setTimeout((function(){o.push("/")}),2e3),setTimeout((function(){x((function(e){return e-1}))}),1e3),Object(d.jsxs)("div",{className:"parent p-1",children:[Object(d.jsxs)("div",{class:"m-5  d-flex flex-column align-items-center p-5",children:[Object(d.jsx)("h1",{class:"",children:"Order Successful"}),Object(d.jsxs)("div",{class:"d-flex justify-content-between align-items-center my-5",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{style:{width:"20rem",height:"20rem"},src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fcheckmark-clipart-right-sign-15.png&f=1&nofb=1",alt:"",class:"mr-5",srcset:""})}),Object(d.jsxs)("div",{class:"d-flex flex-column justify-content-around font",children:[Object(d.jsx)("div",{class:"mt-2",children:"Your payment has been received.Your order placed successfully it will despatch soon"}),Object(d.jsxs)("div",{class:"mt-5",children:["If you have any query email us ",Object(d.jsx)("a",{href:"",children:"prdeveloper@gmail.com"})]})]})]})]}),Object(d.jsx)(N.a,{children:Object(d.jsx)(y.a,{xs:6,children:Object(d.jsx)(w.a,{position:l,className:"m-5",children:Object(d.jsxs)(k.a,{position:l,onClose:function(){return a(!1)},show:c,delay:3e3,autohide:!0,children:[Object(d.jsxs)(k.a.Header,{children:[Object(d.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),Object(d.jsx)("strong",{className:"me-auto",children:"PrCart"})]}),Object(d.jsxs)(k.a.Body,{children:["Redirecting To Home Page",Object(d.jsx)("button",{className:"btn btn-danger",children:h})]})]})})})})]})}),B=(c(70),function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("footer",{className:"bg-dark text-light  p-3",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-footer-1 col-10 col-lg-2 col-md-3 offset-md-1  offset-lg-1 col-sm-12 ",children:[Object(d.jsx)("div",{className:"list-heading fs-5 ",children:"Get to Know Us"}),Object(d.jsx)("div",{className:"know-us",children:Object(d.jsx)("a",{href:"",className:"nav-link",children:"Careers"})}),Object(d.jsx)("div",{className:"know-us nav-item",children:Object(d.jsx)("a",{href:"",className:"nav-link",children:"About Us"})}),Object(d.jsx)("div",{className:"know-us",children:Object(d.jsx)("a",{href:"",className:"nav-link",children:"Press Realeases"})}),Object(d.jsx)("div",{className:"know-us",children:Object(d.jsx)("a",{href:"",className:"nav-link",children:"PrCart Care"})}),Object(d.jsx)("div",{className:"know-us",children:Object(d.jsx)("a",{href:"",className:"nav-link",children:"Gift A Smile"})})]}),Object(d.jsxs)("div",{className:"col-footer-2 col-10 col-lg-2 col-md-3 offset-md-1  offset-lg-2 col-sm-12 ",children:[Object(d.jsx)("div",{className:"list-heading fs-5",children:"Connect with Us"}),Object(d.jsx)("div",{className:"know-us",children:Object(d.jsx)("a",{href:"",className:"nav-link",children:"Facebook"})}),Object(d.jsx)("div",{className:"know-us",children:Object(d.jsx)("a",{href:"",className:"nav-link",children:"Twitter"})}),Object(d.jsx)("div",{className:"know-us",children:Object(d.jsx)("a",{href:"",className:"nav-link",children:"Instagram"})}),Object(d.jsxs)("div",{className:"know-us",children:["  ",Object(d.jsx)("a",{className:"nav-link",href:"./user/myaccount.php",children:"My Account"})]})]}),Object(d.jsxs)("div",{className:"col-footer-3 col-10 col-lg-2 col-md-3 offset-md-1  offset-lg-2 col-sm-12 ",children:[Object(d.jsx)("div",{className:"list-heading fs-5",children:"Make money with "}),Object(d.jsx)("div",{className:"know-us",children:Object(d.jsx)("a",{href:"./sellersignup.php",className:"nav-link",children:"Sell on PrCart"})}),Object(d.jsx)("div",{className:"know-us",children:Object(d.jsx)("a",{href:"./loginseller.php",className:"nav-link",children:"LogIn seller"})}),Object(d.jsx)("div",{className:"know-us",children:Object(d.jsx)("a",{href:"./selleraccount.php",className:"nav-link",children:"Seller Account"})})]})]})}),Object(d.jsxs)("div",{className:"credit text-center",children:["2021 \xa9 PrCart. Developed by ",Object(d.jsx)("a",{href:"https://www.prdeveloper.tech",target:"_blank",children:" Purushottam Rede"})]})]})}),M=(c(117),c.p+"static/media/Prcart.74ccc339.png"),Y=function(){var e=Object(s.useState)({toggle:!1}),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(""),i=Object(r.a)(n,2),l=(i[0],i[1]),o=Object(m.b)();return Object(d.jsx)("div",{children:Object(d.jsxs)(h.a,{children:[Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{onClick:function(){a({toggle:!c.toggle})},children:Object(d.jsx)("i",{class:"fa fa-toggle-on","aria-hidden":"true"})}),Object(d.jsx)("div",{className:"navBar ",children:Object(d.jsx)("div",{className:c.toggle?"nav-links show-nav":"nav-links",children:Object(d.jsxs)("div",{className:"d-flex align-items-md-center justify-content-around flex-column flex-md-row align-items-start",children:[Object(d.jsx)(h.b,{to:"/",children:Object(d.jsx)("img",{className:"mx-5  ",onClick:o(g("")),style:{height:"2rem"},src:M})}),Object(d.jsxs)("div",{href:"#",className:"w-50 d-flex  position-relative ",children:[Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"search product",onChange:function(e){l(e.target.value),o(function(e){return function(){var t=Object(f.a)(p.a.mark((function t(c){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c({type:"SEARCH",payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e.target.value))}}),Object(d.jsx)("i",{className:"fa fa-search position-absolute text-primary",style:{right:"1rem",top:"1.7rem"},"aria-hidden":"true"})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-around w-50 flex-column flex-md-row",children:[Object(d.jsx)("div",{href:"#",children:Object(d.jsx)("h4",{children:Object(d.jsx)(h.b,{to:"/AdminPanel",className:"text-light text-decoration-none",children:"Admin"})})}),Object(d.jsx)("div",{href:"#",children:Object(d.jsx)("h4",{children:Object(d.jsx)(h.b,{to:"/login",className:"text-light text-decoration-none",children:"Login"})})}),Object(d.jsx)("div",{href:"#",children:Object(d.jsxs)(h.b,{to:"/cart",className:"text-light text-decoration-none d-flex align-items-center",children:[Object(d.jsx)("h4",{children:" Cart"})," ",Object(d.jsx)("i",{class:"fa fa-2x fa-cart-plus","aria-hidden":"true"})]})})]})]})})})]}),Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{path:"/AdminPanel",children:Object(d.jsx)(u,{})}),Object(d.jsx)(j.b,{exact:!0,path:"/AdminDashboard",component:b}),Object(d.jsx)(j.b,{exact:!0,path:"/",component:q}),Object(d.jsx)(j.b,{path:"/login",component:A}),Object(d.jsx)(j.b,{path:"/signup",component:E}),Object(d.jsx)(j.b,{path:"/userDashboard",component:L}),Object(d.jsx)(j.b,{path:"/userAccount",component:F}),Object(d.jsx)(j.b,{path:"/orders",component:T}),Object(d.jsx)(j.b,{path:"/product",component:v}),Object(d.jsx)(j.b,{path:"/cart",component:D}),Object(d.jsx)(j.b,{path:"/productDetails",component:x}),Object(d.jsx)(j.b,{path:"/placeorder",component:_}),Object(d.jsx)(j.b,{path:"/ordersuccess",component:R}),Object(d.jsx)(j.b,{path:"/product",component:v})]})]})})};var G=function(){return Object(d.jsx)(h.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)(Y,{}),Object(d.jsx)(B,{})]})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,128)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))},z=c(40),H=c(75),V=c(74),W=Object(z.combineReducers)({getProductsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"FIND"==t.type?t.payload:e},searchReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return"SEARCH"==t.type?t.payload:e}}),J=Object(z.createStore)(W,{},Object(V.composeWithDevTools)(Object(z.applyMiddleware)(H.a)));i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m.a,{store:J,children:Object(d.jsx)(G,{})})}),document.getElementById("root")),U()},56:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t){}},[[118,1,2]]]);
//# sourceMappingURL=main.c8009eda.chunk.js.map
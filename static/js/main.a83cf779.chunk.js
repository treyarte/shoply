(this.webpackJsonpshoply=this.webpackJsonpshoply||[]).push([[0],{22:function(e){e.exports=JSON.parse('{"a":{"47314fa1-ae56-4eae-80be-af6691145951":{"name":"tv","price":219.99,"description":"A beautiful, big-screen TV. Because hey, Netflix isn\'t going to watch itself.","image_url":"https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"},"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9":{"name":"microwave","price":100,"description":"Heat your food with the power of SCIENCE!","image_url":"https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"},"b04b779c-1cfb-48a7-8424-25a8c7e608ae":{"name":"toaster oven","price":20.49,"description":"Tasty bread not included.","image_url":"https://images-na.ssl-images-amazon.com/images/I/81110bb7g2L._SL1500_.jpg"},"4260bf52-218a-480e-87ea-4ff42470ce98":{"name":"chair","price":100.89,"description":"It\'s a chair. You can sit in it.","image_url":"https://www.ikea.com/PIAimages/0355482_PE547815_S5.JPG"},"6a56c22f-2a85-4751-98a9-14e280fcecd8":{"name":"mirror","price":20.99,"description":"Mirror mirror on the wall, who has the greatest mirror of them all? YOU WILL, if you buy this.","image_url":"https://target.scene7.com/is/image/Target/GUEST_703892ef-2db0-4e02-b9c8-685e4a5c37a0"},"2266b2d6-3d71-4356-8065-392f1fceab07":{"name":"phone","price":399.99,"description":"Because there are absolutely no downsides that come with easier access to social media.","image_url":"https://images-na.ssl-images-amazon.com/images/I/717DO5Q-aCL._SY879_.jpg"}}}')},27:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),i=(a(32),a(7)),o=a(5),m=a(4),u=a(12),s=a(46),d=a(51),E=(a(37),function(e){var t=e.color,a=e.onClickAction,n=e.btnName;return c.a.createElement(d.a,{className:"".concat(n," custom-btn"),onClick:a,color:t},n)}),p=function(e){var t=e.handleAddCart,a=e.handleRemoveCart,n=Object(i.d)((function(e){return e.cart}),i.b).cart;return c.a.createElement("div",{className:"cart"},c.a.createElement(s.a,{striped:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," Name"),c.a.createElement("th",null," Price"),c.a.createElement("th",null," Quantity"),c.a.createElement("th",null," Actions"))),c.a.createElement("tbody",null,n.items.map((function(e){return c.a.createElement("tr",null,c.a.createElement(u.b,{to:"/products/".concat(e.id)},c.a.createElement("th",null,e.name)),c.a.createElement("th",null,e.price),c.a.createElement("th",null,e.quantity),c.a.createElement("th",null,c.a.createElement(E,{onClickAction:function(){return t(Object(m.a)({},e))},color:"primary",btnName:"\ud83d\uded2 Add"}),c.a.createElement(E,{onClickAction:function(){return a(Object(m.a)({},e))},color:"danger",btnName:"Remove \ud83d\uded2"})))})))),c.a.createElement("div",null,"Cart Total: $",n.total_amount.toFixed(2)))},b=(a(39),a(40),a(47)),h=a(48),f=a(49),g=a(50),v=function(e){var t=e.product,a=e.handleAddCart,n=e.handleRemoveCart,r=t.id,l=t.name,i=(t.image_url,t.price);return c.a.createElement("div",{className:"col-md-2 product-card"},c.a.createElement(b.a,null,c.a.createElement(h.a,null,c.a.createElement(u.b,{to:"/products/".concat(r)},c.a.createElement(f.a,null,c.a.createElement("h4",null,l))),c.a.createElement("div",null,c.a.createElement(g.a,null,"Price: $",i)),c.a.createElement(E,{onClickAction:function(){return a(Object(m.a)({},t))},color:"primary",btnName:"\ud83d\uded2 Add"}),c.a.createElement(E,{onClickAction:function(){return n(Object(m.a)({},t))},color:"danger",btnName:"Remove \ud83d\uded2"}))))},O=function(e){var t=e.handleAddCart,a=e.handleRemoveCart,n=Object(i.d)((function(e){return e.products}),i.b).products;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"catalog"},c.a.createElement("header",null,c.a.createElement("h2",null,"Product Catalog")),c.a.createElement("section",{className:"product-list row"},n.map((function(e){return c.a.createElement(v,{key:e.id,product:e,handleRemoveCart:a,handleAddCart:t})})))))},_=(a(41),function(e){var t=e.cantFind,a=e.handleRemoveCart,n=e.handleAddCart,r=Object(o.g)().id,l=Object(i.d)((function(e){return e.products}),i.b).products.find((function(e){return e.id===r}));return l?c.a.createElement("div",{className:"product "},c.a.createElement("div",{className:"product-header"},c.a.createElement("header",null,c.a.createElement("h2",null,l.name)),c.a.createElement("img",{src:l.image_url,alt:"".concat(l.name),className:"product-image"})),c.a.createElement("div",{className:"product-info"},c.a.createElement("p",null,"Price: ",l.price),c.a.createElement("p",null,"Description: ",l.description)),c.a.createElement("div",{className:"product-btns"},c.a.createElement(E,{onClickAction:function(){return n(Object(m.a)({},l))},color:"primary",btnName:"\ud83d\uded2 Add"}),c.a.createElement(E,{onClickAction:function(){return a(Object(m.a)({},l))},color:"danger",btnName:"Remove \ud83d\uded2"}))):c.a.createElement(o.a,{to:t})}),j=function(){var e=Object(i.c)(),t=function(t){e(function(e){return{type:"ADD_TO_CART",product:e}}(t))},a=function(t){e(function(e){return{type:"REMOVE_FROM_CART",product:e}}(t))};return c.a.createElement(o.d,null,c.a.createElement(o.b,{exact:!0,path:"/"},c.a.createElement(O,{handleAddCart:t,handleRemoveCart:a})),c.a.createElement(o.b,{exact:!0,path:"/products/:id"},c.a.createElement(_,{cantFind:"/",handleRemoveCart:a,handleAddCart:t})),c.a.createElement(o.b,{exact:!0,path:"/cart"},c.a.createElement(p,{handleRemoveCart:a,handleAddCart:t})),c.a.createElement(o.a,{to:"/"}))},C=(a(42),function(){var e=Object(i.d)((function(e){return e.cart}),i.b).cart;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.b,{to:"/cart"},c.a.createElement("span",null,"($",e.total_amount.toFixed(2),") ",e.num_items," \ud83d\uded2")))}),y=function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"product-nav"},c.a.createElement(u.c,{exact:!0,to:"/"},c.a.createElement("h4",null,"Shoply")),c.a.createElement("div",{className:"cart-nav"},c.a.createElement(C,null))))};a(43);var A=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(y,null),c.a.createElement(j,null))},N=a(14),w=a(13),R={cart:{items:[],total_amount:0,num_items:0}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,a=t.product,n=e.cart,c=n.items.findIndex((function(e){return e.id===a.id}));switch(t.type){case"ADD_TO_CART":if(n.total_amount+=a.price,n.num_items++,-1!==c){var r=n.items[c];return{cart:Object(m.a)(Object(m.a)({},n),{},{items:[].concat(Object(w.a)(n.items.slice(0,c)),[Object(m.a)(Object(m.a)({},r),{},{quantity:r.quantity+1||1})],Object(w.a)(n.items.slice(c+1)))})}}return{cart:Object(m.a)(Object(m.a)({},n),{},{items:[].concat(Object(w.a)(n.items),[Object(m.a)(Object(m.a)({},a),{},{quantity:1})])})};case"REMOVE_FROM_CART":var l=n.items[c];return l?(n.total_amount-=l.price,n.num_items--,l&&l.quantity>1?{cart:Object(m.a)(Object(m.a)({},n),{},{items:[].concat(Object(w.a)(n.items.slice(0,c)),[Object(m.a)(Object(m.a)({},l),{},{quantity:l.quantity-1})],Object(w.a)(n.items.slice(c+1)))})}:{cart:Object(m.a)(Object(m.a)({},e.cart),{},{items:e.cart.items.filter((function(e){return e.id!==a.id}))})}):e;default:return e}},k=a(22),S={products:Object(w.a)(Object.values(k.a)).map((function(e,t){return Object(m.a)({id:Object.keys(k.a)[t]},e)}))},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;return t.type,e},D=Object(N.b)({cart:T,products:x});a(44),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=Object(N.c)(D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:I},c.a.createElement(u.a,null,c.a.createElement(A,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.a83cf779.chunk.js.map
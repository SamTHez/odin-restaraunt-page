(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),r=t.n(a),i=t(645),o=t.n(i),s=t(667),d=t.n(s),c=new URL(t(951),t.b),l=o()(r()),p=d()(c);l.push([e.id,`/* General Rules/Resets */\n:root {\n    font-size: 62.5%;\n}\n\n@font-face {\n    font-family: "Raleway";\n    src: url(${p});\n}\n\nhtml {\n    box-sizing: border-box;\n  }\n\n*, *:before, *:after {\n    box-sizing: inherit;\n    font-family: 'Raleway', sans-serif;\n}\n\nbody {\n    margin: 0;\n    background-color: #dddddd;\n}\n\n#header {\n    position: relative;\n    padding: 3rem 5rem;\n    width: 100vw;\n    height: 10vh;\n    background-color: white;\n}\n\n#header-tabs {\n    display: inline-flex;\n    height: 3.6rem;\n    float: right;\n}\n\n.header-title {\n    display: inline-block;\n    width: fit-content;\n    margin: 0;\n    font-size: 3.6rem;\n    font-weight: 500;\n}\n\n.page-tab {\n    font-size: 2.2rem;\n    font-weight: 300;\n    margin: 0.8rem 3rem;\n}\n\n.page-tab:hover {\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n.active-tab {\n    font-weight: 500;\n}\n\n#main {\n    background-color: #eeeeee;\n    box-shadow: 0px 0px 12px 10px #00000050;\n    margin: 0 auto;\n    padding-top: 4rem;\n    width: 85vw;\n    height: 85vh;\n}\n\n/* Home Page */\n.page-title {\n    margin: 0;\n    text-align: center;\n    font-size: 3.2rem;\n    font-weight: 500;\n}\n\n#main-img {\n    display: block;\n    border: 2px solid black;\n    margin: 5rem auto 5rem;\n    padding: 2px;\n}\n\n#main-text {\n    text-align: center;\n    font-size: 1.8rem;\n    margin: 0 auto;\n    width: 60ch;\n}\n\n/* About Us Page */\n#owner-block {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    padding-top: 2rem;\n}\n\n#owner-img {\n    width: 35ch;\n    border: 2px solid black;\n    padding: 2px;\n}\n\n#owner-text {\n    font-size: 1.8rem;\n    width: 60vw;\n}\n\n#founding-block {\n    display: flex;\n    align-items: center;\n    justify-content: space-evenly;\n    padding-top: 2rem;\n}\n\n#founding-text {\n    font-size: 1.8rem;\n    width: 60vw;\n}\n\n#founding-img {\n    width: 35ch;\n    border: 2px solid black;\n    padding: 2px;\n}\n\n/* Menu Page */\n#page-menu {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: 4rem auto;\n    height: 85%;\n    margin: 5rem 10rem;\n}\n\n.menu-heading {\n    text-align: center;\n    font-size: 1.8rem;\n    font-weight: 500;\n}\n\n.menu-section {\n    background-color: white;\n    margin: 1rem;\n    padding: 1.6rem 0;\n    box-shadow: 0px 0px 10px 0px #4443;\n    border-radius: 2px;\n    display: flex;\n    flex-direction: column;\n    align-self: start;\n}\n\n.dish {\n    display: grid;\n    grid-template-columns: auto 2ch;\n    grid-template-rows: 1rem auto;\n    padding: 1rem;\n}\n\n.dish-name {\n    margin: 0;\n    font-size: 1.4rem;\n}\n\n.dish-price {\n    margin: 0;\n    font-size: 1.4rem;\n}\n\n.dish-desc {\n    font-size: 1.2rem;\n    grid-column-start: span 2;\n}\n\n/* Contact Us Page */\n#form-box {\n    height: 95%;\n    margin: auto 15rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 3.2rem auto;\n}\n\n.form-heading {\n    margin: .5rem 0;\n    text-align: center;\n    font-size: 2.2rem;\n}\n\n.form-container {\n    display: grid;\n    grid-template-columns: 1fr 1.5fr;\n    grid-template-rows: repeat(5, 6rem);\n    align-items: center;\n    padding: 4rem;\n}\n\n.reserve-label, .review-label {\n    justify-self: right;\n    margin: 2rem;\n}\n\n.reserve-input, .review-input {\n    justify-self: left;\n}\n\n.review-desc {\n    grid-row-start: span 2;\n}\n\n#reserve-submit, #review-submit {\n    grid-column-start: span 2;\n    width: 25%;\n    padding: 1rem;\n    justify-self: center;\n}\n\n/* Footer */\n#footer {\n    height: 5vh;\n    background-color: white;\n}`,""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var d=e[s],c=a.base?d[0]+a.base:d[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var u=t(p),h={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=r(h,a);a.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=t(i[o]);n[s].references--}for(var d=a(e,r),c=0;c<i.length;c++){var l=t(i[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},951:(e,n,t)=>{e.exports=t.p+"575ec9e676c7a85494bb.ttf"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),i=t(569),o=t.n(i),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),h=t(426),m={};m.styleTagTransform=u(),m.setAttributes=d(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const f=(()=>{const e=document.getElementById("content"),n=["Home","About Us","Menu"];let t=[];return{initPage:function(){t.length=0;const a=document.createElement("div");a.id="header",e.appendChild(a);const r=document.createElement("h1");r.classList.add("header-title"),r.innerText="Le Restaurant",a.appendChild(r);const i=document.createElement("div");i.id="header-tabs",a.appendChild(i);for(let e=0;e<n.length;e++){let a=document.createElement("h2");a.classList.add("page-tab"),0==e&&a.classList.add("active-tab"),a.innerText=n[e],i.appendChild(a),t.push(a)}const o=document.createElement("div");o.id="main",e.appendChild(o);const s=document.createElement("img");s.id="main-img",s.src="/src/assets/restaurant-welcome.jpg",o.appendChild(s);const d=document.createElement("p");d.id="main-text",d.innerText="Welcome to Le Restaurant, where culinary artistry meets refined elegance. Step into a world of gastronomic delight, where our expert chefs have curated a menu that dances on the palate.         The opulent ambiance and attentive service set the stage for an unforgettable dining experience. Indulge in meticulously crafted dishes that embody our commitment to excellence.         At Le Restaurant, every detail converges to create a symphony of flavors and sophistication, ensuring a dining experience that is truly unparalleled.",o.appendChild(d);const c=document.createElement("div");c.id="footer",e.appendChild(c),console.log("Initialization Complete")},pageTabs:t}})(),g=(()=>{const e=document.getElementById("content"),n=["Home","About Us","Menu"];let t=[];return{initPage:function(){t.length=0;const a=document.createElement("div");a.id="header",e.appendChild(a);const r=document.createElement("h1");r.classList.add("header-title"),r.innerText="Le Restaurant",a.appendChild(r);const i=document.createElement("div");i.id="header-tabs",a.appendChild(i);for(let e=0;e<n.length;e++){let a=document.createElement("h2");a.classList.add("page-tab"),1==e&&a.classList.add("active-tab"),a.innerText=n[e],i.appendChild(a),t.push(a)}const o=document.createElement("div");o.id="main",e.appendChild(o);const s=document.createElement("h1");s.classList.add("page-title"),s.innerText="Our Story",o.appendChild(s);const d=document.createElement("div");d.id="owner-block",o.appendChild(d);const c=document.createElement("p");c.id="owner-text",c.innerText="In the heart of a bustling city, the idea for Le Restaurant was conceived by a visionary culinary maestro, Chef Henri Leclair.        With a lifetime of expertise and an insatiable passion for the art of cooking, Chef Henri embarked on a journey to create a dining establishment that would redefine gastronomy.         Guided by a relentless pursuit of perfection, he meticulously designed every facet of the restaurant, from the opulent décor to the intricate menu offerings.\n\n        Late nights and early mornings were dedicated to crafting dishes that would transcend mere sustenance and elevate dining to an unparalleled experience.         Countless trials and tastings later, Chef Henri curated a menu that harmonized flavors in ways previously unimagined.         Each ingredient was a note in a symphony, carefully composed to evoke emotions through taste. As Le Restaurant took shape,         its walls seemed to radiate the passion and dedication infused by its creator. \n\n When the doors finally swung open, Le Restaurant beckoned diners with an aura of sophistication.         Chef Henri's meticulous touch was evident in every plate that left the kitchen, and as the aroma of his masterpieces wafted through the air, a new chapter in the culinary world had been written.         'Le Restaurant' wasn't just a place to dine; it was a testament to the unyielding commitment of Chef Henri to his craft, an embodiment of his lifelong devotion to the art of exquisite cuisine.",d.appendChild(c);const l=document.createElement("img");l.id="owner-img",l.src="/src/assets/head-chef.jpg",d.appendChild(l);const p=document.createElement("div");p.id="founding-block",o.appendChild(p);const u=document.createElement("img");u.id="founding-img",u.src="/src/assets/restaurant-pic.jpg",p.appendChild(u);const h=document.createElement("p");h.id="founding-text",h.innerText="Word of Le Restaurant's extraordinary fare spread like wildfire, drawing food aficionados from far and wide.         The name became synonymous with culinary innovation, and reservations at the restaurant became highly sought-after. With each passing year,         Chef Henri continued to push the boundaries of gastronomy, introducing seasonal menus that showcased his unwavering creativity.         Behind the scenes, his kitchen hummed with the synchronized rhythm of a culinary orchestra,         where each chef played their part in bringing Chef Henri's vision to life.\n\n        As time wove its tapestry, Le Restaurant not only retained its acclaim but amplified it. Awards and accolades adorned its walls,         testaments to Chef Henri's enduring legacy. The restaurant had grown beyond its name to embody an experience that lingered in the hearts and palates of its guests.         Chef Henri's journey had birthed not just a restaurant but a beacon of culinary excellence, a place where passion and artistry converged to create a         symphony of flavors that would resonate through time.",p.appendChild(h);const m=document.createElement("div");m.id="footer",e.appendChild(m),console.log("Initialization Complete")},pageTabs:t}})(),y=JSON.parse('{"Starters":[{"name":"Foie Gras Duo","price":22,"desc":"A delicate pairing of seared foie gras and a velvety foie gras mousse, accompanied by a spiced fig compote and toasted brioche."},{"name":"Truffle Carpaccio","price":18,"desc":"Paper-thin slices of prime beef tenderloin drizzled with truffle-infused olive oil, shaved Parmesan, arugula, and caper berries."},{"name":"Oysters Rockefeller","price":25,"desc":"Freshly shucked oysters topped with a rich blend of spinach, Pernod-infused cream, and crispy bacon, baked to perfection."},{"name":"Tuna Tartare","price":20,"desc":"Sushi-grade tuna diced and seasoned with soy, sesame, and fresh herbs, served with avocado puree and crispy wonton chips."}],"Steak":[{"name":"Dry-Aged Ribeye","price":41,"desc":"A beautifully marbled 16 oz. dry-aged ribeye, perfectly grilled to your preference and served with truffle-infused mashed potatoes and bordelaise sauce."},{"name":"Filet Mignon au Poivre","price":58,"desc":"A tender 8 oz. filet mignon crusted with crushed peppercorns, pan-seared, and finished with a Cognac cream sauce, accompanied by haricots verts almondine."},{"name":"Tomahawk Steak","price":47,"desc":"A show-stopping 32 oz. bone-in ribeye, expertly seasoned and char-grilled, served with roasted garlic mashed potatoes and roasted seasonal vegetables."}],"Seafood":[{"name":"Lobster Thermidor","price":48,"desc":"A succulent lobster tail poached and then broiled with a luscious blend of shallots, mushrooms, brandy, and Gruyere cheese, accompanied by saffron risotto."},{"name":"Pan-Seared Chilean Sea Bass","price":39,"desc":"A buttery and flaky Chilean sea bass fillet pan-seared to perfection, served over a bed of lemon-scented risotto and sautéed baby spinach."},{"name":"Grilled Salmon Provencal","price":38,"desc":"Fresh Atlantic salmon fillet grilled and topped with a medley of tomatoes, olives, capers, and fresh herbs, served with garlic mashed potatoes."}],"Sides":[{"name":"Truffle Mac and Cheese","price":19,"desc":"Cavatappi pasta in a creamy truffle-infused cheese sauce, topped with a crispy panko crust."},{"name":"Roasted Brussels Sprouts","price":16,"desc":"Brussels sprouts roasted with bacon, shallots, and balsamic glaze, offering a balance of sweet and savory flavors."},{"name":"Loaded Twice-Baked Potato","price":12,"desc":"A fluffy baked potato whipped with butter, sour cream, cheddar cheese, and crispy bacon bits."},{"name":"Grilled Asparagus","price":10,"desc":"Tender asparagus spears grilled to perfection and drizzled with lemon-infused olive oil."}],"Desserts":[{"name":"Chocolate Decadence","price":18,"desc":"A rich flourless chocolate cake served with a raspberry coulis and a scoop of vanilla bean gelato."},{"name":"Crème Brûlée Trio","price":20,"desc":"A flight of classic vanilla, coffee, and Grand Marnier-infused crème brûlées, each with a perfectly caramelized sugar crust."},{"name":"Tiramisu","price":16,"desc":"A traditional Italian dessert featuring layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder."},{"name":"Molten Lava Cake","price":18,"desc":"A warm chocolate lava cake with a gooey molten center, accompanied by a scoop of salted caramel gelato."}]}'),v=(()=>{const e=document.getElementById("content"),n=["Home","About Us","Menu"],t=["Starters","Steak","Seafood","Sides","Desserts"];let a=[];return{initPage:function(){a.length=0;const r=document.createElement("div");r.id="header",e.appendChild(r);const i=document.createElement("h1");i.classList.add("header-title"),i.innerText="Le Restaurant",r.appendChild(i);const o=document.createElement("div");o.id="header-tabs",r.appendChild(o);for(let e=0;e<n.length;e++){let t=document.createElement("h2");t.classList.add("page-tab"),2==e&&t.classList.add("active-tab"),t.innerText=n[e],o.appendChild(t),a.push(t)}const s=document.createElement("div");s.id="main",e.appendChild(s);const d=document.createElement("h1");d.classList.add("page-title"),d.innerText="Menu",s.appendChild(d);const c=document.createElement("div");c.id="page-menu",s.appendChild(c);for(let e=0;e<5;e++){let n=document.createElement("h2");n.classList.add("menu-heading"),n.innerText=t[e],c.appendChild(n)}for(let e=0;e<5;e++){let e=document.createElement("div");e.classList.add("menu-section"),c.appendChild(e)}const l=document.getElementsByClassName("menu-section");let p=0;for(const e in y){for(let n=0;n<y[e].length;n++){let t=document.createElement("div");t.classList.add("dish"),l[p].appendChild(t);let a=document.createElement("h3");a.classList.add("dish-name"),a.innerText=y[e][n].name,t.appendChild(a);let r=document.createElement("h3");r.classList.add("dish-price"),r.innerText=y[e][n].price,t.appendChild(r);let i=document.createElement("p");i.classList.add("dish-desc"),i.innerText=y[e][n].desc,t.appendChild(i)}p++}const u=document.createElement("div");u.id="footer",e.appendChild(u),console.log("Initialization Complete")},pageTabs:a}})(),b=document.getElementById("content"),w=[f,g,v];let x=null;function C(e){let n=e.childNodes,t=[];for(let e=0;e<n.length;e++)n[e].childNodes.length>0&&t.concat(C(n[e])),t.push(n[e]);if(e!=b)return t;for(;t.length>0;)t[t.length-1].remove(),t.pop()}(function e(n){console.log("Start setup"),x&&(console.log("About to remove"),C(b)),x=n,console.log("About to Initialize"),x.initPage(),console.log("Initializing Event Listeners"),function(n){let t=n.pageTabs,a=w;console.log(a[0]);for(let n=0;n<t.length;n++)t[n].addEventListener("click",(()=>{console.log(w[n]),e(a[n])}))}(x)})(f),console.log(x)})()})();
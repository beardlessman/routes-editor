(this["webpackJsonproutes-editor"]=this["webpackJsonproutes-editor"]||[]).push([[0],{127:function(e,t,n){e.exports=n(238)},132:function(e,t,n){},133:function(e,t,n){},238:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(20),i=n.n(c),s=(n(132),n(133),n(50)),u=n(80),l=n.n(u),m=n(102),d=n(72),p=n(123),f=n(65),b=n(10),h=Object(r.createContext)(new function e(){var t=this;Object(f.a)(this,e),this.pointList=[],this.currentPointCenter=[],this.setCurrentPointCenter=function(e){t.currentPointCenter=e},this.createPoint=function(e){t.pointList.push({value:e,coords:t.currentPointCenter,key:Math.random()})},this.dragItem=function(e,n){var a=Object(p.a)(t.pointList),r=a.splice(e,1),o=Object(d.a)(r,1)[0];a.splice(n,0,o),t.pointList=a},this.getVariants=function(){var e=Object(m.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"7102a877-527d-4ae8-a6a0-c76304fba8e5",n="https://geocode-maps.yandex.ru/1.x/?format=json&geocode=".concat(t,"&apikey=").concat("7102a877-527d-4ae8-a6a0-c76304fba8e5"),e.next=4,fetch(n).then((function(e){return e.json()}));case 4:return a=e.sent,e.abrupt("return",a.response.GeoObjectCollection.featureMember.map((function(e){return{value:e.GeoObject.metaDataProperty.GeocoderMetaData.text,coords:e.GeoObject.Point.pos.split(" ").reverse().map((function(e){return parseFloat(e)})),key:Math.random()}})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Object(b.k)(this)}),v=n(56),g=n(103),E=n(126),j=n(122),O=Object(s.a)(a=function(e){Object(E.a)(n,e);var t=Object(j.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"render",value:function(){var e=this.props,t=e.provided,n=e.items;return r.createElement("div",{ref:t.innerRef,className:"drop-point"},n.map((function(e,t){var n=e.key,a=e.value;return r.createElement(v.b,{key:n,draggableId:n.toString(),index:t},(function(e){return r.createElement("div",null,r.createElement("div",Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps,{className:"item"}),a))}))})),t.placeholder)}}]),n}(r.Component))||a,y=Object(s.a)((function(){var e=Object(r.useContext)(h),t=e.pointList,n=e.dragItem;return o.a.createElement(v.a,{onDragEnd:function(e){e.destination&&n(e.source.index,e.destination.index)}},o.a.createElement(v.c,{droppableId:"pointList"},(function(e){return o.a.createElement(O,{items:t,provided:e})})))})),C=n(242),k=n(243),w=function(e){var t=e.onSubmit,n=C.a.useForm(),a=Object(d.a)(n,1)[0];return o.a.createElement(C.a,{form:a,name:"new-point-form",onFinish:function(e){t(e.name),a.resetFields()}},o.a.createElement(C.a.Item,{name:"name"},o.a.createElement(k.a,null)))},x=n(52),P=Object(s.a)((function(){var e=Object(r.useContext)(h),t=e.pointList,n=[0,0];Object(r.useEffect)((function(){e.setCurrentPointCenter(n)}));return o.a.createElement(x.d,null,o.a.createElement(x.b,{defaultState:{center:n,zoom:2},style:{width:"100%",height:"100%"},onBoundsChange:function(t){e.setCurrentPointCenter(t.get("target").getCenter())}},o.a.createElement(x.e,{options:{float:"right"}}),o.a.createElement(x.a,null,t.map((function(e,t){var n=e.coords,a=e.key,r=e.value;return o.a.createElement(x.c,{key:a,geometry:n,properties:{balloonContent:"".concat(t,") ").concat(r)},modules:["geoObject.addon.balloon","geoObject.addon.hint"]})})))))})),L=function(){var e=Object(r.useContext)(h);return o.a.createElement("div",{className:"layout"},o.a.createElement("div",{className:"layout__panel"},o.a.createElement(w,{onSubmit:e.createPoint}),o.a.createElement(y,null)),o.a.createElement("div",{className:"layout__panel"},o.a.createElement(P,null)))};var I=function(){return o.a.createElement(L,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(237);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[127,1,2]]]);
//# sourceMappingURL=main.93f85ac4.chunk.js.map
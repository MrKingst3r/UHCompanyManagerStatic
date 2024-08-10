import{_ as N,k as C,r as n,o as w,c as r,b as e,w as h,G as k,v as g,H as b,f as v,F as S,h as B,I as F,J as _,a,K as D,t as y}from"./index.4180d3e0.js";const M={setup(){const i=C(),o=n(null),d=n(""),t=n(""),c=n(""),u=n(""),s=n(null),m=async()=>{d.value="",t.value="",c.value="",u.value="";try{const l=await F();o.value=l}catch(l){i.error(l)}},p=async()=>{if(d.value==="Client Name"){if(t.value||c.value)try{const l={searchBy:"name",firstName:t.value,lastName:c.value},f=await _(l);o.value=f}catch(l){i.error(l)}}else if(d.value==="Client Number"&&u.value)try{const l={searchBy:"number",phoneNumber:u.value},f=await _(l);o.value=f}catch(l){i.error(l)}},x=l=>{$router.push({name:"clientdetails",params:{id:l}})};return w(()=>{m()}),{clients:o,searchBy:d,firstName:t,lastName:c,phoneNumber:u,hoverId:s,loadData:m,handleSubmitForm:p,navigateToClientDetails:x}}},V=e("div",null,[e("h1",{class:"font-bold text-4xl text-red-700 tracking-widest text-center mt-10"}," Find Client ")],-1),I={class:"px-10 pt-20"},K={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"},E=e("h2",{class:"text-2xl font-bold"},"Search Client By",-1),U={class:"flex flex-col"},T=e("option",{value:"Client Name"},"Client Name",-1),q=e("option",{value:"Client Number"},"Client Number",-1),L=[T,q],P={key:0,class:"flex flex-col"},z={class:"block"},G={key:1,class:"flex flex-col"},H={class:"block"},J={key:2,class:"flex flex-col"},R={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"},j=e("div",null,null,-1),A=e("div",null,null,-1),O={class:"mt-5 grid-cols-2"},Q=e("hr",{class:"mt-10 mb-10"},null,-1),W={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"},X=e("div",{class:"ml-10"},[e("h2",{class:"text-2xl font-bold"},"List of Clients"),e("h3",{class:"italic"},"Click table row to view client details")],-1),Y={class:"flex flex-col col-span-2"},Z={class:"min-w-full shadow-md rounded"},$=e("thead",{class:"bg-gray-50 text-xl"},[e("tr",null,[e("th",{class:"p-4 text-left"},"Name"),e("th",{class:"p-4 text-left"},"Phone number"),e("th",{class:"p-4 text-left"},"City")])],-1),ee={class:"divide-y divide-gray-300"},te=["onClick","onMouseenter"],se={class:"p-2 text-left"},oe={class:"p-2 text-left"},le={class:"p-2 text-left"};function ne(i,o,d,t,c,u){return a(),r("main",null,[V,e("div",I,[e("div",K,[E,e("div",U,[h(e("select",{class:"rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50","onUpdate:modelValue":o[0]||(o[0]=s=>t.searchBy=s)},L,512),[[k,t.searchBy]])]),t.searchBy==="Client Name"?(a(),r("div",P,[e("label",z,[h(e("input",{type:"text",class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50","onUpdate:modelValue":o[1]||(o[1]=s=>t.firstName=s),onKeyup:o[2]||(o[2]=b((...s)=>t.handleSubmitForm&&t.handleSubmitForm(...s),["enter"])),placeholder:"Enter first name"},null,544),[[g,t.firstName]])])])):v("",!0),t.searchBy==="Client Name"?(a(),r("div",G,[e("label",H,[h(e("input",{type:"text",class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50","onUpdate:modelValue":o[3]||(o[3]=s=>t.lastName=s),onKeyup:o[4]||(o[4]=b((...s)=>t.handleSubmitForm&&t.handleSubmitForm(...s),["enter"])),placeholder:"Enter last name"},null,544),[[g,t.lastName]])])])):v("",!0),t.searchBy==="Client Number"?(a(),r("div",J,[h(e("input",{class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",type:"text","onUpdate:modelValue":o[5]||(o[5]=s=>t.phoneNumber=s),onKeyup:o[6]||(o[6]=b((...s)=>t.handleSubmitForm&&t.handleSubmitForm(...s),["enter"])),placeholder:"Enter Client Phone Number"},null,544),[[g,t.phoneNumber]])])):v("",!0)]),e("div",R,[j,A,e("div",O,[e("button",{class:"mr-10 border border-red-700 bg-white text-red-700 rounded",onClick:o[7]||(o[7]=(...s)=>t.loadData&&t.loadData(...s)),type:"submit"}," Clear Search "),e("button",{class:"bg-red-700 text-white rounded",onClick:o[8]||(o[8]=(...s)=>t.handleSubmitForm&&t.handleSubmitForm(...s)),type:"submit"}," Search Client ")])])]),Q,e("div",W,[X,e("div",Y,[e("table",Z,[$,e("tbody",ee,[(a(!0),r(S,null,B(t.clients,s=>(a(),r("tr",{onClick:m=>i.$router.push({name:"clientdetails",params:{id:s._id}}),key:s._id,class:D(["cursor-pointer",{hoverRow:t.hoverId===s._id}]),onMouseenter:m=>t.hoverId=s._id,onMouseleave:o[9]||(o[9]=m=>t.hoverId=null)},[e("td",se,y(s.firstName+" "+s.lastName),1),e("td",oe,y(s.phoneNumber.primary),1),e("td",le,y(s.address.city),1)],42,te))),128))])])])])])}const ae=N(M,[["render",ne]]);export{ae as default};

import{_ as i,r as a,u as c,c as u,b as s,w as d,v as l,j as f,a as m}from"./index.4180d3e0.js";const p={setup(){const n=a(""),e=a(""),r=c();return{username:n,password:e,store:r}}},g=s("h1",{class:"font-bold text-4xl text-red-700 tracking-widest text-center mt-10"}," Welcome ",-1),_={class:"flex justify-center mt-10"},w=s("span",{class:"text-gray-700"},"Username",-1),x=s("span",{style:{color:"#ff0000"}},"*",-1),y={class:"flex justify-center mt-10"},b=s("span",{class:"text-gray-700"},"Password",-1),h=s("span",{style:{color:"#ff0000"}},"*",-1),v=s("div",{class:"flex justify-center mt-10"},[s("button",{class:"bg-red-700 text-white rounded",type:"submit"}," Login ")],-1);function j(n,e,r,o,U,k){return m(),u("div",null,[g,s("form",{onSubmit:e[2]||(e[2]=f(t=>o.store.login(o.username,o.password),["prevent"])),novalidate:"true"},[s("div",_,[s("label",null,[w,x,d(s("input",{type:"text",class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",placeholder:"","onUpdate:modelValue":e[0]||(e[0]=t=>o.username=t)},null,512),[[l,o.username]])])]),s("div",y,[s("label",null,[b,h,d(s("input",{type:"password",class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",placeholder:"","onUpdate:modelValue":e[1]||(e[1]=t=>o.password=t)},null,512),[[l,o.password]])])]),v],32)])}const V=i(p,[["render",j]]);export{V as default};
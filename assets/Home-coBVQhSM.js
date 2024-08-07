import{u as _,a as x,b as S,j as e,L,_ as c,r as k,S as $,c as q}from"./index-Gszisc-3.js";import{T as O,B as D,c as M,a as o,F as T,b as X,d as m,E as d}from"./index.esm-CKK1c0vP.js";function b({item:t}){var p,j,N;const[r]=_(),{refetch:l}=x(),a=S(),{id:s,avatar_url:n,tags:i,fields:v}=t,{email:w,["first name"]:y="",["last name"]:E=""}=v,h=((p=w[0])==null?void 0:p.value)??"",u=((j=y[0])==null?void 0:j.value)??"",f=((N=E[0])==null?void 0:N.value)??"",C=async F=>{try{await r(F),l(),c.success("Contact deleted successfull!")}catch(g){console.error(g),c.error(`Oops...! Something wrong... Error: ${g.data.human_readable_error}`)}};return e.jsxs("div",{className:"group flex",children:[e.jsx(L,{to:`/${s}`,state:{from:a},className:"w-full",children:e.jsxs("div",{className:"flex rounded-lg rounded-tr-none bg-[#3b3c3d] p-4 group-hover:bg-[#1d1d1d]",children:[e.jsx("div",{className:"mr-4 block h-[68px] min-w-[68px] overflow-hidden rounded-full",children:e.jsx("img",{src:n,alt:"Contact`s avatar",width:68,height:68,className:"h-[68px] w-[68px] object-cover"})}),e.jsxs("div",{className:"flex flex-col gap-5",children:[u===""&&f===""?e.jsx("p",{children:"No any name"}):e.jsxs("div",{className:"flex flex-wrap gap-2 whitespace-pre-wrap",children:[e.jsx("p",{children:u}),e.jsx("p",{children:f})]}),h?e.jsx("b",{children:h}):e.jsx("b",{children:"No email"}),e.jsx(O,{id:s,tags:i})]})]})}),e.jsx(D,{id:s,onClick:C})]})}b.propTypes;function A(){const{data:t,error:r,isLoading:l,refetch:a}=x(),s=t?t.resources:[];return k.useEffect(()=>(a(),c.success("Okay! Let`s see what we have..."),()=>c.dismiss()),[]),e.jsx("div",{className:"notXl:container xl:w-full",children:e.jsx("ul",{className:"flex flex-col gap-5",children:r?e.jsx(e.Fragment,{children:r.message}):l?e.jsx($,{}):s.length>0?s.map(n=>e.jsx("li",{children:e.jsx(b,{item:n})},n.id)):e.jsx(e.Fragment,{children:"No contacts found"})})})}const B=M().shape({email:o().email("Invalid email format").required("Email is required"),firstName:o(),lastName:o()}).test("at-least-one","Either first name or last name is required",function(t){const{firstName:r,lastName:l}=t;return!r&&!l?this.createError({path:"lastName",message:"Either first name or last name is required"}):!0});function I(){const[t]=q(),{refetch:r}=x(),l={firstName:"",lastName:"",email:""};return e.jsx("div",{className:"notXl:container xl:sticky xl:top-5 xl:h-fit",children:e.jsx("div",{className:"mdOnly:w-[440px] xl:w-[400px] notXl:mx-auto",children:e.jsx(T,{initialValues:l,validationSchema:B,onSubmit:async(a,s)=>{const n={record_type:"person",fields:{...a.firstName&&{"first name":[{value:a.firstName}]},...a.lastName&&{"last name":[{value:a.lastName}]},email:[{value:a.email}]}};try{await t({...n}).unwrap(),s.resetForm(),c.success("New contact is added successfull!"),r()}catch(i){console.error(i.data.human_readable_error),c.error(`Oops...! Failed to create contact: ${i.data.human_readable_error}`)}finally{s.setSubmitting(!1)}},children:e.jsxs(X,{children:[e.jsxs("label",{htmlFor:"firstName",children:["First Name",e.jsx(m,{id:"firstName",type:"text",name:"firstName",placeholder:"Enter contact`s first name"}),e.jsx(d,{name:"firstName",component:"strong"})]}),e.jsxs("label",{htmlFor:"lastName",children:["Last Name",e.jsx(m,{id:"lastName",type:"text",name:"lastName",placeholder:"Enter contact`s last name"}),e.jsx(d,{name:"lastName",component:"strong"})]}),e.jsxs("label",{htmlFor:"email",className:"mb-4",children:["Email",e.jsx(m,{id:"email",type:"email",name:"email",placeholder:"Enter contact`s email"}),e.jsx(d,{name:"email",component:"strong"})]}),e.jsx("button",{type:"submit",className:"button",children:"Add contact"})]})})})})}function Q(){return e.jsx("section",{children:e.jsxs("div",{className:"xl:container",children:[e.jsx("h1",{className:"title",children:"Contacts"}),e.jsxs("div",{className:"xl:flex-grow-1 xl:flex xl:h-full xl:gap-8",children:[e.jsx(I,{}),e.jsx(A,{})]})]})})}export{Q as default};
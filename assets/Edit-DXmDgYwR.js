import{b as l,d,r as u,a as x,e as b,j as s,L as m}from"./index-Dqmy1XUW.js";import{T as p}from"./Tags-BTSBrVI7.js";function h(){var n,r;const t=l(),{contactId:e}=d(),o=u.useRef(((n=t.state)==null?void 0:n.from)??"/"),{refetch:i}=x(),{data:c}=b(e),a=c?(r=c.resources[0])==null?void 0:r.tags:[];return console.log(a),console.log(t),console.log(o),s.jsx("section",{children:s.jsxs("div",{className:"container",children:[s.jsx("h1",{className:"title",children:"edit contact"}),s.jsx(p,{id:e,tags:a}),s.jsx(m,{to:o.current.pathname,onClick:()=>i(),children:s.jsx("span",{className:"inline-block rounded-lg border-[2px] border-solid border-[#3b3c3d] px-3 py-1 text-center transition hover:bg-[#3b3c3d] focus:bg-[#3b3c3d]",children:"GO BACK"})})]})})}export{h as default};

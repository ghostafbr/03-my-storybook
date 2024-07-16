import{j as A}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const z=({label:s,size:S="normal",allCaps:v=!1,color:T,fontColor:q})=>A.jsx("span",{className:`${S} ${T}`,style:{color:q},children:v?s.toUpperCase():s});z.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"The text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Size of the label",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Whether to display the label in all caps",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Custom color for the label"},fontColor:{required:!1,tsType:{name:"string"},description:"Custom font color for the label"}}};const j={title:"Example/MyLabel",component:z,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{color:{control:"inline-radio"}}},e={args:{label:"Hello World"}},a={args:{label:"All Caps label",size:"h1",allCaps:!0,color:"text-tertiary",fontColor:"red"}},r={args:{label:"Secondary label",size:"h1"}},l={args:{label:"Custom Color label",size:"h1"}},o={args:{label:"Custom Font label",size:"h1",allCaps:!0}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Hello World'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'All Caps label',
    size: 'h1',
    allCaps: true,
    color: 'text-tertiary',
    fontColor: 'red'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    size: 'h1'
  }
}`,...(C=(d=r.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var b,y,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color label',
    size: 'h1'
  }
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,g,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Custom Font label',
    size: 'h1',
    allCaps: true
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const E=["Basic","AllCaps","Secondary","CustomColor","CustomFont"];export{a as AllCaps,e as Basic,l as CustomColor,o as CustomFont,r as Secondary,E as __namedExportsOrder,j as default};

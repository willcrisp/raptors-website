import{_ as u}from"./Nav-a7cacd8c.mjs";import{_ as m,o as e,c as o,a as n,b as a,w as h,t as c,F as i,r as _,e as f,i as x,p as k,f as v,d as y}from"./entry-a8ab77eb.mjs";import{_ as w}from"./ArticleCard-6e5f1530.mjs";import{a as b}from"./index-238dc1f9.mjs";const N={name:"App",data(){return{articles:[],error:null}},async mounted(){try{const t=await b.get("http://localhost:1337/api/articles?populate=*");this.articles=t.data.data,console.log(this.articles)}catch(t){this.error=t}}},g=t=>(k("data-v-12a2f5b4"),t=t(),v(),t),B={class:"container"},I=g(()=>a("h1",null,"Welcome to the Raptors floorball team",-1)),S=y("View news!"),V={class:"container"},F={key:0},L={key:1};function T(t,A,C,D,r,E){const l=u,p=f,d=w;return e(),o("div",null,[n(l),a("div",B,[I,n(p,{to:"/articles"},{default:h(()=>[S]),_:1})]),a("div",V,[r.error?(e(),o("div",F,c(r.error),1)):(e(),o("ul",L,[(e(!0),o(i,null,_(r.articles,s=>(e(),o("li",{key:s.id},c(s.attributes.Title),1))),128))])),(e(!0),o(i,null,_(r.articles,s=>(e(),x(d,{key:s.id,article:s},null,8,["article"]))),128))])])}var z=m(N,[["render",T],["__scopeId","data-v-12a2f5b4"]]);export{z as default};

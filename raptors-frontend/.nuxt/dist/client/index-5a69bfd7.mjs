import{_ as i}from"./Nav-a7cacd8c.mjs";import{_ as p}from"./ArticleCard-6e5f1530.mjs";import{a as _}from"./index-238dc1f9.mjs";import{_ as l,o as t,c as r,a as d,b as s,t as m,h as u,F as h,r as f,i as v,p as x,f as g}from"./entry-a8ab77eb.mjs";const k={name:"App",data(){return{articles:[],error:null}},async mounted(){try{const e=await _.get("http://localhost:1337/api/articles?populate=*");this.articles=e.data.data,console.log(this.articles)}catch(e){this.error=e}}},y=e=>(x("data-v-777b2730"),e=e(),g(),e),w=y(()=>s("div",{class:"container"},[s("h1",null,"This is the super awesome news/articles page")],-1)),B={class:"container"},I={key:0};function N(e,S,b,V,o,F){const c=i,n=p;return t(),r("div",null,[d(c),w,s("div",B,[o.error?(t(),r("div",I,m(o.error),1)):u("",!0),(t(!0),r(h,null,f(o.articles,a=>(t(),v(n,{key:a.id,article:a},null,8,["article"]))),128))])])}var L=l(k,[["render",N],["__scopeId","data-v-777b2730"]]);export{L as default};
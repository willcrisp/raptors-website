import{_ as r,o as l,c as n,b as t,a as i,w as _,t as d,e as m}from"./entry-a8ab77eb.mjs";const u={props:["article"],computed:{coverImageUrl(){const e="http://localhost:1337",o=this.article.attributes.Image.data.attributes.formats.small.url;return e+o}}},h={class:"article md:grid gap-6 grid-cols-7 items-center mb-6 md:mb-0"},p={class:"col-start-3 col-end-8"},f={class:"img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3"},g=["src"],x={class:"font-bold text-xl mb-2"};function b(e,o,s,v,k,a){const c=m;return l(),n("li",h,[t("header",p,[t("div",f,[t("img",{src:a.coverImageUrl,alt:""},null,8,g)]),i(c,{to:`/articles/${s.article.id}`},{default:_(()=>[t("h1",x,d(s.article.attributes.Title),1)]),_:1},8,["to"])])])}var B=r(u,[["render",b]]);export{B as _};
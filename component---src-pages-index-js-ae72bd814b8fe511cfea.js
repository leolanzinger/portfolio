"use strict";(self.webpackChunkleolanzinger_github_io=self.webpackChunkleolanzinger_github_io||[]).push([[678],{4127:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294);var a=function(e,n){var t,r,a,i,o,c=this;this.clearRect(0,0,e.width,e.height),t=n.x,r=n.y,a=n.radius,i=n.color,c.save(),c.beginPath(),c.arc(t,r,a,0,2*Math.PI),c.fillStyle=i,c.globalAlpha=o,c.fill(),c.closePath(),c.restore()},i=function(){var e=!0,n=0,t=!1,i={width:0,height:0},o=!0,c=["#F1C40F","#1ABC9C","#3498DB","#9B59B6","#95A5A6"],l=(0,r.useRef)({x:50,y:50,vx:3.9,vy:3.9,radius:2,color:c[0]}),u=(0,r.useRef)(null),s=(0,r.useRef)(null),m=(0,r.useRef)(null),d=function e(){var n=l.current;n.radius+=4,n.radius>10&&(t=!0),o||(s.current=requestAnimationFrame(e))},h=function e(){var n=l.current;n.radius>2?(n.radius-=n.radius/6,s.current=requestAnimationFrame(e)):n.radius=2},f=function e(){var n=l.current;n.radius<20?(n.radius+=4,s.current=requestAnimationFrame(e),v()):(s.current=requestAnimationFrame(g),v())},g=function e(){var t=l.current;t.radius>2?(t.radius-=4,s.current=requestAnimationFrame(e),v()):(t.radius=2,n<2?(n++,s.current=requestAnimationFrame(f)):t.color=p(),v())},w=function(){e=!1,n=0,m.current=setInterval((function(){t?clearInterval(m.current):(n=0,s.current=requestAnimationFrame(f))}),3600)},p=function(){return c[Math.floor(5*Math.random())]},v=function e(){var n;u.current&&(n=u.current.getContext("2d"),a.call(n,i,l.current),s.current=requestAnimationFrame(e))};return(0,r.useEffect)((function(){function e(){u.current.width=i.width,u.current.height=i.height}return i.width=window.innerWidth,i.height=window.innerHeight,u.current.width=i.width,u.current.height=i.height,window.addEventListener("resize",(function(){return e()})),function(){cancelAnimationFrame(s.current),window.removeEventListener("resize",e)}}),[]),r.createElement("canvas",{className:"canvas",width:i.width,height:i.width,ref:u,onMouseMove:function(n){var t=n.clientX,r=n.clientY,a=l.current;a.x=t,a.y=r,e&&(s.current=requestAnimationFrame(w)),v()},onMouseDown:function(){o=!1,e=!1,s.current=requestAnimationFrame(d)},onMouseUp:function(){o=!0,l.current.color=p(),h()}})}},1619:function(e,n,t){var r=t(7294);n.Z=function(){return r.createElement("div",{className:"footer"},r.createElement("h4",null,"contacts"),r.createElement("p",null,"Let’s get in touch via ",r.createElement("a",{href:"mailto:leonardo.lanzinger@gmail.com",className:"social-link"},"email"),", ",r.createElement("a",{href:"https://twitter.com/Leo_Lanzinger",className:"social-link"},"Twitter")," or ",r.createElement("a",{href:"https://www.linkedin.com/in/leonardolanzinger/",className:"social-link"},"Linkedin"),"."))}},6558:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c}});var r=t(7294),a=t(1619),i=t(4127),o={color:"#222222",fontFamily:"neue-haas-grotesk-display, helvetica, sans-serif, serif",pointerEvents:"none"};n.default=function(){return r.createElement("div",null,r.createElement(i.Z,null),r.createElement("main",{style:o,className:"homepage"},r.createElement("div",{className:"grid"},r.createElement("div",{className:"box-7 main title"},r.createElement("h1",null,"Leonardo Lanzinger"),r.createElement("h4",{className:"subtitle"},"digital product designer")),r.createElement("div",{className:"box-5 main"},r.createElement("h4",null,"work"),r.createElement("p",null,"I am a product designer with a passion for user research and design strategy. I work as a Principal Product Designer at Zalando Recommerce, designing experiences for people who buy and sell second-hand fashion."),r.createElement("p",null,"Previously, I was part of The Studio at Zalando, a design team with a focus on early stage ideas and strategic design propositions. I also worked for Babbel in Berlin and Belka in Trento, Italy."),r.createElement("p",null,"Read more about my work ",r.createElement("a",{href:"/work"},"here"),"."),r.createElement("h4",null,"education + music"),r.createElement("p",null,"I have a bachelor degree in Computer Science and a master in Human-Computer Interaction Design. When I am not glued to Figma or running user interviews, I produce and record music with ",r.createElement("a",{href:"https://open.spotify.com/artist/6M2Pk85GotQvfbYCmWhEme"},"Bob and the Apple")," and ",r.createElement("a",{href:"https://open.spotify.com/artist/42MCPv6PC71ywUF6cR5uHU"},"Julia Pígali"),", playing the bass guitar and the synthesiser."),r.createElement(a.Z,null)))))};var c=function(){return r.createElement("title",null,"Leonardo Lanzinger")}}}]);
//# sourceMappingURL=component---src-pages-index-js-ae72bd814b8fe511cfea.js.map
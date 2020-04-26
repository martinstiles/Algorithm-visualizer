(this["webpackJsonpalgorithm-visualizer"]=this["webpackJsonpalgorithm-visualizer"]||[]).push([[0],{69:function(e,t,a){e.exports=a(79)},74:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=(a(74),a(10)),c=a(63),s={source:"#63C132",goal:"#cf2e2e",wall:"rgb(".concat([220,220,220],")"),visited:"#2d749a",shortestPath:"#ffff60",unvisited:""},d=function(e){var t=Object(n.useState)(e.type),a=Object(i.a)(t,2),o=a[0],l=a[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2),p=u[0],m=u[1],f=e.hooks.runState,v=function(t){l(t),e.setTypeInNode(t,e.coordinates)},y=function(){"unvisited"===e.type?v("wall"):"wall"===e.type&&v("unvisited"),m(!0)},h=Object(c.a)({height:"2.5em",width:"2.5em",border:"1px solid rgb(".concat([220,220,220],")"),background:s[o]},p&&"wall"===o&&{transform:"scale(".concat(1.3,")")});return r.a.createElement("div",{key:e.key,style:h,onMouseDown:function(){"empty"!==f&&"customized"!==f||(e.hooks.setRunState("customized"),e.hooks.setIsMouseDownInArray(!0),y())},onMouseUp:function(){e.hooks.setIsMouseDownInArray(!1),m(!1)},onMouseEnter:function(){"empty"!==f&&"customized"!==f||e.hooks.isMouseDownInArray&&(e.hooks.setIsMouseDownInArray(!0),y())},onMouseLeave:function(){m(!1),e.hooks.setIsMouseDownInArray(!1)}})},u=a(113),p=a(118),m=a(114),f=a(116),v=a(108),y=a(61),h=a.n(y),g=a(60),x=a.n(g),I=a(59),E=a.n(I),w=a(115),b=a(112),k=a(80),S=a(57),j=a.n(S),O={display:"flex",alignItems:"center",justifyContent:"center"},C={backgroundColor:"rgb(".concat([40,40,40],")"),border:"2px solid rgb(".concat([220,220,220],")"),textAlign:"left",padding:"1em"},A=function(){var e=localStorage.getItem("visited"),t=Object(n.useState)(!e),a=Object(i.a)(t,2),o=a[0],l=a[1],c=function(){l(!1),localStorage.setItem("visited",!0)};return r.a.createElement("div",null,r.a.createElement(v.a,{style:{fontSize:"0.9em",color:"white",margin:0},onClick:function(){l(!0)}},r.a.createElement(j.a,{style:{fontSize:"0.9em"}})),r.a.createElement(w.a,{style:O,open:o,onClose:c,closeAfterTransition:!0,BackdropComponent:b.a,BackdropProps:{timeout:500}},r.a.createElement(k.a,{in:o},r.a.createElement("div",{style:C},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h2",null," Welcome to my Pathfinding Visualizer")),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginLeft:"1em",marginRight:"1em"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("p",{style:{color:"#63C132"}}," Green cell\xa0 "),r.a.createElement("p",null," - start node ")),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("p",{style:{color:"#2d749a"}}," Blue cell\xa0 "),r.a.createElement("p",null," - expanded node "))),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginLeft:"1em",marginRight:"1em"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("p",{style:{color:"#cf2e2e"}}," Red cell\xa0 "),r.a.createElement("p",null," - goal node ")),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("p",{style:{color:"#ffff60"}}," Yellow cell\xa0 "),r.a.createElement("p",null," - shortest path "))),r.a.createElement("p",null," 1. Click inside the grid and hold down your mouse button to draw walls "),r.a.createElement("p",null," 2. Clicking again will allow you to remove walls "),r.a.createElement("p",null," 3. Select algorithm of choice "),r.a.createElement("p",null," 4. Select a different speed if you feel like it "),r.a.createElement("p",null," 5. Hit play :)  "),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(v.a,{style:{color:"rgb(".concat([20,20,20],")"),backgroundColor:"rgb(".concat([220,220,220],")"),fontSize:"0.9em"},onClick:c},"Let me play already"))))))},D=a(58),F=a.n(D),P=a(62),z=a(117),M=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],o=t[1],l=function(){o(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{style:{fontSize:"1em",color:"white",margin:0,marginTop:"6px"},"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},r.a.createElement(F.a,{style:{fontSize:"0.9em"}})),r.a.createElement(P.a,{anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:l},r.a.createElement(f.a,{onClick:l}," ",r.a.createElement(z.a,{target:"_blank",href:"https://martinstiles.github.com/sorting-visualizer",style:{color:"black"}},"Sorting Algorithms")),r.a.createElement(f.a,{onClick:l}," ",r.a.createElement(z.a,{target:"_blank",href:"https://github.com/martinstiles/pathfinding-visualizer",style:{color:"black"}},"Go to repository")),r.a.createElement(f.a,{onClick:l}," ",r.a.createElement(z.a,{target:"_blank",href:"https://martinstiles.github.io/website/",style:{color:"black"}},"Visit my website"))))},T=function(e){var t={backgroundColor:"#FFE19C",minWidth:"12em",textAlign:"left"},a="empty"===e.runState,o="customized"===e.runState,l="running"===e.runState,c="finished"===e.runState,s=Object(n.useState)(""),d=Object(i.a)(s,2),y=d[0],g=d[1],I=Object(n.useState)("medium"),w=Object(i.a)(I,2),b=w[0],k=w[1];return r.a.createElement("div",{style:{marginBottom:"2em",display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement(u.a,{variant:"filled"},r.a.createElement(p.a,null,r.a.createElement("div",{style:{color:"black",fontStyle:"italic"}},"Select algorithm")),r.a.createElement(m.a,{style:t,value:y,onChange:function(t){e.setAlgorithm(t.target.value),g(t.target.value),console.log(t.target.value)},label:"Algorithm",autoWidth:!0},r.a.createElement(f.a,{value:"aStar"},"A*"),r.a.createElement(f.a,{value:"bestFirst"},"Best First"),r.a.createElement(f.a,{value:"breadthFirst"},"Breadth First"),r.a.createElement(f.a,{value:"dijkstra"},"Dijkstra"),r.a.createElement(f.a,{value:"depthFirst"},"Depth First"))),r.a.createElement(u.a,{variant:"filled",style:{marginLeft:"2em"}},r.a.createElement(p.a,null,r.a.createElement("div",{style:{color:"black",fontStyle:"italic"}},"Speed")),r.a.createElement(m.a,{style:t,value:b,onChange:function(t){k(t.target.value),e.setSpeed(t.target.value)},label:"Speed",autoWidth:!0},r.a.createElement(f.a,{value:"slow"},"Slow"),r.a.createElement(f.a,{value:"medium"},"Medium"),r.a.createElement(f.a,{value:"fast"},"Fast"),r.a.createElement(f.a,{value:"instant"},"Instant"))),r.a.createElement(v.a,{style:{marginLeft:"2em",color:"black",backgroundColor:""===y||l||c?"gray":"#63C132"},ariant:"contained",disabled:""===y||l,onClick:function(){e.runAlgorithm(y)}},r.a.createElement(E.a,null)),r.a.createElement(v.a,{style:{marginLeft:"1em",color:"black",backgroundColor:a||l?"gray":"#cf2e2e"},variant:"contained",disabled:a||l,onClick:o?e.resetNodes:e.clearPath},a||o?r.a.createElement(x.a,null):r.a.createElement(h.a,null))),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"2.65em"}},r.a.createElement(A,null),r.a.createElement(M,null)))},B=function(){for(var e=[],t=0;t<11;t++){for(var a=[],n=0;n<21;n++){var r=t,o=n,l="unvisited";5===t&&4===n&&(l="source"),5===t&&16===n&&(l="goal"),a.push({type:l,rowIndex:r,colIndex:o})}e.push(a)}return e},L=a(46),R=function e(){var t=this;Object(L.a)(this,e),this.getFirstElem=function(){return t.array.shift()},this.add=function(e){for(var a=!1,n=0;n<t.array.length;n++)if(e.dist<t.array[n].dist){t.array.splice(n,0,e),a=!0;break}a||t.array.push(e)},this.clear=function(){t.array=[]},this.array=[]},G=function(e,t,a,n,r,o){var l=1,i=1,c=!0;if(0===a)return e.map((function(e){var a=t[e.rowIndex][e.colIndex];a.type=e.type,"shortestPath"!==a.type?n(l++):(r(c),c=!c)})),void o("finished");e.map((function(e){setTimeout((function(){var a=t[e.rowIndex][e.colIndex];a.type=e.type,"shortestPath"!==a.type?n(l++):(r(c),c=!c)}),a*i),i++})),setTimeout((function(){o("finished")}),a*i)},N=function(e,t){var a=[],n=t.rowIndex,r=t.colIndex;if(n>0){var o=e[n-1][r];"unvisited"!==o.type&&"goal"!==o.type||a.push(o)}if(r<20){var l=e[n][r+1];"unvisited"!==l.type&&"goal"!==l.type||a.push(l)}if(n<10){var i=e[n+1][r];"unvisited"!==i.type&&"goal"!==i.type||a.push(i)}if(r>0){var c=e[n][r-1];"unvisited"!==c.type&&"goal"!==c.type||a.push(c)}return a},W=function(e,t){return Math.sqrt(Math.pow(e.rowIndex-t.rowIndex,2)+Math.pow(e.colIndex-t.colIndex,2))},V=function(e){var t=[];return e.map((function(e){var a=[];e.map((function(e){a.push({type:e.type,rowIndex:e.rowIndex,colIndex:e.colIndex})})),t.push(a)})),t},_={slow:200,medium:100,fast:60,instant:0},J=0,q=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),c=Object(i.a)(l,2),s=c[0],u=c[1],p=Object(n.useState)("empty"),m=Object(i.a)(p,2),f=m[0],v=m[1],y=Object(n.useState)(""),h=Object(i.a)(y,2),g=h[0],x=h[1],I=Object(n.useState)("medium"),E=Object(i.a)(I,2),w=E[0],b=E[1],k=Object(n.useState)(!1),S=Object(i.a)(k,2),j=(S[0],S[1]),O=Object(n.useState)(0),C=Object(i.a)(O,2),A=C[0],D=C[1],F={isMouseDownInArray:s,setIsMouseDownInArray:u,runState:f,setRunState:v};Object(n.useEffect)((function(){var e=B();o(e)}),[]);var P=function(e,t){var n=t[0],r=t[1];a[n][r].type=e};return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(T,{runState:f,setAlgorithm:x,runAlgorithm:function(e){v("running");var t=_[w];"dijkstra"===e?function(e,t,a,n,r,o){var l=[],i=V(e),c=new R;i.map((function(e){return e.map((function(e){e.dist=1e4,e.prev=void 0}))}));var s=i[t.rowIndex][t.colIndex];s.dist=0,c.add(s);for(var d=void 0;0!==c.array.length;){var u=c.getFirstElem();"source"!==u.type&&(console.log(c.array),l.push({rowIndex:u.rowIndex,colIndex:u.colIndex,type:"visited"}));for(var p=N(i,u),m=0;m<p.length;m++){var f=p[m];if("goal"===f.type){(d=f).prev=[u.rowIndex,u.colIndex],c.clear();break}f.type="visited",c.add(f);var v=u.dist+W(u,f);v<f.dist&&(f.dist=v,f.prev=[u.rowIndex,u.colIndex])}}if(d)for(var y=i[d.prev[0]][d.prev[1]];y.prev;)y.type="shortestPath",l.push({rowIndex:y.rowIndex,colIndex:y.colIndex,type:"shortestPath"}),y=i[y.prev[0]][y.prev[1]];G(l,e,a,o,n,r);var h=d?"found":"not found";console.log("Dijkstra finished: Goal "+h)}(a,a[5][4],t,j,v,D):"aStar"===e?function(e,t,a,n,r,o,l){console.log("ASTAR STARTED");var i=[],c=V(e),s=new R;c.map((function(e){return e.map((function(e){e.dist=1e4,e.prev=void 0}))}));var d=c[t.rowIndex][t.colIndex];d.dist=0,d.type="source",s.add(d);for(var u=c[a.rowIndex][a.colIndex],p=!1;0!==s.array.length;){var m=s.getFirstElem();"source"!==m.type&&(m.type="visited",i.push({rowIndex:m.rowIndex,colIndex:m.colIndex,type:"visited"}));for(var f=N(c,m),v=0;v<f.length;v++){var y=f[v];if("goal"===y.type){p=!0,u.prev=[m.rowIndex,m.colIndex],s.clear();break}y.type="peeked",y.dist=W(d,y)+W(y,u),y.prev=[m.rowIndex,m.colIndex],s.add(y)}}if(p)for(var h=c[u.prev[0]][u.prev[1]];h.prev;)h.type="shortestPath",i.push({rowIndex:h.rowIndex,colIndex:h.colIndex,type:"shortestPath"}),h=c[h.prev[0]][h.prev[1]];console.log("SPEED: "+n),G(i,e,n,l,r,o);var g=p?"found":"not found";console.log("A* finished: Goal "+g)}(a,a[5][4],a[5][16],t,j,v,D):"depthFirst"===e?function(e,t,a,n,r,o){var l=[],i=V(e),c=new R,s=i[t.rowIndex][t.colIndex];for(s.dist=0,s.type="source",c.add(s);0!==c.array.length;){var d=c.array.pop();if("goal"===d.type)break;"source"!==d.type&&(d.type="visited",l.push({rowIndex:d.rowIndex,colIndex:d.colIndex,type:"visited"}));for(var u=N(i,d),p=0;p<u.length;p++){var m=u[p];c.add(m)}}console.log("SPEED: "+a),G(l,e,a,o,n,r)}(a,a[5][4],t,j,v,D):"breadthFirst"===e?function(e,t,a,n,r,o){var l=[],i=V(e),c=new R;i.map((function(e){return e.map((function(e){e.dist=1e4,e.prev=void 0}))}));var s=i[t.rowIndex][t.colIndex];s.dist=0,c.add(s);for(var d=void 0;0!==c.array.length;){var u=c.getFirstElem();"source"!==u.type&&(console.log(c.array),l.push({rowIndex:u.rowIndex,colIndex:u.colIndex,type:"visited"}));for(var p=N(i,u),m=0;m<p.length;m++){var f=p[m];if("goal"===f.type){(d=f).prev=[u.rowIndex,u.colIndex],c.clear();break}f.type="visited",f.prev=[u.rowIndex,u.colIndex],c.add(f)}}if(d)for(var v=i[d.prev[0]][d.prev[1]];v.prev;)v.type="shortestPath",l.push({rowIndex:v.rowIndex,colIndex:v.colIndex,type:"shortestPath"}),v=i[v.prev[0]][v.prev[1]];G(l,e,a,o,n,r);var y=d?"found":"not found";console.log("Dijkstra finished: Goal "+y)}(a,a[5][4],t,j,v,D):"bestFirst"===e&&function(e,t,a,n,r,o,l){var i=[],c=V(e),s=new R;c.map((function(e){return e.map((function(e){e.dist=1e4,e.prev=void 0}))}));var d=c[t.rowIndex][t.colIndex];d.dist=0,d.type="source",s.add(d);for(var u=c[a.rowIndex][a.colIndex],p=!1;0!==s.array.length;){var m=s.getFirstElem();"source"!==m.type&&(m.type="visited",i.push({rowIndex:m.rowIndex,colIndex:m.colIndex,type:"visited"}));for(var f=N(c,m),v=0;v<f.length;v++){var y=f[v];if("goal"===y.type){p=!0,u.prev=[m.rowIndex,m.colIndex],s.clear();break}y.type="peeked",y.dist=W(y,u),y.prev=[m.rowIndex,m.colIndex],s.add(y)}}if(p)for(var h=c[u.prev[0]][u.prev[1]];h.prev;)h.type="shortestPath",i.push({rowIndex:h.rowIndex,colIndex:h.colIndex,type:"shortestPath"}),h=c[h.prev[0]][h.prev[1]];console.log("SPEED: "+n),G(i,e,n,l,r,o);var g=p?"found":"not found";console.log("A* finished: Goal "+g)}(a,a[5][4],a[5][16],t,j,v,D)},setSpeed:b,resetNodes:function(){var e=B();o(e),v("empty")},clearPath:function(){var e=!1;a.map((function(t){t.map((function(t){"shortestPath"===t.type||"visited"===t.type?t.type="unvisited":"wall"===t.type&&(e=!0)}))})),v(e?"customized":"empty"),console.log("path cleared")}}),a.map((function(e,t){return r.a.createElement("div",{key:t,style:{display:"flex",flexDirection:"row"}},e.map((function(e,a){return r.a.createElement(d,{key:J++,type:e.type,hooks:F,setTypeInNode:P,coordinates:[t,a]})})))})),r.a.createElement("h1",null," Nodes visited: ",A||"--"," "),"depthFirst"===g&&r.a.createElement("p",null," Note: depth first does not find shortest path, it just finds the goal (and might be slightly bugged :D)."))},H=function(){return r.a.createElement(q,null)},U=function(){return r.a.createElement("div",{style:{marginBottom:"2em"}},r.a.createElement("h1",{style:{fontSize:"3.5em",color:"rgb(".concat([250,250,250],")")}}," Pathfinding Visualizer "))};var Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"table",marginLeft:"auto",marginRight:"auto"}},r.a.createElement(U,null),r.a.createElement(H,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a9ae5db1.chunk.js.map
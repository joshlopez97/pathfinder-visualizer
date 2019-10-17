(window["webpackJsonppath-finder"]=window["webpackJsonppath-finder"]||[]).push([[0],{11:function(e,t,n){},16:function(e,t,n){},22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),s=(n(27),n(1)),c=n(2),l=n(5),h=n(3),p=n(9),u=n(4),d=(n(28),n(11),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("td",{id:this.props.row+"-"+this.props.column,className:"space"})}}]),t}(a.Component)),m={navHeight:50,cellSize:5,cellsPerRow:50,nodeSize:4,draw_speed:1500,solve_speed:800,lineClickRadius:4,algorithmLabels:{"Dijkstra's":"dijkstra","A* Search":"astar"},algorithms:{dijkstra:{label:"Dijkstra",name:"dijkstra"},astar:{label:"A* Search",name:"astar"},breadth:{label:"Breadth-First Search",name:"breadth"}},startingAlgorithm:{label:"Dijkstra",name:"dijkstra"}},g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this,t=[],n=0;n<m.cellsPerRow;n++)t.push(n);return r.a.createElement("tr",{id:"row-"+this.props.row,className:"space-row"},t.map((function(t,n){return r.a.createElement(d,{row:e.props.row,column:n,key:n})})))}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={numRows:t.determineRows()},n.setRows=function(){n.setState({numRows:t.determineRows()})},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.setRows)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setRows)}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.numRows;t++)e.push(t);return r.a.createElement("div",{className:"board"},r.a.createElement("table",{className:"spaces-holder"},r.a.createElement("tbody",null,e.map((function(e,t){return r.a.createElement(g,{row:t,key:t})})))))}}],[{key:"determineRows",value:function(){var e=window.innerWidth/m.cellsPerRow;return window.innerHeight/e}}]),t}(a.Component),b=n(8),v=n(7);n(16);function y(){var e=Object(b.a)([""]);return y=function(){return e},e}function O(){var e=Object(b.a)(["\n          0% { opacity: 0 }\n          100% { opacity: 100 }\n        "]);return O=function(){return e},e}function j(){var e=Object(b.a)(["\n        animation: "," 0.5s linear forwards;\n        animation-delay: ","s;\n    "]);return j=function(){return e},e}var _=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.animatedLabel;return r.a.createElement(e,{className:"label ".concat(this.props.class?this.props.class:""),style:this.props.style},r.a.createElement("svg",{className:"caret-holder",height:"5",width:"8"},r.a.createElement("path",{d:"M0 5 L4 0 L8 5"})),r.a.createElement("span",{className:"label-value"},this.props.text))}},{key:"animatedLabel",get:function(){return this.props.delay>0?v.a.div(j(),Object(v.b)(O()),this.props.delay):v.a.div(y())}}]),t}(a.Component);function k(){var e=Object(b.a)(["\n        animation: "," 0.5s linear forwards;\n        animation-delay: ",";\n    "]);return k=function(){return e},e}function w(){var e=Object(b.a)(["\n        0% {\n            opacity: 0\n        }\n        100% {\n            opacity: 100\n        }\n    "]);return w=function(){return e},e}var E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).style=n.props.style||{},n.style.animationDelay="".concat(n.props.delay||0,"s"),n.state={type:n.props.type||"normal"},n.labelClass="","start"!==n.props.type&&"end"!==n.props.type||(n.labelClass=n.props.type),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=v.a.div(k(),(function(){return Object(v.b)(w())}),this.style.animationDelay);return r.a.createElement("div",{className:"node-holder ".concat(this.state.type)},this.props.label?r.a.createElement(_,{class:this.labelClass,type:this.state.type,style:this.props.style,text:this.props.label}):"",r.a.createElement(e,{style:this.props.style,className:"node ".concat(this.state.type)}))}}]),t}(a.Component);function N(){var e=Object(b.a)(["\n        animation: "," ","s linear forwards;\n        animation-delay: ","s;\n    "]);return N=function(){return e},e}function S(){var e=Object(b.a)(["\n        0% { width: 0 }\n        100% { width: 100% }\n    "]);return S=function(){return e},e}var L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).angle=e.properties.angle,n.width=e.properties.width,n.label=t.makeLabel(n.width),n.lineHolderStyle={width:n.width,top:n.props.start.Y-m.navHeight,left:n.props.start.X,transform:"rotate(".concat(n.angle,"deg"),height:2*m.lineClickRadius,margin:"".concat(-1*m.lineClickRadius,"px 0")},n.labelStyle={transform:"rotate(".concat(-1*n.angle,"deg"),top:m.lineClickRadius},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.animatedLine;return r.a.createElement("div",{className:"line-container"},r.a.createElement("div",{style:this.lineHolderStyle,className:"line-holder"+("solve-label"===this.props.type?" label-only":"")},r.a.createElement("div",{style:this.labelStyle,className:"label-holder"},r.a.createElement(_,{text:this.label,delay:"solve"===this.props.type||"solve-label"===this.props.type?this.props.graphRenderTime:0})),r.a.createElement(E,{delay:this.props.delay}),r.a.createElement(E,{delay:this.props.delay+this.props.properties.duration,type:"right"}),r.a.createElement(e,{className:"line"})))}},{key:"animatedLine",get:function(){return v.a.div(N(),(function(){return Object(v.b)(S())}),this.props.properties.duration,this.props.delay)}}],[{key:"makeLabel",value:function(e){var t=2.54*e/96;return"".concat(t>10?Math.round(t):t.toFixed(1)," cm")}}]),t}(a.Component),C=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"coordinates",value:function(){var t=(window.innerHeight-m.navHeight)/(window.innerWidth/m.cellsPerRow),n=e.cell([1,m.cellsPerRow-2],[1,t-2]),a=n.space.getBoundingClientRect().top+window.scrollY;return{X:n.space.getBoundingClientRect().left+window.scrollX,Y:a}}},{key:"choice",value:function(t){return t[e.integer(0,t.length-1)]}},{key:"cell",value:function(t,n){var a=e.integer(n[0],n[1]),r=e.integer(t[0],t[1]),o=a+"-"+r;return{space:document.getElementById(o),row:a,column:r}}},{key:"integer",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}}]),e}(),M=function(){function e(t,n,a){Object(s.a)(this,e),this.saveNodes=function(e,t,n,a,r){e in this._graph.nodes||(this._graph.nodes[e]={position:n,neighbors:{}}),t in this._graph.nodes||(this._graph.nodes[t]={position:a,neighbors:{}}),this._graph.nodes[e].neighbors[t]=r,this._graph.nodes[t].neighbors[e]=r},this._start=t,this._end=n,this._speed=a,this._currentNode=1,this._graph={lines:[],nodes:{},nodeNames:{},start:t,end:n,duration:0},this._line_map={},this._graph.start.name=this.getNodeName(t),this._graph.end.name=this.getNodeName(n)}return Object(c.a)(e,[{key:"makeLine",value:function(e,t,n){var a=this.getNodeName(e),r=this.getNodeName(t);if(!this.lineExists(a,r)){var o=t.X-e.X,i=t.Y-e.Y,s=Math.atan2(i,o)*(180/Math.PI),c=Math.sqrt(Math.pow(o,2)+Math.pow(i,2)),l=c/this._speed;this.saveNodes(a,r,e,t,c),this._graph.duration=Math.max(this._graph.duration,n+l);var h={start:e,end:t,delay:n,properties:{angle:s,width:c,duration:l}};return this._graph.lines.push(h),this._line_map["".concat(a,"-").concat(r)]=h,h}return this._line_map["".concat(a,"-").concat(r)]||this._line_map["".concat(r,"-").concat(a)]}},{key:"getNodeName",value:function(e){return"undefined"===typeof this._graph.nodeNames["".concat(e.X,",").concat(e.Y)]?this._graph.nodeNames["".concat(e.X,",").concat(e.Y)]="N".concat(this._currentNode++):this._graph.nodeNames["".concat(e.X,",").concat(e.Y)]}},{key:"lineExists",value:function(e,t){return!!this._line_map["".concat(e,"-").concat(t)]||!!this._line_map["".concat(t,"-").concat(e)]}},{key:"clone",value:function(){var t=new e(this._start,this._end,this._speed);return t._currentNode=this._currentNode,t._graph=JSON.parse(JSON.stringify(this._graph)),t._line_map=Object.assign({},this._line_map),t}},{key:"graph",get:function(){return this._graph}},{key:"start",get:function(){return this._start}},{key:"end",get:function(){return this._end}}]),e}(),R=function(e){function t(e,n,a){var r;return Object(s.a)(this,t),(r=Object(l.a)(this,Object(h.a)(t).call(this,e,n,m.draw_speed)))._size=a,r.build(),r}return Object(u.a)(t,e),Object(c.a)(t,[{key:"build",value:function(){for(var e=this.randomPath(this._start,this._end),t=Math.floor(this._size/2.5),n=Math.floor(e.length/t),a=0;a<t;a++)e=this.branchFrom(e[C.integer(a*n,(a+1)*n)],e,C.integer(2,4));return console.log(this.graph),this._graph}},{key:"branchFrom",value:function(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3,r=0;r<n;r++)t=t.concat(this.randomPath(e.start,C.choice(t).start,a,e.delay));return t}},{key:"randomPath",value:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=[],o={},i=this.makeLine(e,C.coordinates(),a),s=0;s<n;s++)r.push(i),o=Object.assign({},i),i=this.makeLine(o.end,C.coordinates(),o.delay+o.properties.duration);return i=this.makeLine(o.end,t,o.delay+o.properties.duration),r.push(i),r}}]),t}(M),x=n(10),A=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e.start,e.end,m.solve_speed)))._graph.lines=[],n._random_graph=e,n._delay_map={},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"exploredLine",value:function(e,t){var n=this._delay_map[e]||0,a=this.makeLine(this.random_graph.nodes[e].position,this.random_graph.nodes[t].position,n);this._delay_map[t]=a.delay+a.properties.duration}},{key:"makeSolutionAnimation",value:function(e){for(var t=new M(this.start,this.end,m.draw_speed),n=this.exploration.duration,a={},r=t.makeLine(this.start,this.random_graph.nodes[e[0]].position,n),o=1;o<e.length;o++)a=Object.assign({},r),r=t.makeLine(a.end,this.random_graph.nodes[e[o]].position,a.delay+a.properties.duration);return t}},{key:"applyHeuristic",value:function(e){var t=this;Object.keys(this.random_graph.nodes).map((function(n){var a=t.random_graph.nodes[n];a.heuristic=e(a,t.random_graph)}))}},{key:"random_graph",get:function(){return this._random_graph}},{key:"exploration",get:function(){return this._graph}},{key:"solution",get:function(){return this._solution.graph}}]),t}(M),H=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e)))._solution=n.solve(),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"solve",value:function(){var e=this,t={},n={},a=new x.a([],(function(e,t){return e.value-t.value})),r=this.random_graph.start.name;t[r]=0,n[r]=[],a.push({name:r,value:0}),Object.keys(this.random_graph.nodes).forEach((function(e){e!==r&&(t[e]=1/0,n[e]=[])}));for(var o=function(){var r=a.pop().name;Object.keys(e.random_graph.nodes[r].neighbors).forEach((function(o){var i=t[r]+e.random_graph.nodes[r].neighbors[o];i<t[o]&&(e.exploredLine(r,o),t[o]=i,n[o]=n[r].concat([o]),a.push({name:o,value:t[o]}))}))};a.length>0;)o();var i=n[this.end.name];return this.makeSolutionAnimation(i)}}]),t}(A),P=n(19),T=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"distance",value:function(e,t){return Math.sqrt(Math.pow(e.X-t.X,2)+Math.pow(e.Y-t.Y,2))}},{key:"distanceToGoal",value:function(t,n){return e.distance(t.position,n.end)}}]),e}();function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var X=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e)))._openList=new x.a([],(function(e,t){return e.f-t.f})),n._openMap={},n._closedSet=new Set([]),n._gscore={},n._fscore={},n._solution=n.solve(),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"addToOpenList",value:function(e){console.log("add("+e.name+")"),e.name||(e.name=this.random_graph.getNodeName(e.position)),this._openList.push(e),this._openMap[e.name]=e}},{key:"removeFromOpenList",value:function(e){delete this._openMap[e]}},{key:"getNextNode",value:function(){var e=this._openList.pop();return!e||!e.name||e.name in this._openMap?(console.log("popped "+e),e):(console.log(e.name+" not found in "+JSON.stringify(this._openMap)),this.getNextNode())}},{key:"solve",value:function(){var e=this;this.applyHeuristic(T.distanceToGoal),this.addToOpenList(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(P.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({f:0,g:0},this.start));var t={};for(Object.keys(this.random_graph.nodes).forEach((function(n){t[n]=[],e._gscore[n]=1/0})),this._gscore[this.start.name]=0;Object.keys(this._openMap).length>0;){var n=this.getNextNode();if("undefined"===typeof n){console.log("no more nodes, ending");break}if(n.name===this.end.name){console.log("found end "+this.end.name);break}this._closedSet.add(n.name),this.removeFromOpenList(n.name);for(var a=0,r=Object.keys(this.random_graph.nodes[n.name].neighbors);a<r.length;a++){var o=r[a],i=this.random_graph.nodes[o];i.name=o,i.g=this._gscore[n.name]+this.random_graph.nodes[n.name].neighbors[o],i.f=i.g+i.heuristic,this._closedSet.has(o)||(this.exploredLine(n.name,o),i.g<this._gscore[o]&&(this._gscore[o]=i.g,this._fscore[o]=i.f,t[o]=t[n.name].concat([o]),o in this._openMap||this.addToOpenList(i)))}}var s=t[this.end.name];return this.makeSolutionAnimation(s)}}]),t}(A),Y=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e)))._solution=n.solve(),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"solve",value:function(){var e=this,t={},n=[],a=this.random_graph.start.name;for(t[a]=[],n.push(a);n.length>0;)for(var r=n.length,o=function(a){var r=n.shift();if(console.log(r),r===e.random_graph.end.name)return{v:e.makeSolutionAnimation(t[e.end.name])};var o=e.random_graph.nodes[r].neighbors;Object.keys(o).forEach((function(a){e.exploredLine(r,a),t[a]=t[r].concat([a]),n.push(a)}))},i=0;i<r;i++){var s=o();if("object"===typeof s)return s.v}var c=t[this.end.name];return this.makeSolutionAnimation(c)}}]),t}(A),B=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).appendSolutionToDOM=function(){if(n.random_graph){n.pathfinder=n.algorithm;var e=I.explorationHolder,t=I.solutionHolder,a=I.solutionLabelsHolder;i.a.unmountComponentAtNode(e),i.a.unmountComponentAtNode(t),i.a.unmountComponentAtNode(a),i.a.render(r.a.createElement(I,{graph:n.pathfinder.exploration}),e,(function(){n.setParentRenderState("exploring",n.pathfinder.exploration.duration)})),i.a.render(r.a.createElement(I,{type:"solve-label",graph:n.pathfinder.solution}),a),i.a.render(r.a.createElement(I,{type:"solve",graph:n.pathfinder.solution}),t)}},n.appendGraphToDOM=function(){n.random_graph=new R(C.coordinates(),C.coordinates(),20);var e=I.graphHolder;i.a.unmountComponentAtNode(e),i.a.unmountComponentAtNode(I.explorationHolder),i.a.unmountComponentAtNode(I.solutionHolder),i.a.unmountComponentAtNode(I.solutionLabelsHolder),i.a.render(r.a.createElement(I,{type:"random",graph:n.random_graph.graph}),e,(function(){n.setParentRenderState("graphing",n.random_graph.graph.duration)}))},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"setParentRenderState",value:function(e,t){var n=this;this.props.setRenderState(e),setTimeout((function(){n.props.setRenderState("")}),1e3*t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"graph-buttons"},r.a.createElement("button",{onClick:this.appendSolutionToDOM},"Solve"),r.a.createElement("button",{onClick:this.appendGraphToDOM},"New Graph"))}},{key:"algorithm",get:function(){switch(console.log(this.random_graph.graph),this.props.algorithm){case"dijkstra":return new H(this.random_graph.clone().graph);case"astar":return new X(this.random_graph.clone().graph);case"breadth":return new Y(this.random_graph.clone().graph);default:return null}}}]),t}(a.Component),I=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).delay=n.props.delay||0,n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.type,n=this.props.graph.duration;return r.a.createElement("div",{className:"graph",id:"graph"},"random"===this.props.type?this.startEndNodeLabels:"",this.props.graph.lines.map((function(a,o){return r.a.createElement(L,{start:a.start,end:a.end,delay:e.delay+a.delay,properties:a.properties,graphRenderTime:n,type:t,key:o})})))}},{key:"startEndNodeLabels",get:function(){return r.a.createElement("div",null,r.a.createElement(E,{type:"start",label:"Start",delay:this.props.graph.duration+this.delay,style:{top:this.props.graph.start.Y-m.navHeight,left:this.props.graph.start.X,animationDelay:"".concat(this.delay+this.props.graph.duration,"s")}}),r.a.createElement(E,{type:"end",label:"End",delay:this.props.graph.duration+this.delay,style:{top:this.props.graph.end.Y-m.navHeight,left:this.props.graph.end.X}}))}}],[{key:"graphHolder",get:function(){return document.getElementById("graph-holder")}},{key:"explorationHolder",get:function(){return document.getElementById("exploration-holder")}},{key:"solutionHolder",get:function(){return document.getElementById("solution-holder")}},{key:"solutionLabelsHolder",get:function(){return document.getElementById("solution-labels-holder")}}]),t}(a.Component),z=B,F=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"controls"},r.a.createElement(G,{setAlgorithm:this.props.setAlgorithm,algorithms:m.algorithms}))}}]),t}(a.Component),G=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={choice:m.startingAlgorithm,active:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"showOptions",value:function(){this.setState((function(e){return Object.assign(e,{active:!e.active})}))}},{key:"choose",value:function(e){this.setState({active:!1,choice:e}),this.props.setAlgorithm(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"algorithm-dropdown"},r.a.createElement("div",{onClick:function(){return e.showOptions()},className:"algorithm-chooser button"},r.a.createElement("span",null,this.state.choice.label),r.a.createElement("div",{className:"dropdown-caret-holder"},r.a.createElement("span",{className:"dropdown-caret".concat(this.state.active?" flipped":"")},"\u25bc"))),r.a.createElement("div",{className:"algorithm-options".concat(this.state.active?"":" hidden")},Object.values(this.props.algorithms).map((function(t,n){return r.a.createElement("div",{onClick:function(){return e.choose(t)},className:"algorithm-option button",key:n},t.label)}))))}}]),t}(a.Component),J=F,W=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"icon-holder"},r.a.createElement("svg",{className:"icon ".concat(this.props.renderState),width:"50",height:"50",viewBox:"-5 -5 60 60",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{transform:"rotate(0 24.750003814697266,24.46666717529297) ",d:"m24.58065,17.58091c-3.0637,0 -5.65444,2.00352 -6.54757,4.77002m0,4.22994c0.89364,2.7665 3.48387,4.77054 6.54808,4.77156c3.80157,-0.00102 6.88525,-3.08266 6.88576,-6.88576c-0.00102,-3.80362 -3.0847,-6.88474 -6.88627,-6.88576",className:"inner"},""!==this.props.renderState?r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"180 24.750003814697266,24.46666717529297",to:"540 24.750003814697266,24.46666717529297",dur:"0.5s",repeatCount:"indefinite"}):""),r.a.createElement("path",{stroke:"#e605ff",transform:"rotate(180 24.52094841003418,25.00000381469727) ",d:"m24.1499,9.91326c-6.71258,0 -12.38891,4.38972 -14.34576,10.45114m0,9.26782c1.95797,6.06141 7.63318,10.45227 14.34689,10.45451c8.32926,-0.00224 15.08562,-6.75412 15.08673,-15.08674c-0.00224,-8.33375 -6.7586,-15.0845 -15.08786,-15.08674",className:"middle"},""!==this.props.renderState?r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"180 24.52094841003418,25.00000381469727",to:"-180 24.52094841003418,25.00000381469727",dur:"0.5s",repeatCount:"indefinite"}):""),r.a.createElement("path",{d:"m24.44616,2.48102c-10.01942,0 -18.4921,6.55225 -21.41297,15.59973m0,13.83347c2.92253,9.04747 11.39355,15.60141 21.41465,15.60476c12.43253,-0.00335 22.51731,-10.08143 22.51897,-22.51898c-0.00334,-12.43924 -10.08812,-22.51564 -22.52065,-22.51898",className:"outer"},""!==this.props.renderState?r.a.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 24.99999809265136,24.99999809265137",to:"360 24.99999809265136,24.99999809265137",dur:"0.5s",repeatCount:"indefinite"}):"")))}}]),t}(a.Component),q=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={renderState:"",algorithm:m.startingAlgorithm.name},n.setRenderState=function(e){this.setState((function(t){return Object.assign(t,{renderState:e})}))}.bind(Object(p.a)(n)),n.setAlgorithm=function(e){this.setState((function(t){return Object.assign(t,{algorithm:e.name})}))}.bind(Object(p.a)(n)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"nav-items"},r.a.createElement(z,{algorithm:this.state.algorithm,setRenderState:this.setRenderState}),r.a.createElement(J,{setAlgorithm:this.setAlgorithm})),r.a.createElement(W,{renderState:this.state.renderState})),r.a.createElement("div",{id:"labels"}),r.a.createElement("div",{className:"graph-holder",id:"graph-holder"}),r.a.createElement("div",{className:"graph-holder",id:"exploration-holder"}),r.a.createElement("div",{className:"graph-holder",id:"solution-holder"}),r.a.createElement("div",{className:"graph-holder",id:"solution-labels-holder"}),r.a.createElement(f,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7987db33.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){e.exports=a(373)},164:function(e,t,a){},180:function(e,t){},182:function(e,t){},214:function(e,t){},215:function(e,t){},283:function(e,t){},373:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(156),i=a.n(l),c=(a(164),a(165),a(27)),o=a(28),r=a(31),m=a(29),h=a(30),d=a(64),p=a(17),E=a.n(p),u=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).handleScroll=e.handleScroll.bind(Object(d.a)(e)),e.state={name:"Dongyoon",display:!0},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){window.scrollY>0?this.setState({display:!1}):this.setState({display:!0})}},{key:"render",value:function(){var e=this,t=function(){"Dongyoon"===e.state.name?e.setState({name:"David"}):"David"===e.state.name?e.setState({name:"\u6771\u6f64"}):e.setState({name:"Dongyoon"})};return s.a.createElement("div",null,s.a.createElement(E.a,{minWidth:1400},s.a.createElement("div",{className:"roboto-400 f72 white"},s.a.createElement("div",{className:"frame roboto-400 mt3 pt1 mb4 ml4"},s.a.createElement("p",{className:"",onMouseEnter:t},this.state.name," ",s.a.createElement("span",{className:"roboto-700"},"Koh"))),s.a.createElement("div",{className:"pt5 mt3 line-height ml4"},s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:"https://dvkoh.github.io/archive/",className:this.state.display?"transition":"transition invisible"},"Archive \u2197"),s.a.createElement("br",null),s.a.createElement("a",{target:"_blank",href:"https://dvkoh.github.io/portfolio/",className:this.state.display?"transition":"transition invisible"},"Portfolio \u2197")),s.a.createElement("br",null)),s.a.createElement("div",{className:"headwidth"},s.a.createElement("p",{className:"f0 tc"},"* books books books *")))),s.a.createElement(E.a,{maxWidth:1400},s.a.createElement(E.a,{minDeviceWidth:1224},s.a.createElement("div",{className:"roboto-400 white"},s.a.createElement("div",{className:"frame f72 mt3 pt1 mb4 ml4"},s.a.createElement("p",{className:"",onMouseEnter:t},this.state.name," ",s.a.createElement("span",{className:"roboto-700"},"Koh"))),s.a.createElement("div",{className:"pt5 f72 mt3 line-height ml4"},s.a.createElement("p",null,s.a.createElement("a",{target:"_blank",href:"https://dvkoh.github.io/archive/",className:this.state.display?"transition":"transition invisible"},"Archive \u2197"),s.a.createElement("br",null),s.a.createElement("a",{target:"_blank",href:"https://dvkoh.github.io/portfolio/",className:this.state.display?"transition":"transition invisible"},"Portfolio \u2197")),s.a.createElement("br",null)),s.a.createElement("div",{className:"headwidth-s f0 tc"},s.a.createElement("p",{className:""},"* books",s.a.createElement("span",{className:"invisible"},"*\xa0")),s.a.createElement("p",{className:""},s.a.createElement("span",{className:"invisible"},"*\xa0"),"books",s.a.createElement("span",{className:"invisible"},"*\xa0")),s.a.createElement("p",{className:""},s.a.createElement("span",{className:"invisible"},"*\xa0"),"books *")))),s.a.createElement(E.a,{maxDeviceWidth:1224},s.a.createElement("div",{className:"roboto-400 f72 white"},s.a.createElement("div",{className:"frame roboto-400 mt3 mb4 ml4 line-height "},s.a.createElement("p",{className:""},this.state.name," ",s.a.createElement("span",{className:"roboto-700"},"Koh"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("a",{target:"_blank",href:"https://dvkoh.github.io/archive/",className:this.state.display?"transition":"transition invisible"},"Archive \u2197"),s.a.createElement("br",null),s.a.createElement("a",{target:"_blank",href:"https://dvkoh.github.io/portfolio/",className:this.state.display?"transition":"transition invisible"},"Portfolio \u2197")),s.a.createElement("br",null)),s.a.createElement("div",{className:"headwidth-m"},s.a.createElement("p",{className:"f0 tc"},"* books",s.a.createElement("span",{className:"invisible"},"*\xa0")),s.a.createElement("p",{className:"f0 tc"},s.a.createElement("span",{className:"invisible"},"*\xa0"),"books",s.a.createElement("span",{className:"invisible"},"*\xa0")),s.a.createElement("p",{className:"f0 tc"},s.a.createElement("span",{className:"invisible"},"*\xa0"),"books *"))))))}}]),t}(s.a.Component),v=a(157),b=a.n(v),N=a(158),f=a.n(N),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={toggle:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=function(){!1===e.state.toggle&&e.setState({toggle:!0})},a=function(){!0===e.state.toggle&&e.setState({toggle:!1})},n=[this.props.Code,this.props.Date,this.props.Title,this.props.Author,this.props.Content,this.props.Img,this.props.Percent];return s.a.createElement("div",null,s.a.createElement(E.a,{minWidth:1400},s.a.createElement("div",{id:"".concat(n[0]),className:"width",onMouseOver:t,onMouseLeave:a},s.a.createElement("div",{className:"white roboto-400 f7 line-height-1 mr5 absolute right"},s.a.createElement("p",{className:this.state.toggle?"":"invisible"},f()("".concat(n[4])))),s.a.createElement("div",{className:this.state.toggle?"dim":""},s.a.createElement("div",{className:"white arial f7 tl absolute ml6 pl5 mt3 line-height-1"},s.a.createElement("p",{className:"f7"},s.a.createElement("span",{className:"bg-black"},"".concat(n[1]),"\xa0"),"\xa0\xa0\xa0",s.a.createElement("span",{className:"white-30"},"  "))),s.a.createElement("p",{className:"arial f4 pt1 pl4 absolute behind white-80 tc pl3"},"".concat(n[2]),", ",s.a.createElement("span",{className:"i"},"".concat(n[3]))),s.a.createElement("div",{className:"tc ml4"},s.a.createElement("img",{src:"".concat(n[5]),alt:""}))))),s.a.createElement(E.a,{maxWidth:1400},s.a.createElement(E.a,{minDeviceWidth:1224},s.a.createElement("div",{id:"".concat(n[0]),className:"width"},s.a.createElement("div",{className:this.state.toggle?"dim":""},s.a.createElement("p",{className:"arial f4 pt3 absolute behind white-80 tc line-height-0"},"".concat(n[2]),", ",s.a.createElement("span",{className:"i"},"".concat(n[3]))),s.a.createElement("div",{className:"tc",onMouseOver:t,onMouseLeave:a},s.a.createElement("img",{src:"".concat(n[5]),alt:""}))))),s.a.createElement(E.a,{maxDeviceWidth:1224},s.a.createElement(E.a,{orientation:"portrait"},s.a.createElement("div",{id:"".concat(n[0]),className:"width-m"},s.a.createElement("div",{className:this.state.toggle?"dim":""},s.a.createElement("p",{className:"arial f8 pt11 absolute behind white-80 tc line-height-0"},"".concat(n[2]),", ",s.a.createElement("span",{className:"i"},"".concat(n[3]))),s.a.createElement("div",{className:"tc",onMouseOver:t,onMouseLeave:a},s.a.createElement("img",{src:"".concat(n[5]),alt:"",className:"small"}))))),s.a.createElement(E.a,{orientation:"landscape"},s.a.createElement("div",{id:"".concat(n[0]),className:"width"},s.a.createElement("div",{className:this.state.toggle?"dim":""},s.a.createElement("p",{className:"arial f6 pt3 absolute behind white-80 tc line-height-5"},"".concat(n[2]),", ",s.a.createElement("span",{className:"i"},"".concat(n[3]))),s.a.createElement("div",{className:"width-landscape",onMouseOver:t,onMouseLeave:a},s.a.createElement("img",{src:"".concat(n[5]),alt:""}))))))))}}]),t}(s.a.Component),k=function(e){function t(e){var a;e.DBase;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this))).state={},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.DBase.map(function(t,a){return s.a.createElement("div",null,s.a.createElement(g,{key:a,Num:a,Code:e.props.DBase[a].Code,Date:e.props.DBase[a].Date,Title:e.props.DBase[a].Title,Author:e.props.DBase[a].Author,Content:e.props.DBase[a].Content,Img:e.props.DBase[a].Img,Percent:e.props.DBase[a].Percent}))});return s.a.createElement("div",{class:"flex flex-column bookstart"},t)}}]),t}(s.a.Component),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={data:[]},e}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.handleScroll),b.a.init({key:"18nn5hacJIhB6qIfMy6T8bD5vCpltz08b4jdjNL2OxYc",callback:function(t){e.setState({data:t})},simpleSheet:!0})}},{key:"render",value:function(){var e=this.state.data;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"absolute"},s.a.createElement(k,{DBase:e})),s.a.createElement(u,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[159,1,2]]]);
//# sourceMappingURL=main.cdea56aa.chunk.js.map
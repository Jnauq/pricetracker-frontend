(this["webpackJsonppricetracker-frontend"]=this["webpackJsonppricetracker-frontend"]||[]).push([[0],{18:function(e,t,a){e.exports=a(41)},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),l=a(3),c=a(4),d=a(6),s=a(5),m=a(17),p=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleUrlChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.handleAdd(e.state.newUrl),e.setState({newUrl:""})},e.state={newUrl:""},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"newItemWrapper"},r.a.createElement("form",{className:"newForm",style:u,onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"newUrl",style:h,value:this.state.newUrl,placeholder:"Insert amazon product url...",onChange:this.handleUrlChange}),r.a.createElement("button",{type:"submit",style:g},"Submit")))}}]),a}(n.Component),u={display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px",width:"100%"},h={fontSize:"inherit",height:"3em",width:"75%",paddingLeft:"1em"},g={fontSize:"inherit",height:"3em",backgroundColor:"#ccc",color:"#555",border:"3px solid #999",borderRadius:"5px",paddingLeft:"1em",paddingRight:"1em"},f=p,v={padding:"0.75em",backgroundColor:"#fff"},b={display:"flex",alignItems:"center",justifyContent:"center"},E={width:"100%",minHeight:"100px",maxHeight:"200px",objectFit:"contain"},y={flex:"0 30%",margin:"1em"},w={flex:"1",paddingTop:"1em",paddingBottom:"1em"},k={marginTop:"3vh",fontSize:"4vh",color:"#555"},S={height:"2.5em",paddingLeft:"0.85em",paddingRight:"1em",backgroundColor:"#d55",color:"#eee",border:"none",borderRadius:"3px",position:"relative",top:"0",float:"right"},x=function(e){return r.a.createElement("li",{className:"product",style:v},r.a.createElement("button",{id:"li-removeBtn",style:S,onClick:function(){return e.handleRemove(e.data.id)}},r.a.createElement("em",null,r.a.createElement("strong",null,"X"))),r.a.createElement("div",{className:"li-container",style:b},r.a.createElement("div",{className:"li-left",style:y},r.a.createElement("img",{src:e.data.imgUrl,style:E,alt:e.data.id})),r.a.createElement("div",{className:"li-right",style:w},r.a.createElement("h3",{className:"li-head"},e.data.prodName),r.a.createElement("h4",{className:"li-price",style:k},"null"===e.data.price?"":e.data.price),r.a.createElement("p",{className:"li-sub"},e.data.stock),r.a.createElement("a",{className:"li-sub",href:e.data.prodUrl},e.data.prodUrl))))},U={display:"flex",justifyContent:"center",marginTop:"2em",marginLeft:"calc(100vw*0.1)",marginRight:"calc(100vw*0.1)"},N={width:"100vw",listStyleType:"none"},C={height:"3em",marginTop:"2em",marginLeft:"calc(100vw*0.5 - 4em)",paddingLeft:"1em",paddingRight:"1em",backgroundColor:"#ccc",color:"#555",border:"3px solid #999",borderRadius:"3px"},j=function(e){return r.a.createElement("div",null,r.a.createElement("button",{style:C,onClick:e.handleUpdate},"Update List"),r.a.createElement("div",{className:"productwrapper",style:U},r.a.createElement("ul",{className:"listwrapper",style:N},e.products.length?e.products.map((function(t){return r.a.createElement(x,{key:t.id,data:t,handleRemove:e.handleRemove})})):null,e.errorMsg?r.a.createElement("div",null,e.errorMsg):null)))},R=a(2),M=a.n(R),O=(a(40),function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleUpdate=function(){M.a.get("https://amazon-api-082020.herokuapp.com/api/update").then((function(t){e.setState({products:t.data})})).catch((function(t){e.setState({errorMsg:"Error retrieving data"})}))},e.handleRemove=function(t){M.a.delete("https://amazon-api-082020.herokuapp.com/api/remove/".concat(t)).then((function(t){e.setState({products:t.data})})).catch((function(t){e.setState({errorMsg:"Error removing item"})}))},e.handleAdd=function(t){M.a.post("https://amazon-api-082020.herokuapp.com/api/addNew",{prodUrl:"".concat(t)}).then((function(t){e.setState({products:t.data})})).catch((function(t){e.setState({errorMsg:"Error adding data"})}))},e.state={products:[],errorMsg:""},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;M.a.get("https://amazon-api-082020.herokuapp.com/api/products").then((function(t){e.setState({products:t.data})})).catch((function(t){e.setState({errorMsg:"Error retrieving data"})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(f,{handleAdd:this.handleAdd}),r.a.createElement(j,{products:this.state.products,error:this.state.errorMsg,handleRemove:this.handleRemove,handleUpdate:this.handleUpdate}))}}]),a}(n.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.b5653b9b.chunk.js.map
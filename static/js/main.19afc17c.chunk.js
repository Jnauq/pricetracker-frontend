(this["webpackJsonppricetracker-frontend"]=this["webpackJsonppricetracker-frontend"]||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),o=a.n(i),l=a(18),s=a(3),c=a(4),d=a(6),p=a(5),u=a(17),m=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleUrlChange=function(t){e.setState(Object(u.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.handleAdd(e.state.newUrl),e.setState({newUrl:""})},e.state={newUrl:""},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"newItemWrapper"},r.a.createElement("form",{className:"newForm",style:h,onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"newUrl",style:g,value:this.state.newUrl,placeholder:"Insert amazon product url...",onChange:this.handleUrlChange}),this.props.isBusy?null:r.a.createElement("button",{type:"submit",style:f},"Add To List")))}}]),a}(n.Component),h={display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px",width:"100%"},g={fontSize:"inherit",height:"3em",width:"75%",paddingLeft:"1em"},f={fontSize:"inherit",height:"3em",backgroundColor:"#82aa9f",color:"#eee",border:"3px solid #82ac9f",borderRadius:"5px",paddingLeft:"1em",paddingRight:"1em"},b=m,v={padding:"0.75em",backgroundColor:"#fff"},y={display:"flex",alignItems:"center",justifyContent:"center"},E={width:"100%",minHeight:"100px",maxHeight:"200px",objectFit:"contain"},x={flex:"0 30%",margin:"1em"},w={flex:"1",paddingTop:"1em",paddingBottom:"1em"},R={marginTop:"3vh",fontSize:"4vh",color:"#555"},k={height:"2.5em",paddingLeft:"0.85em",paddingRight:"1em",backgroundColor:"#d55",color:"#eee",border:"none",borderRadius:"3px",position:"relative",top:"0",float:"right"},S=function(e){return r.a.createElement("li",{className:"product",style:v},r.a.createElement("button",{id:"li-removeBtn",style:k,onClick:function(){return e.handleRemove(e.data.id)}},r.a.createElement("em",null,r.a.createElement("strong",null,"X"))),r.a.createElement("div",{className:"li-container",style:y},r.a.createElement("div",{className:"li-left",style:x},r.a.createElement("img",{src:e.data.imgUrl,style:E,alt:e.data.id})),r.a.createElement("div",{className:"li-right",style:w},r.a.createElement("h3",{className:"li-head"},e.data.prodName),r.a.createElement("h4",{className:"li-price",style:R},"null"===e.data.price?"":e.data.price),r.a.createElement("p",{className:"li-sub"},e.data.stock),r.a.createElement("a",{className:"li-sub",href:e.data.prodUrl},e.data.prodUrl))))},N={color:"#82ac9f",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",height:"100px",width:"100px",position:"relative",transform:"scale(1)"},C={backgroundColor:"#ccc",height:"120px",width:"120px",borderRadius:"50%",position:"absolute",top:"-10px",left:"-10px",zIndex:"-3"},j={width:"0px",height:"0px",borderRight:"60px solid transparent",borderTop:"60px solid #82ac9f",borderLeft:"60px solid #82ac9f",borderBottom:"60px solid #82ac9f",borderTopLeftRadius:"60px",borderTopRightRadius:"60px",borderBottomLeftRadius:"60px",borderBottomRightRadius:"60px",left:"-10px",zIndex:"-2",position:"absolute",animation:"rotate 2s linear forwards infinite"},U={backgroundColor:"#eee",height:"100%",width:"100%",borderRadius:"50%",position:"absolute",top:"0",left:"0",zIndex:"-1"},L=function(){return r.a.createElement("div",{className:"spinner-container",style:N},r.a.createElement("div",{className:"inner-circle",style:U}),r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"pie-container",style:j}),r.a.createElement("div",{className:"outer-circle",style:C}))},z={display:"flex",justifyContent:"center",marginTop:"2em",marginLeft:"calc(100vw*0.1)",marginRight:"calc(100vw*0.1)"},B={width:"100vw",listStyleType:"none"},I={height:"3em",marginTop:"2em",marginLeft:"calc(100vw*0.5 - 4em)",paddingLeft:"1em",paddingRight:"1em",backgroundColor:"#af799f",color:"#eee",border:"3px solid #af67af",borderRadius:"3px"},M=function(e){return r.a.createElement("div",null,e.isBusy?r.a.createElement(L,null):r.a.createElement("button",{style:I,onClick:e.handleUpdate},"Fetch Latest Product Info"),r.a.createElement("div",{className:"productwrapper",style:z},r.a.createElement("ul",{className:"listwrapper",style:B},e.products.length?e.products.map((function(t){return r.a.createElement(S,{key:t.id,data:t,handleRemove:e.handleRemove})})):null,e.errorMsg?r.a.createElement("div",null,e.errorMsg):null)))},O=a(2),T=a.n(O),q=(a(41),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleUpdate=function(){e.setState({requesting:!0}),T.a.get("https://amazon-api-82020.herokuapp.com/api/update").then((function(t){e.setState({products:t.data,requesting:!1})})).catch((function(t){e.setState({errorMsg:"Error retrieving data"})}))},e.handleRemove=function(t){e.setState({products:Object(l.a)(e.state.products.filter((function(e){return e.id!==t})))}),T.a.delete("https://amazon-api-82020.herokuapp.com/api/remove/".concat(t)).then((function(t){e.setState({products:t.data})})).catch((function(t){e.setState({errorMsg:"Error removing item"})}))},e.handleAdd=function(t){e.setState({requesting:!0}),T.a.post("https://amazon-api-82020.herokuapp.com/api/addNew",{prodUrl:"".concat(t)}).then((function(t){e.setState({products:t.data,requesting:!1})})).catch((function(t){e.setState({errorMsg:"Error adding data"})}))},e.state={products:[],errorMsg:"",requesting:!0},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.a.get("https://amazon-api-82020.herokuapp.com/api/products").then((function(t){e.setState({products:t.data,requesting:!1})})).catch((function(t){e.setState({errorMsg:"Error retrieving data"})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(b,{isBusy:this.state.requesting,handleAdd:this.handleAdd}),r.a.createElement(M,{products:this.state.products,error:this.state.errorMsg,isBusy:this.state.requesting,handleRemove:this.handleRemove,handleUpdate:this.handleUpdate}))}}]),a}(n.Component));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.19afc17c.chunk.js.map
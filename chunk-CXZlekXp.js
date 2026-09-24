import{$ as C_,$t as Uf,An as kT,At as MM,Bt as Py,Cn as iD,En as ie,Et as L_,Gt as S_,J as A2,K as $b,Kt as Sc,Ln as nM,Lt as Ou,M as is,On as jy,Ot as M,Pt as ON,Qn as vc,R as ri,Rn as na,St as Km,Vn as q,Y as A_,Yt as Sy,Zn as v,Zt as Ty,ar as ye,bn as g,en as Ui,gt as Ir,ht as I_,in as Vb,ir as yc,it as Dg,k as br,kt as M2,lt as En,mn as b_,nr as xf,nt as Dc,on as Vi,or as yg,ot as E,rn as V_,rt as De,st as EM,ur as zy,ut as Fg,vn as fM,vt as JS,wn as iN,xt as Ka,y as Pt,yt as Jt}from"./main-GFAIUKRD.js";import{a as Ri,d as vi,f as vn,l as gi,m as zn,o as Zn,r as Ni,t as An,u as ut}from"./chunk-BUK5qR81.js";var W=(()=>{class t extends Ri{required=Sc(void 0,{transform:Vi});invalid=Sc(void 0,{transform:Vi});disabled=Sc(void 0,{transform:Vi});name=Sc();_disabled=ie(!1);$disabled=Ui(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static ɵfac=(()=>{let e;return function(o){return(e||(e=Km(t)))(o||t)}})();static ɵdir=Jt({type:t,inputs:{required:[1,`required`],invalid:[1,`invalid`],disabled:[1,`disabled`],name:[1,`name`]},features:[Sy]})}return t})();var Ce=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-size: dt('togglebutton.font.size');
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }

    .p-togglebutton-content .p-icon,
    .p-togglebutton-content .pi {
        line-height: dt('typography.line.height')
    }
`;var Le=[`icon`];var Ie=[`content`];function Be(t,a){t&1&&jy(0)}function Oe(t,a){if(t&1&&yc(0,`span`,0),t&2){let e=L_(3);nM(e.iconClass()),Py(`pBind`,e.ptm(`icon`))}}function Se(t,a){if(t&1&&I_(0,Oe,1,3,`span`,2),t&2)C_(L_(2).hasIcon()?0:-1)}function Fe(t,a){t&1&&jy(0)}function Ve(t,a){if(t&1&&Ty(0,Fe,1,0,`ng-container`,1),t&2){let e=L_(2);Py(`ngTemplateOutlet`,e.iconTemplate())(`ngTemplateOutletContext`,e.getTemplateContext())}}function je(t,a){if(t&1&&(Ka(0,`span`,0),fM(1),Uf()),t&2){let e=L_(2);nM(e.cx(`label`)),Py(`pBind`,e.ptm(`label`)),JS(),iD(e.labelText())}}function Ae(t,a){if(t&1&&(I_(0,Se,1,1)(1,Ve,1,2,`ng-container`),I_(2,je,2,4,`span`,2)),t&2){let e=L_();C_(e.iconTemplate()?1:0),JS(2),C_(e.hasLabel()?2:-1)}}var $e=`
    ${Ce}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }
`;var Re={root:({instance:t})=>[`p-togglebutton p-component`,{"p-togglebutton-checked":t.checked(),"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size()===`small`,"p-togglebutton-lg p-inputfield-lg":t.size()===`large`,"p-togglebutton-fluid":t.fluid()}],content:`p-togglebutton-content`,icon:`p-togglebutton-icon`,iconLeft:`p-togglebutton-icon-left`,iconRight:`p-togglebutton-icon-right`,label:`p-togglebutton-label`};var Me=(()=>{class t extends ri{name=`togglebutton`;style=$e;classes=Re;static ɵfac=(()=>{let e;return function(o){return(e||(e=Km(t)))(o||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var _e=new E(`TOGGLEBUTTON_INSTANCE`);var qe={provide:ut,useExisting:na(()=>ee),multi:!0};var ee=(()=>{class t extends W{componentName=`ToggleButton`;$pcToggleButton=g(_e,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(gi,{self:!0});_componentStyle=g(Me);onLabel=Sc(`Yes`);offLabel=Sc(`No`);onIcon=Sc();offIcon=Sc();ariaLabel=Sc();ariaLabelledBy=Sc();inputId=Sc();tabindex=Sc(0,{transform:iN});iconPos=Sc(`left`);autofocus=Sc(!1,{transform:Vi});size=Sc();allowEmpty=Sc();fluid=Sc(void 0,{transform:Vi});onChange=M2();iconTemplate=A2(`icon`,{descendants:!1});contentTemplate=A2(`content`,{descendants:!1});checked=ie(!1);hasOnLabel=Ui(()=>!!(this.onLabel()&&this.onLabel().length>0));hasOffLabel=Ui(()=>!!(this.offLabel()&&this.offLabel().length>0));hasIcon=Ui(()=>!!(this.onIcon()||this.offIcon()));hasLabel=Ui(()=>this.checked()?this.hasOnLabel():this.hasOffLabel());active=Ui(()=>this.checked()===!0);dataP=Ui(()=>this.cn({checked:this.active(),invalid:this.invalid(),[this.size()]:this.size()}));$tabindex=Ui(()=>this.$disabled()?-1:this.tabindex()??0);iconClass=Ui(()=>this.cn(this.cx(`icon`),this.checked()?this.onIcon():this.offIcon(),this.iconPos()===`left`?this.cx(`iconLeft`):this.cx(`iconRight`)));labelText=Ui(()=>this.checked()?this.onLabel():this.offLabel());ariaPressed=Ui(()=>this.checked()?`true`:`false`);getTemplateContext(){return{$implicit:this.checked()}}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}onKeyDown(e){switch(e.code){case`Enter`:this.toggle(e),e.preventDefault();break;case`Space`:this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty()===!1&&this.checked())&&(this.checked.set(!this.checked()),this.writeModelValue(this.checked()),this.onModelChange(this.checked()),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked()}))}onInit(){(this.checked()===null||this.checked()===void 0)&&this.checked.set(!1)}onBlur(){this.onModelTouched()}writeControlValue(e,n){this.checked.set(e),n(e)}static ɵfac=(()=>{let e;return function(o){return(e||(e=Km(t)))(o||t)}})();static ɵcmp=xf({type:t,selectors:[[`p-togglebutton`],[`p-toggle-button`]],contentQueries:function(n,o,i){n&1&&zy(i,o.iconTemplate,Le,4)(i,o.contentTemplate,Ie,4),n&2&&V_(2)},hostVars:11,hostBindings:function(n,o){n&1&&Dc(`keydown`,function(d){return o.onKeyDown(d)})(`click`,function(d){return o.toggle(d)}),n&2&&(vc(`aria-labelledby`,o.ariaLabelledBy())(`aria-label`,o.ariaLabel())(`aria-pressed`,o.ariaPressed())(`role`,`button`)(`tabindex`,o.$tabindex())(`data-pc-name`,`togglebutton`)(`data-p-checked`,o.active())(`data-p-disabled`,o.$disabled())(`data-p`,o.dataP()),nM(o.cx(`root`)))},inputs:{onLabel:[1,`onLabel`],offLabel:[1,`offLabel`],onIcon:[1,`onIcon`],offIcon:[1,`offIcon`],ariaLabel:[1,`ariaLabel`],ariaLabelledBy:[1,`ariaLabelledBy`],inputId:[1,`inputId`],tabindex:[1,`tabindex`],iconPos:[1,`iconPos`],autofocus:[1,`autofocus`],size:[1,`size`],allowEmpty:[1,`allowEmpty`],fluid:[1,`fluid`]},outputs:{onChange:`onChange`},features:[EM([qe,Me,{provide:_e,useExisting:t},{provide:An,useExisting:t}]),kT([Ni,gi]),Sy],decls:3,vars:7,consts:[[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[3,`class`,`pBind`]],template:function(n,o){n&1&&(Ka(0,`span`,0),Ty(1,Be,1,0,`ng-container`,1),I_(2,Ae,3,2),Uf()),n&2&&(nM(o.cx(`content`)),Py(`pBind`,o.ptm(`content`)),vc(`data-p`,o.dataP()),JS(),Py(`ngTemplateOutlet`,o.contentTemplate())(`ngTemplateOutletContext`,o.getTemplateContext()),JS(),C_(o.contentTemplate()?-1:2))},dependencies:[ON,is,vi,gi],encapsulation:2})}return t})();var Te=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var ze=[`item`];function Pe(t,a){return this.getOptionLabel(a)}function Ue(t,a){t&1&&jy(0)}function He(t,a){if(t&1&&Ty(0,Ue,1,0,`ng-container`,3),t&2){let e=L_(2),n=e.$implicit,o=e.$index,i=L_();Py(`ngTemplateOutlet`,i.itemTemplate())(`ngTemplateOutletContext`,i.getItemContext(n,o))}}function Ke(t,a){t&1&&Ty(0,He,1,2,`ng-template`,null,0,MM)}function Ge(t,a){if(t&1){let e=A_();Ka(0,`p-togglebutton`,2),Dc(`onChange`,function(o){let i=yg(e),d=i.$implicit,p=i.$index;return Dg(L_().onOptionSelect(o,d,p))}),I_(1,Ke,2,0),Uf(),Vb()}if(t&2){let e=a.$implicit,n=L_();nM(n.styleClass()),Py(`autofocus`,n.autofocus())(`ngModel`,n.isSelected(e))(`onLabel`,n.getOptionLabel(e))(`offLabel`,n.getOptionLabel(e))(`ariaLabel`,n.getOptionLabel(e))(`disabled`,n.isButtonDisabled(e))(`allowEmpty`,n.getAllowEmpty())(`size`,n.size())(`fluid`,n.fluid())(`pt`,n.ptm(`pcToggleButton`))(`unstyled`,n.unstyled()),$b(),JS(),C_(n.itemTemplate()?1:-1)}}var Qe={root:({instance:t})=>[`p-selectbutton p-component`,{"p-invalid":t.invalid(),"p-selectbutton-fluid":t.fluid()}]};var Ne=(()=>{class t extends ri{name=`selectbutton`;style=Te;classes=Qe;static ɵfac=(()=>{let e;return function(o){return(e||(e=Km(t)))(o||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var ke=new E(`SELECTBUTTON_INSTANCE`);var We={provide:ut,useExisting:na(()=>we),multi:!0};var we=(()=>{class t extends W{componentName=`SelectButton`;options=Sc();optionLabel=Sc();optionValue=Sc();optionDisabled=Sc();unselectable=Sc(!1,{transform:Vi});tabindex=Sc(0,{transform:iN});multiple=Sc(!1,{transform:Vi});allowEmpty=Sc(!0,{transform:Vi});styleClass=Sc();ariaLabelledBy=Sc();dataKey=Sc();autofocus=Sc(!1,{transform:Vi});size=Sc();fluid=Sc(!1,{transform:Vi});onOptionClick=M2();onChange=M2();itemTemplate=A2(`item`,{descendants:!1});equalityKey=Ui(()=>this.optionValue()?null:this.dataKey());$allowEmpty=Ui(()=>this.unselectable()?!1:this.allowEmpty());dataP=Ui(()=>this.cn({invalid:this.invalid()}));value=ie(null);focusedIndex=ie(0);_componentStyle=g(Ne);$pcSelectButton=g(ke,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=g(gi,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}getAllowEmpty(){return this.multiple()?this.$allowEmpty()||this.value()?.length!==1:this.$allowEmpty()}getOptionLabel(e){let n=this.optionLabel();return n?Pt(e,n):e.label!=null?e.label:e}getOptionValue(e){let n=this.optionValue(),o=this.optionLabel();return n?Pt(e,n):o||e.value===void 0?e:e.value}isOptionDisabled(e){let n=this.optionDisabled();return n?Pt(e,n):e.disabled!==void 0?e.disabled:!1}isButtonDisabled(e){return this.$disabled()||this.isOptionDisabled(e)}getItemContext(e,n){return{$implicit:e,index:n}}onOptionSelect(e,n,o){if(this.$disabled()||this.isOptionDisabled(n))return;let i=this.isSelected(n);if(i&&this.unselectable())return;let d=this.getOptionValue(n),p;if(this.multiple())i?p=this.value().filter(u=>!br(u,d,this.equalityKey()||void 0)):p=this.value()?[...this.value(),d]:[d];else{if(i&&!this.$allowEmpty())return;p=i?null:d}this.focusedIndex.set(o),this.value.set(p),this.writeModelValue(this.value()),this.onModelChange(this.value()),this.onChange.emit({originalEvent:e.originalEvent,value:this.value()}),this.onOptionClick.emit({originalEvent:e.originalEvent,option:n,index:o})}changeTabIndexes(e,n){let o,i;for(let d=0;d<=this.el.nativeElement.children.length-1;d++)this.el.nativeElement.children[d].getAttribute(`tabindex`)===`0`&&(o={elem:this.el.nativeElement.children[d],index:d});o&&(n===`prev`?o.index===0?i=this.el.nativeElement.children.length-1:i=o.index-1:o.index===this.el.nativeElement.children.length-1?i=0:i=o.index+1,this.focusedIndex.set(i),this.el.nativeElement.children[i].focus())}onFocus(e,n){this.focusedIndex.set(n)}onBlur(){this.onModelTouched()}removeOption(e){this.value.set(this.value().filter(n=>!br(n,this.getOptionValue(e),this.dataKey())))}isSelected(e){let n=!1,o=this.getOptionValue(e);if(this.multiple()){if(this.value()&&Array.isArray(this.value())){for(let i of this.value())if(br(i,o,this.dataKey())){n=!0;break}}}else n=br(this.getOptionValue(e),this.value(),this.equalityKey()||void 0);return n}writeControlValue(e,n){this.value.set(e),n(this.value())}static ɵfac=(()=>{let e;return function(o){return(e||(e=Km(t)))(o||t)}})();static ɵcmp=xf({type:t,selectors:[[`p-selectbutton`],[`p-select-button`]],contentQueries:function(n,o,i){n&1&&zy(i,o.itemTemplate,ze,4),n&2&&V_()},hostVars:5,hostBindings:function(n,o){n&2&&(vc(`role`,`group`)(`aria-labelledby`,o.ariaLabelledBy())(`data-p`,o.dataP()),nM(o.cx(`root`)))},inputs:{options:[1,`options`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],unselectable:[1,`unselectable`],tabindex:[1,`tabindex`],multiple:[1,`multiple`],allowEmpty:[1,`allowEmpty`],styleClass:[1,`styleClass`],ariaLabelledBy:[1,`ariaLabelledBy`],dataKey:[1,`dataKey`],autofocus:[1,`autofocus`],size:[1,`size`],fluid:[1,`fluid`]},outputs:{onOptionClick:`onOptionClick`,onChange:`onChange`},features:[EM([We,Ne,{provide:ke,useExisting:t},{provide:An,useExisting:t}]),kT([gi]),Sy],decls:2,vars:0,consts:[[`content`,``],[3,`autofocus`,`class`,`ngModel`,`onLabel`,`offLabel`,`ariaLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[3,`onChange`,`autofocus`,`ngModel`,`onLabel`,`offLabel`,`ariaLabel`,`disabled`,`allowEmpty`,`size`,`fluid`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,o){n&1&&S_(0,Ge,2,14,`p-togglebutton`,1,Pe,!0),n&2&&b_(o.options())},dependencies:[ee,Zn,zn,vn,ON,is,vi],encapsulation:2})}return t})();var jt=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=Ir({type:t});static ɵinj=En({imports:[we,is,is]})}return t})();function Zt(t,a){let e=a?.injector??g(ye),n=new Ou(1),o=Fg(()=>{let i;try{i=t()}catch(d){q(()=>n.error(d));return}q(()=>n.next(i))},{injector:e,manualCleanup:!0});return e.get(De).onDestroy(()=>{o.destroy(),n.complete()}),n.asObservable()}function en(t,a){let n=!a?.manualCleanup?a?.injector?.get(De)??g(De):null,o=Ye(a?.equal),i;a?.requireSync?i=ie({kind:0},{equal:o}):i=ie({kind:1,value:a?.initialValue},{equal:o});let d,p=t.subscribe({next:u=>i.set({kind:1,value:u}),error:u=>{i.set({kind:2,error:u}),d?.()},complete:()=>{d?.()}});if(a?.requireSync&&i().kind===0)throw new v(601,!1);return d=n?.onDestroy(p.unsubscribe.bind(p)),Ui(()=>{let u=i();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new v(601,!1)}},{equal:a?.equal})}function Ye(t=Object.is){return(a,e)=>a.kind===1&&e.kind===1&&t(a.value,e.value)}export{we as i,en as n,jt as r,Zt as t};
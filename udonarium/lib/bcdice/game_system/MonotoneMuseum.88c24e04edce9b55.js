(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[735],{4351:(re,ie,ne)=>{ne(9993),Opal.modules["bcdice/dice_table/table"]=function(e){var j,r,D,y,w,A,G,S,W,d=e.module,E=e.klass,_=e.hash2,R=e.defs,q=e.truthy,T=e.def,u=e.rb_minus,l=[],v=e.nil;return j=l,r=W=[d(l[0],"BCDice")].concat(j),D=S=[d(W[0],"DiceTable")].concat(r),w=[y=E(S[0],null,"Table")].concat(D),A=e.$r(w),(G=y.$$prototype).times=G.sides=G.name=G.items=v,R(y,"$from_i18n",function(f,i){var s=v;return s=A("I18n").$t(f,_(["locale"],{locale:i})),this.$new(s["$[]"]("name"),s["$[]"]("type"),s["$[]"]("items"))}),T(y,"$initialize",function(f,i,a){var s=this,c=v;return s.name=f,s.items=a.$freeze(),c=/(\d+)D(\d+)/i.$match(i),q(c)||s.$raise(A("ArgumentError"),"Unexpected table type: "+i),s.times=c["$[]"](1).$to_i(),s.sides=c["$[]"](2).$to_i()}),T(y,"$roll",function(f){var a,i=this;return a=f.$roll_sum(i.times,i.sides),i.$choice(a)}),T(y,"$choice",function(f){var a,i=this;return a=u(f,i.times),A("RollResult").$new(i.name,f,i.items["$[]"](a))})},Opal.modules["bcdice/dice_table/d66_range_table"]=function(e){var m,C,$,D,y,w,A,M,z,d=e.module,E=e.klass,_=e.def,R=e.rb_plus,q=e.rb_times,T=e.send,u=[],l=e.nil;return m=u,C=z=[d(u[0],"BCDice")].concat(m),$=M=[d(z[0],"DiceTable")].concat(C),y=[D=E(M[0],null,"D66RangeTable")].concat($),w=e.$r(y),(A=D.$$prototype).items=A.name=l,_(D,"$initialize",function(h,f){return this.name=h,this.items=f.$freeze()}),_(D,"$roll",function(h){var i,a,s,c=l;return i=h.$roll_once(6),a=h.$roll_once(6),s=R(q(i,10),a),c=T(this.items,"find",[],function(b){return null==b&&(b=l),b["$[]"](0)["$include?"](s)}),w("RollResult").$new(this.name,s,c["$[]"](1))})},Opal.modules["bcdice/dice_table/d66_grid_table"]=function(e){var z,M,y,w,A,G,h,n,C,d=e.module,E=e.klass,_=e.hash2,R=e.defs,q=e.def,T=e.rb_plus,u=e.rb_times,l=e.rb_minus,v=[],m=e.nil;return z=v,M=C=[d(v[0],"BCDice")].concat(z),y=n=[d(C[0],"DiceTable")].concat(M),A=[w=E(n[0],null,"D66GridTable")].concat(y),G=e.$r(A),(h=w.$$prototype).name=h.items=m,R(w,"$from_i18n",function(i,a){var c=m;return c=G("I18n").$t(i,_(["locale","raise"],{locale:a,raise:!0})),this.$new(c["$[]"]("name"),c["$[]"]("items"))}),q(w,"$initialize",function(i,a){return this.name=i,this.items=a.$freeze()}),q(w,"$roll",function(i){var s,c,K,b,k;return s=i.$roll_once(6),c=i.$roll_once(6),K=T(u(s,10),c),b=l(s,1),k=l(c,1),G("RollResult").$new(this.name,K,this.items["$[]"](b)["$[]"](k))})},Opal.modules["bcdice/format"]=function(e){var m,C,r,M,S,z,d=e.module,E=e.eqeqeq,_=e.def,R=e.truthy,q=e.eqeq,T=e.rb_gt,u=[],l=e.nil;return m=u,C=z=[d(u[0],"BCDice")].concat(m),M=[r=d(z[0],"Format")].concat(C),S=e.$r(M),r.$module_function(),_(r,"$comparison_operator",function($){var D;return E("==",D=$)?"=":E("!=",D)?"<>":E(S("Symbol"),D)?$.$to_s():l}),_(r,"$modifier",function($){return R($["$nil?"]())?l:q($,0)?"":R(T($,0))?"+"+$:$.$to_s()})},Opal.queue(function(e){var y,h,K,L,t,F,o,b,k,I,i,a,A,d=e.module,E=e.klass,_=e.const_set,R=e.send2,q=e.find_super,T=e.def,u=e.truthy,l=e.rb_plus,v=e.rb_le,m=e.rb_ge,j=e.thrower,z=e.hash2,W=e.defs,C=e.neqeq,r=e.range,M=e.top,S=[],n=e.nil,$=e.$$$;return M.$require("bcdice/dice_table/table"),M.$require("bcdice/dice_table/d66_range_table"),M.$require("bcdice/dice_table/d66_grid_table"),M.$require("bcdice/format"),y=S,h=A=[d(S[0],"BCDice")].concat(y),i=[d(A[0],"GameSystem")].concat(h),a=e.$r(i),K=i,k=[b=E(i[0],a("Base"),"MonotoneMuseum")].concat(K),I=e.$r(k),b.$$prototype.randomizer=n,_(k[0],"ID","MonotoneMuseum"),_(k[0],"NAME","\u30e2\u30ce\u30c8\u30fc\u30f3\u30df\u30e5\u30fc\u30b8\u30a2\u30e0RPG"),_(k[0],"SORT_KEY","\u3082\u306e\u3068\u304a\u3093\u307f\u3086\u3046\u3057\u3042\u3080RPG"),_(k[0],"HELP_MESSAGE","\u30fb\u5224\u5b9a\n\u3000\u30fb\u901a\u5e38\u5224\u5b9a\u3000\u3000\u3000\u3000\u3000\u30002D6+m>=t[c,f]\n\u3000\u3000\u4fee\u6b63\u5024m,\u76ee\u6a19\u5024t,\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024c,\u30d5\u30a1\u30f3\u30d6\u30eb\u5024f\u3067\u5224\u5b9a\u30ed\u30fc\u30eb\u3092\u884c\u3044\u307e\u3059\u3002\n\u3000\u3000\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024\u306f\u7701\u7565\u53ef\u80fd\u3067\u3059\u3002([]\u3054\u3068\u7701\u7565\u3067\u304d\u307e\u3059)\n\u3000\u3000\u81ea\u52d5\u6210\u529f\u3001\u81ea\u52d5\u5931\u6557\u3001\u6210\u529f\u3001\u5931\u6557\u3092\u81ea\u52d5\u8868\u793a\u3057\u307e\u3059\u3002\n\u30fb\u5404\u7a2e\u8868\n\u3000\u30fb\u611f\u60c5\u8868\u3000ET\uff0f\u611f\u60c5\u8868 2.0\u3000ET2\n\u3000\u30fb\u5146\u5019\u8868\u3000OT\uff0f\u5146\u5019\u8868ver2.0\u3000OT2\uff0f\u5146\u5019\u8868ver3.0\u3000OT3\n\u3000\u30fb\u6b6a\u307f\u8868\u3000DT\uff0f\u6b6a\u307f\u8868ver2.0\u3000DT2\uff0f\u6b6a\u307f\u8868(\u91ce\u5916)\u3000DTO\uff0f\u6b6a\u307f\u8868(\u6d77)\u3000DTS\uff0f\u6b6a\u307f\u8868(\u9928\u30fb\u57ce)\u3000DTM\n\u3000\u30fb\u4e16\u754c\u6b6a\u66f2\u8868\u3000WDT\uff0f\u4e16\u754c\u6b6a\u66f2\u88682.0\u3000WDT2\n\u3000\u30fb\u6c38\u52ab\u6d88\u5931\u8868\u3000EDT\n\u30fbD66\u30c0\u30a4\u30b9\u3042\u308a\n"),T(b,"$initialize",function x(B){var t=this;return x.$$p=null,R(t,q(t,"initialize",x,!1,!0),"initialize",[B],null),t.d66_sort_type=$(I("D66SortType"),"NO_SORT"),t.sort_add_dice=!0}),T(b,"$eval_game_system_specific_command",function(B){var t,L=this;return u(t=L.$check_roll(B))?t:L.$roll_tables(B,$(L.$class(),"TABLES"))}),b.$private(),T(b,"$check_roll",function(B){try{j("eval_return");var t,F,o=this,g=n,U=n,P=n,Y=n,N=n,H=n,p=n,V=n,J=n,O=n,X=n,Q=n,ee=n;return g=/^(\d+)D6([+\-\d]*)>=(\d+)(\[(\d+)?(,(\d+))?\])?$/i.$match(B),u(g)?(U=g["$[]"](1).$to_i(),P=u(g["$[]"](2))?I("ArithmeticEvaluator").$eval(g["$[]"](2)):0,Y=g["$[]"](3).$to_i(),N=u(H=(t=g["$[]"](5))===n||null==t?n:t.$to_i())?H:12,p=u(H=(F=g["$[]"](7))===n||null==F?n:F.$to_i())?H:2,J=(V=o.randomizer.$roll_barabara(U,6).$sort()).$sum(),O=V.$join(","),X=l(J,P),Q=u(v(J,p))?I("Result").$fumble(o.$translate("MonotoneMuseum.automatic_failure")):u(m(J,N))?I("Result").$critical(o.$translate("MonotoneMuseum.automatic_success")):u(m(X,Y))?I("Result").$success(o.$translate("success")):I("Result").$failure(o.$translate("failure")),ee=["("+B+")",J+"["+O+"]"+I("Format").$modifier(P),X.$to_s(),Q.$text()],Q["$text="](ee.$join(" \uff1e ")),Q):n}catch(Z){if(Z===e.t_eval_return)return Z.$v;throw Z}}),L=k,F=[t=E(k[0],$(I("DiceTable"),"D66RangeTable"),"MMTable")].concat(L),o=e.$r(F),W(t,"$from_i18n",function(U,P){var N=n;return N=o("I18n").$translate(U,z(["locale","raise"],{locale:P,raise:!0})),this.$new(N["$[]"]("name"),N["$[]"]("items"))}),T(t,"$initialize",function g(U,P){var H,N=this;return g.$$p=null,C(P.$size(),o("RANGE").$size())&&N.$raise(o("UnexpectedTableSize").$new(U,P.$size())),H=o("RANGE").$zip(P),R(N,q(N,"initialize",g,!1,!0),"initialize",[U,H],null)}),_(F[0],"RANGE",[r(11,12,!1),r(13,14,!1),r(15,16,!1),r(21,22,!1),r(23,24,!1),r(25,26,!1),r(31,32,!1),r(33,34,!1),r(35,36,!1),r(41,42,!1),r(43,44,!1),r(45,46,!1),r(51,52,!1),r(53,54,!1),r(55,56,!1),r(61,62,!1),r(63,64,!1),r(65,66,!1)].$freeze()),function(x,B){var L=[x].concat(B),t=e.$r(L);x.$private(),T(x,"$translate_tables",function(o){return z(["ET","ET2","OT","DT","DT2","WDT","WDT2","OT2","DTO","DTS","EDT","DTM","OT3"],{ET:$(t("DiceTable"),"D66GridTable").$from_i18n("MonotoneMuseum.table.ET",o),ET2:$(t("DiceTable"),"D66GridTable").$from_i18n("MonotoneMuseum.table.ET2",o),OT:$(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.OT",o),DT:$(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.DT",o),DT2:t("MMTable").$from_i18n("MonotoneMuseum.table.DT2",o),WDT:$(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.WDT",o),WDT2:t("MMTable").$from_i18n("MonotoneMuseum.table.WDT2",o),OT2:t("MMTable").$from_i18n("MonotoneMuseum.table.OT2",o),DTO:t("MMTable").$from_i18n("MonotoneMuseum.table.DTO",o),DTS:t("MMTable").$from_i18n("MonotoneMuseum.table.DTS",o),EDT:$(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.EDT",o),DTM:t("MMTable").$from_i18n("MonotoneMuseum.table.DTM",o),OT3:$(t("DiceTable"),"Table").$from_i18n("MonotoneMuseum.table.OT3",o)})})}(e.get_singleton_class(b),k),_(k[0],"TABLES",b.$translate_tables("ja_jp").$freeze()),b.$register_prefix("\\d+D6",I("TABLES").$keys())})}}]);
(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[5413],{3264:($e,oe,M)=>{M(9993),Opal.queue(function(i){var X,ee,ie,o,k,D,B,ae,V,z=i.module,F=i.klass,R=i.const_set,I=i.send2,j=i.find_super,S=i.def,c=i.truthy,d=i.hash2,s=i.rb_plus,J=i.to_ary,q=i.rb_minus,E=i.eqeq,G=i.neqeq,w=i.rb_ge,H=i.rb_gt,W=i.eqeqeq,K=i.thrower,N=i.rb_divide,P=i.rb_times,Y=i.send,Q=i.defs,A=[],e=i.nil,x=i.$$$;return X=A,ee=V=[z(A[0],"BCDice")].concat(X),B=[z(V[0],"GameSystem")].concat(ee),ae=i.$r(B),ie=B,k=[o=F(B[0],ae("Base"),"DetatokoSaga")].concat(ie),D=i.$r(k),o.$$prototype.randomizer=e,R(k[0],"ID","DetatokoSaga"),R(k[0],"NAME","\u3067\u305f\u3068\u3053\u30b5\u30fc\u30ac"),R(k[0],"SORT_KEY","\u3066\u305f\u3068\u3053\u3055\u3042\u304b"),R(k[0],"HELP_MESSAGE","\u30fb\u901a\u5e38\u5224\u5b9a\u3000xDS or xDSy or xDS>=t or xDSy>=t or xDS+z>=t or xDSy+z>=t\n\u3000(x\uff1d\u30b9\u30ad\u30eb\u30e9\u30f3\u30af\u3001y\uff1d\u73fe\u5728\u30d5\u30e9\u30b0\u5024(\u7701\u7565\u66420)\u3001z\uff1d\u4fee\u6b63\u5024(\u7701\u7565\u6642\uff10)\u3001t\uff1d\u76ee\u6a19\u5024(\u7701\u7565\u6642\uff18))\n\u3000\u4f8b\uff093DS\u30002DS5\u30000DS\u30003DS>=10\u30003DS7>=12 2DS3+1 3DS2+1>=10\n\u30fb\u5224\u5b9a\u5024\u3000xJD or xJDy or xJDy+z or xJDy-z or xJDy/z\n\u3000(x\uff1d\u30b9\u30ad\u30eb\u30e9\u30f3\u30af\u3001y\uff1d\u73fe\u5728\u30d5\u30e9\u30b0\u5024(\u7701\u7565\u66420)\u3001z\uff1d\u4fee\u6b63\u5024(\u7701\u7565\u6642\uff10))\n\u3000\u4f8b\uff093JD\u30002JD5\u30003JD7+1\u30004JD/3\n\u30fb\u4f53\u529b\u70d9\u5370\u8868\u3000SST (StrengthStigmaTable)\n\u30fb\u6c17\u529b\u70d9\u5370\u8868\u3000WST (WillStigmaTable)\n\u30fb\u4f53\u529b\u30d0\u30c3\u30c9\u30a8\u30f3\u30c9\u8868\u3000SBET (StrengthBadEndTable)\n\u30fb\u6c17\u529b\u30d0\u30c3\u30c9\u30a8\u30f3\u30c9\u8868\u3000WBET (WillBadEndTable)\n"),o.$register_prefix("\\d+DS","\\d+JD"),S(o,"$initialize",function f(a){var t=this;return f.$$p=null,I(t,j(t,"initialize",f,!1,!0),"initialize",[a],null),t.sort_add_dice=!0,t.d66_sort_type=x(D("D66SortType"),"ASC")}),S(o,"$eval_game_system_specific_command",function(a){var r=this,t=e,l=e;return r.$debug("eval_game_system_specific_command begin string",a),t=r.$checkRoll(a),c(t)||(t=r.$checkJudgeValue(a),c(t))?t:(r.$debug("\u5404\u7a2e\u8868\u3068\u3057\u3066\u51e6\u7406"),r.$roll_tables(c(l=D("ALIAS")["$[]"](a))?l:a,x(r.$class(),"TABLES")))}),S(o,"$checkRoll",function(a){var r,t,l,m,y,T,u,b,C,L,v,n=this,$=e,g=e,h=e,_=e;if(n.$debug("checkRoll begin string",a),$=/^(\d+)DS(\d+)?(([+-\/])(\d+))?(?:>=(\d+))?$/i.$match(a),!c($))return e;if(m=$["$[]"](1).$to_i(),y=$["$[]"](2).$to_i(),T=$["$[]"](4),u=$["$[]"](5).$to_i(),b=c(v=(r=$["$[]"](6))===e||null==r?e:r.$to_i())?v:8,g=n.$translate("DetatokoSaga.DS.input_options",d(["skill","flag","target"],{skill:m,flag:y,target:b})),h=n.$getModifyText(T,u),c(h["$empty?"]())||(g=s(g,n.$translate("DetatokoSaga.DS.modifier",d(["modifier"],{modifier:h})))),l=n.$getRollResult(m),t=J(l),g=s(g," \uff1e "+(_=null==t[0]?e:t[0])+"["+(null==t[1]?e:t[1])+"]"+h),C=n.$getTotalResultValue(_,u,T),g=s(g," \uff1e "+C),!c(h["$empty?"]()))switch(T){case"+":_=s(_,u);break;case"-":_=q(_,u)}return L=n.$getSuccess(_,b),g=s(g," \uff1e "+L),s(g,n.$getCheckFlagResult(_,y))}),S(o,"$getRollResult",function(a){var n,t=e,l=e;return t=s(a,1),E(a,0)&&(t=3),n=(l=this.randomizer.$roll_barabara(t,6)).$join(","),l=l.$sort(),G(a,0)&&(l=l.$reverse()),[s(l["$[]"](0),l["$[]"](1)),n]}),S(o,"$getSuccess",function(a,r){return c(w(a,r))?this.$translate("DetatokoSaga.DS.success"):this.$translate("DetatokoSaga.DS.failure")}),S(o,"$getCheckFlagResult",function(a,r){var l=e;return c(H(a,r))?"":(l=this.$getDownWill(r),this.$translate("DetatokoSaga.less_than_flag",d(["will"],{will:l})))}),S(o,"$getDownWill",function(a){return c(w(a,10))?"6":"1D6->"+this.randomizer.$roll_once(6)}),S(o,"$checkJudgeValue",function(a){var r,t,l=this,n=e,$=e,m=e,y=e,T=e,u=e,b=e,v=e,h=e;return l.$debug("checkJudgeValue begin string",a),n=/^(\d+)JD(\d+)?(([+-\/])(\d+))?$/i.$match(a),c(n)?($=n["$[]"](1).$to_i(),m=n["$[]"](2).$to_i(),y=n["$[]"](4),T=n["$[]"](5).$to_i(),u=l.$translate("DetatokoSaga.JD.input_options",d(["skill","flag"],{skill:$,flag:m})),b=l.$getModifyText(y,T),c(b["$empty?"]())||(u=s(u,l.$translate("DetatokoSaga.JD.modifier",d(["modifier"],{modifier:b})))),t=l.$getRollResult($),r=J(t),u=s(u," \uff1e "+(v=null==r[0]?e:r[0])+"["+(null==r[1]?e:r[1])+"]"+b),h=l.$getTotalResultValue(v,T,y),u=s(u," \uff1e "+h),u=s(u,l.$getCheckFlagResult(v,m))):e}),S(o,"$getModifyText",function(a,r){try{var t=K("return"),n=e;return E(r,0)?"":""+(W("+",n=a)?"\uff0b":W("-",n)?"\uff0d":W("/",n)?"\xf7":void t.$throw(""))+r}catch($){if($===t)return $.$v;throw $}}),S(o,"$getTotalResultValue",function(a,r,t){var l=this;switch(t){case"+":return s(a+"+"+r+" \uff1e ",l.$translate("DetatokoSaga.total_value",d(["total"],{total:s(a,r)})));case"-":return s(a+"-"+r+" \uff1e ",l.$translate("DetatokoSaga.total_value",d(["total"],{total:q(a,r)})));case"/":return l.$getTotalResultValueWhenSlash(a,r);default:return l.$translate("DetatokoSaga.total_value",d(["total"],{total:a}))}}),S(o,"$getTotalResultValueWhenSlash",function(a,r){var l=e;return E(r,0)?this.$translate("DetatokoSaga.division_by_zero_error"):(l=N(P(1,a),r).$ceil(),s(a+"\xf7"+r+" \uff1e ",this.$translate("DetatokoSaga.total_value",d(["total"],{total:l}))))}),R(k[0],"ALIAS",Y(d(["StrengthStigmaTable","WillStigmaTable","StrengthBadEndTable","WillBadEndTable"],{StrengthStigmaTable:"SST",WillStigmaTable:"WST",StrengthBadEndTable:"SBET",WillBadEndTable:"WBET"}),"transform_keys",[],"upcase".$to_proc()).$freeze()),Q(o,"$translate_tables",function(a){return d(["SST","WST","SBET","WBET"],{SST:x(D("DiceTable"),"Table").$from_i18n("DetatokoSaga.table.SST",a),WST:x(D("DiceTable"),"Table").$from_i18n("DetatokoSaga.table.WST",a),SBET:x(D("DiceTable"),"Table").$from_i18n("DetatokoSaga.table.SBET",a),WBET:x(D("DiceTable"),"Table").$from_i18n("DetatokoSaga.table.WBET",a)})}),R(k[0],"TABLES",o.$translate_tables("ja_jp").$freeze()),o.$register_prefix(D("TABLES").$keys(),D("ALIAS").$keys())})}}]);
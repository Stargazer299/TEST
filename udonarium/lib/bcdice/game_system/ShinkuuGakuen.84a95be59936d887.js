(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[1763],{708:(U,Y,v)=>{v(9993),Opal.queue(function(T){var X,y,H,a,f,A,J,x,h=T.module,k=T.klass,m=T.const_set,c=T.truthy,r=T.def,W=T.rb_plus,L=T.rb_ge,w=T.send,d=T.eqeq,_=T.thrower,B=T.rb_le,M=T.neqeq,i=T.hash2,P=T.rb_times,R=[],e=T.nil;return X=R,y=x=[h(R[0],"BCDice")].concat(X),A=[h(x[0],"GameSystem")].concat(y),J=T.$r(A),H=A,f=[a=k(A[0],J("Base"),"ShinkuuGakuen")].concat(H),a.$$prototype.randomizer=e,m(f[0],"ID","ShinkuuGakuen"),m(f[0],"NAME","\u771f\u7a7a\u5b66\u5712"),m(f[0],"SORT_KEY","\u3057\u3093\u304f\u3046\u304b\u304f\u3048\u3093"),m(f[0],"HELP_MESSAGE","\u30fb\u5224\u5b9a\nRLx\uff1a\u6280\u80fd\u30d9\u30fc\u30b9\uff58\u3067\u6280\u80fd\u30c1\u30a7\u30c3\u30af\u306e\u30c0\u30a4\u30b9\u30ed\u30fc\u30eb\nRLx>=y\uff1a\u3053\u306e\u66f8\u5f0f\u306a\u3089\u76ee\u6a19\u5024 \uff59 \u3067\u5224\u5b9a\u7d50\u679c\u51fa\u529b\n\u3000\u4f8b\uff09RL10\u3000\u3000RL22>=50\n\n\u30fb\u6b66\u5668\u653b\u6483\n\uff08\u6b66\u5668\u8a18\u53f7\uff09\uff08\u6280\u80fd\u30d9\u30fc\u30b9\u5024\uff09\n\u3000\u4f8b\uff09SW10\u3000BX30\n\u6b66\u5668\u3092\u6280\u80fd\u30d9\u30fc\u30b9\u3067\u30c0\u30a4\u30b9\u30ed\u30fc\u30eb\u3002\u6280\u767a\u52d5\u307e\u3067\u30c1\u30a7\u30c3\u30af\u3002\n\u6b66\u5668\u8a18\u53f7\u306f\u4ee5\u4e0b\u306e\u901a\u308a\n\u3000SW\uff1a\u5263\u3001LS\uff1a\u5927\u5263\u3001SS\uff1a\u5c0f\u5263\u3001SP\uff1a\u69cd\u3001\n\u3000AX\uff1a\u65a7\u3001CL\uff1a\u68cd\u68d2\u3001BW\uff1a\u5f13\u3001MA\uff1a\u4f53\u8853\u3001\n\u3000BX\uff1a\u30dc\u30af\u30b7\u30f3\u30b0\u3001PR\uff1a\u30d7\u30ed\u30ec\u30b9\u3001ST\uff1a\u5e7d\u6ce2\u7d0b\n\n\u30fb\u30ab\u30a6\u30f3\u30bf\u30fc\u653b\u6483\n\u30ab\u30a6\u30f3\u30bf\u30fc\u6280\u306f\u6b66\u5668\u8a18\u53f7\u306e\u982d\u306b\u300cC\u300d\u3092\u3064\u3051\u308b\u3068\u30ed\u30fc\u30eb\u53ef\u80fd\u3002\n\u3000\u4f8b\uff09CSW10\u3000CBX76\n"),a.$register_prefix("CRL","CSW","CLS","CSS","CSP","CAX","CCL","CMA","CBX","CPR","CST","RL","SW","LS","SS","SP","AX","CL","BW","MA","BX","PR","ST"),r(a,"$eval_game_system_specific_command",function(u){var b=e,t=e,g=e,$=e,l=e;return b=/^([A-Z]+)([+-]?\d+)?(?:>=(\d+))?$/i.$match(u),c(b)?(t=b["$[]"](1),g=b["$[]"](2).$to_i(),$=b["$[]"](3),l=this.$getWeaponTable(t),this.$rollJudge(g,$,l)):e}),r(a,"$rollJudge",function(u,n,b){var g,$,S,p,t=this,l=e,s=e;return t.$debug("rollJudge base",u),t.$debug("rollJudge diff",n),g=b["$[]"]("name"),$=b["$[]"]("table"),S=(l=t.$getJudgeDiceList()).$sum(),p=W(S,u),s="("+g+"\uff1a"+u+(c(n["$nil?"]())?"":">="+n)+") \uff1e 1D100+"+u+" \uff1e "+S,c(L(l.$length(),2))&&(s=W(s,"["+l.$join(",")+"]")),s=W(s,"+"+u),s=W(s," \uff1e "+p),s=W(s,t.$getSuccessText(p,n,l,$)),s=W(s,t.$getWeaponSkillText($,l.$max())),t.$debug("check_1D100 result",s),s}),r(a,"$getJudgeDiceList",function(){var u=this,n=e;return n=[],function(){try{var b=_("break");w(u,"loop",[],function t(){var l,g=null==t.$$s?this:t.$$s,$=e;if(null==g.randomizer&&(g.randomizer=e),$=g.randomizer.$roll_once(100),n["$<<"]($),l=$["$%"](10),g.$debug("rank01",l),d(l,0))return e;b.$throw()},{$$s:u})}catch(t){if(t===b)return t.$v;throw t}}(),n}),r(a,"$getSuccessText",function(u,n,b,t){var $=e,l=e,S=e,p=e;return $=b.$first(),c($["$nil?"]())?"":c(B($,9))?" \uff1e \u30d5\u30a1\u30f3\u30d6\u30eb":c(n["$nil?"]())&&M($,10)?"":(l="",S=this.$getSkillText($,n,t),l=W(l,S),c(n["$nil?"]())||(c(S["$empty?"]())&&(l=W(l," \uff1e ")),p=c(L(u,n.$to_i()))?"\u6210\u529f":"\u5931\u6557",l=W(l,p.$to_s())),l)}),r(a,"$getSkillText",function(u,n,b){var t=e;return t="",c(b)||(t=" \uff1e ",!d(u,10))||(t=W(t,"\u6280\u80fd\u306a\u3057\uff1a\u30d5\u30a1\u30f3\u30d6\u30eb"),c(n["$nil?"]()))||(t=W(t,"\uff0f\u6280\u80fd\u3042\u308a\uff1a")),t}),r(a,"$getWeaponTable",function(u){var n=this;switch(n.$debug("getWeaponTable weaponCommand",u),u.$upcase()){case"SW":return n.$getWeaponTableSword();case"CSW":return n.$getWeaponTableSwordCounter();case"LS":return n.$getWeaponTableLongSword();case"CLS":return n.$getWeaponTableLongSwordCounter();case"SS":return n.$getWeaponTableShortSword();case"CSS":return n.$getWeaponTableShortSwordCounter();case"SP":return n.$getWeaponTableSpear();case"CSP":return n.$getWeaponTableSpearCounter();case"AX":return n.$getWeaponTableAx();case"CAX":return n.$getWeaponTableAxCounter();case"CL":return n.$getWeaponTableClub();case"CCL":return n.$getWeaponTableClubCounter();case"BW":return n.$getWeaponTableBow();case"MA":return n.$getWeaponTableMartialArt();case"CMA":return n.$getWeaponTableMartialArtCounter();case"BX":return n.$getWeaponTableBoxing();case"CBX":return n.$getWeaponTableBoxingCounter();case"PR":return n.$getWeaponTableProWrestling();case"CPR":return n.$getWeaponTableProWrestlingCounter();case"ST":return n.$getWeaponTableStand();case"CST":return n.$getWeaponTableStandCounter()}return i(["name","table"],{name:"\u5224\u5b9a",table:e})}),r(a,"$getWeaponTableSword",function(){return i(["name","table"],{name:"\u5263",table:[[11,"\u5931\u793c\u5263","\u6210\u529f\u5ea6\uff0b\uff15"],[22,"\u96bc\u65ac\u308a","\u56de\u907f\u4e0d\u53ef"],[33,"\u307f\u3058\u3093\u65ac\u308a","\u653b\u6483\u91cf\uff12\u500d"],[44,"\u5929\u5730\u4e8c\u6bb5","\uff12\u9023\u7d9a\u653b\u6483"],[55,"\u6ce2\u52d5\u5263","\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[66,"\u75be\u98a8\u5263","\u653b\u6483\u91cf\uff13\u500d\uff64\u76fe\u53d7\u3051\u30fc\uff11\uff10\uff10"],[77,"\u6b8b\u50cf\u5263","\u5168\u4f53\u653b\u6483\u3001\uff22\u30fb\uff24"],[88,"\u4e94\u6708\u96e8\u65ac\u308a\u300d","\u56de\u907f\u4e0d\u53ef\uff0e\u30c0\u30e1\u30fc\u30b8\uff13\u500d"],[99,"\u30e9\u30a4\u30b8\u30f3\u30b0\u30ce\u30f4\u30a2\u300d","\uff12\u9023\u7d9a\u653b\u6483\u30fb\uff12\u6483\u76ee\u6575\u7121\u9632\u5099\u3001\uff22\u30fb\uff24"],[0,"\u5149\u901f\u5263","\u653b\u6483\u91cf3\u500d\uff64\u76fe\u53d7\u3051\u4e0d\u53ef\uff64\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\uff22\u30fb\uff24"]]})}),r(a,"$getWeaponTableSwordCounter",function(){return i(["name","table"],{name:"\u5263\u30ab\u30a6\u30f3\u30bf\u30fc",table:[[33,"\u30d1\u30ea\u30a3","\u653b\u6483\u306e\u7121\u52b9\u5316"],[44,e,e],[55,e,e],[66,"\u304b\u3059\u307f\u9752\u773c","\u30ab\u30a6\u30f3\u30bf\u30fc"],[77,e,e],[88,e,e],[99,e,e],[0,"\u4e0d\u52d5\u5263","\u30af\u30ed\u30b9\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\uff22\u30fb\uff24\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d"]]})}),r(a,"$getWeaponTableLongSword",function(){return i(["name","table"],{name:"\u5927\u5263",table:[[11,"\u30b9\u30de\u30c3\u30b7\u30e5","\u6575\u9632\u5fa1\u534a\u5206"],[22,"\u5cf0\u6253\u3061","\u9ebb\u75fa\u786c\u5316\u300c\u6839\u6027\u300d\uff10"],[33,"\u6c34\u9ce5\u5263","\u6575\u9632\u5fa1\u5224\u5b9a\u30fc\uff15\uff10"],[44,"\u30d6\u30eb\u30af\u30e9\u30c3\u30b7\u30e5","\u6575\u9632\u5fa1\u529b\u7121\u8996"],[55,"\u9006\u98a8\u306e\u592a\u5200","\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d"],[66,"\u6fc1\u6d41\u5263","\u56de\u907f\u4e0d\u53ef\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[77,"\u6e05\u6d41\u5263","\u56de\u907f\u4e0d\u53ef\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[88,"\u71d5\u8fd4\u3057","\uff12\u9023\u7d9a\u653b\u6483\u30fb\uff12\u6483\u76ee\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[99,"\u5730\u305a\u308a\u6b8b\u6708","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u30c0\u30e1\u30fc\u30b8\uff13\u500d\u3001\uff22\u30fb\uff24"],[0,"\u4e71\u308c\u96ea\u6708\u82b1","\uff13\u9023\u7d9a\u653b\u6483\u30fb\u4e09\u6483\u76ee\u6575\u7121\u9632\u5099\u3001\u30c0\u30e1\u30fc\u30b8\uff13\u500d\u3001\u9632\u5fa1\u529b\u7121\u8996\u3001\uff22\u30fb\uff24"]]})}),r(a,"$getWeaponTableLongSwordCounter",function(){return i(["name","table"],{name:"\u5927\u5263\u30ab\u30a6\u30f3\u30bf\u30fc",table:[[22,"\u7121\u5f62\u306e\u4f4d","\u653b\u6483\u306e\u7121\u52b9\u5316"],[33,e,e],[44,e,e],[55,"\u53cc\u7834","\u30af\u30ed\u30b9\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\uff22\u30fb\uff24"],[66,e,e],[77,e,e],[88,"\u55aa\u5fc3\u7121\u60f3","\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\u653b\u6483\u91cf\uff16\u500d"],[99,e,e],[0,e,e]]})}),r(a,"$getWeaponTableShortSword",function(){return i(["name","table"],{name:"\u5c0f\u5263",table:[[11,"\u4e71\u308c\u7a81\u304d","\uff12\u9023\u7d9a\u653b\u6483"],[22,"\u30d5\u30a7\u30a4\u30af\u30bf\u30f3\u30b0","\u30b9\u30bf\u30f3\u52b9\u679c\u300c\u6ce8\u610f\u529b\u300d\uff15"],[33,"\u30de\u30a4\u30f3\u30c9\u30b9\u30c6\u30a2","\u9ebb\u75fa\u52b9\u679c\u300c\u6ce8\u610f\u529b\u300d\uff10"],[44,"\u30b5\u30a4\u30c9\u30ef\u30a4\u30f3\u30c0\u30fc","\u6210\u529f\u5ea6\uff0b\uff13\u3001\u76fe\u53d7\u3051\u4e0d\u53ef"],[55,"\u30b9\u30af\u30ea\u30e5\u30fc\u30c9\u30e9\u30a4\u30d0\u30fc","\u9632\u5fa1\u529b\u7121\u8996\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d"],[66,"\u30cb\u30fc\u30c9\u30eb\u30ed\u30f3\u30c9","\uff13\u9023\u7d9a\u653b\u6483"],[77,"\u30d7\u30e9\u30ba\u30de\u30d6\u30e9\u30b9\u30c8","\u9ebb\u75fa\u52b9\u679c\u300c\u6839\u6027\u300d\uff10\u3001\uff22\u30fb\uff24"],[88,"\u30b5\u30b6\u30f3\u30af\u30ed\u30b9","\u9ebb\u75fa\u52b9\u679c\u300c\u6839\u6027\u300d\uff15\u3001\u653b\u6483\u91cf\uff12\u500d"],[99,"\u30d5\u30a1\u30a4\u30ca\u30eb\u30ec\u30bf\u30fc","\u6c17\u7d76\u52b9\u679c\u300c\u6839\u6027\u300d\uff10\u3001\u56de\u907f\u4e0d\u53ef\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[0,"\u767e\u82b1\u7e5a\u4e71","\u56de\u907f\u4e0d\u53ef\u3001\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u653b\u6483\u91cf\uff13\u500d\u3001\uff22\u30fb\uff24"]]})}),r(a,"$getWeaponTableShortSwordCounter",function(){return i(["name","table"],{name:"\u5c0f\u5263\u30ab\u30a6\u30f3\u30bf\u30fc",table:[[11,"\u30ea\u30dd\u30b9\u30c8","\u30ab\u30a6\u30f3\u30bf\u30fc"],[22,e,e],[33,e,e],[44,e,e],[55,e,e],[66,e,e],[77,e,e],[88,"\u30de\u30bf\u30c9\u30fc\u30eb","\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\u9ebb\u75fa\u52b9\u679c\u300c\u6ce8\u610f\u529b\u300d\uff15"],[99,e,e],[0,"\u30de\u30ea\u30aa\u30cd\u30c3\u30c8","\u653b\u6483\u306e\u76f8\u624b\u3092\u5909\u3048\u308b"]]})}),r(a,"$getWeaponTableSpear",function(){return i(["name","table"],{name:"\u69cd",table:[[11,"\u30c1\u30e3\u30fc\u30b8","\u30c0\u30e1\u30fc\u30b8\uff11\uff0e\uff15\u500d\u3001\u76fe\u53d7\u3051\u30fc\uff13\uff10"],[22,"\u7a32\u59bb\u7a81\u304d","\u56de\u907f\u4e0d\u53ef"],[33,"\u8133\u524a\u308a","\u9ebb\u75fa\u52b9\u679c\u300c\u6839\u6027\u300d\uff10"],[44,"\u5927\u8eca\u8f2a","\u5168\u4f53\u653b\u6483"],[55,"\u72c2\u4e71\u6483","\u4e8c\u56de\u653b\u6483"],[66,"\u30b9\u30d1\u30a4\u30e9\u30eb\u30c1\u30e3\u30fc\u30b8","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d\u3001\uff22\u30fb\uff24"],[77,"\u53cc\u9f8d\u6ce2","\u30b9\u30bf\u30f3\u52b9\u679c\u300c\u6ce8\u610f\u529b\u300d\uff15\u3001\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[88,"\u6d41\u661f\u885d","\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\u30c0\u30e1\u30fc\u30b8\uff13\u500d\u3001\u6b21\u884c\u52d5\u307e\u3067\u653b\u6483\u5bfe\u8c61\u306b\u306a\u3089\u306a\u3044"],[99,"\u30e9\u30f3\u30c9\u30b9\u30e9\u30a4\u30b5\u30fc","\u5168\u4f53\u653b\u6483\u3001\u56de\u907f\u4e0d\u53ef\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[0,"\u7121\u53cc\u4e09\u6bb5","\u4e09\u6bb5\u653b\u6483\u3001\u4e8c\u6bb5\u76ee\uff22\u30fb\uff24\u3001\u4e09\u6bb5\u76ee\u30c0\u30e1\u30fc\u30b8\uff12\u500d\u3001\uff22\u30fb\uff24"]]})}),r(a,"$getWeaponTableSpearCounter",function(){return i(["name","table"],{name:"\u69cd\u30ab\u30a6\u30f3\u30bf\u30fc",table:[[55,"\u98a8\u8eca","\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d"],[66,e,e],[77,e,e],[88,e,e],[99,e,e],[0,e,e]]})}),r(a,"$getWeaponTableAx",function(){return i(["name","table"],{name:"\u65a7",table:[[11,"\u4e00\u4eba\u6642\u9593\u5dee","\u9632\u5fa1\u884c\u52d5\u30fc\uff11\uff10\uff10"],[22,"\u30c8\u30de\u30db\u30fc\u30af","\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef"],[33,"\u5927\u6728\u65ad","\u30c0\u30e1\u30fc\u30b8\uff12\u500d"],[44,"\u30d6\u30ec\u30fc\u30c9\u30ed\u30fc\u30eb","\u5168\u4f53\u653b\u6483"],[55,"\u30de\u30ad\u5272\u308a\u30b9\u30da\u30b7\u30e3\u30eb","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[66,"\u30e8\u30fc\u30e8\u30fc","\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\uff12\u9023\u7d9a\u653b\u6483"],[77,"\u30e1\u30ac\u30db\u30fc\u30af","\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\u5168\u4f53\u653b\u6483\u3001\u653b\u6483\u91cf\uff12\u500d"],[88,"\u30c7\u30c3\u30c9\u30ea\u30fc\u30b9\u30d4\u30f3","\u56de\u907f\u4e0d\u53ef\u3001\u653b\u6483\u91cf\uff15\u500d"],[99,"\u30de\u30ad\u5272\u308a\u30c0\u30a4\u30ca\u30df\u30c3\u30af","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d\u3001\uff22\u30fb\uff24\u3001\u30bf\u30fc\u30f3\u306e\u6700\u5f8c\u306b\u547d\u4e2d"],[0,"\u9ad8\u901f\u30ca\u30d6\u30e9","\u56de\u907f\u4e0d\u53ef\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\u653b\u6483\u91cf\uff13\u500d\u3001\uff22\u30fb\uff24"]]})}),r(a,"$getWeaponTableAxCounter",function(){return i(["name","table"],{name:"\u65a7\u30ab\u30a6\u30f3\u30bf\u30fc",table:[[44,"\u771f\u3063\u5411\u5510\u7af9\u5272\u308a","\u30af\u30ed\u30b9\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\uff22\u30fb\uff24"],[55,e,e],[66,e,e],[77,e,e],[88,e,e],[99,e,e],[0,e,e]]})}),r(a,"$getWeaponTableClub",function(){return i(["name","table"],{name:"\u68cd\u68d2",table:[[11,"\u30cf\u30fc\u30c9\u30d2\u30c3\u30c8","\u9632\u5fa1\u529b\u7121\u8996"],[22,"\u30c0\u30d6\u30eb\u30d2\u30c3\u30c8","\uff12\u9023\u7d9a\u653b\u6483"],[33,"\u56de\u8ee2\u6483","\u9632\u5fa1\u5224\u5b9a\u30fc\uff11\uff10\uff10"],[44,"\u98db\u7fd4\u8133\u5929\u6483","\u9ebb\u75fa\u52b9\u679c\u300c\u6839\u6027\u300d\uff15"],[55,"\u524a\u5ca9\u6483","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u653b\u6483\u91cf\uff13\u500d"],[66,"\u5730\u88c2\u6483","\u9632\u5fa1\u529b\u7121\u8996\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u30b9\u30bf\u30f3\u52b9\u679c\u300c\u6ce8\u610f\u529b\u300d\uff10"],[77,"\u30c8\u30ea\u30d7\u30eb\u30d2\u30c3\u30c8","\uff13\u9023\u7d9a\u653b\u6483"],[88,"\u4e80\u7532\u7f85\u5272\u308a","\u9632\u5fa1\u529b\u534a\u5206\u3001\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[99,"\u53e9\u304d\u3064\u3076\u3059","\u9632\u5fa1\u529b\u7121\u8996\u3001\u9632\u5fa1\u884c\u52d5\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[0,"\u30b0\u30e9\u30f3\u30c9\u30af\u30ed\u30b9","\u9632\u5fa1\u7121\u8996\u3001\u76fe\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d\u3001\uff22\u30fb\uff24\u3001\u5168\u4f53\u653b\u6483"]]})}),r(a,"$getWeaponTableClubCounter",function(){return i(["name","table"],{name:"\u68cd\u68d2\u30ab\u30a6\u30f3\u30bf\u30fc",table:[[11,"\u30d6\u30ed\u30c3\u30ad\u30f3\u30b0","\u653b\u6483\u306e\u7121\u52b9\u5316"],[22,e,e],[33,e,e],[44,e,e],[55,e,e],[66,"\u30b8\u30e3\u30b9\u30c8\u30df\u30fc\u30c8","\u98db\u3073\u9053\u5177\u306e\u307f\u30ab\u30a6\u30f3\u30bf\u30fc"],[77,e,e],[88,e,e],[99,"\u30db\u30fc\u30e0\u30e9\u30f3","\u3059\u3079\u3066\u306e\u653b\u6483\u306b\u5bfe\u3059\u308b\u30ab\u30a6\u30f3\u30bf\u30fc"],[0,e,e]]})}),r(a,"$getWeaponTableBow",function(){return i(["name","table"],{name:"\u5f13",table:[[11,"\u5f71\u7e2b\u3044","\u9ebb\u75fa\u52b9\u679c\u300c\u6ce8\u610f\u529b\u300d\uff10"],[22,"\u30a2\u30ed\u30fc\u30ec\u30a4\u30f3","\u5168\u4f53\u653b\u6483\u30fb\u56de\u907f\u30fc\uff15\uff10"],[33,"\u901f\u5c04","\uff12\u9023\u7d9a\u653b\u6483"],[44,"\u77ac\u901f\u306e\u77e2","\u9632\u5fa1\u4e0d\u53ef"],[55,"\u30d0\u30e9\u30fc\u30b8\u30b7\u30e5\u30fc\u30c8","\u5168\u4f53\u653b\u6483\u30fb\u76fe\u53d7\u3051\u4e0d\u53ef\u30fb\u653b\u6483\u91cf\uff12\u500d"],[66,"\u8cab\u304d\u306e\u77e2","\u9632\u5fa1\u529b\u7121\u8996\u3001\uff22\u30fb\uff24"],[77,"\u843d\u9cf3\u6ce2","\u56de\u907f\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[88,"\u7686\u6b7b\u306d\u77e2","\u5168\u4f53\u653b\u6483\u3001\u6c17\u7d76\u52b9\u679c\u300c\u6839\u6027\u300d\uff15"],[99,"\u30df\u30ea\u30aa\u30f3\u30c0\u30e9\u30fc","\u4e09\u9023\u7d9a\u653b\u6483"],[0,"\u5922\u60f3\u5f13","\uff22\u30fb\uff24\u3001\u30c0\u30e1\u30fc\u30b8\uff13\u500d"]]})}),r(a,"$getWeaponTableMartialArt",function(){return i(["name","table"],{name:"\u4f53\u8853",table:[[11,"\u96c6\u6c17\u6cd5","\u901a\u5e38\u30c0\u30e1\u30fc\u30b8\u5206\u81ea\u5206\u306e\uff28\uff30\u56de\u5fa9"],[22,"\u30b3\u30f3\u30d3\u30cd\u30fc\u30b7\u30e7\u30f3","\uff12\u9023\u7d9a\u653b\u6483"],[33,"\u9006\u4e00\u672c","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u9632\u5fa1\u529b\u534a\u5206\u3001\u30b9\u30bf\u30f3\u52b9\u679c\u300c\u6839\u6027\u300d\uff10"],[44,"\u30b3\u30fc\u30af\u30b9\u30af\u30ea\u30e5\u30fc\u30d6\u30ed\u30fc","\u9632\u5fa1\u529b\u7121\u8996\u3001\u30c0\u30e1\u30fc\u30b8\uff13\u500d"],[55,"\u7df4\u6c17\u62f3","\u5168\u4f53\u653b\u6483\u30fb\u56de\u907f\u4e0d\u53ef"],[66,"\u30d0\u30d9\u30eb\u30af\u30e9\u30f3\u30d7\u30eb","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\uff22\u30fb\uff24"],[77,"\u30de\u30b7\u30f3\u30ac\u30f3\u30b8\u30e3\u30d6","\uff13\u9023\u7d9a\u653b\u6483"],[88,"\u30ca\u30a4\u30a2\u30ac\u30e9\u30d5\u30a9\u30fc\u30eb","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\uff22\u30fb\uff24\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d"],[99,"\u7f85\u5239\u638c","\u9632\u5fa1\u529b\u7121\u8996\u3001\u9632\u5fa1\u4e0d\u53ef\u3001\uff22\u30fb\uff24\u3001\u30c0\u30e1\u30fc\u30b8\uff13\u500d"],[0,"\u5343\u624b\u89b3\u97f3","\uff15\u9023\u7d9a\u653b\u6483\u3001\u3059\u3079\u3066\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef"]]})}),r(a,"$getWeaponTableMartialArtCounter",function(){return i(["name","table"],{name:"\u4f53\u8853\u30ab\u30a6\u30f3\u30bf\u30fc",table:[[11,"\u30b9\u30a6\u30a7\u30a4\u30d0\u30c3\u30af","\u653b\u6483\u306e\u7121\u52b9\u5316"],[22,e,e],[33,"\u5f53\u3066\u8eab\u6295\u3052","\u30ab\u30a6\u30f3\u30bf\u30fc"],[44,e,e],[55,e,e],[66,"\u30b8\u30e7\u30eb\u30c8\u30ab\u30a6\u30f3\u30bf\u30fc","\u30af\u30ed\u30b9\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\uff22\u30fb\uff24"],[77,e,e],[88,e,e],[99,"\u30ac\u30fc\u30c9\u30ad\u30e3\u30f3\u30bb\u30eb",W("\uff24\uff11\uff10\u3067\u632f\u3063\u305f\u5fc5\u6bba\u6280\u306b\u3088\u308b\u30ab\u30a6\u30f3\u30bf\u30fc",this.$getRandMartialArtCounter())],[0,e,e]]})}),r(a,"$getRandMartialArtCounter",function(){var n,g,u=this,b=e;return n=u.randomizer.$roll_once(10),b=W(P(n,10),n),d(n,110)&&(b=100),g=u.$getWeaponTableMartialArt()["$[]"]("table"),W(" \uff1e ("+n+")",u.$getWeaponSkillText(g,b))}),r(a,"$getWeaponTableBoxing",function(){return i(["name","table"],{name:"\u30dc\u30af\u30b7\u30f3\u30b0",table:[[11,"\u30ef\u30f3\u30fb\u30c4\u30fc","\uff12\u9023\u7d9a\u653b\u6483\u30fb\uff12\u653b\u6483\u76ee\u76fe\u53d7\u3051\u3001\u56de\u907f\u4e0d\u53ef"],[22,"\u30ea\u30d0\u30fc\u30d6\u30ed\u30fc","\u9ebb\u75fa\u52b9\u679c\u300c\u6839\u6027\u300d\uff15"],[33,"\u30d5\u30ea\u30c3\u30ab\u30fc","\uff12\u9023\u7d9a\u653b\u6483\u30fb\u5168\u3066\u76fe\u53d7\u3051\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef"],[44,"\u30b3\u30fc\u30af\u30b9\u30af\u30ea\u30e5\u30fc\u30d6\u30ed\u30fc","\u9632\u5fa1\u529b\u7121\u8996\u3001\u30c0\u30e1\u30fc\u30b8\uff13\u500d"],[55,"\u30ec\u30a4\u30fb\u30ac\u30f3","\u5168\u4f53\u653b\u6483\u3001\uff22\u30fb\uff24\u3001\u967d\u5c5e\u6027\u9b54\u6cd5\u653b\u6483"],[66,"\u30b7\u30e7\u30c3\u30c8\u30ac\u30f3\u30d6\u30ed\u30fc","\u653b\u6483\u91cf\uff11\uff10\u500d"],[77,"\u30cf\u30fc\u30c8\u30d6\u30ec\u30a4\u30af\u30b7\u30e7\u30c3\u30c8","\uff12\u9023\u7d9a\u653b\u6483\u30fb\uff11\u653b\u6483\u76ee\u9632\u5fa1\u529b\u7121\u8996\u3001\u30c0\u30e1\u30fc\u30b8\uff13\u500d\u30fb\uff12\u6483\u76ee\u6575\u7121\u9632\u5099"],[88,"\u30c7\u30f3\u30d7\u30b7\u30fc\u30ed\u30fc\u30eb","\uff13\u9023\u7d9a\u653b\u6483\u30fb\u5168\u3066\uff22\u30fb\uff24"],[99,"\u30d5\u30e9\u30c3\u30b7\u30e5\u30d4\u30b9\u30c8\u30f3\u30de\u30c3\u30cf\u30d1\u30f3\u30c1","\u5168\u4f53\u653b\u6483\u3001\uff22\u30fb\uff24\u3001\u6c17\u7d76\u52b9\u679c\u300c\u6839\u6027\u300d\uff15"],[0,"\u53f3","\u9632\u5fa1\u529b\u7121\u8996\u3001\u30c0\u30e1\u30fc\u30b8\uff11\uff10\u500d"]]})}),r(a,"$getWeaponTableBoxingCounter",function(){return i(["name","table"],{name:"\u30dc\u30af\u30b7\u30f3\u30b0\u30ab\u30a6\u30f3\u30bf\u30fc",table:[[11,"\u30c0\u30c3\u30ad\u30f3\u30b0\u30d6\u30ed\u30fc","\u30ab\u30a6\u30f3\u30bf\u30fc"],[22,"\u30b8\u30e7\u30eb\u30c8\u30ab\u30a6\u30f3\u30bf\u30fc","\u30af\u30ed\u30b9\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\uff22\u30fb\uff24"],[33,e,e],[44,e,e],[55,e,e],[66,e,e],[77,e,e],[88,e,e],[99,e,e],[0,"\u30ce\u30fc\u30ac\u30fc\u30c9\u6226\u6cd5","\u653b\u6483\u306e\u7121\u52b9\u5316\u3001\u6b21\u30bf\u30fc\u30f3\u4ee5\u964d\u306f\u81ea\u5206\u306e\u76fe\u53d7\u3051\u3001\u56de\u907f\u4e0d\u53ef\u3001\u5168\u3066\u306e\u653b\u6483\u306b\uff22\u30fb\uff24"]]})}),r(a,"$getWeaponTableProWrestling",function(){return i(["name","table"],{name:"\u30d7\u30ed\u30ec\u30b9",table:[[11,"\u30dc\u30c7\u30a3\u30b9\u30e9\u30e0","\u76fe\u53d7\u3051\u4e0d\u53ef"],[22,"\u30c9\u30ed\u30c3\u30d7\u30ad\u30c3\u30af","\uff22\u30fb\uff24"],[33,"\u6c34\u8eca\u843d\u3068\u3057","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u6210\u529f\u5ea6\uff0b\uff15"],[44,"\u30ca\u30c3\u30af\u30eb\u30a2\u30ed\u30fc","\uff22\u30fb\uff24\u3001\u9ebb\u75fa\u52b9\u679c\u300c\u6839\u6027\u300d\uff15"],[55,"\u30ef\u30f3\u30fb\u30c4\u30fc\u30fb\u30a8\u30eb\u30dc\u30fc","\uff12\u9023\u7d9a\u653b\u6483"],[66,"\u30d0\u30c3\u30af\u30c9\u30ed\u30c3\u30d7","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d"],[77,"\u6295\u3052\u3063\u653e\u3057\u30b8\u30e3\u30fc\u30de\u30f3","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u9632\u5fa1\u529b\u7121\u8996\u3001\u6210\u529f\u5ea6\uff0b\uff15"],[88,"\u30d1\u30ef\u30fc\u30dc\u30e0","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d\u3001\uff22\u30fb\uff24"],[99,"\u30c7\u30b9\u30d0\u30ec\u30fc\u30dc\u30e0","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u9632\u5fa1\u529b\u7121\u8996\u3001\u30c0\u30e1\u30fc\u30b8\uff12\u500d\u3001\u6c17\u7d76\u52b9\u679c\u300c\u6839\u6027\u300d\uff15"],[0,"\u30b8\u30e3\u30c3\u30af\u30cf\u30de\u30fc","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u9632\u5fa1\u529b\u7121\u8996\u3001\u30c0\u30e1\u30fc\u30b8\uff13\u500d\u3001\u6210\u529f\u5ea6\uff0b\uff11\uff10"]]})}),r(a,"$getWeaponTableProWrestlingCounter",function(){return i(["name","table"],{name:"\u30d7\u30ed\u30ec\u30b9\u30ab\u30a6\u30f3\u30bf\u30fc",table:[[22,"\u30d1\u30ef\u30fc\u30b9\u30e9\u30e0","\u30ab\u30a6\u30f3\u30bf\u30fc"],[55,"\u30a2\u30c3\u30af\u30b9\u30dc\u30f3\u30d0\u30fc","\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\uff22\u30fb\uff24"],[66,e,e],[77,e,e],[88,e,e],[99,e,e],[0,e,e]]})}),r(a,"$getWeaponTableStand",function(){return i(["name","table"],{name:"\u5e7d\u6ce2\u7d0b",table:[[11,"SILER CHARIOT","\u653b\u6483\u91cf\uff15\u500d\u3001\u523a\u3057\u30bf\u30a4\u30d7\u653b\u6483"],[22,"TOWER OF GRAY","\u9632\u5fa1\u529b\u7121\u8996"],[33,"DARK BLUE MOON","\u5168\u4f53\u653b\u6483\u3001\u653b\u6483\u91cf\uff12\u500d\u3001\u6c34\u5c5e\u6027\u65ac\u308a\u30bf\u30a4\u30d7\u653b\u6483"],[44,"EMPEROR","\u56de\u907f\u4e0d\u53ef\u3001\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\u98db\u3073\u9053\u5177\u653b\u6483"],[55,"MAGICIAN's RED","\u30c0\u30e1\u30fc\u30b8\uff12\u500d\u3001\uff22\u30fb\uff24\u3001\u706b\u5c5e\u6027\u9b54\u6cd5\u653b\u6483"],[66,"DEATH 13","\u30c0\u30e1\u30fc\u30b8\uff10\u3001\u5168\u4f53\u653b\u6483\u3001\u6c17\u7d76\u52b9\u679c\u300c\u6839\u6027\u300d\uff15"],[77,"HIEROPHANT GREEN","\u5168\u4f53\u653b\u6483\u3001\uff22\u30fb\uff24\u3001\u6c34\u5c5e\u6027\u653b\u6483"],[88,"VANILLA ICE CREAM","\u76fe\u53d7\u3051\u4e0d\u53ef\u3001\u30ab\u30a6\u30f3\u30bf\u30fc\u4e0d\u53ef\u3001\u9632\u5fa1\u529b\u7121\u8996\u3001\u30c0\u30e1\u30fc\u30b8\uff13\u500d\u3001\uff22\u30fb\uff24"],[99,"THE WORLD","\uff15\u9023\u7d9a\u653b\u6483\u3001\u5168\u3066\u6575\u7121\u9632\u5099"],[0,"STAR PLATINUM","\u653b\u6483\u91cf\uff11\uff15\u500d\u3001\uff22\u30fb\uff24"]]})}),r(a,"$getWeaponTableStandCounter",function(){return i(["name","table"],{name:"\u5e7d\u6ce2\u7d0b\u30ab\u30a6\u30f3\u30bf\u30fc",table:[[11,"ANUBIS","\u6280\u306e\u307f\u30ab\u30a6\u30f3\u30bf\u30fc\u3001\u30c0\u30e1\u30fc\u30b8\uff08\u30ab\u30a6\u30f3\u30bf\u30fc\u3057\u305f\u56de\u6570\u306e\uff12\u4e57\uff09\u500d\u3001\u65ac\u308a\u30bf\u30a4\u30d7\u653b\u6483"],[22,e,e],[33,e,e],[44,e,e],[55,e,e],[66,"YELLOW TEMPERANE","\u9b54\u6cd5\u30fb\u98db\u3073\u9053\u5177\u542b\u3081\u3066\u5168\u3066\u306e\u653b\u6483\u3092\u7121\u52b9\u5316"],[77,e,e],[88,e,e],[99,e,e],[0,e,e]]})}),r(a,"$getWeaponSkillText",function(u,n){try{var b=_("return"),g=e,$=e;return this.$debug("getWeaponSkillText",n),c(u["$nil?"]())||(g="",$="",w(u,"each",[],function(S,p,C){var s=e;if(null==S&&(S=e),null==p&&(p=e),null==C&&(C=e),p=c(s=p)?s:g,g=p,C=c(s=C)?s:$,$=C,!d(S,n["$%"](100)))return e;b.$throw(" \uff1e \u300c"+p+"\u300d"+C)},{$$ret:b})),""}catch(l){if(l===b)return l.$v;throw l}})})}}]);
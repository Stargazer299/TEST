(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[8790],{76:(Y,F,w)=>{w(9993),Opal.queue(function(t){var B,M,P,i,d,g,p,I,U,k=t.module,S=t.klass,b=t.const_set,C=t.send2,j=t.find_super,K=t.def,f=t.truthy,y=t.send,z=t.rb_ge,q=t.rb_gt,h=t.rb_plus,x=t.eqeq,E=[],e=t.nil;return B=E,M=U=[k(E[0],"BCDice")].concat(B),p=[k(U[0],"GameSystem")].concat(M),I=t.$r(p),P=p,d=[i=S(p[0],I("Base"),"Kutulu")].concat(P),g=t.$r(d),i.$$prototype.randomizer=e,b(d[0],"ID","Kutulu"),b(d[0],"NAME","Kutulu"),b(d[0],"SORT_KEY","\u304f\u3068\u3046\u308b\u3046"),b(d[0],"HELP_MESSAGE","\u25a0\u5224\u5b9a\u3000nKU        n: \u30c0\u30a4\u30b9\u6570\n\n\u4f8b)3KU: \u30c0\u30a4\u30b9\u30923\u500b\u632f\u3063\u3066\u3001\u305d\u306e\u7d50\u679c\u3092\u8868\u793a(\u30ae\u30ea\u30ae\u30ea\u3067\u306e\u6210\u529f\u3082\u8868\u793a)\n\n\u25a0\u5bfe\u6297\u5224\u5b9a\u3000nKR        n: \u30c0\u30a4\u30b9\u6570\n\n\u4f8b)2KR: \u30c0\u30a4\u30b9\u30922\u500b\u632f\u3063\u3066\u3001\u305d\u306e\u7d50\u679c\u3092\u8868\u793a\u3002\u5bfe\u6297\u5224\u5b9a\u7528\u306e3\u6841\u306e\u6570\u5b57\u3082\u51fa\u529b\u3002(\u5927\u304d\u3044\u65b9\u304c\u52dd\u5229)\n"),i.$register_prefix("\\dK[UR]"),K(i,"$initialize",function a(s){var n=this;return a.$$p=null,C(n,j(n,"initialize",a,!1,!0),"initialize",[s],null),n.sort_barabara_dice=!0}),K(i,"$eval_game_system_specific_command",function(s){var n;return f(n=this.$resolute_action(s))?n:this.$resolute_competition(s)}),i.$private(),K(i,"$resolute_action",function(s){var n=e,o=e,r=e,u=e,c=e,l=e;return n=/(\d)KU/.$match(s),f(n)?(u="("+(o=n["$[]"](1).$to_i())+"KU) \uff1e "+(r=this.randomizer.$roll_barabara(o,6).$sort()).$join(","),c=y(r,"count",[],function(_){return null==_&&(_=e),z(_,4)}),l=r.$count(4),f(q(c,0))?(u=h(u," \uff1e \u6210\u529f\u6570"+c),x(c,1)&&x(l,1)&&(u=h(u," \uff1e *\u30ae\u30ea\u30ae\u30ea\u3067\u306e\u6210\u529f")),g("Result").$success(u)):(u=h(u," \uff1e \u5931\u6557"),g("Result").$failure(u))):e}),K(i,"$resolute_competition",function(s){var n=e,o=e,r=e,m=e,u=e,c=e,l=e,_=e;return n=/(\d)KR/.$match(s),f(n)?(o=n["$[]"](1).$to_i(),m=(r=this.randomizer.$roll_barabara(o,6).$sort()).$join(","),u=r.$count(6),c=r.$count(5),l=y(r,"count",[],function(R){return null==R&&(R=e),z(R,4)}),_="("+o+"KR) \uff1e "+m+" \uff1e "+this.$format("(%d%d%d)",l,u,c),f(q(l,0))?g("Result").$success(_):g("Result").$failure(_)):e})})}}]);
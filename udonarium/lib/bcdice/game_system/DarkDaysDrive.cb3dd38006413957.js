(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[5736],{3543:(L,x,C)=>{C(9993),Opal.queue(function(T){var v,g,H,l,t,e,o,G,m,_=T.module,S=T.klass,A=T.const_set,E=T.send2,h=T.find_super,I=T.def,b=T.eqeq,D=T.truthy,y=T.rb_le,f=T.rb_ge,d=T.hash2,u=T.hash,w=[],r=T.nil,n=T.$$$;return v=w,g=m=[_(w[0],"BCDice")].concat(v),o=[_(m[0],"GameSystem")].concat(g),G=T.$r(o),H=o,t=[l=S(o[0],G("Base"),"DarkDaysDrive")].concat(H),e=T.$r(t),l.$$prototype.randomizer=r,A(t[0],"ID","DarkDaysDrive"),A(t[0],"NAME","\u30c0\u30fc\u30af\u30c7\u30a4\u30ba\u30c9\u30e9\u30a4\u30d6"),A(t[0],"SORT_KEY","\u305f\u3042\u304f\u3066\u3044\u3059\u3068\u3089\u3044\u3075"),A(t[0],"HELP_MESSAGE","\u30fb\u5224\u5b9a\n\u30b9\u30da\u30b7\u30e3\u30eb\uff0f\u30d5\u30a1\u30f3\u30d6\u30eb\uff0f\u6210\u529f\uff0f\u5931\u6557\u3092\u5224\u5b9a\n\u30fb\u5404\u7a2e\u8868\nRTTn \u30e9\u30f3\u30c0\u30e0\u7279\u6280\u6c7a\u5b9a\u8868(n\uff1a\u5206\u91ce\u756a\u53f7\u3001\u7701\u7565\u53ef\u80fd)\nRCT  \u30e9\u30f3\u30c0\u30e0\u5206\u91ce\u6c7a\u5b9a\u8868\nABRT \u30a2\u30d3\u30ea\u30c6\u30a3\u6c7a\u5b9a\u8868\nDT \u30c0\u30e1\u30fc\u30b8\u8868\nFT \u5931\u6557\u8868\nGJT \u5927\u6210\u529f\u8868\nITT \u79fb\u52d5\u30c8\u30e9\u30d6\u30eb\u8868\nNTT \u4efb\u52d9\u30c8\u30e9\u30d6\u30eb\u8868\nSTT \u8972\u6483\u30c8\u30e9\u30d6\u30eb\u8868\nHTT \u5909\u8eab\u30c8\u30e9\u30d6\u30eb\u8868\nDET \u30c9\u30e9\u30a4\u30d6\u30a4\u30d9\u30f3\u30c8\u8868\nBET \u30d6\u30ec\u30a4\u30af\u30a4\u30d9\u30f3\u30c8\u8868\nCT \u30ad\u30e3\u30f3\u30d7\u8868\nKZT \u95a2\u4fc2\u5c5e\u6027\u8868\nIA \u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\u6c7a\u5b9a\u8868\n IAA \u9060\u8ddd\u96e2 IAB \u79fb\u52d5 IAC \u8fd1\u8ddd\u96e2 IAD \u5584\u4eba IAE \u60aa\u4eba\n IAF \u5e7c\u3044 IAG \u30d0\u30ab IAH \u6e0b\u3044 IAI \u8ce2\u3044 IAJ \u8d85\u81ea\u7136\nIAX \u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\u6c7a\u5b9a\u8868 \u2192 IA\u8868\n\u25a0\u672c\u683c\u7684\u306a\u6226\u95d8\nCAC \u30bb\u30f3\u30bf\u30fc\u306e\u884c\u52d5\u6c7a\u5b9a\nDDC \u5bfe\u8a71\u30c0\u30e1\u30fc\u30b8\u8868\n\u30fbD66\u30c0\u30a4\u30b9\u6607\u9806\n"),I(l,"$initialize",function c($){var i=this;return c.$$p=null,E(i,h(i,"initialize",c,!1,!0),"initialize",[$],null),i.d66_sort_type=n(e("D66SortType"),"ASC")}),I(l,"$result_2d6",function($,a,i,P,s){return b(P,">=")?D(y(a,2))?e("Result").$fumble("\u30d5\u30a1\u30f3\u30d6\u30eb(\u5224\u5b9a\u5931\u6557\u3002\u5931\u6557\u8868(FT)\u3092\u8ffd\u52a0\u3067\uff11\u56de\u632f\u308b)"):D(f(a,12))?e("Result").$critical("\u30b9\u30da\u30b7\u30e3\u30eb(\u5224\u5b9a\u6210\u529f\u3002\u5927\u6210\u529f\u8868(GJT)\u3092\uff11\u56de\u4f7f\u7528\u53ef\u80fd)"):b(s,"?")?e("Result").$nothing():D(f($,s))?e("Result").$success("\u6210\u529f"):e("Result").$failure("\u5931\u6557"):r}),I(l,"$eval_game_system_specific_command",function($){var i,P,a=this;return D(i=D(P=a.$roll_tables($,e("TABLES")))?P:a.$command_iax($))?i:e("RTT").$roll_command(a.$randomizer(),$)}),l.$private(),I(l,"$command_iax",function($){var i=r,P=r;return b($,"IAX")?(P=(i=e("TABLES")["$[]"]("IA").$choice(this.randomizer.$roll_d66(n(e("D66SortType"),"ASC")))).$body().$match(/\(([A-Z]+)\)/),D(P)?i+" \uff1e "+e("TABLES")["$[]"](P["$[]"](1)).$choice(this.randomizer.$roll_once(6)):i):r}),A(t[0],"RTT",n(e("DiceTable"),"SaiFicSkillTable").$new([["\u80cc\u666f",["\u546a\u3044","\u7d76\u671b","\u5b64\u5150","\u6b7b\u5225","\u4e00\u822c\u4eba","\u7372\u7269","\u61a7\u308c","\u53cb\u4eba","\u6311\u6226\u8005","\u8840\u7e01","\u6c38\u9060"]],["\u4ed5\u4e8b",["\u8105\u8feb","\u6368\u3066\u308b","\u62c9\u81f4","\u76d7\u3080","\u30cf\u30c3\u30ad\u30f3\u30b0","\u4fb5\u5165","\u5909\u88c5","\u3060\u307e\u3059","\u96a0\u3059","\u306e\u305e\u304f","\u805e\u304d\u51fa\u3059"]],["\u635c\u7d22",["\u30c8\u30a4\u30ec","\u98df\u4e8b","\u81ea\u7136","\u904b\u52d5\u65bd\u8a2d","\u8857","\u53cb\u611b\u4f1a","\u6697\u90e8","\u53f2\u8de1","\u6587\u5316\u65bd\u8a2d","\u6e29\u6cc9","\u5bbf\u6cca"]],["\u8da3\u5473",["\u304a\u9152","\u30b0\u30eb\u30e1","\u30c0\u30f3\u30b9","\u30b9\u30dd\u30fc\u30c4","\u5065\u5eb7","\u30d5\u30a1\u30c3\u30b7\u30e7\u30f3","\u604b\u611b","\u30d5\u30a7\u30b9","\u97f3\u697d","\u7269\u8a9e","\u5b66\u554f"]],["\u96f0\u56f2\u6c17",["\u3060\u3089\u3057\u306a\u3044","\u306e\u3093\u3073\u308a","\u6696\u304b\u3044","\u660e\u308b\u3044","\u7518\u3044","\u666e\u901a","\u6d17\u7df4","\u6e0b\u3044","\u9759\u304b","\u771f\u9762\u76ee","\u51b7\u305f\u3044"]],["\u6226\u95d8\u6cd5",["\u5fcd\u8853","\u53e4\u6b66\u8853","\u5263\u8853","\u68d2\u8853","\u62f3\u6cd5","\u30b1\u30f3\u30ab","\u7dcf\u5408\u683c\u95d8\u6280","\u30ec\u30b9\u30ea\u30f3\u30b0","\u8ecd\u968a\u683c\u95d8\u8853","\u5c04\u6483","\u5f13\u8853"]]],d(["rtt_format"],{rtt_format:"\u30e9\u30f3\u30c0\u30e0\u6307\u5b9a\u7279\u6280\u8868(%<category_dice>d,%<row_dice>d) \uff1e %<category_name>s\u300a%<skill_name>s\u300b"}))),A(t[0],"TABLES",d(["ABRT","DT","FT","GJT","ITT","NTT","STT","HTT","DET","BET","CT","KZT","IA","IAA","IAB","IAC","IAD","IAE","IAF","IAG","IAH","IAI","IAJ","CAC","DDC"],{ABRT:n(e("DiceTable"),"D66Table").$new("\u30a2\u30d3\u30ea\u30c6\u30a3\u6c7a\u5b9a\u8868",n(e("D66SortType"),"ASC"),u(11,"\u30a4\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u30fc(P155)",12,"\u904b\u9001\u696d(P155)",13,"\u904b\u8ee2\u624b(P155)",14,"\u30ab\u30d5\u30a7\u5e97\u54e1(P155)",15,"\u8da3\u5473\u4eba(P155)",16,"\u30b7\u30e7\u30c3\u30d7\u5e97\u54e1(P155)",22,"\u6b63\u793e\u54e1(P156)",23,"\u5927\u5de5(P156)",24,"\u63a2\u5075(P156)",25,"\u30d0\u30a4\u30e4\u30fc(P156)",26,"\u4ff3\u512a(P156)",33,"\u6d3e\u9063\u793e\u54e1(P156)",34,"\u72af\u7f6a\u8005(P157)",35,"\u30d0\u30f3\u30c9\u30de\u30f3(P157)",36,"\u30d0\u30fc\u30c6\u30f3\u30c0\u30fc(P157)",44,"\u30d2\u30e2(P157)",45,"\u30db\u30b9\u30c8(P157)",46,"\u30db\u30c6\u30eb\u30de\u30f3(P157)",55,"\u7121\u8077(P158)",56,"\u7528\u5fc3\u68d2(P158)",66,"\u6599\u7406\u4eba(P158)")),DT:n(e("DiceTable"),"Table").$new("\u30c0\u30e1\u30fc\u30b8\u8868","1D6",["\u75b2\u308c","\u75db\u307f","\u7126\u308a","\u4e0d\u8abf","\u30b7\u30e7\u30c3\u30af","\u30b1\u30ac"]),FT:n(e("DiceTable"),"Table").$new("\u5931\u6557\u8868","1D6",["\u4efb\u610f\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u4e00\u3064\u5931\u3046","\uff11\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u308b","\u3010\u6240\u6301\u91d1\u30e9\u30f3\u30af\u3011\u304c\uff11\u6e1b\u5c11\u3059\u308b\uff08\u6700\u4f4e\uff10\uff09","\uff12\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u308b","\u3010\u6240\u6301\u91d1\u30e9\u30f3\u30af\u3011\u304c\uff12\u6e1b\u5c11\u3059\u308b\uff08\u6700\u4f4e\uff10\uff09","\u6a19\u7684\u30ec\u30d9\u30eb\u304c\uff11\u5897\u52a0\u3059\u308b"]),GJT:n(e("DiceTable"),"Table").$new("\u5927\u6210\u529f\u8868","1D6",["\u4e3b\u4eba\u304b\u3089\u304a\u8912\u3081\u306e\u8a00\u8449\u3092\u3044\u305f\u3060\u304f","\u30c0\u30e1\u30fc\u30b8\u3092\uff11\u56de\u5fa9\u3059\u308b","\u30c0\u30e1\u30fc\u30b8\u3092\uff11\u56de\u5fa9\u3059\u308b","\u95a2\u4fc2\u306e\u30c1\u30a7\u30c3\u30af\u3092\u4e00\u3064\u6d88\u3059","\u30c0\u30e1\u30fc\u30b8\u3092\uff12\u56de\u5fa9\u3059\u308b","\u3010\u6240\u6301\u91d1\u30e9\u30f3\u30af\u3011\u304c\uff11\u5897\u52a0\u3059\u308b"]),ITT:n(e("DiceTable"),"Table").$new("\u79fb\u52d5\u30c8\u30e9\u30d6\u30eb\u8868","1D6",["\u691c\u554f\uff08P220)","\u6025\u306a\u8179\u75db\uff08P220)","\u9ed2\u7159\uff08P221)","\u868a\uff08P221)","\u843d\u3068\u3057\u7269\uff08P222)","\u7a7a\u8179\uff08P222)"]),NTT:n(e("DiceTable"),"Table").$new("\u4efb\u52d9\u30c8\u30e9\u30d6\u30eb\u8868","1D6",["\u901a\u5831\uff08P223)","\u30d7\u30ec\u30c3\u30b7\u30e3\u30fc\uff08P223)","\u30de\u30ca\u30fc\u9055\u53cd\uff08P224)","\u5fd7\u9858\u8005\uff08P224)","\u4ef2\u9593\u5272\u308c\uff08P225)","\u72e9\u4eba\u306e\u5642\uff08P225)"]),STT:n(e("DiceTable"),"Table").$new("\u8972\u6483\u30c8\u30e9\u30d6\u30eb\u8868","1D6",["\u5b64\u72ec\u306a\u8ffd\u8de1\u8005\uff08P226)","\u5730\u5143\u306e\u82e5\u8005\u305f\u3061\uff08P226)","V-FILES\uff08P227)","\u30c1\u30f3\u30d4\u30e9\u306e\u7fa4\u308c\uff08P227)","\u5b64\u72ec\u306a\u72e9\u4eba\uff08P228)","\u72e9\u4eba\u306e\u7fa4\u308c\uff08P228)"]),HTT:n(e("DiceTable"),"D66Table").$new("\u5909\u8eab\u30c8\u30e9\u30d6\u30eb\u8868",n(e("D66SortType"),"NO_SORT"),u(11,"\u3042\u308c\u3092\u98df\u3079\u305f\u3044(P214)",12,"\u3042\u308c\u3092\u7740\u305f\u3044(P214)",13,"\u3042\u308c\u3092\u898b\u305f\u3044(P215)",14,"\u3042\u308c\u3092\u72e9\u308a\u305f\u3044(P215)",15,"\u3042\u308c\u3092\u8e0a\u308a\u305f\u3044(P216)",16,"\u3042\u308c\u306b\u5165\u308a\u305f\u3044(P216)",21,"\u5f37\u596a(P217)",22,"\u66b4\u884c(P217)",23,"\u8650\u6bba(P218)",24,"\u8a98\u62d0(P218)",25,"\u7121\u7cbe(P219)",26,"\u5931\u8e2a(P219)",31,"\u3042\u308c\u3092\u98df\u3079\u305f\u3044(P214)",32,"\u3042\u308c\u3092\u7740\u305f\u3044(P214)",33,"\u3042\u308c\u3092\u898b\u305f\u3044(P215)",34,"\u3042\u308c\u3092\u72e9\u308a\u305f\u3044(P215)",35,"\u3042\u308c\u3092\u8e0a\u308a\u305f\u3044(P216)",36,"\u3042\u308c\u306b\u5165\u308a\u305f\u3044(P216)",41,"\u5f37\u596a(P217)",42,"\u66b4\u884c(P217)",43,"\u8650\u6bba(P218)",44,"\u8a98\u62d0(P218)",45,"\u7121\u7cbe(P219)",46,"\u5931\u8e2a(P219)",51,"\u3042\u308c\u3092\u98df\u3079\u305f\u3044(P214)",52,"\u3042\u308c\u3092\u7740\u305f\u3044(P214)",53,"\u3042\u308c\u3092\u898b\u305f\u3044(P215)",54,"\u3042\u308c\u3092\u72e9\u308a\u305f\u3044(P215)",55,"\u3042\u308c\u3092\u8e0a\u308a\u305f\u3044(P216)",56,"\u3042\u308c\u306b\u5165\u308a\u305f\u3044(P216)",61,"\u5f37\u596a(P217)",62,"\u66b4\u884c(P217)",63,"\u8650\u6bba(P218)",64,"\u8a98\u62d0(P218)",65,"\u7121\u7cbe(P219)",66,"\u5931\u8e2a(P219)")),DET:n(e("DiceTable"),"Table").$new("\u30c9\u30e9\u30a4\u30d6\u30a4\u30d9\u30f3\u30c8\u8868","1D6",["\u8eab\u306e\u4e0a\u8a71\u3092\u3059\u308b\u3002\u76ee\u6a19\u304c\u80cc\u666f\u5206\u91ce\u3067\u9078\u629e\u3057\u3066\u3044\u308b\u7279\u6280\u304c\u30c9\u30e9\u30a4\u30d6\u5224\u5b9a\u306e\u6307\u5b9a\u7279\u6280\u306b\u306a\u308b\u3002","\u30b9\u30ad\u30eb\u81ea\u6162\u3092\u3059\u308b\u3002\u76ee\u6a19\u304c\u4ed5\u4e8b\u5206\u91ce\u3067\u9078\u629e\u3057\u3066\u3044\u308b\u7279\u6280\u304c\u30c9\u30e9\u30a4\u30d6\u5224\u5b9a\u306e\u6307\u5b9a\u7279\u6280\u306b\u306a\u308b\u3002","\u3080\u304b\u3057\u884c\u3063\u305f\u5834\u6240\u306e\u8a71\u3092\u3059\u308b\u3002\u76ee\u6a19\u304c\u635c\u7d22\u5206\u91ce\u3067\u9078\u629e\u3057\u3066\u3044\u308b\u7279\u6280\u304c\u30c9\u30e9\u30a4\u30d6\u5224\u5b9a\u306e\u6307\u5b9a\u7279\u6280\u306b\u306a\u308b\u3002","\u8da3\u5473\u306e\u8a71\u3092\u3059\u308b\u3002\u76ee\u6a19\u304c\u8da3\u5473\u5206\u91ce\u3067\u9078\u629e\u3057\u3066\u3044\u308b\u7279\u6280\u304c\u30c9\u30e9\u30a4\u30d6\u5224\u5b9a\u306e\u6307\u5b9a\u7279\u6280\u306b\u306a\u308b\u3002","\u30c6\u30fc\u30de\u304c\u306a\u3044\u96d1\u8ac7\u3092\u3059\u308b\u3002\u76ee\u6a19\u304c\u96f0\u56f2\u6c17\u5206\u91ce\u3067\u9078\u629e\u3057\u3066\u3044\u308b\u7279\u6280\u304c\u30c9\u30e9\u30a4\u30d6\u5224\u5b9a\u306e\u6307\u5b9a\u7279\u6280\u306b\u306a\u308b\u3002","\u7269\u9a12\u306a\u8a71\u3092\u3059\u308b\u3002\u76ee\u6a19\u304c\u6226\u95d8\u6cd5\u5206\u91ce\u3067\u9078\u629e\u3057\u3066\u3044\u308b\u7279\u6280\u304c\u30c9\u30e9\u30a4\u30d6\u5224\u5b9a\u306e\u6307\u5b9a\u7279\u6280\u306b\u306a\u308b\u3002"]),BET:n(e("DiceTable"),"Table").$new("\u30d6\u30ec\u30a4\u30af\u30a4\u30d9\u30f3\u30c8\u8868","1D6",["\u30a4\u30b1\u30e1\u30f3\u306e\u8eca\u306f\u98a8\u5149\u660e\u7f8e\u306a\u5834\u6240\u306b\u5230\u7740\u3059\u308b\u3002197\u30da\u30fc\u30b8\u306e\u300c\u89b3\u5149\u5730\u300d\u3092\u53c2\u7167\u3002","\u30a4\u30b1\u30e1\u30f3\u306e\u8eca\u306f\u660e\u308b\u3044\u5149\u306b\u7167\u3089\u3055\u308c\u305f\u5c0f\u3055\u306a\u5e97\u306b\u5230\u7740\u3059\u308b\u3002197\u30da\u30fc\u30b8\u306e\u300c\u30b3\u30f3\u30d3\u30cb\u300d\u3092\u53c2\u7167\u3002","\u30a4\u30b1\u30e1\u30f3\u306e\u8eca\u306f\u5de8\u5927\u304b\u3064\u4f55\u3067\u3082\u58f2\u3063\u3066\u3044\u308b\u5e97\u306b\u5230\u7740\u3059\u308b\u3002198\u30da\u30fc\u30b8\u306e\u300c\u30db\u30fc\u30e0\u30bb\u30f3\u30bf\u30fc\u300d\u3092\u53c2\u7167\u3002","\u30a4\u30b1\u30e1\u30f3\u306e\u8eca\u306f\u30c9\u30e9\u30a4\u30d0\u30fc\u305f\u3061\u306e\u61a9\u3044\u306e\u5730\u306b\u5230\u7740\u3059\u308b\u3002198\u30da\u30fc\u30b8\u306e\u300c\u30b5\u30fc\u30d3\u30b9\u30a8\u30ea\u30a2\u300d\u3092\u53c2\u7167\u3002","\u30a4\u30b1\u30e1\u30f3\u306e\u8eca\u306f\u5927\u304d\u306a\u30b5\u30fc\u30d3\u30b9\u30a8\u30ea\u30a2\u306e\u3088\u3046\u306a\u5834\u6240\u306b\u5230\u7740\u3059\u308b\u3002199\u30da\u30fc\u30b8\u306e\u300c\u9053\u306e\u99c5\u300d\u3092\u53c2\u7167\u3002","\u30a4\u30b1\u30e1\u30f3\u306e\u8eca\u306f\u95c7\u306e\u5e95\u306b\u96a0\u3055\u308c\u305f\u79d8\u5bc6\u306e\u5834\u6240\u306b\u5230\u7740\u3059\u308b\u3002199\u30da\u30fc\u30b8\u306e\u300c\u53cb\u611b\u4f1a\u652f\u90e8\u300d\u3092\u53c2\u7167\u3002"]),CT:n(e("DiceTable"),"Table").$new("\u30ad\u30e3\u30f3\u30d7\u8868","1D6",["\u7121\u6599\u4eee\u7720\u6240\u30fb\u3044\u3044\u611f\u3058\u306e\u7a7a\u304d\u5730\uff1a\u5b9a\u54e1\u7121\u5236\u9650\uff0f\u5c45\u4f4f\u6027-2\uff0f\u4fa1\u683c0\uff0f\u767a\u898b\u73872","\u30ab\u30d7\u30bb\u30eb\u30db\u30c6\u30eb\uff1a\u5b9a\u54e11\uff0f\u5c45\u4f4f\u6027-1\uff0f\u4fa1\u683c3\uff0f\u767a\u898b\u73872","\u30e9\u30d6\u30db\u30c6\u30eb\uff1a\u5b9a\u54e12\uff0f\u5c45\u4f4f\u60270\uff0f\u4fa1\u683c4\uff0f\u767a\u898b\u73871","\u30d3\u30b8\u30cd\u30b9\u30db\u30c6\u30eb\uff1a\u5b9a\u54e12\uff0f\u5c45\u4f4f\u60270\uff0f\u4fa1\u683c4\uff0f\u767a\u898b\u73871","\u89b3\u5149\u30db\u30c6\u30eb\uff1a\u5b9a\u54e14\uff0f\u5c45\u4f4f\u60271\uff0f\u4fa1\u683c5\uff0f\u767a\u898b\u73871","\u9ad8\u7d1a\u30db\u30c6\u30eb\uff1a\u5b9a\u54e14\uff0f\u5c45\u4f4f\u60272\uff0f\u4fa1\u683c6\uff0f\u767a\u898b\u73870"]),KZT:n(e("DiceTable"),"Table").$new("\u95a2\u4fc2\u5c5e\u6027\u8868","1D6",["\u8efd\u8511","\u53cd\u611f","\u6df7\u4e71","\u8208\u5473","\u5171\u611f","\u61a7\u308c"]),IA:n(e("DiceTable"),"D66Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\u6c7a\u5b9a\u8868",n(e("D66SortType"),"ASC"),u(11,"\u9060\u8ddd\u96e2(IAA)",12,"\u9060\u8ddd\u96e2(IAA)",13,"\u79fb\u52d5(IAB)",14,"\u79fb\u52d5(IAB)",15,"\u8fd1\u8ddd\u96e2(IAC)",16,"\u8fd1\u8ddd\u96e2(IAC)",22,"\u5584\u4eba(IAD)",23,"\u5584\u4eba(IAD)",24,"\u60aa\u4eba(IAE)",25,"\u60aa\u4eba(IAE)",26,"\u5e7c\u3044(IAF)",33,"\u5e7c\u3044(IAF)",34,"\u30d0\u30ab(IAG)",35,"\u30d0\u30ab(IAG)",36,"\u6e0b\u3044(IAH)",44,"\u6e0b\u3044(IAH)",45,"\u8ce2\u3044(IAI)",46,"\u8ce2\u3044(IAI)",55,"\u8d85\u81ea\u7136(IAJ)",56,"\u8d85\u81ea\u7136(IAJ)",66,"\u632f\u308a\u76f4\u3057or\u81ea\u7531\u9078\u629e")),IAA:n(e("DiceTable"),"Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u9060\u8ddd\u96e2\uff09\u8868(P172)","1D6",["\u76ee\u3092\u5408\u308f\u305b\u3066\u5fae\u7b11\u3080\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u5834\u6240\u3092\u8b72\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u9aea\u3092\u304b\u304d\u3042\u3052\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u8907\u96d1\u306a\u30dd\u30fc\u30ba\u3067\u5ea7\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u7269\u6182\u3052\u306a\u8868\u60c5\u3067\u632f\u308a\u8fd4\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09","\u3082\u306e\u3092\u4e0a\u306b\u6301\u3064\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09"]),IAB:n(e("DiceTable"),"Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u79fb\u52d5\uff09\u8868(P172)","1D6",["\u8eca\u9053\u5074\u3092\u6b69\u304f\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u4e57\u308a\u7269\u304b\u3089\u964d\u308a\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u771f\u5263\u306a\u8868\u60c5\u3067\u8fd1\u3065\u304f\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u99ac\u306b\u4e57\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09","\u30c0\u30e1\u30fc\u30b8\u3092\u53d7\u3051\u3064\u3064\u79fb\u52d5\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09","\u77ac\u9593\u79fb\u52d5\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09"]),IAC:n(e("DiceTable"),"Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u8fd1\u8ddd\u96e2\uff09\u8868(P173)","1D6",["\u9ed9\u3063\u3066\u898b\u3064\u3081\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a3\uff09","\u3061\u3087\u3063\u3068\u3057\u305f\u30d7\u30ec\u30bc\u30f3\u30c8\uff08\u304b\u3063\u3053\u3088\u3055\uff1a3\uff09","\u984e\u30af\u30a4\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u58c1\u30c9\u30f3\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u304a\u59eb\u69d8\u62b1\u3063\u3053\uff08\u304b\u3063\u3053\u3088\u3055\uff1a7\uff09","\u5e8a\u30c9\u30f3\uff08\u304b\u3063\u3053\u3088\u3055\uff1a7\uff09"]),IAD:n(e("DiceTable"),"Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u5584\u4eba\uff09\u8868(P173)","1D6",["\u624b\u3092\u5f15\u3044\u3066\u9003\u3052\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u6bdb\u5e03\u3092\u639b\u3051\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u5b88\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u7b11\u3063\u3066\u53bb\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u5168\u3066\u3092\u6367\u3052\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09","\u60aa\u5815\u3061\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09"]),IAE:n(e("DiceTable"),"Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u60aa\u4eba\uff09\u8868(P174)","1D6",["\u653b\u6483\u3059\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u6697\u304f\u7b11\u3046\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u596a\u3046\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u76ee\u8ad6\u898b\u3092\u53e3\u306b\u3059\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09","\u7f60\u306b\u304b\u3051\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09","\u6539\u5fc3\u3059\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09"]),IAF:n(e("DiceTable"),"Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u5e7c\u3044\uff09\u8868(P174)","1D6",["\u7518\u3048\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a3\uff09","\u75b2\u308c\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a3\uff09","\u7121\u90aa\u6c17\u306a\u767a\u8a00\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u304a\u306d\u3060\u308a\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u4e0a\u76ee\u9063\u3044\uff08\u304b\u3063\u3053\u3088\u3055\uff1a7\uff09","\u62b1\u304d\u3064\u304f\uff08\u304b\u3063\u3053\u3088\u3055\uff1a7\uff09"]),IAG:n(e("DiceTable"),"Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u30d0\u30ab\uff09\u8868(P175)","1D6",["\u82e6\u60a9\u3059\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u5c48\u8a17\u306e\u306a\u3044\u7b11\u9854\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u8ee2\u3076\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u53eb\u3076\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09","\u9593\u9055\u3048\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09","\u6016\u304c\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09"]),IAH:n(e("DiceTable"),"Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u6e0b\u3044\uff09\u8868(P175)","1D6",["\u8aac\u6559\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u6c17\u3065\u304b\u305b\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u898b\u5b88\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u6b8b\u5fc3\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u79f0\u3048\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09","\u3044\u3044\u4f4d\u7f6e\u3092\u53d6\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09"]),IAI:n(e("DiceTable"),"Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u8ce2\u3044\uff09\u8868(P176)","1D6",["\u96e3\u3057\u3044\u672c\u3092\u8aad\u3080\uff08\u304b\u3063\u3053\u3088\u3055\uff1a3\uff09","\u30a2\u30c9\u30d0\u30a4\u30b9\u3092\u3059\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a3\uff09","\u773c\u93e1\u3092\u6301\u3061\u4e0a\u3052\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u72b6\u6cc1\u3092\u89e3\u8aac\u3059\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u8a08\u7b97\u3067\u304d\u306a\u304f\u306a\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a7\uff09","\u5927\u4e08\u592b\u3060\u3068\u8a00\u3046\uff08\u304b\u3063\u3053\u3088\u3055\uff1a7\uff09"]),IAJ:n(e("DiceTable"),"Table").$new("\u30a4\u30b1\u30e1\u30f3\u30a2\u30af\u30b7\u30e7\u30f3\uff08\u8d85\u81ea\u7136\uff09\u8868(P176)","1D6",["\u6c34\u306b\u6fe1\u308c\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u98a8\u3092\u7e8f\u3046\uff08\u304b\u3063\u3053\u3088\u3055\uff1a4\uff09","\u5730\u5272\u308c\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u706b\u3092\u653e\u3064\uff08\u304b\u3063\u3053\u3088\u3055\uff1a5\uff09","\u95c7\u3092\u751f\u307f\u51fa\u3059\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09","\u5149\u308b\uff08\u304b\u3063\u3053\u3088\u3055\uff1a6\uff09"]),CAC:n(e("DiceTable"),"Table").$new("\u30bb\u30f3\u30bf\u30fc\u306e\u884c\u52d5\u6c7a\u5b9a\u8868","1d6",["\u9003\u8d70","\u4e0d\u610f\u6253\u3061","\u9023\u7d9a\u884c\u52d5","\u5bfe\u8a71","\u5a01\u5687","\u653b\u6483"]),DDC:n(e("DiceTable"),"Table").$new("\u5bfe\u8a71\u30c0\u30e1\u30fc\u30b8\u8868","1d6",["\u7126\u308a","\u7126\u308a","\u4e0d\u8abf","\u4e0d\u8abf","\u30b7\u30e7\u30c3\u30af","\u30b7\u30e7\u30c3\u30af"])}).$freeze()),l.$register_prefix(e("RTT").$prefixes(),e("TABLES").$keys())})}}]);
document.write('<style class="app-loading">article img{display:none}</style>');
xu.r(function(v){
	var menu=xu.body.querySelector(".menu"),
	on={
		menu:function(){
			xu.float(menu,0,1);
		},
		go:function(a){
			return location=a;
		},
		cu:function(a){
			xu.body.querySelector("[name=icu]").click();
		}
	},
	app,x=xu.new(xu.body,app=v.app={
		on:on,pjs:0,content:0,
		page:function(rt,i){
			var a,b,m=7,h=m/2|0;
			if(i<Math.round(m/2+.5))a=1,b=m;
			else{a=i-h;b=i+h}
			for(;a<=b;a++)rt(a);
		},
		inttime:function(i){
			var a=i%60,b,c;
			i=i/60|0;
			b=i%60;
			c=i/60|0;
			return ("0"+c).substr(-2)+":"+("0"+b).substr(-2)+":"+("0"+a).substr(-2);
		},
		ctl:function(a,b){return xu.post(b,this.pjs+a)},
		deploy:function(a){
			if(location.protocol=="http:"){
				a=xu.body.querySelector(".https");
				a.className+=" on";
				a.href="https"+location.toString().substr(4);
			}
		}
	});

	var r=xu.html.querySelector("[src$='a.js']");
	app.pjs=r.src.replace(/[^\/]+$/,"");

	x.url_prefix=function(a){return app.pjs+"res/"+a+".js"};
	x.load(0,0,function(){
		xu.head.removeChild(xu.doc.querySelector("style.app-loading"));

		a=xu.doc.querySelector("[autofocus]");
		if(a)a.focus();
	});

	try{
		app.deploy();
	}catch(e){}

	addEventListener("click",function(e){
		for(var p=e.target,i=16;p&&i>0;p=p.parentNode,i--){
			switch(p.constructor){
			case HTMLButtonElement:
				xu.ncall(on,p,e);
				z(app.content);
				return;
			case HTMLDivElement:
				if(xu.ncall(on,p,e))return;
			}
		}
		xu.float(0,0,e);
		function z(a){if(a)xu.ncall(a.on,p,e)}
	});
})
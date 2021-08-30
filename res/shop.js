xu.t("shop",function(m,app){
	m.exports=function(){
		var content=this,
		cat=this.querySelector(".cat"),
		pri=this.querySelectorAll(".price label i"),
		on={
			cat:function(){
				xu.toggle(cat);
			},
			ftr:function(a,b){
				var z=content.querySelector("[name="+a+"].f"+b);
				z.checked=!z.checked;
				z.focus();
			},
			flr:function(){
				content.querySelector(".filter [name=filter]").click();
			},
			pri_min:function(){
				self.pri_com(this,pri[0]);
			},
			pri_max:function(){
				self.pri_com(this,pri[1]);
			}
		},
		self={on:on,freg:null,
			pri_com:function(a,b){
				b.innerHTML=a.value.replace(/\B(?=(\d{3})+(?!\d))/g,"<b>,</b>");
			},
			deploy:function(){
				var a=content.querySelectorAll(".price label i"),b=content.querySelectorAll(".price label input");
				this.pri_com(b[0],a[0]);
				this.pri_com(b[1],a[1]);

				a=content.querySelector(".nav-path");
				xu.get(function(s,e){
					if(s==2&&!e){
						var z=document.createElement("div");
						z.innerHTML=this.responseText;
						z=z.children[0];
						a.parentNode.insertBefore(z,a);
						a.parentNode.insertBefore(a,z);
					}
				},"/category-list.jar?name="+location.pathname);
			}
		};

		try{
			self.deploy();
		}catch(e){}

		this.querySelector(".price").onkeyup=function(e){
			for(var p=e.target,i=16;p&&i>0;p=p.parentNode,i--)
			switch(p.constructor){
			case HTMLInputElement:
				xu.ncall(on,p,e);
				return;
			}
		};

		return self;
	};
})
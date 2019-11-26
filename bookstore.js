	/* 
		4种分类
	*/
	function change1(){
			document.getElementById("book1").style.display = "inline";
			document.getElementById("book2").style.display = "inline";
			document.getElementById("book3").style.display = "inline";
			document.getElementById("book4").style.display = "inline";
			document.getElementById("book5").style.display = "inline";
			document.getElementById("book6").style.display = "inline";
			document.getElementById("book7").style.display = "inline";
			document.getElementById("book8").style.display = "inline";
			document.getElementById("book9").style.display = "inline";
			document.getElementById("h11").innerHTML = "全部 ";
			document.getElementById("span1").innerHTML = "共9种商品";
			document.getElementById("span2").innerHTML = "首页 > 全部分类 ";
	}
	function change2(){
		    document.getElementById("book1").style.display = "inline";
			document.getElementById("book2").style.display = "none";
			document.getElementById("book3").style.display = "inline";
			document.getElementById("book4").style.display = "inline";
			document.getElementById("book5").style.display = "none";
			document.getElementById("book6").style.display = "inline";
			document.getElementById("book7").style.display = "none";
			document.getElementById("book8").style.display = "none";
			document.getElementById("book9").style.display = "none";
			document.getElementById("h11").innerHTML = "JavaSE ";
			document.getElementById("span1").innerHTML = "共4种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaSE分类 ";
	}
	function change3(){
			document.getElementById("book1").style.display = "none";
			document.getElementById("book2").style.display = "inline";
			document.getElementById("book3").style.display = "none";
			document.getElementById("book4").style.display = "none";
			document.getElementById("book5").style.display = "inline";
			document.getElementById("book6").style.display = "none";
			document.getElementById("book7").style.display = "inline";
			document.getElementById("book8").style.display = "none";
			document.getElementById("book9").style.display = "inline";
			document.getElementById("h11").innerHTML = "JavaEE ";
			document.getElementById("span1").innerHTML = "共4种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaEE分类 ";
	}
	function change4(){
			document.getElementById("book1").style.display = "none";
			document.getElementById("book2").style.display = "none";
			document.getElementById("book3").style.display = "none";
			document.getElementById("book4").style.display = "none";
			document.getElementById("book5").style.display = "none";
			document.getElementById("book6").style.display = "none";
			document.getElementById("book7").style.display = "none";
			document.getElementById("book8").style.display = "inline";
			document.getElementById("book9").style.display = "none";
			document.getElementById("h11").innerHTML = "JavaScript ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaScript分类 ";
	}
	
	function getCookie(c_name){				/* 获取Cookie */
		if (document.cookie.length > 0){
	         c_start=document.cookie.indexOf(c_name + "=");
			 if(c_start!=-1){
				c_start=c_start + c_name.length+1;
				c_end=document.cookie.indexOf(";",c_start);
				if (c_end==-1){ 
					c_end=document.cookie.length;
				}
				return document.cookie.substring(c_start,c_end);
			}
		}
		return "";
	}

	function checkCookie1(c_name){				/* 购物车得先登录才能看 */
		username = getCookie(c_name);
		if (username != null && username != ""){
			return true;
		}else{
			alert("您还未登录，请先登录！");
			window.open("login.html","_self");
			return false;
		}
	}

	function checkCookie2(c_name){				/* 登录否 */
		username = getCookie(c_name);
		if (username != null && username != ""){
			document.getElementById("login").innerHTML = "user";
			alert("您已登录");
			return true;
		}else{
			alert("您还未登录，请先登录！");
			window.open("login.html","_self");
			return false;
		}
	}

	function checkCookie3(c_name,book_num){     /* 添加书籍到购物车 */
		username = getCookie(c_name);
		if (username != null && username != ""){
			setCookie(book_num,"1",1);
		}else{
			alert("您还未登录，请先登录！");
			window.open("login.html","_self");
			return false;
		}
	}

	function setCookie(c_name,value,expiredays){
		var exdate = new Date();
		exdate.setDate(exdate.getDate()+expiredays); 
		document.cookie = c_name+ "=" + escape(value) + ((expiredays == null) ? "" : ";expires="+exdate.toGMTString());    /* escape()对字符串进行编码 */
		alert("商品已添加至购物车");
	}
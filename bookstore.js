	/* 
		4种分类
	*/
	function change1(){
			/*document.getElementById("book1").style.display = "inline";
			document.getElementById("book2").style.display = "inline";
			document.getElementById("book3").style.display = "inline";
			document.getElementById("book4").style.display = "inline";
			document.getElementById("book5").style.display = "inline";
			document.getElementById("book6").style.display = "inline";
			document.getElementById("book7").style.display = "inline";
			document.getElementById("book8").style.display = "inline";
			document.getElementById("book9").style.display = "inline";*/
			for(i=1; i<10; i++){
				var book = "book" + i;
				document.getElementById(book).style.display = "inline";
			}
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
			/*document.getElementById("book1").style.display = "none";
			document.getElementById("book2").style.display = "none";
			document.getElementById("book3").style.display = "none";
			document.getElementById("book4").style.display = "none";
			document.getElementById("book5").style.display = "none";
			document.getElementById("book6").style.display = "none";
			document.getElementById("book7").style.display = "none";
			document.getElementById("book8").style.display = "inline";
			document.getElementById("book9").style.display = "none";*/
			for(i=1; i<10; i++){
				var book = "book" + i;
				if(i != 8){
					document.getElementById(book).style.display = "none";
				}else{
					document.getElementById(book).style.display = "inline";
				}
			}
			document.getElementById("h11").innerHTML = "JavaScript ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaScript分类 ";
	}
	
	function getCookie(c_name){				/* 获取Cookie */
		if (document.cookie.length > 0){
	         c_start = document.cookie.indexOf(c_name + "=");	/* 取得这个cookie名在整个cookie中的位置 */
			 if(c_start != -1){			/* =-1即没有找到这个cookie */
				c_start = c_start + c_name.length + 1; /* 把位置确定在这个cookie名的“=”符号的后面 */
				c_end = document.cookie.indexOf(";",c_start);	/* 从“=”的位置开始查找的，直到";"的位置 */
				if (c_end == -1){	
					c_end = document.cookie.length;	/* 找到“;”前的位置下标 */
				}
				return document.cookie.substring(c_start,c_end);	/* 取该cookie名的等号后面到分号前面的字符串，即对应的cookie的值 */
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
			alert("尊敬的客户，欢迎您的使用!");
			return true;
		}else{
			alert("您还未登录，请先登录！");
			window.open("login.html","_self");
			return false;
		}
	}

	function checkCookie22(){
		username = getCookie('username');
		if (username != null && username != ""){
			document.getElementById("login").innerHTML = "user";
			return true;
		}else{
			return false;
		}
	}

	function checkCookie3(c_name,book_num,book_count_num,book_count){     /* 添加书籍到购物车 */
		username = getCookie(c_name);
		if (username != null && username != ""){
			setCookie(book_num,"1",1);
			setCookie(book_count_num,book_count,1);
			alert("商品已添加至购物车");
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
	}

	function searchbook(){	/* 书籍搜索 */
		var text = document.getElementById("searchtext");
		if(text.value == "Java就业培训教程"){
			for(i=1; i<10; i++){
				var book = "book" + i;
				if(i == 1){
					document.getElementById(book).style.display = "inline";
				}else{
					document.getElementById(book).style.display = "none";
				}
			}
			document.getElementById("h11").innerHTML = "全部 ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaSE分类  ";
		}
		if(text.value == "精通Hibernate"){
			for(i=1; i<10; i++){
				var book = "book" + i;
				if(i == 2){
					document.getElementById(book).style.display = "inline";
				}else{
					document.getElementById(book).style.display = "none";
				}
			}
			document.getElementById("h11").innerHTML = "全部 ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaEE分类 ";
		}
		if(text.value == "Head First Java"){
			for(i=1; i<10; i++){
				var book = "book" + i;
				if(i == 3){
					document.getElementById(book).style.display = "inline";
				}else{
					document.getElementById(book).style.display = "none";
				}
			}
			document.getElementById("h11").innerHTML = "全部 ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaSE分类 ";
		}
		if(text.value == "Java编程思想"){
			for(i=1; i<10; i++){
				var book = "book" + i;
				if(i == 4){
					document.getElementById(book).style.display = "inline";
				}else{
					document.getElementById(book).style.display = "none";
				}
			}
			document.getElementById("h11").innerHTML = "全部 ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaSE分类  ";
		}
		if(text.value == "Spring企业开发"){
			for(i=1; i<10; i++){
				var book = "book" + i;
				if(i == 5){
					document.getElementById(book).style.display = "inline";
				}else{
					document.getElementById(book).style.display = "none";
				}
			}
			document.getElementById("h11").innerHTML = "全部 ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaEE分类  ";
		}
		if(text.value == "Java核心技术"){
			for(i=1; i<10; i++){
				var book = "book" + i;
				if(i == 6){
					document.getElementById(book).style.display = "inline";
				}else{
					document.getElementById(book).style.display = "none";
				}
			}
			document.getElementById("h11").innerHTML = "全部 ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaSE分类  ";
		}
		if(text.value == "Struts2深入理解"){
			for(i=1; i<10; i++){
				var book = "book" + i;
				if(i == 7){
					document.getElementById(book).style.display = "inline";
				}else{
					document.getElementById(book).style.display = "none";
				}
			}
			document.getElementById("h11").innerHTML = "全部 ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaEE分类  ";
		}
		if(text.value == "JavaScript"){
			for(i=1; i<10; i++){
				var book = "book" + i;
				if(i == 8){
					document.getElementById(book).style.display = "inline";
				}else{
					document.getElementById(book).style.display = "none";
				}
			}
			document.getElementById("h11").innerHTML = "全部 ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaScript分类  ";
		}
		if(text.value == "JavaWeb开发"){
			for(i=1; i<10; i++){
				var book = "book" + i;
				if(i == 9){
					document.getElementById(book).style.display = "inline";
				}else{
					document.getElementById(book).style.display = "none";
				}
			}
			document.getElementById("h11").innerHTML = "全部 ";
			document.getElementById("span1").innerHTML = "共1种商品";
			document.getElementById("span2").innerHTML = "首页 > JavaEE分类  ";
		}
	}

	window.onload = checkCookie22;
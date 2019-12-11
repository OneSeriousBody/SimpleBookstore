	var sumend = "";
	
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

	function add(){
		var book1 = getCookie("book1");
		var book2 = getCookie("book2");
		var book3 = getCookie("book3");
		var book4 = getCookie("book4");
		var book5 = getCookie("book5");
		var book6 = getCookie("book6");
		var book7 = getCookie("book7");
		var book8 = getCookie("book8");
		var book9 = getCookie("book9");
		var sum = 0;

		if(book1 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			var count = getCookie('count1');
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/8758723-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Java就业培训教程</font></td>"
							+ "<td colspan=2 align=center><font color=blue>28</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count + "</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count*28 + "</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this,\"book1\")'></td>";
			tab.appendChild(tr);
			sum += count*28;
		}
		if(book2 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			var count = getCookie('count2');
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/8991366-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>精通Hibernate</font></td>"
							+ "<td colspan=2 align=center><font color=blue>38</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count + "</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count*38 + "</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this,\"book2\")'></td>";
			tab.appendChild(tr);
			sum += count*38;
		}
		if(book3 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			var count = getCookie('count3');
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/9265169-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Head First Java</font></td>"
							+ "<td colspan=2 align=center><font color=blue>40</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count + "</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count*40 + "</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this,\"book3\")'></td>";
			tab.appendChild(tr);
			sum += count*40;
		}
		if(book4 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			var count = getCookie('count4');
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/9317290-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Java编程思想</font></td>"
							+ "<td colspan=2 align=center><font color=blue>35</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count + "</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count*35 + "</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this,\"book4\")'></td>";
			tab.appendChild(tr);
			sum += count*35;
		}
		if(book5 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			var count = getCookie('count5');
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/20029394-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Spring企业开发</font></td>"
							+ "<td colspan=2 align=center><font color=blue>56</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count + "</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count*56 + "</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this,\"book5\")'></td>";
			tab.appendChild(tr);
			sum += count*56;
		}
		if(book6 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			var count = getCookie('count6');
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/20285763-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Java核心技术</font></td>"
							+ "<td colspan=2 align=center><font color=blue>55</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count + "</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count*55 + "</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this,\"book6\")'></td>";
			tab.appendChild(tr);
			sum += count*55;
		}
		if(book7 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			var count = getCookie('count7');
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/20385925-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Struts2深入理解</font></td>"
							+ "<td colspan=2 align=center><font color=blue>40</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count + "</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count*40 + "</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this,\"book7\")'></td>";
			tab.appendChild(tr);
			sum += count*40;
		}
		if(book8 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			var count = getCookie('count8');
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/22722790-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>JavaScript</font></td>"
							+ "<td colspan=2 align=center><font color=blue>51</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count + "</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count*51 + "</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this,\"book8\")'></td>";
			tab.appendChild(tr);
			sum += count*51;
		}
		if(book9 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			var count = getCookie('count9');
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/22788412-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>JavaWeb开发</font></td>"
							+ "<td colspan=2 align=center><font color=blue>70</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count + "</font></td>"
							+ "<td colspan=2 align=center><font color=blue>" + count*70 + "</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this,\"book9\")'></td>";
			tab.appendChild(tr);
			sum += count*70;
		}
		document.getElementById("total").innerHTML = sum;
		sumend = sum;
	}

	function del(thisdel,c_name){		/* 订单删除 */
		thisdel.parentNode.parentNode.parentNode.removeChild(thisdel.parentNode.parentNode);
		delCookie(c_name);
	}

	function delCookie(name){
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval=getCookie(name);
		if(cval!=null)
		document.cookie= name + "="+cval+";expires="+exp.toGMTString();
	}

	function pay(){
		var r=confirm("共计" + sumend + "元，您确定去支付？");
		if (r==true){
			alert("正在为您跳转支付页面，请点击确定！");
			window.open("https://www.taobao.com/");
		}else{
			alert("亲，您要抛弃我了吗？？？");
		}
		return true;
	}

	window.onload = add;
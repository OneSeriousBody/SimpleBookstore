	function getCookie(c_name){
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

		if(book1 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/8758723-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Java就业培训教程</font></td>"
							+ "<td colspan=2 align=center><font color=blue>28</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this)'></td>";
			tab.appendChild(tr);
		}
		if(book2 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/8991366-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>精通Hibernate</font></td>"
							+ "<td colspan=2 align=center><font color=blue>38</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this)'></td>";
			tab.appendChild(tr);
		}
		if(book3 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/9265169-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Head First Java</font></td>"
							+ "<td colspan=2 align=center><font color=blue>40</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this)'></td>";
			tab.appendChild(tr);
		}
		if(book4 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/9317290-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Java编程思想</font></td>"
							+ "<td colspan=2 align=center><font color=blue>35</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this)'></td>";
			tab.appendChild(tr);
		}
		if(book5 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/20029394-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Spring企业开发</font></td>"
							+ "<td colspan=2 align=center><font color=blue>56</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this)'></td>";
			tab.appendChild(tr);
		}
		if(book6 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/20285763-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Java核心技术</font></td>"
							+ "<td colspan=2 align=center><font color=blue>55</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this)'></td>";
			tab.appendChild(tr);
		}
		if(book7 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/20385925-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>Struts2深入理解</font></td>"
							+ "<td colspan=2 align=center><font color=blue>40</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this)'></td>";
			tab.appendChild(tr);
		}
		if(book8 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/22722790-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>JavaScript</font></td>"
							+ "<td colspan=2 align=center><font color=blue>51</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this)'></td>";
			tab.appendChild(tr);
		}
		if(book9 == "1"){
			var tab = document.getElementById("tab");
			var tr = document.createElement("tr");
			tr.innerHTML = "<td colspan=3 align=center><div class='bookimg'><img src='book_img/22788412-1_l.jpg' border='0'/></div></td>"
							+ "<td colspan=3 align=center><font color=blue>JavaWeb开发</font></td>"
							+ "<td colspan=2 align=center><font color=blue>70</font></td>"
							+ "<td colspan=1 align=center><input type='button' value='移除' onclick='del(this)'></td>";
			tab.appendChild(tr);
		}
	}

	function del(thisdel){		/* 订单删除 */
		thisdel.parentNode.parentNode.parentNode.removeChild(thisdel.parentNode.parentNode);
	}

	window.onload = add;

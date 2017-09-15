// module.exports = () => {
// 	var greet = document.createElement('div');
// 	greet.textContent = 'Hi there and greetings!'
// 	return greet;
// }
class Point{
	constructor(...params){
		//创建请求对象
		this.defaults = {
			"url":params[1],
			"type":'get',
			"data":null,
		}
		//控制开关
		this.disabled = true;
		//查看页面上是否已经创建了
		let sidebar = document.querySelector('#' + params[0]);
		if(sidebar){
			alert('页面已经有了id为' + params[0] + '的元素')
			this.disabled = false
		    return
		}
		// 创建sidebar
		this.sidebar = document.createElement('aside');
		this.sidebar.classList.add('sidebar');
		params[0] && this.sidebar.setAttribute('id',params[0]);
		this.sidebar.innerHTML = '<div class="sidebar-container"></div>'
		document.body.appendChild(this.sidebar);
		//绑定事件
		this.sidebar.addEventListener('click',event => {
			let target = event.target;
			if(target.tagName == 'ASIDE' || target.classList.contains('close')){
				this.hide();
			}
		})
	}
	show(className){
		if(!this.disabled){
			alert('页面已经有了id为' + params[0] + '的元素')
			return
		}
		// callback.url && (this.defaults.url = callback.url)
		// callback.type && (this.defaults.type = callback.type)
		// callback.data && (this.defaults.data = callback.data)
		// callback.dataType && (this.defaults.dataType = callback.dataType)
		// callback.success && (this.defaults.success = callback.success)

		// className && (this.className = className) && this.sidebar.classList.add(className);

		// $.ajax(this.defaults)
		if(!this.shade){
			this.shade = document.createElement('div');
			this.shade.classList.add('sidebarShade');
			this.shade.style.cssText = 'position:fixed;left:0;top:0;width:100%;height:100%;background: rgba(0,0,0,.6);display:none;z-index:10';
			document.body.appendChild(this.shade);
		};
		this.shade.style.display = 'block',
		this.sidebar.classList.add('visible')
	}
	hide(){
		this.shade.style.display = 'none'
		this.sidebar.classList.remove('visible')
		this.className && this.sidebar.classList.remove(this.className)
	}
	get(options){
		return new Promise((resolve, reject) => {
			for(let key in options){
				this.defaults[key] = options[key]
			}
			setTimeout(() => {
				$.ajax({
					"url":this.defaults.url,
					"type":this.defaults.type,
					"data":this.data || this.defaults.data,
					"dataType":this.defaults.dataType,
					"success":ele => {
						if(o['render'] && Function.isFunction(o['render'])){
							o['render'](res);
						}
					}

				})
			},3000)
		})

		// console.log(this.data,'this.data')
		// return this;
	}
}

module.exports = Point
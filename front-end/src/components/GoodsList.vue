<template>
	<div>
		<div class="card">
	    	<div class="card-header text-center">
	    		<h3>品牌管理小案例</h3>
	    		<button class="btn btn-default outButton" @click="getOut">退出</button>
	    	</div>
	    	<div class="card-body form-inline font-weight-bold">
	    		<label>
	    			Id：
	    		    <input type="text" class="form-control" v-model="tmpId">
                </label>
	    		
	    		<label>
	    			Name：
	    			<input type="text" class="form-control" v-model="tmpName">
	    		</label>

	    		<button type="button" class="btn btn-primary form-control" @click="add">添加</button>

	    		<label>
                    搜索名称关键字：
                    <input type="text" class="form-control" v-model="keywords">
                </label>
	    	</div>
	    </div>
        
	    <table class="table table-bordered table-hover table-striped">
	    	<thead>
	    		<tr>
	    			<th>Id</th>
	    			<th>Name</th>
	    			<th>Ctime</th>
	    			<th>Operation</th>
	    		</tr>
	    	</thead>

	    	<tbody>
	    		<tr v-for="item in search(keywords)">
	    			<td>{{item.id}}</td>
	    			<td>{{item.name}}</td>
	    			<td>{{item.Ctime}}</td>

	    			<td>
	    				<a href="" @click.prevent="del(item.id)">删除</a>
	    			</td>
	    		</tr>
	    	</tbody>
	    </table>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				list: [
				    {id: 1, name: '五菱宏光', Ctime: new Date()},
				    {id: 2, name: '雅阁', Ctime: new Date()},
				    {id: 3, name: '大众', Ctime: new Date()}
				],

				tmpId: null,
				tmpName: null,
				keywords: ''
			}
		},

		methods: {
			getOut() {
				this.$router.push({path: '/login'});
			},

			del(id) {
				var index = 0;
				for (; index < this.list.length; index ++) {
					if (this.list[index].id == id) break;
				}
				this.list.splice(index, 1);
			},

			add() {
				var time = new Date();
				this.list.push({id: this.tmpId, name: this.tmpName, Ctime: time});
				// console.log(this.list);
			},

			search(keywords) {
				// var newList = [];
				// this.list.forEach(item =>{
				// 	if(item.name.indexOf(keywords) != -1) {
				// 		newList.push(item);
				// 	}
				// });

				// return newList;

				var newList = this.list.filter(item => {
					if(item.name.includes(keywords)) {
						return item;
					}
				});

				return newList;
			}
		}
	}
</script>

<style>
	label, button.form-control {
		margin: 2px 10px;
	}

	div.card {
		border-bottom: 1px solid;
		margin-bottom: 20px;
	}
    
    .card-header {
    	position: relative;
    }
	.outButton {
		top: 1rem;
		right: 40px;
		position: absolute;
		border:1px solid;
	}
</style>
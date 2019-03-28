<template>
	<form>
        <div class="form-group">
        	用户名：
        	<input type="text" class="form-control" v-model="username">
        </div>

        <div class="form-group">
        	密码：
        	<input type="text" class="form-control" v-model="pwd">
        </div>

        <div class="form-group">
        	Email address: 
        	<input type="email" class="form-control" v-model="email">
        </div>

        <button type="submit" class="btn btn-primary subButton" @click.prevent="onClick">提交</button>
    </form>
</template>

<script>
	export default {
		data: function() {
			return {
				username: null,
				pwd: null,
				email: null
			}
		},
		methods: {
			onClick: function() {
				var _this = this;
				this.$ajax.post('/registerReq', {
					u: this.username,
					p: this.pwd,
					e: this.email
				}).then(function(res) {
					console.log(res.data);
				});
			}
		}
	}
</script>

<style scoped>
    .subButton {
    	display: block;
    	margin: 0 auto;
    	margin-bottom: 0.2rem;
    }
</style>
<template>
	<div>
        <form>
        	<div class="form-group">
        		用户名：
        		<input type="text" class="form-control" v-model="username">
        	</div>

        	<div class="form-group">
        		密码：
        		<input type="text" class="form-control" v-model="pwd">
        	</div>
            

            	<div class="form-check">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"> 记住密码
                </label>
            </div>
        	

        	<button type="submit" class="btn btn-primary subButton" @click.prevent="onClick">提交</button>
        </form>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				username: null,
                pwd: null
			};
		},
        methods: {
            to: function() {
                this.$router.push({path: '/goodslist'});
            },
            
            onClick: function() {
                var _this = this;
                console.log(this);
                this.$ajax.post('./loginReq', {
                    u: this.username,
                    p: this.pwd
                }).then(function(res) {
                    // console.log(res);
                    if (res.data.allowed) _this.to();
                    //这里面如果直接用this那么就不是vue对象了，而是未定义的对象
                    else alert('Wrong! Please input your username and passowrd again');
                });

                // cont.$emit(this.username);
            }
        }
	}
</script>

<style scoped>
    .form-check {
    	height: 62px;
    	margin: 2.0rem 0 0 0;
    	/*这个是应为form-contorl里面的margin-bottom而设定的，为了保存login和register高度一样*/
    }

    .subButton {
        display: block;
        margin: 0 auto;
        margin-bottom: 0.2rem;
    }
</style>
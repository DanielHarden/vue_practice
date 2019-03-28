<template>
	<div id="main" class="rounded">
		<table>
			<tr>
				<td>
					<router-link to='login'>
	                    <button class="btn btn-light">登录</button>
	                </router-link>
				</td>

				<td>
					<router-link to='register'>
	                    <button class="btn btn-light">注册</button>
	                </router-link>
	            </td>
			</tr>
		</table>

	    <router-view></router-view>
	</div>
</template>

<script>

</script>

<style scoped>
    #main {
    	width: 40%;
    	background-color: grey;
    	border:1px solid grey;
    	margin: 10% auto;
    	color: white;
    }
    .btn-light {
    	width: 100%;
    }

    table {
    	width: 100%;
    	text-align: center;
    }
</style>
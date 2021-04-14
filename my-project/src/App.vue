<script>
	export default {
		onLaunch: function() {
      this.$api.register({mobile: this.mobile}).then(res => {
        // 获得数据
        console.log(res)
      }).catch(res => {
        // 失败进行的操作
      })
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

<!--
 * @FilePath: App.vue
 * @Author: CDM
 * @E-mail: 673307718@qq.com
 * @Date: 2023-06-20 20:43:57
 * @LastEditTime: 2023-06-20 21:07:27
-->
<template>
	<div>
		<img src="./assets/logo.png" alt="logo">
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from './components/School.vue'
	import Student from './components/Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>

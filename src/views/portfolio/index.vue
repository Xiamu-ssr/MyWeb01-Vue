<template>
	<div class="app-container">
		<el-scrollbar class="box-class" style="margin-top: 1%;height: 100%">
			<el-row>
				<template v-for="i in 88">
					<el-col :span="1"></el-col>
					<el-col :span="6">
						<el-card style="margin-top: 5vh">
							<el-image
								src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
							/>
							<div style="padding: 14px">
								<span>Yummy hamburger</span>
								<div class="bottom">
									<time class="time">{{ new Date() }}</time>
									<el-button text class="button">Operating</el-button>
								</div>
							</div>
						</el-card>
					</el-col>
					<el-col :span="1"></el-col>
				</template>
			</el-row>
		</el-scrollbar>
	</div>
</template>

<script setup name="Portfolio">

</script>

<style scoped>

</style>
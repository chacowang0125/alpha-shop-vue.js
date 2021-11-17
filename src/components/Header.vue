<template>
	<nav calss="w-100">
		<div class="container d-flex justify-content-between">
			<ul class="nav-list d-flex justify-content-between align-items-center h-100">
				<a href="#">
					<li class="nav-item mr-3">男款</li>
				</a>
				<a href="#">
					<li class="nav-item mr-3">女款</li>
				</a>
				<a href="#">
					<li class="nav-item mr-3">最新消息</li>
				</a>
				<a href="#">
					<li class="nav-item mr-3">客製商品</li>
				</a>
				<a href="#">
					<li class="nav-item">聯絡我們</li>
				</a>

			</ul>
			<a href="#">
				<img class="nav-logo" src="../../public/img/Logo.png" alt="logo-img">
      </a>
			<div class="nav-icons d-flex align-items-center">
				<i class="fas fa-search fa-lg mr-3"></i>
				<i class="fas fa-shopping-cart fa-lg mr-3"></i>
				<i class="far fa-moon fa-lg"></i>
			</div>
		</div>
	</nav>
</template>

<style scoped>
a {
	color: #2a2a2a
}
nav {
	height: 56px;
}
.container {
	position: relative;
	width: 90%;
	height: 100%;
	margin: 0 auto;
}

.nav-logo {
      width: 170px;
			height: 30px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%)
}

</style>
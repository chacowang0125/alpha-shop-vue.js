<template>
	<footer id="footer" class="d-flex align-items-center">
    <div class="container d-flex justify-content-between align-items-start">
      <div class="footer-logo">
        <a href="#">
					<img src="../../public/img/Logo.png" alt="logo" class="footer-logo-img">
				</a>
      </div>
      <div class="footer-section cusService">
        <h3 class="footer-title">客戶服務</h3>
        <ul class="footer-list mt-4">
          <li class="footer-list__item"><a href="#">運送說明</a></li>
          <li class="footer-list__item"><a href="#">退換貨相關</a></li>
          <li class="footer-list__item"><a href="#">付款資訊</a></li>
          <li class="footer-list__item"><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-section aboutUs">
        <h3 class="footer-title">關於我們</h3>
        <ul class="footer-list mt-4">
          <li class="footer-list__item"><a href="#">品牌故事</a></li>
          <li class="footer-list__item"><a href="#">媒體聯繫</a></li>
          <li class="footer-list__item"><a href="#">Press Kit</a></li>
        </ul>
      </div>
      <div class="footer-section info">
        <h3 class="footer-title">資訊</h3>
        <ul class="footer-list mt-4">
          <li class="footer-list__item"><a href="#">隱私權政策</a></li>
          <li class="footer-list__item"><a href="#">Cookie</a></li>
          <li class="footer-list__item"><a href="#">GDPR</a></li>
        </ul>
      </div>
      <div class="footer-section followUs">
        <h3 class="footer-title">追蹤ALPHA Shop</h3>
        <ul class="footer-list mt-4">
          <li class="footer-list__item"><a href="">+886 02123-45678</a></li>
          <li class="footer-list__item social-media">
            <a href="#">
							<i class="fab fa-facebook-f fa-lg mr-4"></i>
						</a>
						<a href="#">
							<i class="fab fa-instagram fa-lg mr-4"></i>
            </a>
            <a href="#">
							<i class="fab fa-whatsapp fa-lg"></i>
						</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
	color: #808080
}

li{
	line-height: 30px;
}

footer {
	width: 100%;
	height: 284px;
	background-color: #e5e5e5;
}
.container {
	padding: 10px;
}

.footer-logo-img {
	border: 1px solid blue;
	width: 175px;
	height: 32px;
	margin: 75px 0;
}

</style>
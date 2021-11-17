<template>
<div class="form-address">
	<h2 class="form-delivery-title">
		寄送地址
	</h2>
	<form action="submit">
		<div class="form-content">
      <div class="form-part title-form">
        <label for="title" class="form-title">稱謂</label>
        <div class="select-wrapper">
          <select name="title" id="title" required>
            <option value="mrs">先生</option>
            <option value="ms">太太</option>
            <option value="miss">小姐</option>
          </select>
				</div>
      </div>
      <div class="form-part name-form">
        <label for="name" class="form-title">姓名</label>
        <input type="text" id="name" placeholder="請輸入姓名">
      </div>
      <div class="form-part phone-form">
        <label for="phone" class="form-title">電話</label>
        <input type="tel" id="phone" placeholder="請輸入行動電話">
      </div>
      <div class="form-part email-form">
        <label for="email" class="form-title">Email</label>
        <input type="email" id="email" placeholder="請輸入電子郵件">
      </div>
      <div class="form-part region-form">
        <label for="region" class="form-title">縣市</label>
        <div class="select-wrapper">
          <select name="region" id="region" required>
            <option value="" disabled selected>請選擇縣市</option>
            <option value="taipei-city">台北市</option>
            <option value="new-taipei-city">新北市</option>
            <option value="taoyuan-city">桃園市</option>
            <option value="taichung-city">台中市</option>
            <option value="tainan-city">台南市</option>
            <option value="kaohsiung-city">高雄市</option>
            <option value="hsinchu-county">新竹縣</option>
            <option value="miaoli-county">苗栗縣</option>
            <option value="changhua-county">彰化縣</option>
            <option value="nantou-county">南投縣</option>
            <option value="yunlin-county">雲林縣</option>
            <option value="chiayi-county">嘉義縣</option>
            <option value="pingtung-county">屏東縣</option>
            <option value="yilan-county">宜蘭縣</option>
            <option value="hualien-county">花蓮縣</option>
            <option value="taitung-county">台東縣</option>
            <option value="penghu-county">澎湖縣</option>
            <option value="kinmen-county">金門縣</option>
            <option value="lienchiang-county">連江縣</option>
            <option value="keelung-city">基隆市</option>
            <option value="hsinchu-city">新竹市</option>
            <option value="chiayi-city">嘉義市</option>
          </select>
        </div>
      </div>
      <div class="form-part address-form">
        <label for="address" class="form-title">地址</label>
        <input type="text" placeholder="請輸入地址">
      </div>
    </div>
	</form>
</div>
</template>

<style scoped>
	select {
		-webkit-appearance: none;
		cursor: pointer;
		background-color: transparent;
	}
	select:invalid {
		color: #747474;
	}

	input,select {
		width: 100%;
		height: 40px;
		padding: 0.5rem 0.8rem;
		border: 1px solid #4a4a4a;
		border-radius: 4px;
		font-weight: 400;
	}
	.form-delivery-title {
		margin: 24px 0;
	}

	.form-title {
		font-size: 12px;
		font-weight: 700;
		color: #808080;
	}

	.select-wrapper {
		position: relative;
		z-index: 0;
	}

	.select-wrapper::after {
		content: "";
		border-style: solid;
		border-width: 6px 5px 0 5px;
		border-color: #2a2a2a transparent transparent transparent;
		position: absolute;
		top: 50%;
		right: 8px;
		transform: translateY(-50%);
		z-index: -1;
	}
	.form-content{
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-gap: 1.5rem;
		grid-template-areas:
			"title title name name name name"
			"phone phone phone email email email"
			"region region address address address address"
	}
	.title-form{
    grid-area: title;
  }
  .name-form{
    grid-area: name;
  }
  .phone-form{
    grid-area: phone;
  }
  .email-form{
    grid-area: email;
  }
  .region-form{
    grid-area: region;
  }
  .address-form{
    grid-area: address;
  }
</style>
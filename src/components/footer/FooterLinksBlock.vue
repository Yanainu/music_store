<template>

<!-- ЭТО ПЕРЕДЕЛАТЬ В ОДИН СТОЛБИК С РАЗНЫМИ ДАННЫМИ  -->
<!-- два столбика со ссылками  -->
<!-- <div class="footer-info__left-blocks left-blocks"> -->

    <!-- my account столбик  -->
    <div class="left-blocks__block block">
      
      <div class="block__navigation-container">
        <h3 class="block__navigation-link block__navigation-link_title">My Account</h3>
        
        <a class="block__navigation-link" href="#">Overview</a>
        <a class="block__navigation-link" href="#">Order History</a>
        <a class="block__navigation-link" href="#">Wishlist</a>
        <a class="block__navigation-link" href="#">Account information</a>
      </div>
    </div>

    <!-- store столбик -->
    <div class="left-blocks__block block">

        <div class="block__navigation-container">
          <h3 class="block__navigation-link block__navigation-link_title">Store</h3>
          
          <a class="block__navigation-link" href="#">Security Notice</a>
          <a class="block__navigation-link" href="#">Location & Hours</a>
          <a class="block__navigation-link" href="#">Rentals</a>
          <a class="block__navigation-link" href="#">Privacy Notice</a>
        </div>
    </div>

  <!-- </div>  -->
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.left-blocks__block {
    margin-right: 48px;
}

.block__navigation-container {
    display: flex;
    flex-direction: column;
    
}
.block__navigation-link {
    margin-bottom: 9px;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-decoration: none;
    color: #FFFFFF;
    
}
.block__navigation-link_title {
    font-weight: 700;
}

.block__navigation-container::before {
    content: '';
    width: 58px;
    height: 3px;
    margin: 9px 0;
    background: #FFFFFF;
}
</style>
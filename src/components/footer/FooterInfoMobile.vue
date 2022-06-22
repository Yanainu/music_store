<template>
    <!-- адаптивная версия этого блока -->
        <div class="footer__mobile-info mobile-info">
          <!-- my account block      -->
          <div class="mobile-info__navigation-container">
            <h3 class="mobile-info__navigation-link mobile-info__navigation-link_title">My Account</h3>
            
            <a class="mobile-info__navigation-link" href="#">Overview</a>
            <a class="mobile-info__navigation-link" href="#">Order History</a>
            <a class="mobile-info__navigation-link" href="#">Wishlist</a>
            <a class="mobile-info__navigation-link" href="#">Account information</a>
          </div>
          <!-- socials  -->
          <div class="footer-info__socials-container socials">
            <div class="socials__link-container">
              <a class="socials__link" href="#">
                <img class="socials__link-icon" src="./img/footer__social_youtube-icon.svg" alt="youtube link">
              </a>
            </div>

            <div class="socials__link-container">
              <a class="socials__link" href="#">
                <img class="socials__link-icon" src="./img/footer__social_twi-icon.svg" alt="youtube link">
              </a>
            </div>

            <div class="socials__link-container">
              <a class="socials__link" href="#">
                <img class="socials__link-icon" src="./img/footer__social_inst-icon.svg" alt="youtube link">
              </a>
            </div>

            <div class="socials__link-container">
              <a class="socials__link" href="#">
                <img class="socials__link-icon" src="./img/footer__social_fb-icon.svg" alt="youtube link">
              </a>
            </div>
          </div>

        </div>
</template>

<style lang="postcss" scoped>

.mobile-info {
    display: none;
}
</style>
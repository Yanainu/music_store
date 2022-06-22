<template>
    <div class="footer__all-info footer-info">
          <!-- два столбика со ссылками  -->
          <div class="footer-info__left-blocks left-blocks">
            <ul>
              <li>
                <footer-links-block></footer-links-block>
              </li>
            </ul>
            

            
          </div> 

          <div class="footer-info__logo-and-socials">
            <!-- logo  -->
            <div class="footer-info__logo-container ">
              <img class="footer-info__logo" src="./img/general__store-logo.svg" alt="store logo">
            </div>
            
            <footer-socials></footer-socials>

          </div>
        </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.footer__all-info {
    display: flex;
    justify-content: space-between;
    background-color: var(--dark-grey);
    padding: 52px 0;
}
.footer-info__left-blocks {
    display: flex;
}


/*logo&socials*/
.footer-info__logo-and-socials {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.footer-info__logo-container {
    padding: 27px 0;
}
.footer-info__socials-container {
    display: flex;
    justify-content: right;
}
.socials__link-container {
    padding-left: 12px;
}
/*copyright*/
.footer__copyright {
    padding: 8px 0;
    background-color: var(--black);
}
.footer__copyright-text {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12.8px;
    line-height: 140%;
    color: #FFFFFF;
}
</style>
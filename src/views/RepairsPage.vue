<template>
  <div class="repairs-page">
    <BaseHeader/>
      <SectionWrapper>
        <template v-slot:headText>
          News
        </template>

        <template v-slot:content>
          <div class="text-content">
            <h1>Header h1</h1>
            <img src="../../public/img/otherpages/article.jpg" alt="guitars photo">

            <h2>Header h2</h2>
            <h3>Header h3</h3>
            <h4>Header h4</h4>
            <h5>Header h5</h5>
            <h6>Header h6</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Magni voluptate repudiandae accusantium ea, corrupti numquam natus consequuntur eius,
              debitis iusto unde at molestias, vel veniam delectus.
              Fugit ab harum debitis!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Magni voluptate repudiandae accusantium ea, corrupti numquam natus consequuntur eius,
              debitis iusto unde at molestias, vel veniam delectus.
              Fugit ab harum debitis!
            </p>
          </div>

          <blockquote>
            <p>"With great power comes great responsibility"</p>
            <cite>Ben Parker</cite>
          </blockquote>

        </template>
      </SectionWrapper>
  </div>

  <TheFooter/>
</template>

<script>
import BaseHeader from '@/components/UI/BaseHeader.vue';
import SectionWrapper from '@/components/UI/SectionWrapper.vue';
import TheFooter from '@/components/footer/TheFooter.vue';

export default {
  components: {
    BaseHeader,
    SectionWrapper,
    TheFooter,
  },
};
</script>

<style lang="postcss" scoped>

h1 {
  margin: 8px 0 28px 0;
  font-weight: 700;
  font-size: 32px;
  line-height: 120%;
  color: var(--dark-grey);
  text-align: center;
}
h2 {
  font-weight: 700;
  font-size: 28px;
  line-height: 120%;
  margin-bottom: 30px;
  color: var(--dark-grey);
}
h3, h4, h5 {
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  margin: 0;
}
h6 {
  color: var(--light-grey);
  font-weight: 400;
  font-size: 22px;
}

.text-content {
  padding: 50px 0;
}

p {
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: var(--light-grey);
}
blockquote {
    border-left: 6px solid var(--light-grey);
    font-size: 16px;
    font-style: italic;
    margin: 16px;
    padding: 16px 24px;
}
cite {
    color: var(--dark-grey);
    font-size: 15px;
    padding-top: 10px;
    display: block;
    text-align: right;
}
</style>

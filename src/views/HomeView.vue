<template>
  <div>
    <TheHeader></TheHeader>

    <main class="main">
      <BaseContainer>
        <!-- new products section  -->
        <SectionWrapper
          :sectionType="'products'">
          <template v-slot:section>
            <SectionItems
            :sectionType="'products'"
            ></SectionItems>
          </template>
        </SectionWrapper>
      </BaseContainer>
        <!-- popular finds section  -->
      <SectionWrapper
        :sectionType="'popular'">
          <template v-slot:section>
            <BaseContainer>
              <SectionItems
                :sectionType="'popular'"
              ></SectionItems>
            </BaseContainer>
          </template>
      </SectionWrapper>
        <!-- articles section  -->
      <BaseContainer>
        <SectionWrapper
          :sectionType="'articles'">
          <template v-slot:section>
            <SectionArticles></SectionArticles>
          </template>
        </SectionWrapper>
      </BaseContainer>
      <!-- footer  -->
      <footer class="footer">
        <BaseContainer>
          <FooterInfo></FooterInfo>
        </BaseContainer>
        <FooterCopyright></FooterCopyright>
      </footer>
    </main>
  </div>
</template>

<script>
import SectionWrapper from '../components/UI/SectionWrapper.vue';
import TheHeader from '../components/header/TheHeader.vue';
import BaseContainer from '../components/UI/BaseContainer.vue';
import SectionItems from '../components/main/SectionItems.vue';
import SectionArticles from '../components/main/SectionArticles.vue';
import FooterInfo from '../components/footer/FooterInfo.vue';
import FooterCopyright from '../components/footer/FooterCopyright.vue';

export default {
  components: {
    TheHeader,
    BaseContainer,
    SectionWrapper,
    SectionItems,
    SectionArticles,
    FooterInfo,
    FooterCopyright,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="postcss">
body {
  margin: 0 auto;

  --red: #ab0433;
  --orange: #ff753a;
  --black: #252525;
  --dark-grey: #505050;
  --light-grey: #767676;
  --white: #eaeaea;
  --white-gradient: linear-gradient(134.57deg, #ffffff 0%, #d3d3d3 100%);

  font-family: "Work Sans", sans-serif;
  font-weight: 600;
}
h1,
h2,
h3,
p {
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
images {
  max-width: 100%;
}
.footer {
  background-color: var(--dark-grey);
}
</style>

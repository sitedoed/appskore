<template>
  <div class="wrapper">
    <div class="container">
        <div class="item">
          <h1 class="">Home - {{ page_title }}</h1>
          <section>
            <article>
              <h2>Bem-vindos ao APPSkore</h2>
              <br />
              <h3>Um projeto, responsivo, desenvolvido em NuxtJS</h3>
              <br />
              <ul>
                <li>Recebendo e listando diferentes tipos de dados de uma API externa em GraphQL</li>
                <li>Cada link possui um tipo de conteúdo diferente (vídeo, grápfico, documento e etc)</li>
                <li>As informações podem ser consultadas através da Lista Simples abaixo, ou da Lista Completa no menu superior</li>
              </ul>
            </article>
          </section>
          <Submenu />
          <br />
          <br />
          <br />
          <section>
            <article>
              <h3>Algumas mídias disponíveis</h3>
              <br />
              <br />
              <ul>
                <li><h3 class="">Promessa de privacidade do Sebrae - LGPD</h3></li>
                <br />
                <li><iframe width="560" height="315" src="https://www.youtube.com/embed/JMkDepOhm7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
                <li> <router-link :to="`/saiba_mais/627150a0-c0dc-45d5-8d4c-f8a69e38b3cf`"><span class="saiba-mais">Saiba mais</span></router-link></li>
              </ul>
            </article>
            <article>
              <ul>
                <li><h3 class="">A LGPD em um giro</h3></li>
                <br />
                <li><img width="600" src="https://www.serpro.gov.br/lgpd/menu/arquivos/infografico-lgpd-em-um-giro" alt="LGPD" /> </li>
                <li> <router-link :to="`/saiba_mais/5d3bb1f7-0106-4733-aede-6a3c1c7f21c8`"><span class="saiba-mais">Saiba mais</span></router-link></li>
              </ul>
            </article>
          </section>
          <section>
            <article>
              <h3>Principais tecnologias utilizadas no projeto:</h3>
              <br />
              <ul>
                <li>Nuxt.js;</li>
                <li>Jest e Vue Test Utils;</li>
                <li> SCSS;</li>
                <li>GraphQL;</li>
                <li>GitHub Actions;</li>
              </ul>
            </article>
          </section>
        </div>
    </div>
  </div>
</template>

<script>
import Submenu from '@/components/Submenu.vue'

export default {
    name: "HomeVue",
    data () {
      return {
        page_title: "Página Inicial"
      }
    },
    components: { Submenu }
}
</script>
<style scoped>
.saiba-mais{
 font-size: large;
 font-weight: bold;
 color: #5e5d5d;
}
</style>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="item">
                <h1>Sobre o APP</h1>
                <p class="bold">Este projeto utiliza as seguintes tecnologias:</p>
                <ul>
                    <li>Nuxt.js;</li>
                    <li>Jest e Vue Test Utils;</li>
                    <li>SCSS;</li>
                    <li> GraphQL;</li>
                    <li>GitHub Actions;</li>
                </ul>
                <br />
                <br />
                <p class="bold">E possui os seguintes seções:</p>
                <ul>
                    <li>Uma página inicial (HOME) com informações gerais sobre o sistema;</li>
                    <li>Uma página que lista todos os conteúdos (Lista Completa);</li>
                    <li>Uma página que mostra os detalhes de um conteúdo buscando-o através do seu id (Saiba Mais);</li>
                    <li>Uma página com informações sobre as tecnologias utilizadas (Sobre);</li>
                    <li>E um link para sua versão online</li>
                </ul>
                <p>E de onde vem esses dados?</p>
                <br />
                <p class="bold">De um playground, GraphQL, online de onde são consumidas  duas queries: contents e getContent.</p>
                <br />

                <p>Não foram utilizados frameworks de layout como Vuetify, Tailwind etc. Foram utilizados testes unitários com o JEST</p>
            </div>
        </div>
    </div>
</template>

<script>

import '../assets/css/main.css'

export default {
    name: "SobreVue",
}
</script>

<style>
.bold{
    font-weight:bold ;
}
ul li {
  padding-left: 1rem;
}
</style>
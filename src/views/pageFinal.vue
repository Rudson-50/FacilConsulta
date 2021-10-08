<template>
  <div class=" col-12 ">
    <h2 class="conclusion">Revisão do cadastro</h2>

    <div>
      <div class="titles">Nome Completo</div>
      <div class="subtitles">{{ $store.state.usuario.name }}</div>
      <div class="titles">CPF</div>
      <div class="subtitles">{{ $store.state.usuario.cpf }}</div>
      <div class="titles">Número de Celular</div>
      <div class="subtitles">{{ $store.state.usuario.tel }}</div>
      <div class="titles">Estado e Cidade</div>
      <div class="subtitles">
        {{ $store.state.usuario.state }} - {{ $store.state.usuario.city }}
      </div>
      <img class="imgPage3" src="@/assets/page3.png" />
      <div class="titles">Especialidade principal</div>
      <div class="subtitles">{{ $store.state.usuario.special }}</div>
      <div class="titles">Preço da Consulta</div>
      <div class="subtitles">
        R$ {{ $store.state.usuario.price | numberPrice }}
      </div>
      <div class="titles">Forma de Pagamento da consulta</div>
      <div class="subtitles">
        {{ $store.state.usuario.payment }} {{ $store.state.usuario.card }}
      </div>
    </div>
    <div>
      <router-link to="/pageUser">
        <Button class="col-md-6 col-12">Cadastrar Profissional</Button>
      </router-link>
      <router-link to="/">
        <div class="link text-center col-md-6 col-12 ">Editar cadastro</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  components: {
    Button,
  },
  filters: {
    numberPrice(value) {
      return value.split(".").join(",");
    },
  },
};
</script>

<style>

</style>

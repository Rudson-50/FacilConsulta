<template>
  <div>
    <h2 class="row col-md-12 col-sm-12 ">Informações do Usuário</h2>
    <div class="row">
      <div class="col-md-4 col-sm-12 ">
        <div class="titles">Nome Completo</div>
        <div class="subtitles">{{ $store.state.usuario.name }}</div>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="titles">CPF</div>
        <div class="subtitles">{{ $store.state.usuario.cpf }}</div>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="titles">Número de Celular</div>
        <div class="subtitles">{{ $store.state.usuario.tel }}</div>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="titles">Estado e Cidade</div>
        <div class="subtitles">
          {{ $store.state.usuario.state }} - {{ $store.state.usuario.city }}
        </div>
      </div>
    </div>
    <h2 class="atend">Informações de Atendimento</h2>
    <div class="row">
      <div class="col-md-4 col-sm-12 ">
        <div class="titles">Especialidade principal</div>
        <div class="subtitles">{{ $store.state.usuario.special }}</div>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="titles">Preço da Consulta</div>
        <div class="subtitles ">R$ {{ $store.state.usuario.price }}</div>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="titles">Forma de Pagamento da consulta</div>
        <div class="subtitles">
          {{ $store.state.usuario.payment }} {{ $store.state.usuario.card }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    numberPrice(value) {
      return value.split(".").join(",");
    },
  },
};
</script>

<style></style>

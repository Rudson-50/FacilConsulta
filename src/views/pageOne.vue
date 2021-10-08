<template>
  <div>
    <h2 class="row col-md-6 col-sm-12 ">Sobre o profissional</h2>
    <div class="subtitle">
      <h4 class="subtitle">Dados do profissional</h4>
    </div>
    <form @submit.prevent="handleSubmit">
      <label for="name">Nome Completo*</label>
      <div>
        <input
          class="input-text col-md-6 col-12"
          type="text"
          name="name"
          id="name"
          maxlength="48"
          v-model.trim="$v.name.$model"
          v-on:input="$v.name.$touch"
          :class="{ error: $v.name.$error }"
          placeholder="Digite seu nome"
          v-model="name"
        />
        <div class="error" v-if="!$v.name.required && $v.name.$dirty">
          O campo é requirido
        </div>
        <div class="error" v-if="!$v.name.minLength">
          O campo nome deve ter no mínimo
          {{ $v.name.$params.minLength.min }} letras.
        </div>
        <div class="error" v-if="!$v.name.maxLength">
          O campo nome deve ter no máximo
          {{ $v.name.$params.maxLength.max }} letras.
        </div>
      </div>
      <label for="cpf">CPF*</label>
      <div>
        <input
          class="input-text col-md-4 col-7"
          type="text"
          name="cpf"
          v-mask="'###.###.###-##'"
          id="cpf"
          v-model.trim="$v.cpf.$model"
          v-on:input="$v.cpf.$touch"
          :class="{ error: $v.cpf.$error }"
          placeholder="Digite seu CPF"
          v-model="cpf"
        />
        <div class="error" v-if="!$v.cpf.required && $v.cpf.$dirty">
          O campo é requirido
        </div>
        <div class="error" v-if="!$v.cpf.minLength">
          O campo cpf deve ter no mínimo 11 números.
        </div>   
        <img class="imgPage1" src="@/assets/page1.png" />
      </div> 
      <label for="tel">Número de celular*</label>
      <div>
        <input
          class="input-text col-md-4 col-7"
          type="text"
          name="tel"
          id="tel"
          v-mask="'(##)#####-####'"
          v-on:input="$v.tel.$touch"
          v-model.trim="$v.tel.$model"
          :class="{ error: $v.tel.$error }"
          placeholder="(00)00000-0000"
          v-model="tel"
        />
        <div class="error" v-if="!$v.tel.required && $v.tel.$dirty">
          O campo é requirido
        </div>
        <div class="error" v-if="!$v.tel.minLength">
          O campo celular deve ter no mínimo 11 números.
        </div>
      </div>
      <div class="row">
        <div class="form-group col-md-3 col-6">
          <label for="selectState">Estado*</label>
          <select
            class="form-control "
            id="selectState"
            @click="isDisabled"
            name="state"
            v-on:input="$v.state.$touch"
            v-model.trim="$v.state.$model"
            :class="{ error: $v.state.$error }"
            v-model="state"
          >
            <option selected value>Selecione</option>
            <option>Paraná</option>
            <option>Rio Grande do Sul</option>
            <option>Santa Catarina</option>
          </select>
          <div class="error" v-if="!$v.state.required && $v.state.$dirty">
            Selecione uma opção
          </div>
        </div>
       
        <div class="form-group col-md-3 col-6" >
          <label for="selectStateCity">Cidade*</label> 
       
          <select
            class="form-control "
            id="selectCity"
            name="city"
            v-on:input="$v.city.$touch"
            v-model.trim="$v.city.$model"
            :class="{ error: $v.city.$error }"
            v-model="city"
          >
            <option selected value> Selecione </option>
            <option v-if="parana">Londrina</option>
            <option v-if="parana">Maringá</option>
            <option v-if="santa">Florianópolis</option>
            <option v-if="santa">Joinville</option>
            <option v-if="rio">Pelotas</option>
            <option v-if="rio">Porto Alegre</option>
          </select>
      
          <div class="error" v-if="!$v.city.required && $v.city.$dirty">
            Selecione uma opção
          </div>
        </div>
        
      </div>
      <div class="numberPag">
        <div class="progress">
          <div
            class="progress-bar "
            role="progressbar"
            style="width: 50%; background-color: #483698;"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <span>Página 1 de 2</span>
      </div>

      <Button class="col-sm-12 col-md-6 ">Próximo</Button>
    </form>
  </div>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import Button from "../components/Button.vue";
export default {
  name: "Home",
  components: {
    Button,
  },
  data() {
    return {
      parana: false,
      rio: false,
      santa: false,
    };
  },
  methods: {
    isDisabled(e) {
      if (e.target.value === "Paraná") {
        return (this.parana = !this.parana);
      }
      if (e.target.value === "Santa Catarina") {
        return (this.santa = !this.santa);
      } 

      if (e.target.value === "Rio Grande do Sul") {
        return (this.rio = !this.rio);
      }
    },
    handleSubmit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$router.push("/pageTwo");
    },
  },
  computed: {
    ...mapFields({
      fields: ["name", "tel", "cpf", "city", "state"],
      base: "usuario",
      mutation: "UPDATE_USER",
    }),
  },

  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(48) },
    cpf: { required, minLength: minLength(14) },
    tel: { required, minLength: minLength(14) },
    state: {
      required,
    },
    city: {
      required,
    },
  },
};
</script>
<style>

</style>

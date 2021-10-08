<template>
  <div>
    <h2>Sobre o Atendimento</h2>
    <div class="subtitle">
      <h4>Detalhes do Atendimento</h4>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="form-group col-md-6 col-sm-12">
          <label for="selectSpecial">Especialidade principal*</label>
          <select
            class="form-control "
            id="selectSpecial"
            v-on:input="$v.special.$touch"
            v-model.trim="$v.special.$model"
            :class="{ error: $v.special.$error }"
            v-model="special"
          >
            <option selected value>Escolha a Especialidade</option>
            <option>Cardiologia</option>
            <option>Dermatologia</option>
            <option>Urologia</option>
            <option>Psiquiatria</option>
            <option>Oftalmologia</option>
          </select>
          <div class="error" v-if="!$v.special.required && $v.special.$dirty">
            Selecione uma opção
          </div>
        </div>
      </div>

      <label for="price">Informe o preço da consulta*</label>
      <div class="input-money  ">
        <span class="money col-1 col-md-1">R$</span>
        <input
          class="input-text col-8 col-md-5"
          type="text"
          name="price"
          id="price"
          v-on:input="$v.price.$touch"
          placeholder="Valor"
          v-mask="number"
          v-model.trim="$v.price.$model"
          :class="{ error: $v.price.$error }"
          v-model="price"
        />
      </div>
      <div class="error" v-if="!$v.price.required && $v.price.$dirty">
        O campo é requirido
      </div>
      <div class="error" v-if="!$v.price.between">
        O preço mínimo é R$30,00 e o máximo R$350,00
      </div>
      <div class="error" v-if="!$v.price.minLength">
          O campo preço deve ter no mínimo
          4 números.
        </div>
      <img class="imgPage2" src="@/assets/page2.png" />
      <div class="title ">Formas de pagamento da consulta*</div>
      <div
        class="form-check col-md-6 col-sm-12"
        v-for="(option, index) in options"
        :key="index"
      >
        <input
          class="checkbox"
          type="checkbox"
          name="flexCheckbox"
          v-on:change="$v.payment.$touch"
          v-bind:id="option.index"
          v-bind:value="option.pay"
          @click="isChecked"
          v-model="payment"
        />
        <label class="form-check-label" for="flexCheckbox">
          {{ option.pay }}
        </label>
        
        <div v-show="option.index === 3 && checked" class="portion text-center">
          Parcelamentos em
          <div
            class="form-check-card"
            v-for="(credit, id) in credits"
            :key="id"
          >
            <input
              type="radio"
              name="flexRadio"
              v-bind:id="credit.id"
              v-bind:value="credit.time"
              v-model="card"
            />
            <label class="form-check-label" for="flexRadio">
              {{ credit.time }}
            </label>
          </div>
        </div>
      </div>
      <div class="error" v-if="!$v.payment.required && $v.payment.$dirty">
        Selecione pelo menos uma opção
      </div>
      <div  class="error" v-if=" !$v.card.required && $v.card.$dirty">
        Selecione uma opção de parcelamento

      </div>
      <div class="numberPag">
        <div class="progress">
          <div
            class="progress-bar "
            role="progressbar"
            style="width: 100%; background-color: #483698;"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <span>Página 2 de 2</span>
      </div>
      <Button class="col-md-6 col-12">Próximo</Button>
    </form>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import { mapFields } from "@/helpers.js";
import { required, between, minLength, requiredIf } from "vuelidate/lib/validators";
export default {
  components: {
    Button,
  },
  data() {
    return {
      checked: false,
      options: [
        { pay: "PIX", index: 1 },
        { pay: "Em dinheiro", index: 2 },
        { pay: "Cartão de Crédito", index: 3},
      ],
      credits: [
        { time: "1X Sem Juros", id: 1 },
        { time: "2X Sem Juros", id: 2 },
        { time: "3X Sem Juros", id: 3 },
      ],
    };
  },
  validations: {
    price: { required, between: between(30.00, 350.00), minLength: minLength(5)  },
    special: {
      required,
    },
    payment: {
      required,
    },
    
    card:{ required: requiredIf(function () {
      return this.checked
    })
    }
  },
  computed: {
    ...mapFields({
      fields: ["special", "price", "payment", "card"],
      base: "usuario",
      mutation: "UPDATE_USER",
    }),
    number() {
      return this.price.length === 6 ? "###.##" : "##.##";
    },
  },

  methods: {
    isChecked(e) {
      if (e.target.value === "Cartão de Crédito") {
        return (this.checked = !this.checked);
      }
     
    },
    handleSubmit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$router.push("/pageFinal");
    },

    },
};
</script>

<style>
.imgPage2 {
  max-width: 400px;
  position: absolute;
  right: 40px;
  top: 150px;
}
</style>

<template>

  
  <div class="card mycard col-md-9 col-sm-12">
   
    <div class="card-body ">
      <router-view />
      <router-link class="links text-center" to="/" v-show="$route.name ==='pageTwo'"><img class="back" src="@/assets/back.png" /></router-link>
    <router-link class="links text-center" to="/pageTwo" v-show="$route.name ==='pageFinal'"><img class="back" src="@/assets/back.png" /></router-link>
    </div>
    
  </div>

</template>

<style>
/* Geral */

body {
  background-color: #ffe766 !important;
}
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
*{
  font-family: 'Open Sans';
}
.mycard {
  margin: 80px auto;
  float: none;
  margin-bottom: 10px ;
  padding: 20px 70px !important;
  border-radius: 30px !important;
}

h2 {
  color: #493698;
  font-family: Comfortaa;
  font-size: 1.8rem !important;
}
/* pageOne */
.subtitle {
  margin: 40px 0;
}

label {
  font-family: 'Open Sans';
  font-size: 1rem;
  margin-top: 5px;
}

.imgPage1 {
  max-width: 400px !important;
  position: absolute;
  right: 40px;
  top: 120px;
} 

.input-text {
  padding: 5px;
  margin-bottom: 3px !important;
  border-color: #493698;
  border-radius: 2px;
}

.form-select {
  padding: 7px 0;
  margin-right: 15px;
}

.progress {
  max-width: 350px;
  min-height: 20px;
  margin-top: 20px;
}

.numberPag {
  margin-bottom: 20px;
}

.money {
  padding: 8px;
  background-color: #493698;
  border-radius: 4px 0px 0px 4px;
  font-family: 'Open Sans';
  font-weight: bold;
  color: #fff;
  font-size: 1rem;
}
.atend {
  margin-top: 20px;
}
.title {
  font-family: 'Open Sans';
  font-size: 1rem;
  margin-top: 10px;
}

.error {
  color: #dc3545;

}
.back {
  height: 40px;
  width: 40px;
  margin-right: 10px;
  position: absolute;
  top: -45px;
}

.links:hover {
  color: #fff;
  text-decoration: none;
}


 /* pageTwo */

 .form-check {
  margin: 10px 0 10px 0;
  padding: 10px;
  box-shadow: -1px 1px 1px 1px #b9b9b9;
  border-radius: 10px;
  font-weight: bold;
  font-family: 'Open sans';
}
.form-check-card {
  margin: 10px;
}
.checkbox {
  margin: 0px 30px 0 10px;
}

.portion {
  margin: 20px 0 10px 0;
}
.form-check-label {
  margin-left: 10px;
}

/* PageFinal */
.imgPage3 {
  max-width: 400px !important;
  position: absolute;
  left: 400px;
  top: 150px;
}
.conclusion {
  margin-bottom: 45px;
}

.titles {
  font-weight: bold;
  margin: 10px 0;
}
.subtitles {
  margin-bottom: 20px;
}

.link {
  color: #493698;
  font-size: 1.1rem;
  margin-top: 10px;
  text-decoration: none;
}

/* mobile */
@media only screen and (max-width: 540px) {
.mycard {
  padding: 0px !important;
}
}

@media only screen and (max-width: 1250px) {
.imgPage1, .imgPage2, .imgPage3 {
  display: none;
}
}
</style>


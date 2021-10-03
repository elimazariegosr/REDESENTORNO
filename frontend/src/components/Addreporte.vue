<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="carnet">Carnet</label>
        <input
          type="text"
          class="form-control"
          id="carnet"
          required
          v-model="report.carnet"
          name="carnet"
        />
      </div>

      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          class="form-control"
          id="nombre"
          required
          v-model="report.nombre"
          name="nombre"
        />
      </div>

      <div class="form-group">
        <label for="curso">Curso</label>
        <input
          type="text"
          class="form-control"
          id="curso"
          required
          v-model="report.curso"
          name="curso"
        />
      </div>

      <div class="form-group">
        <label for="cuerpo">Contenido</label>
        <input
          class="form-control"
          id="cuerpo"
          required
          v-model="report.cuerpo"
          name="cuerpo"
        />
      </div>

      <button @click.prevent="saveReport" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newreporte">Add</button>
    </div>
  </div>
</template>

<script>
import reporteDataService from "../services/reporteDataService";
import moment from 'moment'

export default {
  name: "add-report",
  data() {
    return {
      report: {
        carnet: "",
        nombre: "",
        curso: "",
        cuerpo: "",
        fecha: ""     
        },
      submitted: false
    };
  },
  methods: {
    saveReport() {
      var data = {
        carnet: this.report.carnet,
        nombre: this.report.nombre,
        curso: this.report.curso,
        cuerpo: this.report.cuerpo,
        fecha: moment(String(new Date())).format('MM/DD/YYYY')
      };
      console.log(data)

     reporteDataService.create(data)
        .then(response => {
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newreporte() {
      this.submitted = false;
      this.report = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 800px;
  margin: auto;
}
</style>

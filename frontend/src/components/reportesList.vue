<template>
  <div >
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Buscar por carnet"
          v-model="searchCarnet"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchCurrentCarnet"
          >Search </button>
          <button class="btn btn-outline-secondary" type="button"
            @click="retrievereportes"
          >All </button>
        </div>
      </div>
    </div>
    <div class="view">
        <div class="col-md-8">
          <h4>Reportes</h4>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Carnet</th>
                        <th>Nombre</th>
                        <th>Curso</th>
                        <th>Procesado por</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :class="{ active: index == currentIndex }" v-for="(report, index) in reports" :key="index">
                        <td>{{report.carnet}}</td>
                        <td>{{report.nombre}}</td>
                        <td>{{report.curso}}</td>
                        <td>{{report.procesado_por}}</td>
                        <td>
                          <button @click.prevent="setCurrentReport(report, index)" class="btn btn-success">See</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
        <div >
          <div v-if="currentReport">
            <h4>Reporte Individual</h4>
            <div>
              <label><strong>Carnet:</strong></label> {{ currentReport.carnet }}
            </div>
            <div>
              <label><strong>Nombre:</strong></label> {{ currentReport.nombre }}
            </div>
            <div>
              <label><strong>Curso:</strong></label> {{ currentReport.curso }}
            </div>
            <div>
              <label><strong>Contenido:</strong></label> {{ currentReport.cuerpo}}
            </div>
            <div>
              <label><strong>Procesado por:</strong></label> {{ currentReport.procesado_por}}
            </div>
            <div>
              <label><strong>Solicitud obtenida por el servidor: {{servidor}}</strong></label>
            </div>
          </div>
          <div v-else>
            <br />
            <p>Please click on a Report...</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import reporteDataService from "../services/reporteDataService";

export default {
  nombre: "reports-list",
  data() {
    return {
      reports: [],
      servidor: '',
      currentReport: null,
      currentIndex: -1,
      searchCarnet: ""
    };
  },
  methods: {
    retrievereportes() {
      reporteDataService.getAll()
        .then(response => {
          this.reports = response.data.datos;
          this.servidor = response.data.servidor;
        })
        .catch(e => {
          console.log(e);
        });
    },

    setCurrentReport(report, index) {
      this.currentReport = report;
      this.currentIndex = index;
    },

    searchCurrentCarnet() {
      if(this.searchCarnet === "") {
        this.retrievereportes();
        return;
      }
      reporteDataService.findByTitle(this.searchCarnet)
        .then(response => {
          this.reports = response.data.datos;
          this.searchCarnet = ""
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievereportes();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.view {
  display: flex; 
  flex-direction: row; 
  justify-content: space-between
}
</style>

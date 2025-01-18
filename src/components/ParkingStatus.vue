<template>
    <v-app class="Global">
      <div class="Image-container">
        <img class="Image" alt="Estacionamiento" src="../assets/ejemplo.png" />
      </div>
  
      <div class="Items">
        <v-simple-table>
          <tbody>
            <hr />
            <tr>
              <td>Cajones estudiantes disponibles</td>
              <td style="text-align: right;">{{ cajonesDisponiblesAlumnos }}</td>
            </tr>
            <tr>
              <td>Cajones profesores disponibles</td>
              <td style="text-align: right;">{{ cajonesDisponiblesProfesores }}</td>
            </tr>
            <hr />
            <tr>
              <td>Cajones estudiantes ocupados</td>
              <td style="text-align: right;">{{ cajonesOcupadosAlumnos }}</td>
            </tr>
            <tr>
              <td>Cajones profesores ocupados</td>
              <td style="text-align: right;">{{ cajonesOcupadosProfesores }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
  
      <div class="qr-icon" style="text-align: right; margin-top: 20px; margin-right: 20px;">
        <i class="fas fa-qrcode" style="font-size: 120px; cursor: pointer;" @click="irAQR"></i>
        <hr />
      </div>
  
      <footer class="footer">
        <v-simple-list>
          <tbody>
            <tr>
              <td><i class="fas fa-car" style="font-size: 24px;"></i></td>
              <td>Estacionamiento</td>
              <td><i class="fas fa-user mr-2" style="font-size: 24px;"></i></td>
              <td><i class="fas fa-flag mr-2" style="font-size: 24px;"></i></td>
            </tr>
          </tbody>
        </v-simple-list>
      </footer>
    </v-app>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "ParkingStatus",
    data() {
      return {
        cajonesDisponiblesAlumnos: 150 as number,
        cajonesDisponiblesProfesores: 50 as number,
        cajonesOcupadosAlumnos: 0 as number,
        cajonesOcupadosProfesores: 0 as number,
      };
    },
    methods: {
      irAQR(): void {
        console.log("Redirigiendo al QR...");
      },
    },
  });
  </script>
  
  <style scoped>
  .Items {
    display: flex;
  }
  
  .Image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
  }
  
  td {
    font-size: 20px;
    padding: 12px;
  }
  
  hr {
    border: 1px solid gray;
    margin: 5px 0;
    width: 100%;
  }
  </style>
  
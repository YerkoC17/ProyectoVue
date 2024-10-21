<template>
    <div class="container mt-5">
      <h1 class="text-success">Bienvenido a View Y</h1>
      <p class="lead">Esta es una vista de ejemplo utilizando Vue y Bootstrap.</p>
      <button class="btn btn-dark" @click="showAlert">Mostrar Alerta</button>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    name: 'ViewY',
    methods: {
      showAlert() {
        Swal.fire({
          title: '¡Hola!',
          text: 'Esta es una alerta de SweetAlert.',
          icon: 'info',
          confirmButtonText: 'Aceptar',
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #f8f9fa; /* Fondo claro para resaltar el contenido */
  }
  </style>
  
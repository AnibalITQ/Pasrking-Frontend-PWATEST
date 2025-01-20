<template>
  <div class="sidebar-container">
    <!-- Overlay que difumina el fondo -->
    <div
      class="overlay"
      :class="{ 'is-visible': is_expanded }"
      @click="ToggleMenu"
    ></div>

    <!-- Sidebar -->
    <aside :class="{ 'is-expanded': is_expanded }">
      <div class="menu">
        <div class="logo">
            <img src="../assets/logoxd.png" alt="parking-logo" class="w-20 h-auto" />
        </div>
        <h3>Menu</h3>
        <router-link class="button" to="/home">
          <span class="material-icons">home</span>
          <span class="text">Home</span>
        </router-link>
        <router-link class="button" to="/about">
          <span class="material-icons">directions_car</span>
          <span class="text">Estacionamiento</span>
        </router-link>
        <router-link class="button" to="/Perfil">
          <span class="material-icons">person</span>
          <span class="text">Perfil</span>
        </router-link>
        <router-link class="button" to="/Reportes">
          <span class="material-icons">flag</span>
          <span class="text">Reportes</span>
        </router-link>
      </div>
    </aside>

    <!-- Botón del menú -->
    <button
      class="menu-toggle"
      :class="{ 'is-expanded': is_expanded }"
      @click="ToggleMenu"
    >
      <span class="material-icons">api</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(false);

const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  position: relative;

  /* Fondo difuminado */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 100;
  }

  .overlay.is-visible {
    opacity: 1;
    pointer-events: auto;
  }

  aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--dark);
    overflow: hidden;
    transition: width 0.3s ease-out;
    z-index: 200;
    &.is-expanded {
      width: 300px; /* Tamaño del menú expandido */
    }

    .menu {
      padding: 1rem;

      h3 {
        color: var(--light);
        font-size: 1rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }

      .button {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem;
        text-decoration: none;
        color: var(--light);
        transition: background-color 0.2s ease;

        .material-icons {
          font-size: 1.5rem;
          color: var(--light);
        }

        &:hover {
          background-color: var(--grey);
          .material-icons {
            color: var(--primary);
          }
        }
      }
    }
  }

  .menu-toggle {
    position: fixed;
    top: 1rem;
    left: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 200; /* Asegurar que esté encima del menú */
    transition: transform 0.3s ease-out;

    .material-icons {
      font-size: 2rem;
      color: var(--light-orange);
    }

    /* Animación del botón */
    &.is-expanded {
      transform: translateX(300px); /* Mover el botón fuera del menú */
    }
  }
}
</style>

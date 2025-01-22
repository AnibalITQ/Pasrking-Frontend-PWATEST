<template>
  <div
    class="bg-[#EC8013] flex items-center justify-center p-4 w-full h-screen relative"
  >
    <div class="bg-white rounded-3xl mt-[10%] p-8 overflow-y-auto w-full h-[90vh] sm:h-[70vh] min-h-[500px] mx-auto">
      <h2 class="text-2xl font-semibold text-center mb-6">REGISTRARSE</h2>
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label
            for="numControl"
            class="block text-sm font-semibold text-gray-700 mb-1"
            >NUM CONTROL</label
          >
          <input
            id="numControl"
            v-model="form.numControl"
            type="text"
            required
            class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
            :class="{ 'border-red-500': errors.numControl }"
          />
          <p v-if="errors.numControl" class="mt-1 text-sm text-red-500">
            {{ errors.numControl }}
          </p>
        </div>
        <div>
          <label
            for="nombre"
            class="block text-sm font-semibold text-gray-700 mb-1"
            >NOMBRE</label
          >
          <input
            id="nombre"
            v-model="form.nombre"
            type="text"
            required
            class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
            :class="{ 'border-red-500': errors.nombre }"
          />
          <p v-if="errors.nombre" class="mt-1 text-sm text-red-500">
            {{ errors.nombre }}
          </p>
        </div>
        <div>
          <label
            for="apellidos"
            class="block text-sm font-semibold text-gray-700 mb-1"
            >APELLIDOS</label
          >
          <input
            id="apellidos"
            v-model="form.apellidos"
            type="text"
            required
            class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
            :class="{ 'border-red-500': errors.apellidos }"
          />
          <p v-if="errors.apellidos" class="mt-1 text-sm text-red-500">
            {{ errors.apellidos }}
          </p>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1"
            >AUTOS</label
          >
          <div v-for="(car, index) in form.autos" :key="index" class="mt-6 p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50">
            <p class="block text-lg font-semibold text-gray-800 mb-1">
              AUTO {{ index + 1 }}
            </p>
            <div>
              <label
                for="placas"
                class="block text-sm font-medium text-gray-700 mb-1"
                >PLACAS</label
              >
              <input
                v-model="form.autos[index].placas"
                type="text"
                required
                class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                :class="{ 'border-red-500': carErrors[index]?.placas }"
              />
              <p
                v-if="carErrors[index]?.placas"
                class="mt-1 text-sm text-red-500"
              >
                {{ carErrors[index].placas }}
              </p>
            </div>
            <div>
              <label
                for="modelo"
                class="block text-sm font-medium text-gray-700 mb-1"
                >MODELO</label
              >
              <input
                v-model="form.autos[index].modelo"
                type="text"
                required
                class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                :class="{ 'border-red-500': carErrors[index]?.modelo }"
              />
              <p
                v-if="carErrors[index]?.modelo"
                class="mt-1 text-sm text-red-500"
              >
                {{ carErrors[index].modelo }}
              </p>
            </div>
            <div>
              <label
                for="year"
                class="block text-sm font-medium text-gray-700 mb-1"
                >AÑO</label
              >
              <input
                v-model="form.autos[index].year"
                type="text"
                required
                class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                :class="{ 'border-red-500': carErrors[index]?.year }"
              />
              <p
                v-if="carErrors[index]?.year"
                class="mt-1 text-sm text-red-500"
              >
                {{ carErrors[index].year }}
              </p>
            </div>
            <div>
              <label
                for="color"
                class="block text-sm font-medium text-gray-700 mb-1"
                >COLOR</label
              >
              <input
                v-model="form.autos[index].color"
                type="text"
                required
                class="w-full px-3 py-2 border-b border-gray-300 focus:border-orange-500 outline-none transition-colors"
                :class="{ 'border-red-500': carErrors[index]?.color }"
              />
              <p
                v-if="carErrors[index]?.color"
                class="mt-1 text-sm text-red-500"
              >
                {{ carErrors[index].color }}
              </p>
            </div>
          </div>
        </div>
        <p v-if="errors.autos" class="mt-1 text-sm text-red-500">
            {{ errors.autos}}
          </p>
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="button"
            @click="handleNewCar"
            class="w-full sm:w-1/2 px-6 py-3 bg-[#2C3E50] text-white rounded-full hover:bg-[#34495E] transition-colors"
          >
            Agregar auto
          </button>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full sm:w-1/2 px-6 py-3 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition-colors disabled:opacity-50"
          >
            {{ isLoading ? "Cargando..." : "Acceder" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRegisterForm } from './RegisterForm'; // Importamos el hook

const {
  form,
  errors,
  cars,
  carErrors,
  handleNewCar,
  handleSubmit,
  isLoading
} = useRegisterForm(); // Usamos el hook para traer la lógica
</script>

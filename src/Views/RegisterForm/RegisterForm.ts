// composables/useRegisterForm.ts
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

interface FormData {
  numControl: string;
  nombre: string;
  apellidos: string;
  autos: AutoData[];
}

interface FormErrors {
  numControl?: string;
  nombre?: string;
  apellidos?: string;
  autos?: string;
}

interface AutoData {
  placas: string;
  modelo: string;
  year: string;
  color: string;
}

interface AutoErrors {
  placas?: string;
  modelo?: string;
  year?: string;
  color?: string;
}

export const useRegisterForm = () => {
  const router = useRouter();
  
  const cars = reactive<AutoData[]>([]);
  const carErrors = reactive<Record<number, AutoErrors>>({});
  const isLoading = ref(false);
  
  const form = reactive<FormData>({
    numControl: '',
    nombre: '',
    apellidos: '',
    autos: [],
  });

  const errors = reactive<FormErrors>({
    numControl: '',
    nombre: '',
    apellidos: '',
    autos: '',
  });

  const validateForm = (): boolean => {
    let isValid = true;
    errors.numControl = '';
    errors.nombre = '';
    errors.apellidos = '';
    if (!form.numControl) {
      errors.numControl = 'El número de control es requerido';
      isValid = false;
    }
    if (!form.nombre) {
      errors.nombre = 'El nombre es requerido';
      isValid = false;
    }
    if (!form.apellidos) {
      errors.apellidos = 'Los apellidos son requeridos';
      isValid = false;
    }
    if (form.autos.length === 0) {
      errors.autos = 'Debe agregar al menos un auto';
      isValid = false;
    }
    return isValid;
  };

  const handleNewCar = () => {
    form.autos.push({ placas: '', modelo: '', year: '', color: '' });
    carErrors[cars.length - 1] = {};
  };

  const ValidateCar = (index: number): boolean => {
    const currentCar = cars[index];
    let isValid = true;

    carErrors[index] = {
      placas: '',
      modelo: '',
      year: '',
      color: '',
    };

    if (!currentCar.placas) {
      carErrors[index].placas = 'Las placas son requeridas';
      isValid = false;
    }
    if (!currentCar.modelo) {
      carErrors[index].modelo = 'El modelo es requerido';
      isValid = false;
    }
    if (!currentCar.year) {
      carErrors[index].year = 'El año es requerido';
      isValid = false;
    }
    if (!currentCar.color) {
      carErrors[index].color = 'El color es requerido';
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async () => {
    isLoading.value = true;

    if (!validateForm()) {
      isLoading.value = false;
      return;
    }

    cars.forEach((_, index) => {
      if (!ValidateCar(index)) {
        isLoading.value = false;
        return;
      }
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push('/login');
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    form,
    errors,
    cars,
    carErrors,
    handleNewCar,
    handleSubmit,
    isLoading,
  };
};

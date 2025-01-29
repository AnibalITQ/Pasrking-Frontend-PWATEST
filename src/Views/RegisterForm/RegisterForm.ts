import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

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

interface FormData {
  numControl: string;
  nombre: string;
  apellidos: string;
  password: string;
  passwordConfirm: string;
  autos: AutoData[];
}

interface FormErrors {
  numControl?: string;
  nombre?: string;
  apellidos?: string;
  password?: string;
  passwordConfirm?: string;
  autos?: string;
}

export const useRegisterForm = () => {
  const router = useRouter();
  const isLoading = ref(false);

  // Iniciamos con un auto vacío por defecto
  const form = reactive<FormData>({
    numControl: '',
    nombre: '',
    apellidos: '',
    password: '',
    passwordConfirm: '',
    autos: [
      { placas: '', modelo: '', year: '', color: '' }
    ],
  });

  const errors = reactive<FormErrors>({
    numControl: '',
    nombre: '',
    apellidos: '',
    password: '',
    passwordConfirm: '',
    autos: '',
  });

  // Errores para cada auto en "form.autos"
  const carErrors = reactive<Record<number, AutoErrors>>({});

  // Agregar un auto vacío
  const handleNewCar = () => {
    form.autos.push({ placas: '', modelo: '', year: '', color: '' });
    carErrors[form.autos.length - 1] = {};
  };

  // Validar un auto por índice
  const ValidateCar = (index: number): boolean => {
    const currentCar = form.autos[index];
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

  // Validar el formulario completo
  const validateForm = (): boolean => {
    let isValid = true;
    errors.numControl = '';
    errors.nombre = '';
    errors.apellidos = '';
    errors.autos = '';
    errors.password = '';
    errors.passwordConfirm = '';

    // Campos personales
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

    // Autos
    if (form.autos.length === 0) {
      errors.autos = 'Debe agregar al menos un auto';
      isValid = false;
    }

    // Password
    if (!form.password) {
      errors.password = 'La contraseña es requerida';
      isValid = false;
    }
    if (!form.passwordConfirm) {
      errors.passwordConfirm = 'La confirmación de contraseña es requerida';
      isValid = false;
    }
    if (form.password !== form.passwordConfirm) {
      errors.passwordConfirm = 'Las contraseñas no coinciden';
      isValid = false;
    }

    return isValid;
  };

  // Handler para enviar el formulario
  const handleSubmit = async () => {
    console.log('Enviando formulario...');
    isLoading.value = true;

    if (!validateForm()) {
      isLoading.value = false;
      return;
    }

    // Validamos cada auto
    for (let i = 0; i < form.autos.length; i++) {
      if (!ValidateCar(i)) {
        isLoading.value = false;
        return;
      }
    }

    // Simulamos el envío
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Formulario enviado', form);
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
    carErrors,
    handleNewCar,
    ValidateCar,
    handleSubmit,
    isLoading,
  };
};

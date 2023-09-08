import './App.css';

import { useForm } from 'react-hook-form';

import postProduct from './lib/api';
import MessageError from './Components/MessageError';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const saveUser = (data) => postProduct(data);

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <form
        className="flex w-[30rem] flex-col space-y-10"
        onSubmit={handleSubmit(saveUser)}
      >
        <div className="text-center text-4xl font-medium">Producto</div>

        <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <div className="border-b-2">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              {...register('name', {
                required: 'Este input es requerido.',
                minLength: {
                  value: 5,
                  message: 'Necesitas escribir más de 5 caracteres.',
                },
              })}
            />
          </div>
          {errors.name?.message && (
            <MessageError message={errors.name?.message} />
          )}
        </div>
        <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <div className="border-b-2">
            <input
              type="text"
              placeholder="Imagen"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              {...register('picture', {
                required: 'Este input es requerido.',
                pattern: {
                  value:
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/,
                  message: 'Este input solo debe ser una url de una imagen.',
                },
              })}
            />
          </div>
          {errors.picture?.message && (
            <MessageError message={errors.picture?.message} />
          )}
        </div>
        <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <div className="border-b-2">
            <input
              type="text"
              placeholder="Precio"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              {...register('price', {
                required: 'Este input es requerido.',
                pattern: {
                  value: /\d+/,
                  message: 'Este input solo debe ser numérico.',
                },
                min: {
                  value: 50,
                  message: 'El precio no debe ser menor a $50.',
                },
              })}
            />
          </div>
          {errors.price?.message && (
            <MessageError message={errors.price?.message} />
          )}
        </div>
        <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('category', {
              required: 'Seleccione una opción.',
            })}
          >
            <option value=""></option>
            <option value="Computadoras">Computadoras</option>
            <option value="Electrodomésticos">Electrodomésticos</option>
            <option value="Accesorios">Accesorios</option>
          </select>
          {errors.category?.message && (
            <MessageError message={errors.category?.message} />
          )}
        </div>

        <div className="w-full transform bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <textarea
            rows="4"
            className="mb-3 block p-2.5 w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-900 focus:border-blue-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-white-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Descripción..."
            {...register('description', {
              required: 'Este input es requerido.',
              minLength: {
                value: 30,
                message: 'Necesitas escribir más de 30 caracteres',
              },
            })}
          ></textarea>

          {errors.description?.message && (
            <MessageError message={errors.description?.message} />
          )}
        </div>

        <button
          className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
          type="submit"
        >
          Crear
        </button>
      </form>
    </main>
  );
}

export default App;

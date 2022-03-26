<template>
    <div class="flex justify-center p-4 w-full bg-gray-50 dark:bg-gray-800 h-full" id="orderCake">
        <div class="w-9/12 md:w-3/4 lg:w-2/4">
            <div class="relative z-0 mb-6 w-full group">
                <input type="text" name="nombreCompleto" v-model="nombreCompleto"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required="Ingresa tu nombre completo">
                <label for="nombreCompleto"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Nombre completo
                </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="telefonoContacto" id="telefonoContacto" v-model="telefono"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " required="Ingresa tu número de teléfono">
                <label for="telefonoContacto"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Teléfono
                </label>
            </div>
            <div class="grid xl:grid-cols-2 xl:gap-6">
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="calle" id="calle"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required="">
                    <label for="calle"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Calle
                    </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="colonia" id="colonia"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required="">
                    <label for="floating_last_name"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Colonia
                    </label>
                </div>
            </div>
            <div class="grid xl:grid-cols-3 xl:gap-6">
                <div class="relative z-0 mb-6 w-full group">
                    <input type="number" pattern="[0-9]{5}" name="codigoPostal" id="codigoPostal"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required="">
                    <label for="codigoPostal"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Código postal
                    </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="municipio" id="municipio"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required="">
                    <label for="municipio"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Municipio
                    </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input type="text" name="municipio" id="estado"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required="">
                    <label for="estado"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Estado
                    </label>
                </div>
            </div>
            <div class="relative z-0 mb-6 w-full group">
                <label for="pasteles" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    Selecciona un pastel
                </label>
                <select id="pasteles" @change="cakeSelectCheck($event)" v-model="pastel"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Triple Chocolate">Triple Chocolate</option>
                    <option value="Explosión de Fresa">Explosión de Fresa</option>
                    <option value="Vainilla Italiana">Vainilla Italiana</option>
                    <option id="customCake" value="Personalizado" ref="customcake">Personalizado</option>
                </select>
            </div>
            <div id="pastelPersonalizado" class="hidden xl:grid-cols-3 xl:gap-6">
                <div class="relative z-0 mb-6 w-full group">
                    <label for="cubierta" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Cubierta
                    </label>
                    <fieldset id="cubierta">
                        <div class="flex items-center mb-4">
                            <input id="cubiertaChocolate" aria-describedby="cubiertaChocolate" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked="">
                            <label for="cubiertaChocolate"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Chocolate</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="cubiertaFresa" aria-describedby="cubiertaFresa" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="cubiertaFresa"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Fresa</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="cubiertaVainilla" aria-describedby="cubiertaVainilla" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="cubiertaVainilla"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Vainilla</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="cubiertaCoco" aria-describedby="cubiertaCoco" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="cubiertaCoco"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Coco rayado</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="cubiertaChispas" aria-describedby="cubiertaChispas" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="cubiertaChispas"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Chispas de
                                colores</label>
                        </div>
                    </fieldset>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <label for="sabor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Sabor
                    </label>
                    <fieldset id="sabor">
                        <div class="flex items-center mb-4">
                            <input id="saborChocolate" aria-describedby="saborChocolate" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked="">
                            <label for="saborChocolate"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Chocolate</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="saborFresa" aria-describedby="saborFresa" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="saborFresa"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Fresa</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="saborVainilla" aria-describedby="saborVainilla" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="saborVainilla"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Vainilla</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="saborZanahoria" aria-describedby="saborZanahoria" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="saborZanahoria"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Zanahoria</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="saborLeches" aria-describedby="saborLeches" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="saborLeches"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Tres leches</label>
                        </div>
                    </fieldset>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <label for="adicional" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Adicionales
                    </label>
                    <fieldset id="adicional">
                        <div class="flex items-center mb-4">
                            <input id="adicionalVela" aria-describedby="adicionalVela" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                checked="">
                            <label for="adicionalVela"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Vela de
                                cumpleaños</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="adicionalPlatos" aria-describedby="adicionalPlatos" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="adicionalPlatos"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Platos
                                reciclables</label>
                        </div>
                        <div class="flex items-center mb-4">
                            <input id="adicionalCubiertos" aria-describedby="adicionalCubiertos" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="adicionalCubiertos"
                                class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Cubiertos
                                reciclables</label>
                        </div>
                    </fieldset>
                </div>
            </div>
            <button @click="registerOrder()"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Enviar
            </button>
        </div>
    </div>
</template>

<script>
    import store from "../store";
    import { ref } from 'vue';

    export default ({
        data(){
            return {
                nombreCompleto: "",
                telefono: "",
                pastel: "",
            }
        },
        methods: {
            registerOrder (){
                if(this.nombreCompleto != undefined && this.nombreCompleto.length > 0){
                    store.dispatch('addOrder', {
                        nombre: this.nombreCompleto,
                        telefono: this.telefono,
                        pastel: this.pastel
                    });
                    this.$router.push('/vieworders'); 
                }
            },
            cakeSelectCheck(event) {
                if(event.target.value){
                    if(event.target.value == 'Personalizado'){
                        document.getElementById("pastelPersonalizado").style.display = "grid";
                    }
                    else{
                        document.getElementById("pastelPersonalizado").style.display = "none";
                    }
                }
                else{
                    document.getElementById("pastelPersonalizado").style.display = "none";
                }
            },
        }
    })
</script>

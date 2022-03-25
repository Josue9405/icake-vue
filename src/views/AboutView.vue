<template>
  <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
            <li class="mr-2" role="presentation">
                <button
                    class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 active"
                    id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about"
                    aria-selected="true">Sobre nosotros</button>
            </li>
            <li class="mr-2" role="presentation">
                <button
                    class="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                    id="address-tab" data-tabs-target="#address" type="button" role="tab" aria-controls="address"
                    aria-selected="false">Contacto</button>
            </li>
        </ul>
    </div>
    <div id="myTabContent">
        <div class="p-4 bg-gray-50 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
            <div class="flex justify-center mb-6">
                <img src="static/img/cakes/coffee.jpg" class="w-40 lg:w-60 h-auto rounded-full" alt="coffee" />
            </div>
            <p class="text-xl text-justify font-light leading-relaxed mt-6 mb-4 dark:text-gray-400">
                Somos una empresa fundada en el año 2022, iniciamos operaciones el día 18 de febrero con el apoyo de
                Microsoft y Launch X. Una travesía en la cual nos decidimos
                a llegar a ser tu primer opción para disfrutar de una rebanada de pastel, para esto nos apegamos a
                nuestros valores.
            </p>
            <div class="flex justify-center mb-6">
                <a href="#"
                    class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="hidden px-2 object-cover w-32 rounded-t-lg md:h-auto md:w-24 md:rounded-none md:rounded-l-lg dark:block"
                        src="static/img/icons/mision_white.png" alt="">
                    <img class="px-2 object-cover w-32 rounded-t-lg md:h-auto md:w-24 md:rounded-none md:rounded-l-lg dark:hidden"
                        src="static/img/icons/mision.png" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-justify text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Misión</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Conseguir que nuestro personal se
                            desarrolle y realice plenamente, que los clientes siempre salgan de nuestros
                            establecimientos con una sonrisa y los mejores productos.</p>
                    </div>
                </a>
            </div>
            <div class="flex justify-center mb-6">
                <a href="#"
                    class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="hidden px-2 object-cover w-32 rounded-t-lg md:h-auto md:w-24 md:rounded-none md:rounded-l-lg dark:block"
                        src="static/img/icons/vision_white.png" alt="">
                    <img class="px-2 object-cover w-32 rounded-t-lg md:h-auto md:w-24 md:rounded-none md:rounded-l-lg dark:hidden"
                        src="static/img/icons/vision.png" alt="" >
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visión</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Queremos que nuestros clientes no
                            solo consigan el mejor pastel en nuestra compañía sino que además, sean tratados de la mejor
                            forma, de esta manera conseguiremos un futuro en el que la sociedad se vea afectada
                            positivamente por la presencia de nuestras pastelerías en el mercado.</p>
                    </div>
                </a>
            </div>
            <div class="flex justify-center mb-6">
                <a href="#"
                    class="flex flex-col items-center bg-white rounded-lg border shadow-md w-full md:flex-row md:w-[36rem] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img class="hidden px-2 object-cover w-32 rounded-t-lg md:h-auto md:w-24 md:rounded-none md:rounded-l-lg dark:block"
                        src="static/img/icons/corazon_white.png" alt="">
                    <img class="px-2 object-cover w-32 rounded-t-lg md:h-auto md:w-24 md:rounded-none md:rounded-l-lg dark:hidden"
                        src="static/img/icons/corazon.png" alt="">
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Valores</h5>
                        <ul
                            class="w-80 md:w-96 text-sm font-medium text-gray-900 rounded-lg dark:text-white">
                            <li class="py-2 px-4 w-full rounded-t-lg">
                                Innovación</li>
                            <li class="py-2 px-4 w-full">Integridad</li>
                            <li class="py-2 px-4 w-full">Respeto y tolerancia</li>
                            <li class="py-2 px-4 w-full">Compromiso y responsabilidad</li>
                        </ul>
                    </div>
                </a>
            </div>
        </div>
        <div class="hidden p-4 bg-gray-50 dark:bg-gray-800 h-screen" id="address" role="tabpanel"
            aria-labelledby="address-tab">
            <div class="flex justify-center mb-6">
                <img src="static/img/icons/map_white.png"
                    class="hidden px-2 object-cover h-24 rounded-t-lg md:h-auto md:w-32 md:rounded-none md:rounded-l-lg dark:block"
                    alt="map" />
                <img src="static/img/icons/map.png"
                    class="px-2 object-cover h-24 rounded-t-lg md:h-auto md:w-32 md:rounded-none md:rounded-l-lg dark:hidden"
                    alt="map" />
            </div>
            <p class="text-xl text-center font-light leading-relaxed mt-6 mb-4 dark:text-gray-400">
                Vasco de Quiroga 3200, Santa Fe, Zedec Sta Fé, Álvaro Obregón, 01219 Ciudad de México, CDMX <br>
                Horario de atención:                
            </p>
            <section class="flex justify-center">
                <ul class="w-64 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">Lunes a viernes - 08:00 a 17:00hrs.</li>
                    <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Sábados - 08:00 a 14:00hrs.</li>
                    <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">Domingo cerrado</li>
                </ul>
            </section>
            <section class="flex justify-center">
                <div class="flex flex-col w-90">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden shadow-md sm:rounded-lg">
                                <table class="min-w-full">
                                    <thead class="bg-gray-50 dark:bg-gray-700">
                                        <tr>
                                            <th scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Teléfono
                                            </th>
                                            <th scope="col"
                                                class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                Correo electrónico
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
    
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td
                                                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                555-555-5555
                                            </td>
                                            <td
                                                class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                contacto@icake.com
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

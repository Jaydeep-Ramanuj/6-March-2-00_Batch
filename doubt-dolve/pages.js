let HomePage = `<!-- Hero section -->
<section class="bg-blue-600 py-20">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h1 class="text-white font-bold text-5xl leading-tight mb-6">Discover the world's best coffee</h1>
                <p class="text-white text-xl mb-8">From hand-picked farms to your cup, we source the finest beans and
                    roast them to perfection.</p>
                <a href="#"
                    class="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-700 transition duration-200">Shop
                    now</a>
            </div>
            <div class="md:w-1/2">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee beans"
                    class="w-full rounded-lg shadow-lg">
            </div>
        </div>
    </div>
</section>

<!-- Featured section -->
<section class="py-20">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Featured products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Coffee"
                    class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Single Origin Blend</h3>
                    <p class="text-gray-700 text-base">Our most popular blend, featuring beans from a single farm in
                        Ethiopia. Notes of chocolate, berries, and citrus.</p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-700 font-medium">$14.99</span>
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p class="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-700 font-medium">$12.99</span>
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p class="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-700 font-medium">$12.99</span>
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7" alt="Coffee"
                    class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-gray-800 mb-2">Dark Roast Blend</h3>
                    <p class="text-gray-700 text-base">A bold and flavorful blend of beans from Brazil, Colombia, and
                        Indonesia. Notes of caramel, nuts, and tobacco.</p>
                    <div class="mt-4 flex items-center justify-between">
                        <span class="text-gray-700 font-medium">$12.99</span>
                        <button
                            class="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">Add
                            to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;

let AboutUsPage = `<div class="bg-white">
      <header class="bg-green-500 text-white text-center py-12">
        <h1 class="text-4xl font-bold mt-16">About Us</h1>
      </header>

      <section class="text-center py-12 px-4">
        <h2 class="text-2xl font-bold">Mission And Values</h2>
        <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
          Our mission is to provide exceptional healthcare services with a focus on availability, reliability, and support.
        </p>
        <div class="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div class="transition transform hover:scale-110">
            <h3 class="text-xl font-bold" >85+</h3>
            <p class="text-gray-700">Specialists</p>
          </div>
          <div class="transition transform hover:scale-110">
            <h3 class="text-xl font-bold" >25+</h3>
            <p class="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section class="bg-green-500 text-white py-12 px-4">
        <h2 class="text-2xl font-bold text-center">Our Vision</h2>
        <p class="mt-4 text-center max-w-2xl mx-auto">
          Healthcare anytime, anywhere. We aim to revolutionize the healthcare industry by making quality healthcare accessible to everyone.
        </p>
      </section>

      <section class="text-center py-12 px-4">
        <h2 class="text-2xl font-bold">Our Healthcare Specialties</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Cardiology</h3>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Neurology</h3>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Pediatrics</h3>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Oncology</h3>
          </div>
        </div>
      </section>

      <section class="bg-gray-100 py-12 px-4">
        <h2 class="text-2xl font-bold text-center">State-Of-The-Art Technology</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold">Advanced Diagnostics</h3>
            <p class="text-gray-700 mt-2">We utilize the latest technology for accurate diagnostics.</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold">Telemedicine</h3>
            <p class="text-gray-700 mt-2">Consult with our specialists from the comfort of your home.</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold">Robotic Surgery</h3>
            <p class="text-gray-700 mt-2">Minimally invasive procedures with precision.</p>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-bold">Electronic Health Records</h3>
            <p class="text-gray-700 mt-2">Secure and easy access to your medical records.</p>
          </div>
        </div>
      </section>

      <section class="text-center py-12 px-4">
        <h2 class="text-2xl font-bold">Committed To Your Health And Happiness</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Book Appointment</h3>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Informed Staff</h3>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Total Health</h3>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 class="text-xl font-bold">Get Consultation</h3>
          </div>
        </div>
      </section>

      <section class="bg-green-500 text-white text-center py-12 px-4">
        <h2 class="text-2xl font-bold">Patient Testimonials</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div class="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique mi."</p>
            <h3 class="mt-4 font-bold">- Patient A</h3>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
            <p>"Nullam ac augue eget diam posuere vehicula. Vivamus quis nulla ac justo euismod posuere."</p>
            <h3 class="mt-4 font-bold">- Patient B</h3>
          </div>
          <div class="p-4 shadow-lg rounded-lg bg-green-600 hover:bg-green-500 transition-colors">
            <p>"Fusce tincidunt, arcu nec vestibulum tincidunt, eros massa ullamcorper urna."</p>
            <h3 class="mt-4 font-bold">- Patient C</h3>
          </div>
        </div>
      </section>

      <section class="text-center py-12 px-4 w-full">
        <h2 class="text-2xl font-bold">Get Answer To Your Most Asked Questions</h2>
        <div class="mt-8">
          <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 class="text-xl font-bold">How do I make an appointment online?</h3>
            <p class="mt-2 text-gray-700">You can book an appointment online through our website or mobile app.</p>
          </div>
          <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 class="text-xl font-bold">What types of medical tests do you offer?</h3>
            <p class="mt-2 text-gray-700">We offer a wide range of medical tests including blood tests, imaging, and more.</p>
          </div>
          <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 class="text-xl font-bold">Do you accept insurance plans?</h3>
            <p class="mt-2 text-gray-700">Yes, we accept most major insurance plans.</p>
          </div>
        </div>
      </section>

      <footer class="bg-green-500 text-white text-center py-8">
        <p>&copy; Copyright [Your Name] . All rights reserved. Made By Binary Boats⛵</p>
      </footer>
    </div>`;

let PricingPage = `<section class="py-6 leading-7 text-gray-900 bg-white sm:py-12 md:py-16">
    <div class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">

        <div class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 id="pricing"
                class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
            </h2>
            <p class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl">
            </p>
        </div>

        
        <div id="pricing"
            class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3">
            <!-- Price 1 -->
            <div
                class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-mr-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3
                    class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Starter
                </h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        $1
                    </p>
                    <p class="box-border m-0 border-solid" style="border-image: initial;">
                        / month
                    </p>
                </div>
                <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        1 Website
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SSL (HTTPS)
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SiteFast Domain
                    </li>

                </ul>
                <a href="#"
                    class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Start Now
                </a>
            </div>
            <!-- Price 2 -->
            <div
                class="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-blue-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
                <h3
                    class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Basic
                </h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        $29
                    </p>
                    <p class="box-border m-0 border-solid" style="border-image: initial;">
                        / month
                    </p>
                </div>
                <ul class="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        15 Websites
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SSL (HTTPS)
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Custom Domain
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SiteFast Branding Removal
                    </li>
                </ul>

                <a href="#"
                    class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Start Now
                </a>
            </div>
            <!-- Price 3 -->
            <div
                class="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg lg:-ml-3 sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3
                    class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
                    Plus
                </h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid">
                        $49
                    </p>
                    <p class="box-border m-0 border-solid" style="border-image: initial;">
                        / month
                    </p>
                </div>

                <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        50 Websites
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SSL (HTTPS)
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Custom Domain
                    </li>


                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        SiteFast Branding Removal
                    </li>


                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Google Analytics
                    </li>

                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        Email Integration
                    </li>

                </ul>
                <a href="#"
                    class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded-md cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Start Now
                </a>

            </div>
        </div>
    </div>
</section>`;

let ProductPage = `<div class="bg-gray-100 dark:bg-gray-800 py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img class="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image">
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Name</h2>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                </p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span class="text-gray-600 dark:text-gray-300">$29.99</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
                        <span class="text-gray-600 dark:text-gray-300">In Stock</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                    <div class="flex items-center mt-2">
                        <button class="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                        sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                        lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                        ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                        sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
`;

let ContactUsPage = `<div class="container my-12 mx-auto px-2 md:px-4">

    <section class="mb-32">

        <div class="flex justify-center">
            <div class="text-center md:max-w-xl lg:max-w-3xl">
                <h2 class="mb-12 px-6 text-3xl font-bold">
                    Contact us
                </h2>
            </div>
        </div>

        <div class="flex flex-wrap">

            <form class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">

                <div class="mb-3 w-full">
                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Name
                    </label>
                    <input type="text" class="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90" placeholder="Name" />
                </div>

                <div class="mb-3 w-full">
                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Email
                    </label>
                    <input type="email" class="px-2 py-2 border w-full outline-none rounded-md" id="exampleInput90"
                            placeholder="Enter your email address" />
                </div>

                <div class="mb-3 w-full">
                    <label class="block font-medium mb-[2px] text-teal-700" htmlFor="exampleInput90">
                            Message
                    </label>
                    <textarea class="px-2 py-2 border rounded-[5px] w-full outline-none" name="" id=""></textarea>
                </div>

                <button type="button"
                        class="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500">
                        Send
                </button>

            </form>

            <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div class="flex flex-wrap">
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="flex items-start">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class="mb-2 font-bold">
                                    Technical support
                                </p>
                                <p class="text-neutral-500 ">
                                    support@example.com
                                </p>
                                <p class="text-neutral-500 ">
                                    +1 234-567-89
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="flex items-start">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class="mb-2 font-bold ">
                                    Sales questions
                                </p>
                                <p class="text-neutral-500 ">
                                    sales@example.com
                                </p>
                                <p class="text-neutral-500 ">
                                    +1 234-567-89
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="align-start flex">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class="mb-2 font-bold ">Press</p>
                                <p class="text-neutral-500 ">
                                    press@example.com
                                </p>
                                <p class="text-neutral-500 ">
                                    +1 234-567-89
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="align-start flex">
                            <div class="shrink-0">
                                <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="h-6 w-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                                    </svg>
                                </div>
                            </div>
                            <div class="ml-6 grow">
                                <p class="mb-2 font-bold">
                                    Bug report
                                </p>
                                <p class="text-neutral-500 ">
                                    bugs@example.com
                                </p>
                                <p class="text-neutral-500">
                                    +1 234-567-89
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</div>`;

export const Pages = {
  home: HomePage,
  product: ProductPage,
  pricing: PricingPage,
  about: AboutUsPage,
  contact: ContactUsPage,
};

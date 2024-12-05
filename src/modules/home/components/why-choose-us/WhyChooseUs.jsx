export function WhyChooseUs() {
   return (
     <section className="bg-gray-100 py-12">
       <div className="container mx-auto px-6 text-center">
         <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
         <p className="text-gray-600 mb-8">
           We provide a reliable, efficient, and secure platform to help you find the best job or talent.
         </p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-lg shadow-md">
             <h3 className="text-xl font-semibold mb-4">Wide Job Selection</h3>
             <p className="text-gray-600">Browse jobs from multiple industries and locations.</p>
           </div>
           <div className="bg-white p-6 rounded-lg shadow-md">
             <h3 className="text-xl font-semibold mb-4">Trusted Companies</h3>
             <p className="text-gray-600">Work with reputable employers across the globe.</p>
           </div>
           <div className="bg-white p-6 rounded-lg shadow-md">
             <h3 className="text-xl font-semibold mb-4">Easy Application</h3>
             <p className="text-gray-600">Apply to jobs seamlessly with just a few clicks.</p>
           </div>
         </div>
       </div>
     </section>
   );
 }
import React from "react";
import Header from "@/components/header/Header";

export function ContactUs() {
  return (
    <>
      <Header />
      <section className="bg-gray-900 text-white pt-20"> {/* Added pt-20 for padding top */}
        <div className="container px-6 py-12 mx-auto">
          <div>
            <p className="font-medium text-amber-500">Contact us</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Get in touch</h1>
            <p className="mt-3 text-gray-400">We're here to help with all your watch repair and maintenance needs.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-amber-500 rounded-full bg-amber-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-white">Email</h2>
                <p className="mt-2 text-sm text-gray-400">Send us your query anytime!</p>
                <p className="mt-2 text-sm text-amber-500">renown616@gmail.com</p>
              </div>

              <div>
                <span className="inline-block p-3 text-amber-500 rounded-full bg-amber-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                
                <h2 className="mt-4 text-base font-medium text-white">Office</h2>
                <p className="mt-2 text-sm text-gray-400">Visit us at our location</p>
                <p className="mt-2 text-sm text-amber-500">8 Westfield Dr. Whitby, ON - L1P 0E7</p>
              </div>

              <div>
                <span className="inline-block p-3 text-amber-500 rounded-full bg-amber-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                
                <h2 className="mt-4 text-base font-medium text-white">Phone</h2>
                <p className="mt-2 text-sm text-gray-400">Mon to Fri 6:30pm to 9pm</p>
                <p className="mt-2 text-sm text-gray-400">Sat & Sun 10:30am to 5:00pm</p>
                <p className="mt-2 text-sm text-amber-500">00 (440) 9865 562</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.5446452101946!2d-78.97632682368517!3d43.87780987109506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51f62fbdc1f17%3A0x314979d0e9454094!2s8%20Westfield%20Dr%2C%20Whitby%2C%20ON%20L1P%200E7%2C%20Canada!5e0!3m2!1sen!2sus!4v1688424718877!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
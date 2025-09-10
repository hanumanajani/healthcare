

import { useGlobal } from '../context/Global';

export default function Home() {
  const useglobal = useGlobal()
      const signup = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(!useglobal.check3)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="hero bg-base-100 py-16 shadow-md">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.icons8.com/fluency/200/medical-doctor.png"
            alt="Healthcare"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold text-primary">Doctorbuddy</h1>
            <p className="py-6 text-lg text-gray-600">
              Your smart healthcare companion.  
              Manage your profile, access medical articles, and stay connected 
              with healthcare services at one place.
            </p>
            <button onClick={() => { signup() }} className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex-1 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Our Healthcare Features
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">👨‍⚕️ User Profile</h3>
              <p>Manage health information, appointments, and reports securely.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">📚 Articles</h3>
              <p>Stay informed with latest healthcare research and blogs.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">💊 Support</h3>
              <p>24/7 assistance for queries and healthcare guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Tech Stack */}
       <footer className="footer footer-center bg-gradient-to-r from-base-200 via-base-300 to-base-200 p-10 text-base-content rounded-t-2xl shadow-inner">
  <h2 className="text-lg font-bold tracking-wide mb-4 text-primary">
    🚀 Built with Modern Technologies
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
    {/* React */}
    <div className="flex flex-col items-center gap-2 bg-base-100 p-4 rounded-xl shadow hover:scale-105 transition">
      <img
        src="https://img.icons8.com/color/48/react-native.png"
        alt="React"
        className="w-10 h-10"
      />
      <span className="font-medium">React.js</span>
    </div>

    {/* Tailwind */}
    <div className="flex flex-col items-center gap-2 bg-base-100 p-4 rounded-xl shadow hover:scale-105 transition">
      <img
        src="https://img.icons8.com/color/48/tailwind_css.png"
        alt="Tailwind"
        className="w-10 h-10"
      />
      <span className="font-medium">TailwindCSS</span>
    </div>

    {/* Firebase */}
    <div className="flex flex-col items-center gap-2 bg-base-100 p-4 rounded-xl shadow hover:scale-105 transition">
      <img
        src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-shadow-tal-revivo.png"
        alt="Firebase"
        className="w-10 h-10"
      />
      <span className="font-medium">Firebase</span>
    </div>

    {/* DaisyUI */}
    <div className="flex flex-col items-center gap-2 bg-base-100 p-4 rounded-xl shadow hover:scale-105 transition">
      <img
        src="data:image/jpeg;base64,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"
        alt="DaisyUI"
        className="w-10 h-10"
      />
      <span className="font-medium">DaisyUI</span>
    </div>
  </div>

  <p className="text-sm text-gray-500 mt-6">
    © 2025 <span className="font-semibold">Doctorbuddy</span>. All rights reserved.
  </p>
</footer>

    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="w-50 flex flex-col items-start justify-center space-y-4 px-8 pt-16">
        <h1 className="text-4xl font-extrabold">Software Engineer</h1>
        <p>
          Full stack developer with startup experience (engineer 0 to 1) and
          passionate about programming and innovation. <br /> I aim to
          contribute to challenging projects while expanding my technical
          expertise.
        </p>
        <div className="bg-white shadow-m rounded-lg p-6 space-y-4 border border-gray-200">
          <h2 className="text-2xl font-bold">
            Looking for a 5 months Internship
          </h2>
          <p className="text-gray-600">
            Mobility Europe and North America. Availability April to August
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/thomas-los/"
              className="px-4 py-2 bg-slate-950 text-white rounded hover:bg-slate-200 hover:text-slate-950"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-los/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-slate-950 border border-2 border-slate-950 rounded hover:border-slate-200 hover:bg-slate-200"
            >
              IN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

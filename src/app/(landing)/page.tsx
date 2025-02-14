export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8">
      <div className="flex w-50 flex-col items-start justify-center space-y-4 px-8 pt-16">
        <h1 className="text-4xl font-extrabold">Software Engineer</h1>
        <p>
          Full stack developer with startup experience (engineer 0 to 1) and
          passionate about programming and innovation. <br /> I aim to
          contribute to challenging projects while expanding my technical
          expertise.
        </p>
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-m">
          <h2 className="text-2xl font-bold">Looking for a 5 months Internship</h2>
          <p className="text-gray-600">
            Mobility Europe and North America. Availability April to August
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/thomas-los/"
              className="rounded bg-slate-950 px-4 py-2 text-white hover:bg-slate-200 hover:text-slate-950"
            >
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-los/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-2 border-slate-950 px-4 py-2 text-slate-950 hover:border-slate-200 hover:bg-slate-200"
            >
              IN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

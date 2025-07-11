import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#181c1f] text-[#d1d5db] font-mono px-4 py-10 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-4xl flex flex-col items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-300 mb-1">
          Hi, I&apos;m Vansh Sinha 👋
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-gray-400 mb-2">
          <span>623-205-8165</span>
          <span className="hidden md:inline">|</span>
          <a href="mailto:vsinha13@asu.edu" className="hover:underline">
            vsinha13@asu.edu
          </a>
          <span className="hidden md:inline">|</span>
          <Link
            href="https://linkedin.com/in/vanshsinha"
            className="hover:underline"
            target="_blank"
          >
            linkedin.com/in/vanshsinha
          </Link>
          <span className="hidden md:inline">|</span>
          <Link
            href="https://github.com/vanshsinhaa"
            className="hover:underline"
            target="_blank"
          >
            github.com/vanshsinhaa
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <section className="flex flex-col gap-8">
          {/* About */}
          <div>
            <h2 className="text-lg font-bold text-green-200 mb-1">About</h2>
            <p className="text-gray-300 text-sm">
              I&apos;m a Computer Science student at ASU and a freelance web
              designer. I love building scalable data systems, modern web apps,
              and elegant user experiences. I enjoy hackathons, open source, and
              learning new tech.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-lg font-bold text-green-200 mb-1">Education</h2>
            <div className="text-sm">
              <div className="font-semibold text-gray-100">
                Arizona State University
              </div>
              <div className="text-gray-400">
                Bachelor of Science in Computer Science, Minor in Data Science
              </div>
              <div className="text-gray-400">
                Aug. 2023 -- May 2027 | Tempe, AZ
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-lg font-bold text-green-200 mb-1">
              Technical Skills
            </h2>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>
                <span className="font-semibold text-gray-100">Languages:</span>{" "}
                Java, Python, C/C++, SQL (Postgres), JavaScript, HTML/CSS, R
              </li>
              <li>
                <span className="font-semibold text-gray-100">Frameworks:</span>{" "}
                React, Next.js, Node.js, WordPress
              </li>
              <li>
                <span className="font-semibold text-gray-100">
                  Developer Tools:
                </span>{" "}
                Git, Google Cloud Platform, Docker, Kubernetes, VS Code,
                PyCharm, IntelliJ
              </li>
              <li>
                <span className="font-semibold text-gray-100">Libraries:</span>{" "}
                pandas, NumPy, Matplotlib
              </li>
            </ul>
          </div>
        </section>

        {/* Right Column */}
        <section className="flex flex-col gap-8">
          {/* Experience */}
          <div>
            <h2 className="text-lg font-bold text-green-200 mb-1">
              Experience
            </h2>
            <div className="mb-3">
              <div className="font-semibold text-gray-100">
                Software Engineering Intern
              </div>
              <div className="text-gray-400 text-xs">
                Wimoku | Remote, USA | June 2025 -- Present
              </div>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                <li>
                  Developed a cost-efficient alternative to Dataflow by building
                  a data pipeline using Pub/Sub, Cloud Functions, and BigQuery.
                </li>
                <li>
                  Created a Dockerized Python service to fetch, run, and monitor
                  grouped SQL queries from a metadata table and log results.
                </li>
                <li>
                  Built a cron-based scheduling system with Kubernetes for
                  automated execution of SQL workloads.
                </li>
                <li>
                  Prepared technical documentation outlining architecture,
                  purpose, and use cases for the Wimoku team.
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <div className="font-semibold text-gray-100">
                Freelance Web Designer
              </div>
              <div className="text-gray-400 text-xs">
                Self-Employed | Remote | Jan. 2024 -- Present
              </div>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                <li>
                  Worked closely with clients to gather requirements and deliver
                  polished UI/UX that aligned with brand identity and audience.
                </li>
                <li>
                  Built a minimalist, elegant photography portfolio site focused
                  on visual storytelling and mobile-first design principles.
                </li>
                <li>
                  Developed a modern e-commerce website for handmade candle
                  products with a sleek, intuitive user experience.
                </li>
                <li>
                  Used technologies such as React, Next.js, Tailwind CSS, and
                  Firebase to ensure performance, scalability, and
                  maintainability.
                </li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-lg font-bold text-green-200 mb-1">Projects</h2>
            <div className="mb-2">
              <div className="font-semibold text-gray-100">
                Streaming Stock Data Pipeline
              </div>
              <div className="text-gray-400 text-xs">
                Python, Apache Beam, Dataflow, Pub/Sub, BigQuery | 2025
              </div>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                <li>
                  Built a scalable real-time data pipeline on Google Cloud
                  Platform to stream 5-minute financial candles from the Alpha
                  Vantage API.
                </li>
                <li>
                  Published structured OHLCV (open, high, low, close, volume)
                  data to Google Pub/Sub and consumed it via Apache Beam.
                </li>
                <li>
                  Used Google Cloud Dataflow to transform and ingest streaming
                  data into BigQuery, enabling low-latency time series
                  analytics.
                </li>
                <li>
                  Engineered the system for full automation, authentication,
                  error handling, and production-grade scalability.
                </li>
                <li>
                  Enabled downstream use cases such as interactive dashboards,
                  analytics, and ML modeling on live market data.
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-100">TransiMate</div>
              <div className="text-gray-400 text-xs">
                LLMs, RAG, Next.js, Google Cloud, Firebase | July 2025 - Present
              </div>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                <li>
                  Designing an AI-powered SaaS platform through fine-tuning
                  LLM&apos;s to help foreign travelers prepare for a smooth
                  transition to the U.S.
                </li>
                <li>
                  Planned features include personalized onboarding checklists,
                  local resource guides, and fine-tuned LLM support for common
                  immigrant challenges.
                </li>
                <li>
                  Will implement Retrieval-Augmented Generation (RAG), user
                  authentication, and persistent memory for personalized
                  experiences.
                </li>
                <li>
                  Targeting a responsive, production-grade web app built with
                  Next.js, Firebase Auth, and GCP backend services.
                </li>
              </ul>
            </div>
          </div>

          {/* Leadership & Activities */}
          <div>
            <h2 className="text-lg font-bold text-green-200 mb-1">
              Leadership & Activities
            </h2>
            <div className="text-sm text-gray-300">
              <span className="font-semibold text-gray-100">Hacker Devils</span>{" "}
              (Active Member), Arizona State University{" "}
              <span className="text-gray-400">Aug 2023 -- Present</span>
              <br />
              Participate in hackathons, workshops, leetcode competitions to
              sharpen technical skills.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

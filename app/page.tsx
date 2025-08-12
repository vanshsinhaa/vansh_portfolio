import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#181c1f] text-[#d1d5db] font-mono px-4 py-10 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-5xl flex flex-col items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-green-300 mb-1 text-center">
          Hi, I&apos;m Vansh 👋
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-gray-400 mb-2 text-center md:text-left">
          <span>623-205-8165</span>
          <span className="hidden md:inline">|</span>
          <a
            href="mailto:vanshsinhaacademics@gmail.com"
            className="hover:underline"
          >
            vanshsinhaacademics@gmail.com
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
      <main className="w-full max-w-5xl flex flex-col md:flex-row gap-8 md:gap-0">
        {/* Left Column */}
        <section className="flex-1 flex flex-col gap-8 pr-0 md:pr-10">
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

          {/* Leadership & Activities */}
          <div>
            <h2 className="text-lg font-bold text-green-200 mb-1">
              Leadership & Activities
            </h2>
            <div className="text-sm text-gray-300 mb-4">
              <span className="font-semibold text-gray-100">Hacker Devils</span>{" "}
              (Active Member), Arizona State University{" "}
              <span className="text-gray-400">Aug 2023 -- Present</span>
              <br />
              Participate in hackathons, workshops, leetcode competitions to
              sharpen technical skills.
            </div>
            {/* Free Time Section */}
            <h3 className="text-lg font-bold text-green-200 mb-1 mt-8">
              What I Do in My Free Time
            </h3>
            <ul className="text-sm text-gray-300 list-disc list-inside space-y-1">
              <li>
                I enjoy both playing and watching basketball. No matter if
                you&apos;re a recruiter or a coworker, I&apos;d still give you
                some buckets...
              </li>
              <li>
                My favorite team are the{" "}
                <span className="font-semibold">
                  <span
                    style={{
                      fontFamily: "Lakers",
                      fontSize: "1.1em",
                      color: "#552583",
                    }}
                  >
                    Los Angeles
                  </span>{" "}
                  <span
                    style={{
                      fontFamily: "Lakers",
                      letterSpacing: "0.05em",
                      fontSize: "1.1em",
                      color: "#FDB927",
                    }}
                  >
                    Lakers
                  </span>
                </span>
              </li>
              <li>I love traveling to places I haven&apos;t been to before.</li>
              <li>
                This year, I&apos;d like to travel to{" "}
                {
                  <span className="font-semibold">
                    {["I", "t", "a", "l", "y"].map((char, i) => {
                      const colors = [
                        "text-green-500",
                        "text-white",
                        "text-red-500",
                        "text-green-500",
                        "text-white",
                      ];
                      return (
                        <span key={i} className={colors[i % colors.length]}>
                          {char}
                        </span>
                      );
                    })}
                  </span>
                }
                .
              </li>
            </ul>
          </div>
        </section>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-700 mx-6" />

        {/* Right Column */}
        <section className="flex-1 flex flex-col gap-8 pl-0 md:pl-10">
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
                CodeGraveyardAPI – AI-Powered GitHub Repository Discovery
                Platform
              </div>
              <div className="text-gray-400 text-xs">
                FastAPI, Python, Docker, Heroku, SQLite, Sentence Transformers,
                Stripe API | 2025
              </div>
              <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                <li>
                  Developed a production-ready REST API using FastAPI and
                  Python, processing 1000+ requests/hour with real-time GitHub
                  repository data.
                </li>
                <li>
                  Implemented secure authentication with encrypted API keys,
                  rate limiting, and multi-tier subscription plans integrated
                  with Stripe payments.
                </li>
                <li>
                  Built semantic search functionality using Sentence
                  Transformers and scikit-learn, enabling meaning-based
                  repository discovery.
                </li>
                <li>
                  Deployed on Heroku with Docker containerization, health
                  checks, analytics tracking, and SQLite database for
                  persistence.
                </li>
                <li>
                  Designed scalable architecture supporting enterprise features
                  such as automated subscription management and usage
                  monitoring.
                </li>
              </ul>
            </div>
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
        </section>
      </main>
    </div>
  );
}

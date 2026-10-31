import Image from "next/image";
import Reveal from "../components/Reveal";

const designSkills = ["Figma", "Wireframing", "Prototyping", "Usability Testing"];
const devSkills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"];

const projects = [
  { id: 1, no: "01", tag: "FINTECH", title: "PayEasy", text: "A clean payment app interface focused on quick and easy money transfer.", color: "from-violet-500 to-fuchsia-500" },
  { id: 2, no: "02", tag: "UX RESEARCH", title: "Usability Project", text: "A usability study to find design problems and improve the user experience.", color: "from-sky-500 to-indigo-500" },
  { id: 3, no: "03", tag: "TRACKING", title: "Student Activity Tracker", text: "A system to record and track student activities in one organised place.", color: "from-pink-500 to-orange-400" },
];

const steps = [
  { n: "1", title: "Research", text: "Understand users and their problems." },
  { n: "2", title: "Design", text: "Sketch, wireframe and prototype ideas." },
  { n: "3", title: "Build", text: "Turn the design into a working website." },
  { n: "4", title: "Test", text: "Improve it using real feedback." },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* background blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-300/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -right-32 h-96 w-96 rounded-full bg-pink-300/40 blur-3xl" />

      {/* NAV */}
      <nav className="sticky top-0 z-20 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 border-b border-white/60 bg-white/60 px-6 py-4 backdrop-blur-lg">
        <span className="bg-linear-to-r from-violet-600 to-pink-500 bg-clip-text text-xl font-extrabold text-transparent">NC.</span>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-stone-600">
          <a href="#home" className="transition hover:text-violet-600">Home</a>
          <a href="#about" className="transition hover:text-violet-600">About</a>
          <a href="#projects" className="transition hover:text-violet-600">Projects</a>
          <a href="#contact" className="transition hover:text-violet-600">Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:py-28">
        <div className="flex-1">
          <Reveal>
            <span className="inline-block rounded-full bg-white px-4 py-1 text-xs font-semibold text-violet-600 shadow">
              ✨ UI/UX Designer
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
              Hi, I&apos;m <span className="bg-linear-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">Nikita Chaudhari</span>
            </h1>
            <h2 className="mt-3 text-lg font-medium text-stone-500 md:text-xl">MCA Student | Designing simple, beautiful experiences</h2>
            <p className="mt-4 max-w-md text-stone-600">
              I enjoy turning ideas into clean, easy-to-use interfaces that people love.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="rounded-full bg-linear-to-r from-violet-600 to-pink-500 px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105">View My Work</a>
              <a href="#contact" className="rounded-full bg-white px-7 py-3 font-semibold text-violet-600 shadow transition hover:scale-105">Contact Me</a>
            </div>
            <div className="mt-10 flex gap-8">
              <div><p className="text-2xl font-extrabold">3</p><p className="text-xs text-stone-500">Projects</p></div>
              <div><p className="text-2xl font-extrabold">UI/UX</p><p className="text-xs text-stone-500">Focus</p></div>
              <div><p className="text-2xl font-extrabold">MCA</p><p className="text-xs text-stone-500">2026-27</p></div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="float rounded-full bg-linear-to-br from-violet-400 to-pink-400 p-2 shadow-2xl">
            <Image src="/me.jpeg" alt="Nikita Chaudhari" width={320} height={320} className="w-[320px] h-[320] aspect-square object-cover rounded-full" />
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-violet-600">GET TO KNOW ME</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">About Me</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold">My Journey</h3>
              <p className="mt-3 text-stone-600">
                I am an MCA student at R. H. Sapat College of Engineering, Management Studies and Research, Nashik.
                I love UI/UX design and building user-friendly websites.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="h-full rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-xl font-bold">Skills</h3>
              <p className="mt-3 text-xs font-semibold tracking-widest text-stone-400">DESIGN</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {designSkills.map((s) => (
                  <span key={s} className="rounded-full bg-pink-100 px-4 py-1.5 text-sm text-pink-700 transition hover:scale-110">{s}</span>
                ))}
              </div>
              <p className="mt-4 text-xs font-semibold tracking-widest text-stone-400">DEVELOPMENT</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {devSkills.map((s) => (
                  <span key={s} className="rounded-full bg-violet-100 px-4 py-1.5 text-sm text-violet-700 transition hover:scale-110">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-violet-600">HOW I WORK</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">My Design Process</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="h-full rounded-3xl bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-pink-500 font-bold text-white">{s.n}</span>
                <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-violet-600">WHAT I&apos;VE BEEN WORKING ON</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Projects</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.15}>
              <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
                <div className={`flex h-36 items-end bg-linear-to-br ${p.color} p-5`}>
                  <span className="text-5xl font-extrabold text-white/80 transition group-hover:scale-110">{p.no}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold tracking-widest text-violet-600">{p.tag}</p>
                  <h3 className="mt-2 text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-stone-600">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <div className="rounded-3xl bg-linear-to-br from-violet-600 to-pink-500 p-10 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">Let&apos;s Connect</h2>
            <p className="mx-auto mt-3 max-w-md text-white/90">Have a project or an idea? I would love to hear from you.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:yourname@gmail.com" className="rounded-full bg-white px-7 py-3 font-semibold text-violet-600 transition hover:scale-105">✉ Email Me</a>
              <a href="https://www.linkedin.com/" className="rounded-full border border-white px-7 py-3 font-semibold transition hover:scale-105">LinkedIn</a>
              <a href="https://github.com/" className="rounded-full border border-white px-7 py-3 font-semibold transition hover:scale-105">GitHub</a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="relative py-8 text-center text-sm text-stone-500">
        Designed &amp; built with care by Nikita Chaudhari © 2026
      </footer>
    </main>
  );
}
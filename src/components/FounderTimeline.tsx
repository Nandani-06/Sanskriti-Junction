import founderPortrait from "@/assets/profile.jpg";

const FounderTimeline = () => {
  const qualifications = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
  ];

  const milestones = [
    { year: "200x–200x", label: ".... & Early Career", description: "...., .......... and community outreach roles, including .... radio work at ..... giving rural .... a voice." },
    { year: "200x–20xx", label: "Building a Life in Australia", description: "Health ......., finance and ...... coordination across ......'s health and ....... sectors." },
    { year: "20xx", label: "...... & the Turning Point", description: "Began teaching ........... with cultural connection." },
    { year: "20xx–20xx", label: "E.....Sector", description: "Administration and finance leadership within Victorian schools, deepening insight into youth wellbeing." },
    { year: "20xx", label: " Juncti.........together." },
  ];

  return (
    <section
      id="founder"
      className="py-20 bg-gradient-to-br from-[hsl(34,95%,98%)] via-[hsl(28,70%,90%)] to-[hsl(22,85%,60%)] text-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-14 animate-fade-in">
            <p className="text-sm font-semibold tracking-widest uppercase text-orange-600 mb-3">
              Meet the Founder
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-black">
              Every ...... Begins with a ...
            </h2>
            <div className="space-y-1 text-lg text-black/80 italic max-w-2xl mx-auto">
              <p>What if ...... could heal?</p>
              <p>What if dance could build confidence?</p>
              <p>
                What if the simple joy of ....... together could make our
                communities ........ and happier?
              </p>
            </div>
          </div>

          {/* PORTRAIT + INTRO */}
          <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start mb-12 animate-fade-in">
            <div className="mx-auto md:mx-0">
              <img
                src={founderPortrait}
                alt="Shweta Bhatti, Founder of Sanskriti Junction"
                className="w-full max-w-[280px] h-auto object-cover rounded-xl shadow-md"
              />
              <p className="text-center mt-3 font-playfair text-xl font-bold text-orange-600">
                ................
              </p>
              <p className="text-center text-sm text-black/70">
                Founder, Junction
              </p>
            </div>

            <div className="space-y-4 bg-white/60 backdrop-blur-sm rounded-lg p-6 text-black leading-relaxed">
              <p>
                These questions have guided my ....... for more than twenty
                years.
              </p>
              <p>
                I'm ........, Founder of Junction. My path has
                taken me from ......... rural women in ..... through
                community radio to working in Australia's healthcare,
                education, and //////// sectors. Though each ...... was
                different, one truth remained:
              </p>
              <p className="font-semibold text-orange-700">
                People ........ when they feel ........ themselves, to
                their culture, and to one another.
              </p>
            </div>
          </div>

          {/* STORY SECTIONS */}
          <div className="space-y-10">

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 md:p-8 text-black leading-relaxed animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                Discovering the Power of Connection
              </h3>
              <p className="mb-4">
                At ..... in ....., I helped create community radio programs
                that gave rural women a voice. Watching women who had never
                spoken publicly become confident storytellers taught me that
                real change begins when people feel heard.
              </p>
              <p className="mb-4">
                Years later, working in .......'s health system, I saw
                another side of the same story. Despite advances in medicine,
                stress, loneliness, ......., and lifestyle-related .......
                continued to affect families.
              </p>
              <p className="italic text-orange-700 font-medium">
                It left me asking: What if we invested as much in preventing
                illness as we do in treating it?
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 md:p-8 text-black leading-relaxed animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                The Moment Everything Changed
              </h3>
              <p className="mb-4">
                When I moved to ....... in ......, I noticed many children
                from multicultural families lacked a connection to their
                traditional dance and festivals.
              </p>
              <p className="mb-4">I couldn't understand why.</p>
              <p className="mb-4">
                Growing up in ///////, festivals were the happiest moments of
                my ....... They brought ...... together, built
                friendships, and gave us a sense of belonging.
              </p>
              <p className="mb-4">
                So, I began teaching ....... dance as a volunteer, hoping
                to share the joy I once knew.
              </p>
              <p className="mb-4">
                Over the years, I ...... something extraordinary. Shy
                children grew confident. ...... became mentors. One
                student with autism, who once struggled socially, blossomed
                in dance. She ...... on stage with a smile that spoke
                ........ became her bridge to confidence and connection.
              </p>
              <p className="mb-4 font-semibold text-orange-700">
                That was the moment I realized: ...... is not just
                ....... is a pathway to healthier, more connected
                communities.
              </p>
              <p className="mb-4">
                Working in schools reinforced what I had already seen. Many
                young people struggled with ......, isolation, and too much
                screen ...... But the children who danced, created, and
                connected grew happier, more ......, and more confident.
              </p>
              <p className="mb-4">
                In ...., I founded Junction with one simple
                mission:
              </p>
              <p className="text-xl font-bold font-playfair text-orange-600 mb-4">
                Bringing ....... Culture, Wellness &amp; Community Together.
              </p>
              <p className="mb-4">
                Through dance, yoga, meditation, music, art, and community
                ........., we help ....... and families build confidence,
                resilience, and ........ .......
              </p>
              <p className="mb-2">
                Because I believe the ..... communities aren't built
                ,........ hospitals.
              </p>
              <div className="pl-4 border-l-4 border-orange-400 space-y-1 text-black/80 mb-4">
                <p>They're built in ..........</p>
                <p>In schools.</p>
                <p>.............</p>
                <p>On dance floors.</p>
              </div>
              <p>
                And wherever ..... come together with purpose and a sense
                of belonging.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 md:p-8 text-black leading-relaxed animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-playfair">
                My Vision
              </h3>
              <p className="mb-4">
                I .... of a future where ..... spend less time behind
                screens and more time creating, moving, and connecting.
              </p>
              <div className="space-y-1 mb-4 text-black/90">
                <p>Where ..... is celebrated.</p>
                
                <p>Where every ... feels seen and valued.</p>
                <p>Where every .... is connected.</p>
                
                <p>And every generation carries forward the joy of belonging.</p>
              </div>
              <p className="mb-6">
                Because when people move together, they don't just preserve culture—they
                build healthier communities for generations to come.
              </p>
              <p className="text-right font-playfair italic text-orange-600 text-lg">
                — Founder
                <br />
                <span className="text-sm not-italic text-black/70">
                  Founder, Junction
                </span>
              </p>
            </div>
          </div>

          {/* MILESTONES */}
          {/* <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-lg p-6 md:p-8 text-black animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              The Path So Far
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-orange-300" />
              {milestones.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 relative animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(25,95%,53%)] text-white font-bold text-[10px] flex items-center justify-center z-10 text-center leading-none">
                    {item.year.split("–")[0]}
                  </div>
                  <div className="flex-1 pb-2">
                    <h4 className="text-lg font-semibold mb-1 text-black">
                      {item.label}
                    </h4>
                    <p className="text-black/70 text-sm">{item.year}</p>
                    <p className="text-black/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* QUALIFICATIONS */}
          {/* <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-lg p-6 md:p-8 text-black animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Academic Qualifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {qualifications.map((qual, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg px-4 py-3 text-sm text-black/80 shadow-sm"
                >
                  {qual}
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default FounderTimeline;

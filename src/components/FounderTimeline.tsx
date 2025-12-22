import { Card } from "@/components/ui/card";
import founderPortrait from "@/assets/profile.jpg";

const FounderTimeline = () => {
  const earlycareer = [
    { year: "2001", title: "Media Consultant",place: "Centre for Social Justice" , description: "Supported communication strategies, content development, and media outreach." },
    { year: "2002", title: "Program Executive",place: "Ushakiran Television (ETV)" , description: "Oversaw programming tasks including content planning and coordination." },
    { year: "2003", title: "Assistant Director", place: "Bollywood Series & Films" ,description: "Assisted in production management, direction, and on-set coordination across multiple projects." },
    { year: "2005", title: "Communication In-Charge", place: "Self-Employed Women’s Association (SEWA)" ,description: "Managed communications, outreach, and program coordination." },
    { year: "2007", title: "Australia Migration",place: "The Smith family - volunteer coordinator" , description: "Continued service through finance, health administration, and volunteering" },
    { year: "2009", title: "Sydney Local Health District", place: "Clinical support to Finance " ,description: <>Finance Officer at Sydney Local Health District <b>till 2018</b>.</> },
    { year: "2019", title: "Administration Support",place: "Northern School for Autism " , description: <>Transitioned to the Melbourne education sector, where I am <strong>currently working</strong></> },
    { year: "2025", title: "Sanskriti Junction",place: "" , description: "Founded social enterprise for community empowerment" },
  ];
  
  const career = [ 
    { year: "2009", title: "Human Resources Administrator (Volunteer)",place: "The Smith Family, Sydney, NSW" , description: "Supported HR functions including recruitment assistance, record management, and volunteer coordination." },
    { year: "2010", title: "Administrator",place: "Sydney Local Health District" , description: "Provided administrative and operational support across departments, ensuring efficient office workflows and service delivery." },
    { year: "2016", title: "Finance Officer", place: "Sydney Local Health District" ,description: "Delivered financial support services including accounts management, reconciliation, and reporting within a major NSW health network." },
    { year: "2024", title: "Finance Manager", place: "Greenvale Secondary College" ,description: "Overseeing financial operations, budgeting, reporting, and strategic financial management for a leading Victorian secondary school." },
   ];
  const volunteer = [
    { year: null, title: "President",place: "Mernda and District Residents Association (MADRA)" , description: "Leading community initiatives, advocacy efforts, and local engagement activities." },
    { year: null, title: "Yoga & Meditation Instructor",place: "Mernda Community House" , description: "Facilitating wellbeing programs for community members." },
    { year: null, title: "Coordinator", place: "Mernda Chess Club" ,description: "Organising community chess events and promoting recreational engagement." },
    ];
  const qualifications = [
    "Master of Professional Accounting",
    "Bachelor of Science (Chemistry)",
    "Advanced Diploma in Audio-Visual Production",
    "Certificate IV in Training and Assessment",
    "Certificate III in Education Support",
    "Certificate III in Health Administration",
  ];

  return (
    <section
      id="founder"
      className="py-20 bg-gradient-to-br from-[hsl(34,95%,98%)] via-[hsl(28,70%,90%)] to-[hsl(22,85%,60%)] text-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-black">
              Meet the Visionary Behind Sanskriti Junction
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              A unique blend of education, creativity, and compassion driving community empowerment
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-orange-600">
              Shweta Bhatti
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

  {/* LEFT COLUMN */}
  <div className="space-y-8 animate-fade-in">

    {/* PHOTO + ABOUT */}
    <div className="space-y-6">
      <img
        src={founderPortrait}
        alt="Founder Portrait"
        className="w-full h-full object-cover rounded-xl"
      />

      <div className="space-y-4 bg-white/60 backdrop-blur-sm rounded-lg p-6 text-black">
        <p className="leading-relaxed">
          The founder brings a unique blend of education, creativity, and compassion to every initiative; combining a background in science, media, accounting, and education with a lifelong passion for community empowerment and cultural wellbeing.

        </p>
        <p className="leading-relaxed">
          Her journey reflects over two decades of experience across social development, education, media production, and holistic wellness; all guided by the belief that true change begins with awareness, connection, and compassion.

        </p>
      </div>
    </div>

    {/* QUALIFICATIONS */}
    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-black">
      <h3 className="text-2xl font-bold mb-4 font-playfair">Academic Qualifications</h3>
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
    </div>

    {/* VOLUNTEERING */}
    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-black">
      <h3 className="text-2xl font-bold mb-6 font-playfair">Volunteering & Community Engagement</h3>
      <div className="space-y-6 relative">
        <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-orange-300" />
        {volunteer.map((item, index) => (
          <div key={index} className="flex gap-4 relative animate-fade-in"
               style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(25,95%,53%)] text-white font-bold text-sm flex items-center justify-center z-10">
              {item.year}
            </div>
            <div className="flex-1 pb-4">
              <h4 className="text-lg font-semibold mb-1 text-black">{item.title}</h4>
              <p className="text-black/70 text-sm">{item.place}</p>
              <p className="text-black/70 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>

  {/* RIGHT COLUMN */}
  <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>

    {/* EARLY CAREER */}
    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-black">
      <h3 className="text-2xl font-bold mb-6 font-playfair">Early Career</h3>
      <div className="space-y-6 relative">
        <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-orange-300" />
        {earlycareer.map((item, index) => (
          <div key={index} className="flex gap-4 relative animate-fade-in"
               style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(25,95%,53%)] text-white font-bold text-sm flex items-center justify-center z-10">
              {item.year}
            </div>
            <div className="flex-1 pb-4">
              <h4 className="text-lg font-semibold mb-1 text-black">{item.title}</h4>
              <p className="text-black/70 text-sm">{item.place}</p>
              <p className="text-black/70 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* PROFESSIONAL JOURNEY */}
    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-black">
      <h3 className="text-2xl font-bold mb-6 font-playfair">Professional Journey</h3>
      <div className="space-y-6 relative">
        <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-orange-300" />
        {career.map((item, index) => (
          <div key={index} className="flex gap-4 relative animate-fade-in"
               style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(25,95%,53%)] text-white font-bold text-sm flex items-center justify-center z-10">
              {item.year}
            </div>
            <div className="flex-1 pb-4">
              <h4 className="text-lg font-semibold mb-1 text-black">{item.title}</h4>
              <p className="text-black/70 text-sm">{item.place}</p>
              <p className="text-black/70 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>

</div>

        </div>
      </div>
    </section>
  );
};

export default FounderTimeline;

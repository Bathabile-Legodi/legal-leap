import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import teamImage from "@/assets/team-meeting.jpg";

const About = () => {
  const team = [
    {
      name: "Adv. Thandi Mokoena",
      role: "Senior Attorney, Family and Civil Litigation",
      bio: "Thandi has spent more than 12 years helping clients navigate difficult personal matters with empathy and determination.",
    },
    {
      name: "Michael Dlamini",
      role: "Attorney, Property and Commercial Law",
      bio: "Michael advises clients on property transactions, lease disputes and business agreements.",
    },
    {
      name: "Sarah Daniels",
      role: "Attorney, Wills, Estates and Estate Planning",
      bio: "Sarah works with clients to secure their assets, plan for the future and handle estate matters with care.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 px-4"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a South African law firm committed to providing practical, accessible and reliable legal services. Every client deserves clarity, respect and representation that genuinely supports their interests.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                The firm was started to make legal support more approachable for everyday South Africans. Over the years, we've helped families resolve sensitive disputes, guided entrepreneurs through complex commercial matters and supported people planning for the future.
              </p>
              <p className="text-muted-foreground mb-4">
                We understand that legal matters can be stressful and confusing. That's why we focus on clear communication and practical solutions that protect your interests and help you move forward with confidence.
              </p>
            </div>
            <div>
              <img 
                src={teamImage} 
                alt="Legodi Legal Team" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Mission & Values
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3 text-primary">Integrity</h3>
                <p className="text-muted-foreground">
                  Integrity in every case we handle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3 text-primary">Communication</h3>
                <p className="text-muted-foreground">
                  Consistent communication throughout your matter.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3 text-primary">Respect</h3>
                <p className="text-muted-foreground">
                  Respect for our clients' time, rights and priorities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3 text-primary">Solutions First</h3>
                <p className="text-muted-foreground">
                  Solutions that put people first.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To offer clear, efficient legal support that helps people and businesses make informed decisions and move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our experienced attorneys bring diverse expertise and a shared commitment to excellence.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-1 text-foreground">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

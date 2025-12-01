import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Scale, Users, Award, Clock } from "lucide-react";
import Header from "@/components/Header";
import heroImage from "@/assets/hero-law-office.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-20 px-4"
        style={{ background: 'var(--gradient-hero)' }}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Trusted Legal Support for <span className="text-secondary">Life's Big Decisions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We help individuals, families and businesses navigate South African law with confidence. Clear guidance, practical solutions and a team that listens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/contact">Book a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src={heroImage} 
                alt="Legodi Legal Law Office" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Legal issues can be overwhelming. Our firm offers steady support, sound advice and representation you can rely on.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Local Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Backed by years of experience in South African law
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Client-First Approach</h3>
                <p className="text-sm text-muted-foreground">
                  Built on trust and transparency
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Straightforward Advice</h3>
                <p className="text-sm text-muted-foreground">
                  Clear guidance without heavy jargon
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Practical Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  For personal and commercial matters
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Legal Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal solutions for individuals and businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3 text-primary">Family Law</h3>
                <p className="text-muted-foreground mb-4">
                  Support with divorce, child custody, maintenance, protection orders and family mediation.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link to="/services">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3 text-primary">Property Law</h3>
                <p className="text-muted-foreground mb-4">
                  Guidance for buying, selling or leasing property, including conveyancing support.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link to="/services">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-3 text-primary">Corporate & Commercial</h3>
                <p className="text-muted-foreground mb-4">
                  Support for start-ups and established companies. Contract drafting and compliance advice.
                </p>
                <Button asChild variant="link" className="p-0">
                  <Link to="/services">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're dealing with a family matter, planning your estate, buying property or running a business, we bring the experience and clarity you need.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Home;

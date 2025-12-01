import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scale, Home, Briefcase, FileText, Gavel } from "lucide-react";
import Header from "@/components/Header";

const Services = () => {
  const services = [
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Family Law",
      description: "Support with divorce, child custody, maintenance, protection orders and family mediation. The goal is to reduce conflict and protect your rights.",
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Property Law",
      description: "Guidance for buying, selling or leasing property. Services include conveyancing support, lease agreements, property disputes and due diligence.",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Corporate and Commercial Law",
      description: "Support for start-ups and established companies. We draft contracts, advise on compliance and help structure deals and business policies.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Wills and Estates",
      description: "Creation of valid wills, estate planning and administration. We help you protect your assets and make sure your wishes are respected.",
    },
    {
      icon: <Gavel className="h-8 w-8" />,
      title: "Civil Litigation",
      description: "Representation in negotiations, mediation and court proceedings. We focus on resolving disputes efficiently and fairly.",
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
            Our Legal Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive legal solutions tailored to individuals and businesses across South Africa.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Button asChild>
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our team to discuss your legal needs and discover how we can help you achieve the best outcome.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Services;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";

const FAQ = () => {
  const faqs = [
    {
      question: "How much do you charge for a consultation?",
      answer: "We offer an initial consultation at a fixed fee, depending on the type of matter. Contact us for specific pricing tailored to your needs.",
    },
    {
      question: "Do I need a lawyer for a divorce?",
      answer: "You can handle an uncontested divorce on your own, but legal support helps avoid mistakes and protects you long term. We guide you through the process to ensure your rights and interests are protected.",
    },
    {
      question: "How long does a property transfer take?",
      answer: "Most transfers take 6 to 12 weeks depending on municipal processes and banks. We work efficiently to complete your transaction as quickly as possible.",
    },
    {
      question: "Can you help me draft a will?",
      answer: "Yes, we create legally compliant wills and provide estate planning guidance to ensure your assets are protected and your wishes are respected.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "Any documents related to your matter, plus your ID. If you're unsure what documents are needed, contact us beforehand and we'll guide you on what to prepare.",
    },
    {
      question: "Do you handle business contracts?",
      answer: "Yes, we draft, review and amend commercial agreements. Whether you're starting a business or need contract support, we provide practical legal advice tailored to your commercial needs.",
    },
    {
      question: "Can you assist with a dispute before it goes to court?",
      answer: "Yes. Mediation and negotiation are often faster and more cost effective than litigation. We help resolve disputes through alternative methods whenever possible.",
    },
    {
      question: "What areas do you serve?",
      answer: "We assist clients across South Africa, primarily Johannesburg and nearby areas. Contact us to discuss your legal matter regardless of your location.",
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common legal questions. Can't find what you're looking for? Contact us for personalized assistance.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our legal team is ready to provide clear answers and expert guidance tailored to your specific situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQ;

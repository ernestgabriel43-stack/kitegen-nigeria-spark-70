import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Kitegen and how does it work?",
      answer: "Kitegen is a renewable energy technology that uses high-altitude kites to harness stronger, more consistent winds for power generation. The kites are tethered to the ground, where they capture wind energy at higher altitudes, converting it into electricity through generators."
    },
    {
      question: "Is Kitegen technology environmentally friendly?",
      answer: "Yes, Kitegen is an eco-friendly energy solution. By harnessing wind power, it provides a clean, renewable source of energy that reduces reliance on fossil fuels and helps mitigate climate change without harmful emissions or environmental disruption."
    },
    {
      question: "How does Kitegen differ from traditional wind turbines?",
      answer: "Unlike traditional wind turbines, which rely on large blades and are limited by ground-level wind conditions, Kitegen uses kites that can access more powerful winds at higher altitudes. This makes Kitegen more efficient and capable of generating energy in areas where conventional turbines may not be effective."
    },
    {
      question: "Where can Kitegen technology be deployed?",
      answer: "Kitegen's technology is versatile and can be deployed in various locations, including remote and offshore areas where traditional wind turbines may not be feasible. Its lightweight design and ability to access high-altitude winds make it ideal for a wide range of environments."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about KiteGen technology and our renewable energy solutions
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-border rounded-lg px-6 shadow-soft hover:shadow-energy transition-smooth"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
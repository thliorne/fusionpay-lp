const integrations = [
    { name: 'Stelar Checkout', logo: <p className="text-2xl font-bold tracking-wider">STELAR</p> },
    { name: 'Zedy Checkout', logo: <p className="text-2xl font-bold text-cyan-400">Zedy</p> },
    { name: 'Luna Checkout', logo: <p className="text-2xl font-bold text-purple-400 italic">Luna</p> },
    { name: 'Vega Checkout', logo: <p className="text-2xl font-bold text-amber-400">VEGA</p> },
  ];
  
  export function IntegrationsSection() {
    return (
      <section className="py-12 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 font-headline">
            Conectado aos melhores checkouts do mercado digital.
          </h2>
          <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl mb-12">
            Integre a Fusion Pay com um clique e comece a vender mais com as ferramentas que você já usa.
          </p>
          <div className="relative">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {integrations.map((integration) => (
                <div key={integration.name} className="flex items-center justify-center h-16 w-48 bg-secondary rounded-lg p-4 grayscale hover:grayscale-0 transition-all duration-300">
                    {integration.logo}
                </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
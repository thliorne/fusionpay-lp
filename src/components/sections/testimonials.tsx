import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

function TestimonialsContainer({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-black text-foreground",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-black sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-black sm:block" />
        </div>
      </div>
    </section>
  )
}


const testimonials = [
  {
    author: {
      name: "João Silva",
      handle: "@joaotech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Mudar para a Fusion Pay foi a melhor decisão para o nosso negócio. As taxas são justas e o dinheiro cai na hora!",
    href: "#"
  },
  {
    author: {
      name: "Maria Oliveira",
      handle: "@maria_ecom",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "O suporte é incrível e a integração foi super fácil. Finalmente um gateway que entende as nossas necessidades.",
    href: "#"
  },
  {
    author: {
      name: "Carlos Pereira",
      handle: "@carlosdigital",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Com a Fusion Pay, nosso fluxo de caixa melhorou muito. Receber no mesmo dia faz toda a diferença para escalar."
  }
]

export function TestimonialsSection() {
  return (
    <TestimonialsContainer
      title="O gateway preferido do mercado digital"
      description="Junte-se a milhares de empreendedores que já estão construindo o futuro com a Fusion Pay"
      testimonials={testimonials}
    />
  )
}

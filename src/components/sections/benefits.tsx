import SectionWithMockup from "@/components/ui/section-with-mockup";

export function BenefitsSection() {
  const exampleData1 = {
    title: (
      <>
        Saque instantâneo
        <br />
        (D+0 Pix)
      </>
    ),
    description: (
      <>
        Receba seus pagamentos diretamente na sua
        <br />
        conta via Pix, sem espera.
      </>
    ),
    primaryImageSrc: 'https://images.unsplash.com/photo-1580173954522-2b6d13264104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    secondaryImageSrc: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  };

  return (
    <SectionWithMockup
      title={exampleData1.title}
      description={exampleData1.description}
      primaryImageSrc={exampleData1.primaryImageSrc}
      secondaryImageSrc={exampleData1.secondaryImageSrc}
    />
  );
}

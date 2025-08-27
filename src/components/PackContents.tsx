import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import bookMockup2 from "@/assets/book-mockup-2.jpg";
const planoSeguranca = "/lovable-uploads/a1e794da-b771-4132-809e-fd98f40e7892.png";
import redFlags from "@/assets/guia-red-flags.jpg";
const comunicacaoAssertiva = "/lovable-uploads/f6f1d801-b3d3-4485-af15-f062542a34be.png";
const exerciciosAutoestima = "/lovable-uploads/0e86309c-d993-4300-b9ce-0ce5f25b96d3.png";
const independenciaFinanceira = "/lovable-uploads/d24578d1-7ad9-4bbb-bc68-2144d432a4cb.png";
import diarioAutoconhecimento from "@/assets/diario-autoconhecimento.jpg";

export default function PackContents() {
  const coreModule = {
    title: "Manual da Libertação - A Bíblia da Cura Emocional",
    subtitle: "A Peça Central",
    description: "Um guia profundo que usa a poderosa analogia da jornada bíblica para te levar do cativeiro à terra prometida do amor-próprio. Ele te acompanha passo a passo desde o \"Gênesis\" até o seu \"Novo Testamento\".",
    highlight: "Guia Principal"
  };

  const pillars = [
    {
      number: "01",
      title: "Desvendando o Abuso",
      description: "Para você reconhecer as manifestações sutis e evidentes da toxicidade."
    },
    {
      number: "02", 
      title: "Fortalecendo o Eu",
      description: "Um guia para o resgate da sua autoestima e identidade perdidas."
    },
    {
      number: "03",
      title: "Quebrando as Correntes",
      description: "Estratégias práticas para o rompimento e o desapego emocional."
    },
    {
      number: "04",
      title: "Construindo o Novo",
      description: "Ferramentas para criar relacionamentos saudáveis e uma vida autônoma."
    }
  ];

  const tools = [
    {
      title: "Plano de Segurança Pessoal",
      description: "Guia prático e essencial para organizar uma saída segura, protegendo sua integridade física, emocional e financeira.",
      type: "Segurança",
      image: planoSeguranca
    },
    {
      title: "Guia Rápido de Sinais de Alerta (Red Flags)",
      description: "Manual de bolso para identificar rapidamente comportamentos tóxicos e se proteger.",
      type: "Prevenção",
      image: redFlags
    },
    {
      title: "Guia de Comunicação Assertiva",
      description: "Para você encontrar sua voz, estabelecer limites e nunca mais ser silenciada.",
      type: "Comunicação",
      image: comunicacaoAssertiva
    },
    {
      title: "Exercícios de Reconstrução da Autoestima",
      description: "Atividades práticas para curar feridas e redescobrir seu valor.",
      type: "Cura",
      image: exerciciosAutoestima
    },
    {
      title: "Estratégias para Independência Financeira",
      description: "O caminho para quebrar a dependência material e capacitar sua autonomia.",
      type: "Autonomia",
      image: independenciaFinanceira
    },
    {
      title: "Diário do Autoconhecimento",
      description: "Um espaço sagrado para sua reflexão, cura e celebração diária.",
      type: "Reflexão",
      image: diarioAutoconhecimento
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              O Mapa Detalhado da Sua Libertação
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Este não é um curso teórico. É o seu kit de ferramentas para a liberdade, 
              dividido em etapas claras e transformadoras.
            </p>
          </div>

          {/* Core Module */}
          <Card className="mb-16 shadow-elegant border-2 border-primary/20 bg-gradient-primary/5">
            <CardHeader className="text-center pb-6">
              <Badge className="w-fit mx-auto mb-4 bg-gradient-hero text-primary-foreground">
                {coreModule.highlight}
              </Badge>
              <CardTitle className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {coreModule.title}
              </CardTitle>
              <p className="text-lg font-semibold text-primary/80">
                {coreModule.subtitle}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <img 
                  src="/lovable-uploads/eb6f4153-cdb2-4d6b-a46d-04060e37082a.png" 
                  alt="Manual da Libertação - Dispositivos móveis" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-glow"
                />
              </div>
              <div className="lg:w-2/3 space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  {coreModule.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {pillars.map((pillar, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {pillar.number}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">
                          {pillar.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tools Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary mb-4">
                Suas Ferramentas de Segurança e Clareza
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Guias práticos e exercícios transformadores para cada etapa da sua jornada.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 group overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={tool.image} 
                      alt={tool.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <Badge variant="secondary" className="w-fit mb-2">
                      {tool.type}
                    </Badge>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {tool.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Audio Support */}
          <Card className="mt-16 shadow-elegant bg-gradient-hero/10 border-accent/20">
            <CardContent className="flex flex-col lg:flex-row items-center gap-8 p-8">
              <div className="lg:w-1/3">
                <img 
                  src={bookMockup2} 
                  alt="Áudios de Libertação" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-glow"
                />
              </div>
              <div className="lg:w-2/3 space-y-6">
                <div>
                  <Badge className="bg-accent text-accent-foreground mb-4">
                    Apoio Diário
                  </Badge>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    31 Áudios de Libertação
                  </h3>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  Uma pílula diária de força, clareza e acolhimento para te acompanhar por um mês inteiro. 
                  Cada áudio é um lembrete de que você não está sozinha e de que a cada dia você dá 
                  um novo passo em direção à sua liberdade.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="liberation" size="lg">
                    Quero Começar Hoje
                  </Button>
                  <Button variant="outline" size="lg">
                    Ver Todos os Conteúdos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
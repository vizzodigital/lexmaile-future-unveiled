import { useEffect, useState } from "react";
import { ArrowRight, Download, Book, File, Play, Folder, Scale, Shield, Lightbulb, Eye, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);

  const pillars = [
    { text: "Tecnologia com Propósito", icon: Lightbulb },
    { text: "Clareza Jurídica", icon: Scale },
    { text: "Estrutura e Confiabilidade", icon: Shield },
    { text: "Inteligência Estratégica", icon: Eye },
    { text: "Presença Digital Sólida", icon: Zap },
    { text: "Visão de Futuro", icon: Target }
  ];

  const documents = [
    { name: "Brandbook completo", type: ".pdf", icon: Book },
    { name: "Pesquisa de mercado", type: ".pdf", icon: File },
    { name: "Documento de posicionamento estratégico", type: ".pdf", icon: File },
    { name: "Pacote de assets visuais", type: ".zip", icon: Download }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % pillars.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [pillars.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-lexmaile-black text-white overflow-x-hidden font-inter">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        {/* Sophisticated background texture */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,57,80,0.03)_25%,rgba(255,57,80,0.03)_50%,transparent_50%,transparent_75%,rgba(187,42,255,0.03)_75%)] bg-[length:120px_120px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,57,80,0.1)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(187,42,255,0.1)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-12 animate-fade-in">
            <img 
              src="/lovable-uploads/2134f4c2-80d5-4d82-9158-06de79f69b18.png" 
              alt="LexMaile Logo" 
              className="h-32 mx-auto mb-8 animate-pulse drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 30px rgba(255, 57, 80, 0.3))' }}
            />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black mb-8 animate-fade-in animation-delay-200 leading-tight">
            Bem-vindo ao{" "}
            <span className="bg-gradient-to-r from-[#FF3950] via-[#FF6B7A] to-[#BB2AFF] bg-clip-text text-transparent animate-pulse">
              futuro
            </span>{" "}
            da LexMaile
          </h1>
          
          <p className="text-2xl md:text-3xl text-lexmaile-gray mb-16 max-w-5xl mx-auto animate-fade-in animation-delay-400 font-medium leading-relaxed">
            Uma nova era de tecnologia jurídica, construída com intenção, identidade e visão estratégica.
          </p>
          
          <Button 
            onClick={() => scrollToSection('manifesto')}
            className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] hover:from-[#BB2AFF] hover:to-[#FF3950] text-white px-12 py-6 text-xl rounded-full transition-all duration-500 hover:scale-105 animate-fade-in animation-delay-600 shadow-2xl hover:shadow-[0_0_40px_rgba(255,57,80,0.5)]"
          >
            Explorar Identidade <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Video Manifesto Section */}
      <section id="manifesto" className="py-32 relative scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              Muito além de uma marca.{" "}
              <span className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] bg-clip-text text-transparent">
                Uma fundação.
              </span>
            </h2>
            <p className="text-2xl text-lexmaile-gray max-w-4xl mx-auto font-medium">
              Descubra o que impulsiona a LexMaile e por que sua identidade é um ativo que conecta passado, presente e futuro.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 60px rgba(187, 42, 255, 0.3)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3950] via-[#BB2AFF] to-[#6F1E51] p-1">
                <div className="w-full h-full bg-lexmaile-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF3950]/10 to-[#BB2AFF]/10"></div>
                  <Button className="bg-transparent border-2 border-[#FF3950] text-[#FF3950] hover:bg-[#FF3950] hover:text-white px-16 py-8 text-xl rounded-full transition-all duration-300 hover:scale-110 z-10 shadow-lg hover:shadow-[0_0_30px_rgba(255,57,80,0.4)]">
                    <Play className="mr-4 h-8 w-8" fill="currentColor" />
                    Assistir ao manifesto
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars Section */}
      <section id="pillars" className="py-32 relative scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              O que a LexMaile{" "}
              <span className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] bg-clip-text text-transparent">
                representa?
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Card 
                  key={index}
                  className={`p-8 bg-gradient-to-br from-lexmaile-black via-gray-900 to-lexmaile-black border border-gray-800 transition-all duration-700 hover:border-[#FF3950] hover:shadow-[0_0_30px_rgba(255,57,80,0.2)] hover:scale-105 cursor-pointer ${
                    activeSection === index ? 'border-[#BB2AFF] shadow-[0_0_40px_rgba(187,42,255,0.4)] scale-105' : ''
                  }`}
                >
                  <div className="text-center">
                    <IconComponent className="h-12 w-12 text-[#FF3950] mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-center text-white">
                      {pillar.text}
                    </h3>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#FF3950] via-[#FF6B7A] to-[#BB2AFF] bg-clip-text text-transparent leading-tight">
              A LexMaile é o ponto de convergência entre lógica, dados e decisão.
            </p>
          </div>
        </div>
      </section>

      {/* Brandbook Interactive Section */}
      <section id="brandbook" className="py-32 relative scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              A alma da marca em{" "}
              <span className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] bg-clip-text text-transparent">
                cada página.
              </span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-12" style={{ boxShadow: '0 0 60px rgba(187, 42, 255, 0.2)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3950] via-[#BB2AFF] to-[#6F1E51] p-1">
                <div className="w-full h-full bg-lexmaile-black rounded-2xl flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF3950]/5 to-[#BB2AFF]/5"></div>
                  <div className="text-center z-10">
                    <Book className="h-24 w-24 text-[#FF3950] mx-auto mb-6" />
                    <p className="text-2xl text-white font-semibold mb-2">Brandbook Interativo</p>
                    <p className="text-lg text-lexmaile-gray">Visualizador com animação de virada de páginas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] hover:from-[#BB2AFF] hover:to-[#FF3950] text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                <Download className="mr-3 h-5 w-5" />
                Baixar Brandbook em PDF
              </Button>
              <Button className="border-2 border-[#FF3950] text-[#FF3950] hover:bg-[#FF3950] hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                <Eye className="mr-3 h-5 w-5" />
                Visualizar em tela cheia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Documents Section */}
      <section id="documents" className="py-32 relative scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              Materiais que sustentam nossa{" "}
              <span className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] bg-clip-text text-transparent">
                estratégia
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {documents.map((doc, index) => {
              const IconComponent = doc.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-gradient-to-br from-lexmaile-black via-gray-900 to-lexmaile-black border border-gray-800 hover:border-[#FF3950] transition-all duration-300 hover:scale-105 cursor-pointer group hover:shadow-[0_0_30px_rgba(255,57,80,0.2)]"
                >
                  <div className="text-center">
                    <IconComponent className="h-16 w-16 text-[#FF3950] mx-auto mb-6 group-hover:animate-pulse" />
                    <h3 className="text-lg font-bold mb-3 text-white">{doc.name}</h3>
                    <p className="text-lexmaile-gray text-base font-medium">{doc.type}</p>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] hover:from-[#BB2AFF] hover:to-[#FF3950] text-white px-12 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(255,57,80,0.5)]">
              <Folder className="mr-4 h-6 w-6" />
              Baixar todos os arquivos
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section id="footer" className="py-32 relative scroll-reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-12 bg-gradient-to-r from-[#FF3950] via-[#FF6B7A] to-[#BB2AFF] bg-clip-text text-transparent leading-tight">
            Obrigado por confiar na construção da sua nova história.
          </h2>
          
          <div className="mt-20 pt-12 border-t border-gray-800">
            <p className="text-xl text-lexmaile-gray font-medium mb-4">
              Desenvolvido por{" "}
              <span className="text-[#FF3950] font-bold">Vizzo Digital</span>
            </p>
            <a 
              href="https://vizzo.digital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FF3950] hover:text-[#BB2AFF] transition-colors duration-300 text-lg font-semibold relative group"
            >
              <span className="relative">
                https://vizzo.digital
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

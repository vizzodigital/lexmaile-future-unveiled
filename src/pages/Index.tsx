
import { useEffect, useState } from "react";
import { ArrowRight, Download, Book, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);

  const pillars = [
    "Tecnologia com Propósito",
    "Clareza Jurídica", 
    "Estrutura e Confiabilidade",
    "Inteligência Estratégica",
    "Presença Digital Sólida",
    "Visão de Futuro"
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
    }, 2000);

    return () => clearInterval(interval);
  }, [pillars.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-lexmaile-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(231,52,63,0.1)_25%,rgba(231,52,63,0.1)_50%,transparent_50%,transparent_75%,rgba(158,27,121,0.1)_75%)] bg-[length:60px_60px] animate-pulse opacity-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/2134f4c2-80d5-4d82-9158-06de79f69b18.png" 
              alt="LexMaile Logo" 
              className="h-24 mx-auto mb-8 animate-glow"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in animation-delay-200">
            Bem-vindo ao <span className="bg-lexmaile-gradient bg-clip-text text-transparent">futuro</span> da LexMaile
          </h1>
          
          <p className="text-xl md:text-2xl text-lexmaile-gray mb-12 max-w-4xl mx-auto animate-fade-in animation-delay-400">
            Uma nova era de tecnologia jurídica, construída com intenção, identidade e visão estratégica.
          </p>
          
          <Button 
            onClick={() => scrollToSection('manifesto')}
            className="bg-lexmaile-gradient hover:bg-lexmaile-gradient-dark text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-600"
          >
            Explorar Identidade <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Video Manifesto Section */}
      <section id="manifesto" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Muito além de uma marca. <span className="bg-lexmaile-gradient bg-clip-text text-transparent">Uma fundação.</span>
            </h2>
            <p className="text-xl text-lexmaile-gray max-w-3xl mx-auto animate-fade-in animation-delay-200">
              Descubra o que impulsiona a LexMaile e por que sua identidade é um ativo que conecta passado, presente e futuro.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-lexmaile-red to-lexmaile-purple rounded-2xl p-1 animate-fade-in animation-delay-400">
              <div className="w-full h-full bg-lexmaile-black rounded-xl flex items-center justify-center">
                <Button className="bg-transparent border-2 border-lexmaile-red text-lexmaile-red hover:bg-lexmaile-red hover:text-white px-12 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  ▶️ Assistir ao manifesto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars Section */}
      <section id="pillars" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              O que a LexMaile <span className="bg-lexmaile-gradient bg-clip-text text-transparent">representa?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => (
              <Card 
                key={index}
                className={`p-6 bg-gradient-to-br from-lexmaile-black to-gray-900 border border-gray-800 transition-all duration-500 hover:border-lexmaile-red ${
                  activeSection === index ? 'animate-glow scale-105' : ''
                }`}
              >
                <h3 className="text-xl font-semibold text-center text-white">
                  {pillar}
                </h3>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold bg-lexmaile-gradient bg-clip-text text-transparent animate-float">
              A LexMaile é o ponto de convergência entre lógica, dados e decisão.
            </p>
          </div>
        </div>
      </section>

      {/* Brandbook Interactive Section */}
      <section id="brandbook" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              A alma da marca em <span className="bg-lexmaile-gradient bg-clip-text text-transparent">cada página.</span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-lexmaile-red to-lexmaile-purple rounded-2xl p-1 mb-8">
              <div className="w-full h-full bg-lexmaile-black rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Book className="h-20 w-20 text-lexmaile-red mx-auto mb-4" />
                  <p className="text-xl text-lexmaile-gray">Brandbook Interativo</p>
                  <p className="text-sm text-lexmaile-gray mt-2">Visualizador com animação de virada de páginas</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-lexmaile-red hover:bg-lexmaile-dark-purple text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                📄 Baixar Brandbook em PDF
              </Button>
              <Button className="border border-lexmaile-red text-lexmaile-red hover:bg-lexmaile-red hover:text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                🔍 Visualizar em tela cheia
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Documents Section */}
      <section id="documents" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Materiais que sustentam nossa <span className="bg-lexmaile-gradient bg-clip-text text-transparent">estratégia</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {documents.map((doc, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-lexmaile-black to-gray-900 border border-gray-800 hover:border-lexmaile-red transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="text-center">
                  <doc.icon className="h-12 w-12 text-lexmaile-red mx-auto mb-4 group-hover:animate-float" />
                  <h3 className="text-lg font-semibold mb-2 text-white">{doc.name}</h3>
                  <p className="text-lexmaile-gray text-sm">{doc.type}</p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-lexmaile-gradient hover:bg-lexmaile-gradient-dark text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
              🗂️ Baixar todos os arquivos
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section id="footer" className="py-20 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-lexmaile-gradient bg-clip-text text-transparent">
            Obrigado por confiar na construção da sua nova história.
          </h2>
          
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-lexmaile-gray">
              Desenvolvido por <span className="text-lexmaile-red font-semibold">Vizzo Digital</span>
            </p>
            <a 
              href="https://vizzo.digital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lexmaile-red hover:text-lexmaile-purple transition-colors duration-300"
            >
              🔗 https://vizzo.digital
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

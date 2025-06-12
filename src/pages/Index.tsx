import { useEffect } from "react";
import { ArrowRight, Download, Book, File, Play, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PdfFlipViewer } from "@/components/ui/pdf-viewer";

const Index = () => {
  const documents = [
    {
      name: "Brandbook completo",
      type: ".pdf",
      url: "/lovable-uploads/brandbook.pdf",
      icon: Book,
    },
    {
      name: "Pesquisa de mercado",
      type: ".pdf",
      url: "/lovable-uploads/market-research.pdf",
      icon: File,
    },
    {
      name: "Logotipo + Manual de aplicação",
      type: ".zip",
      url: "/lovable-uploads/logotipos.zip",
      icon: File,
    },
    {
      name: "Pacote de assets visuais",
      type: ".zip",
      url: "/lovable-uploads/assets.zip",
      icon: Download,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-lexmaile-black text-white overflow-x-hidden font-inter">
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), url(${
            import.meta.env.BASE_URL
          }lovable-uploads/texture.png)`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="w-full flex justify-center mt-12 md:mt-0 mb-20">
            <img
              src={`${import.meta.env.BASE_URL}lovable-uploads/logo.png`}
              alt="LexMaile Logo"
              className="max-h-[160px] w-auto max-w-[80%] object-contain"
            />
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-9xl font-black mb-8 animate-fade-in animation-delay-200 leading-tight">
            Bem-vindo ao
            <br />
            <span className="bg-gradient-to-r from-[#FF3950] via-[#FF6B7A] to-[#BB2AFF] bg-clip-text text-transparent animate-pulse">
              futuro
            </span>{" "}
            jurídico
          </h1>

          <p className="text-xl md:text-2xl text-lexmaile-gray mb-16 max-w-5xl mx-auto animate-fade-in animation-delay-400 font-medium leading-relaxed">
            A LEXMAILE introduz uma nova era da tecnologia jurídica, construída
            para ser uma plataforma mais eficiente, conectada e voltada para o
            futuro.
          </p>

          <Button
            onClick={() => scrollToSection("manifesto")}
            className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] hover:from-[#BB2AFF] hover:to-[#FF3950] text-white px-12 py-6 text-xl rounded-full transition-all duration-500 hover:scale-105 animate-fade-in animation-delay-600 shadow-2xl hover:shadow-[0_0_40px_rgba(255,57,80,0.5)]"
          >
            Explorar Identidade <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Video Manifesto Section */}
      <section
        id="manifesto"
        className="py-10 relative scroll-reveal"
        style={{
          backgroundImage: `url('/lovable-uploads/textura-ampulheta.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-black mb-8">
              Não é apenas advocacia, é uma mudança profunda no{" "}
              <span className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] bg-clip-text text-transparent">
                core jurídico.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-lexmaile-gray max-w-4xl mx-auto font-medium">
              Descubra o que impulsiona a LexMaile e por que sua identidade é um
              ativo que conecta passado, presente e futuro.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl"
              style={{ boxShadow: "0 0 60px rgba(187, 42, 255, 0.3)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF3950] via-[#BB2AFF] to-[#6F1E51] p-1">
                <div className="w-full h-full bg-lexmaile-black rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/sLicYsdodPo?si=d5_qXmWPyxGM7rOz"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brandbook Interactive Section */}
      <section
        id="brandbook"
        className="py-32 relative scroll-reveal"
        style={{
          backgroundImage: `url('/lovable-uploads/textura-ampulheta.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-black mb-8">
              A{" "}
              <span className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] bg-clip-text text-transparent">
                alma da marca{" "}
              </span>
              em cada página.
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-12 bg-transparent p-1">
              <div className="w-full h-full bg-transparent rounded-2xl relative z-10">
                <PdfFlipViewer fileUrl="/lovable-uploads/brandbook.pdf" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Documents Section */}
      <section
        id="documents"
        className="py-5 relative scroll-reveal"
        style={{
          backgroundPosition: "center",
          backgroundImage: `url('/lovable-uploads/textura-ampulheta.jpg')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-black mb-8">
              Materiais que sustentam <br /> nossa{" "}
              <span className="bg-gradient-to-r from-[#FF3950] to-[#BB2AFF] bg-clip-text text-transparent">
                estratégia
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {documents.map((doc, index) => {
              const IconComponent = doc.icon;
              return (
                <a
                  key={index}
                  href={doc.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Card className="p-3 bg-gradient-to-br from-lexmaile-black via-gray-900 to-lexmaile-black border border-gray-800 hover:border-[#FF3950] transition-all duration-300 hover:scale-105 cursor-pointer group hover:shadow-[0_0_30px_rgba(255,57,80,0.2)]">
                    <div className="text-center">
                      <IconComponent className="h-10 w-16 text-[#FF3950] mx-auto mb-6 group-hover:animate-pulse" />
                      <h3 className="text-lg font-bold mb-3 text-white">
                        {doc.name}
                      </h3>
                      <p className="text-lexmaile-gray text-base font-medium">
                        {doc.type}
                      </p>
                    </div>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section
        id="footer"
        className="py-10 relative scroll-reveal"
        style={{
          backgroundPosition: "center",
          backgroundImage: `url('/lovable-uploads/textura-ampulheta.jpg')`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-3 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-12 bg-gradient-to-r from-[#FF3950] via-[#FF6B7A] to-[#BB2AFF] bg-clip-text text-transparent leading-tight">
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

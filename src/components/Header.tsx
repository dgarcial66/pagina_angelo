import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AA</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Fisioterapeuta Angelo Acero
              </h1>
              <p className="text-sm text-muted-foreground">
                Especialista en Ortopedia y traumatología
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>320 3970118</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>angelo.acero1408@gmail.com</span>
            </div>
            <a
              href="https://wa.me/573203970118?text=Hola%20Doctor,%20quiero%20agendar%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="sm">
                Cita Online
              </Button>
            </a>
          </div>

          <a
            href="https://wa.me/573203970118?text=Hola%20Doctor,%20quiero%20agendar%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden"
          >
            <Button variant="default" size="sm">
              Contactar
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Angelo Acero Fisioterapeuta
                </h3>
                <p className="text-sm opacity-80">
                  Especialista en Rehabilitación
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Dedicado a tu recuperación y bienestar con más de 10 años de
              experiencia en fisioterapia y rehabilitación integral.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Fisioterapia Deportiva</li>
              <li>Rehabilitación</li>
              <li>Terapia Manual</li>
              <li>Electroterapia</li>
              <li>Entrenamiento Personalizado</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 opacity-80">
                <Phone className="w-4 h-4" />
                <span>320 3970118</span>
              </div>
              <div className="flex items-center space-x-2 opacity-80">
                <Mail className="w-4 h-4" />
                <span>angelo.acero1408@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 opacity-80">
                <MapPin className="w-4 h-4" />
                <span>Cita En Casa Especializada</span>
              </div>
              <div className="flex items-center space-x-2 opacity-80">
                <Clock className="w-4 h-4" />
                <span>Lun-Vie: 9:00-20:00</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Sígueme</h4>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
            <div className="space-y-2">
              <a
                href="https://wa.me/573203970118?text=Hola%20Doctor,%20quiero%20agendar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="sm" className="w-full">
                  Cita Online
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Angelo Acero Fisioterapeuta. Todos los derechos reservados. |
            Colegiado nº 12345 | Política de Privacidad | Términos de Servicio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

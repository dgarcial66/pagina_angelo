import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapy.jpg";
import heroImage2 from "@/assets/hero-physiotherapy-2.png";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Recupera tu{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  bienestar
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Tratamientos personalizados de fisioterapia con técnicas
                avanzadas para tu recuperación completa y bienestar integral.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/573203970118?text=Hola%20Doctor,%20quiero%20reservar%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" size="lg" className="text-lg px-8">
                  Reservar Cita
                </Button>
              </a>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Ver Servicios
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">+10</div>
                <div className="text-sm text-muted-foreground">
                  Años Experiencia
                </div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">
                  Pacientes Tratados
                </div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfacción
                </div>
              </div>
            </div>
          </div>

          {/* Imagen con efecto flip */}
          <div className="relative">
            <div className="group perspective w-full h-[400px] lg:h-[500px]">
              <div className="flip-container">
                {/* Frente */}
                <Card className="flip-face flip-front">
                  <img
                    src={heroImage}
                    alt="Clínica de fisioterapia moderna"
                    className="rounded-2xl shadow-lg object-contain w-full h-full"
                  />
                </Card>

                {/* Reverso */}
                <Card className="flip-face flip-back">
                  <img
                    src={heroImage2}
                    alt="Segunda vista de la clínica"
                    className="rounded-2xl shadow-lg object-cover w-full h-full"
                  />
                </Card>
              </div>
            </div>

            {/* Botón flotante */}
            <a
              href="https://wa.me/573203970118?text=Hola%20Doctor,%20quiero%20agendar%20una%20cita."
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-medium block"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  Disponible
                </div>
                <div className="text-sm text-muted-foreground">Citas Hoy</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-physiotherapy.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Recupera tu
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  {" "}
                  bienestar
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Tratamientos personalizados de fisioterapia con técnicas
                avanzadas para tu recuperación completa y bienestar integral.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="text-lg px-8">
                Reservar Cita
              </Button>
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

          <div className="relative">
            <Card className="overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Clínica de fisioterapia moderna"
                className="w-full h-[500px] object-cover"
              />
            </Card>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-medium">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  Disponible
                </div>
                <div className="text-sm text-muted-foreground">Citas Hoy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

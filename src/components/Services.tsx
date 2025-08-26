import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Zap, Shield, Activity, Brain, Dumbbell } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Fisioterapia Deportiva",
      description:
        "Tratamiento especializado para lesiones deportivas y mejora del rendimiento atlético.",
      price: "Desde €60",
    },
    {
      icon: Zap,
      title: "Electroterapia",
      description:
        "Terapias con equipos avanzados para acelerar la recuperación muscular y aliviar el dolor.",
      price: "Desde €45",
    },
    {
      icon: Shield,
      title: "Rehabilitación",
      description:
        "Programas personalizados de rehabilitación post-operatoria y recuperación funcional.",
      price: "Desde €55",
    },
    {
      icon: Activity,
      title: "Terapia Manual",
      description:
        "Técnicas manuales especializadas para el tratamiento de disfunciones del sistema musculoesquelético.",
      price: "Desde €50",
    },
    {
      icon: Brain,
      title: "Fisioterapia Neurológica",
      description:
        "Tratamiento especializado para pacientes con lesiones neurológicas y trastornos del movimiento.",
      price: "Desde €65",
    },
    {
      icon: Dumbbell,
      title: "Ejercicio Terapéutico",
      description:
        "Programas de ejercicios específicos para fortalecer y mejorar la función muscular.",
      price: "Desde €40",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de tratamientos especializados adaptados a
            tus necesidades específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-primary mb-4">
                  {service.price}
                </div>
                <Button variant="outline" className="w-full">
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="text-lg px-8">
            Ver Todos los Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

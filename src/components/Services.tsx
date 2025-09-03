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
    },
    {
      icon: Zap,
      title: "Terapia Postoperatoria",
      description:
        "Recuperación funcional y personalizada después de una cirugía, enfocada en disminuir el dolor, mejorar la movilidad y acelerar el proceso de rehabilitación.",
    },
    {
      icon: Shield,
      title: "Artroplastia de Cadera y Rodilla",
      description:
        "Tratamiento especializado para pacientes operados de reemplazo articular, con el fin de recuperar fuerza, estabilidad y calidad de vida.",
    },
    {
      icon: Activity,
      title: "Terapia Manual",
      description:
        "Técnicas manuales especializadas para el tratamiento de disfunciones del sistema musculoesquelético.",
    },
    {
      icon: Brain,
      title: "Terapia para ACV (Accidente Cerebrovascular)",
      description:
        "Rehabilitación integral orientada a mejorar la movilidad, el equilibrio y la independencia de pacientes que han sufrido un evento cerebrovascular.",
    },
    {
      icon: Dumbbell,
      title: "Entrenamiento Personalizado",
      description:
        "Plan individualizado para mejorar fuerza, movilidad y rendimiento físico, adaptado a tus necesidades y objetivos.",
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
              className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 group flex flex-col"
            >
              <CardHeader className="text-center pb-4 flex-grow">
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

              <CardContent className="text-center mt-auto">
                <a
                  href="https://wa.me/573203970118?text=Hola%20Doctor,%20quiero%20agendar%20una%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full">
                    Agendar Consulta
                  </Button>
                </a>
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

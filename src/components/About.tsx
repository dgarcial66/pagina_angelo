import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, Heart } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Formación Especializada",
      description: "Máster en Fisioterapia Deportiva y Rehabilitación",
    },
    {
      icon: Award,
      title: "Certificaciones",
      description: "Colegiado oficial con especialización en terapia manual",
    },
    {
      icon: Users,
      title: "Experiencia",
      description: "Más de 10 años tratando atletas profesionales",
    },
    {
      icon: Heart,
      title: "Enfoque Integral",
      description: "Tratamiento personalizado para cada paciente",
    },
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">
                Sobre Angelo Acero Fisioterapeuta
              </h2>
              <p className="text-lg text-muted-foreground">
                especialista en ortopedia y traumatología con más de 10 años de
                experiencia en la rehabilitación de pacientes postoperatorios de
                Artroplastia de cadera - rodilla , manejo de fracturas en las 4
                extremidades , postoperatorios de columna vertebral Además
                cuánto con gran experiencia en el manejo de pacientes con Ataque
                cerebro vascular , patología neurológica
              </p>
              <p className="text-lg text-muted-foreground">
                Mi enfoque combina técnicas tradicionales con las últimas
                innovaciones en fisioterapia, creando planes de tratamiento
                personalizados que se adaptan a las necesidades específicas de
                cada paciente.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Especialidades:
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Fisioterapia deportiva y lesiones musculares</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Rehabilitación post-operatoria</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Terapia manual y osteopatía</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Tratamiento del dolor crónico</span>
                </li>
              </ul>
            </div>

            <Button variant="hero" size="lg">
              Conoce Más Sobre Mi
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-white shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

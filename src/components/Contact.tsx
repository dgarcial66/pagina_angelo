import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "320 3970118",
      subInfo: "Llamadas y WhatsApp",
    },
    {
      icon: Mail,
      title: "Email",
      info: "angelo.acero1408@gmail.com",
      subInfo: "Respuesta en 24h",
    },
    {
      icon: MapPin,
      title: "Dirección",
      info: "Calle Salud, 123",
      subInfo: "Bogota,Colombia",
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Lun - Vie: 9:00 - 20:00",
      subInfo: "Sáb: 9:00 - 14:00",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contacta Conmigo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estoy aquí para ayudarte en tu camino hacia la recuperación. Agenda
            tu cita o consulta sin compromiso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="bg-gradient-card shadow-soft">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm font-medium text-primary mb-1">
                      {item.info}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.subInfo}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-card shadow-soft">
              <CardHeader>
                <CardTitle className="text-center text-foreground">
                  ¿Por qué elegir nuestros servicios?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-medium text-foreground">
                      Evaluación gratuita
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Primera consulta sin coste
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-medium text-foreground">
                      Horarios flexibles
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Adaptados a tu agenda
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-medium text-foreground">
                      Seguimiento personalizado
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Atención continuada
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Reserva tu Cita
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Nombre" />
                <Input placeholder="Apellidos" />
              </div>
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Teléfono" />
              <Input type="date" placeholder="Fecha preferida" />
              <Textarea
                placeholder="Describe brevemente tu problema o consulta..."
                className="min-h-[120px]"
              />
              <Button variant="hero" size="lg" className="w-full">
                Enviar Solicitud
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Te contactaremos en menos de 24 horas para confirmar tu cita
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";

const contactos = [
  {
    icon: Mail,
    titulo: "Email",
    valor: "intermediario@jorgemendonca.com",
    href: "mailto:intermediario@jorgemendonca.com",
  },
  {
    icon: MessageCircle,
    titulo: "WhatsApp",
    valor: "+55 31 3582-8296",
    href: "https://wa.me/553135828296?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20empréstimo.",
  },
  {
    icon: Clock,
    titulo: "Horário de atendimento",
    valor: "Segunda a sexta · 09:00 – 18:00",
    href: null,
  },
  {
    icon: MapPin,
    titulo: "Localização",
    valor: "Ilha de São Jorge, Açores",
    href: null,
  },
];

export default function ContactInfoCards() {
  return (
    <section className="bg-white px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-10 bg-[#006f34]" />

            <span className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.18em] text-[#006f34] font-semibold">
              Contacte-nos
            </span>
          </div>

          <h2 className="font-(family-name:--font-manrope) text-4xl tracking-[-0.03em] text-[#102A43] md:text-5xl">
            Estamos disponíveis para ajudar.
          </h2>

          <p className="mt-5 max-w-2xl font-(family-name:--font-inter) text-base leading-7 text-[#71808A]">
            Escolha a forma de contacto que lhe for mais conveniente. O primeiro
            contacto permite-nos compreender melhor a sua necessidade e
            esclarecer as próximas etapas.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-[#D9E1E5] bg-[#D9E1E5] sm:grid-cols-2 lg:grid-cols-4">
          {contactos.map(contacto => {
            const Icon = contacto.icon;

            const content = (
              <>
                <div className="flex h-11 w-11 items-center justify-center bg-[#006f34] text-[#fefefe]">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <h3 className="mt-7 font-(family-name:--font-manrope) text-lg  text-[#102A43]">
                  {contacto.titulo}
                </h3>

                <p className="mt-3 font-(family-name:--font-inter) text-sm leading-6 text-[#71808A]">
                  {contacto.valor}
                </p>
              </>
            );

            if (contacto.href) {
              return (
                <a
                  key={contacto.titulo}
                  href={contacto.href}
                  target={
                    contacto.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contacto.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="bg-white p-7 transition-colors hover:bg-[#FCFDFC] lg:p-8"
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={contacto.titulo} className="bg-white p-7 lg:p-8">
                {content}
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="border border-[#D9E1E5] bg-[#F7F9FA] p-8 lg:p-10">
            <div className="flex items-start gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#006f34] text-[#fefefe]">
                <MapPin size={20} strokeWidth={1.5} />
              </div>

              <div>
                <p className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.16em] text-[#006f34]">
                  Atendimento presencial
                </p>

                <h3 className="mt-3 font-(family-name:--font-manrope) text-2xl text-[#102A43]">
                  Ilha de São Jorge
                </h3>

                <p className="mt-3 max-w-xl font-(family-name:--font-inter) text-sm leading-7 text-[#71808A]">
                  O atendimento presencial está disponível mediante marcação
                  prévia. Para maior comodidade, também é possível realizar o
                  contacto e acompanhamento à distância.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#006f34] p-8 text-[#fefefe] lg:p-10">
            <p className="font-(family-name:--font-inter) text-xs  uppercase tracking-[0.16em] text-[#fefefe]/75">
              Atendimento
            </p>

            <h3 className="mt-3 font-(family-name:--font-manrope) text-2xl ">
              Segunda a sexta
            </h3>

            <p className="mt-3 font-(family-name:--font-inter) text-sm leading-7 text-white/60">
              Das 09:00 às 18:00.
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

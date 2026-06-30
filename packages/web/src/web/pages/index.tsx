import { useEffect, useState } from "react";
import {
  Coffee,
  ShoppingBag,
  Bike,
  Clock,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Star,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import {
  WhiskIcon,
  CroissantIcon,
  ClockLineIcon,
  MapPinLineIcon,
} from "../components/cafe-icons";

const BASE = import.meta.env.BASE_URL;

// ---------- Reveal hook ----------
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ---------- Nav ----------
function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(245,236,215,0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(217,205,184,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px clamp(16px, 4vw, 32px)",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <a
          href="#inicio"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={`${BASE}logo-cafe45.png`}
            alt="Café 45"
            style={{
              height: "clamp(36px, 5vw, 48px)",
              width: "auto",
            }}
          />
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          {["Servicios", "Menú", "Horarios", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              style={{
                color: "var(--color-caramel)",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.9rem",
                letterSpacing: "0.03em",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "var(--color-espresso)")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "var(--color-caramel)")
              }
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-espresso)",
            padding: 4,
          }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div
          className="mobile-drawer"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: "16px clamp(16px, 4vw, 32px) 24px",
            borderTop: "1px solid rgba(217,205,184,0.5)",
            background: "rgba(245,236,215,0.96)",
          }}
        >
          {[
            {
              label: "Servicios",
              href: "#servicios",
              icon: <WhiskIcon size={20} />,
            },
            { label: "Menú", href: "#menú", icon: <CroissantIcon size={20} /> },
            {
              label: "Horarios",
              href: "#horarios",
              icon: <ClockLineIcon size={20} />,
            },
            {
              label: "Contacto",
              href: "#contacto",
              icon: <MapPinLineIcon size={20} />,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "var(--color-caramel)",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px clamp(16px, 5vw, 24px) 80px",
        position: "relative",
        overflow: "hidden",
      }}
      className="hero-section"
    >
      {/* Badge */}
      <div className="hero-badge">
        <Star size={12} fill="currentColor" />
        Café de Especialidad · Coyoacán
      </div>

      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          fontWeight: 700,
          color: "var(--color-espresso)",
          lineHeight: 1.1,
          marginBottom: 24,
          maxWidth: 800,
          padding: "0 8px",
        }}
      >
        Café 45
      </h1>

      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
          color: "var(--color-caramel)",
          maxWidth: 560,
          lineHeight: 1.6,
          marginBottom: 12,
          padding: "0 8px",
        }}
      >
        Cada taza cuenta una historia.
      </p>
      <p
        style={{
          fontSize: "clamp(0.9rem, 2vw, 1rem)",
          color: "#7a6652",
          maxWidth: 480,
          lineHeight: 1.75,
          marginBottom: 44,
          padding: "0 8px",
        }}
      >
        Un rincón acogedor en el corazón de Coyoacán donde el café de origen, la
        calma y el sabor se encuentran.
      </p>

      <div
        style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "0 8px",
        }}
      >
        <a
          href="https://wa.me/525525696506"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "var(--color-caramel)",
            color: "var(--color-cream)",
            padding: "14px 32px",
            borderRadius: 50,
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "1rem",
            transition: "background 0.2s, transform 0.2s",
            boxShadow: "0 4px 20px rgba(123,74,45,0.25)",
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "var(--color-espresso)";
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "var(--color-caramel)";
            (e.currentTarget as HTMLAnchorElement).style.transform =
              "translateY(0)";
          }}
        >
          Pedir en línea
        </a>
        <a
          href="#menú"
          className="btn-conocer"
          style={{
            background: "transparent",
            color: "var(--color-espresso)",
            padding: "14px 32px",
            borderRadius: 50,
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "1rem",
            border: "1.5px solid var(--color-fog)",
            transition: "border-color 0.2s",
          }}
          onMouseOver={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.borderColor =
              "var(--color-caramel)")
          }
          onMouseOut={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.borderColor =
              "var(--color-fog)")
          }
        >
          Ir al menú
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--color-fog)",
          animation: "bounce 2s infinite",
        }}
      >
        <ChevronDown size={28} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}

// ---------- Servicios ----------
function Servicios() {
  const items = [
    {
      icon: <Coffee size={28} color="var(--color-caramel)" strokeWidth={1.5} />,
      title: "Consumo en el lugar",
      desc: "Un espacio diseñado para que te quedes: mesas cómodas, buena luz y el mejor café de especialidad.",
    },
    {
      icon: (
        <ShoppingBag size={28} color="var(--color-caramel)" strokeWidth={1.5} />
      ),
      title: "Para llevar",
      desc: "Tu café favorito listo para acompañarte a donde vayas, sin sacrificar calidad ni sabor.",
    },
    {
      icon: <Bike size={28} color="var(--color-caramel)" strokeWidth={1.5} />,
      title: "Entrega a domicilio",
      desc: "Llevamos Café 45 hasta tu puerta. Pide por teléfono o WhatsApp y lo recibís en casa.",
    },
  ];

  return (
    <section
      id="servicios"
      className="section-padding"
      style={{
        background: "var(--color-parchment)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-olive)",
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            Cómo disfrutarlo
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              marginTop: 8,
              marginBottom: 0,
            }}
          >
            Siempre a tu manera
            <WhiskIcon size={28} />
          </h2>
        </div>

        <div className="servicios-grid">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                background: "var(--color-cream)",
                borderRadius: 16,
                padding: "clamp(24px, 4vw, 40px) clamp(20px, 3vw, 32px)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                border: "1px solid var(--color-fog)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 40px rgba(44,26,14,0.1)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(123,74,45,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  margin: 0,
                  color: "var(--color-espresso)",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#7a6652",
                  lineHeight: 1.7,
                  fontSize: "1rem",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Menu Preview ----------
function MenuPreview() {
  const categories = [
    {
      name: "Bebidas Calientes / Con Hielo",
      items: [
        { name: "Espresso", price: "$40" },
        { name: "Espresso Cortado", price: "$42" },
        { name: "Espresso Americano", price: "$45" },
        { name: "Americano del día", price: "$35" },
        { name: "Latte", price: "$65" },
        { name: "Capuccino", price: "$70" },
        { name: "Latte Sabores (Caramel/Mocha)", price: "$80" },
        { name: "Matcha Latte", price: "$85" },
        { name: "Chai Latte", price: "$85" },
        { name: "Café 45 Irlandés sin alcohol", price: "$80" },
        { name: "Chocolate con leche", price: "$80" },
        { name: "Infusiones naturales", price: "$50" },
      ],
    },
    {
      name: "EntrePanes",
      items: [
        { name: "Croissant Paris", price: "$165" },
        { name: "Croissant Alba", price: "$169" },
        { name: "Bisquet Brunch 45", price: "$160" },
        { name: "Clásico 45", price: "$162" },
        { name: "Miel & Cabra", price: "$153" },
        { name: "Roast Beef", price: "$243" },
        { name: "Sazón Dijon", price: "$129" },
      ],
    },
    {
      name: "Desayunos Salados",
      items: [
        { name: "Chilaquiles o Enchiladas", price: "$156" },
        { name: "Huevo al gusto", price: "$120" },
        { name: "Molletes de la casa", price: "$111" },
        { name: "Omelette Manchego", price: "$127" },
        { name: "Sabores del Bosque", price: "$153" },
      ],
    },
    {
      name: "Desayuno Dulce",
      items: [
        { name: "Bisquets a la plancha", price: "$85" },
        { name: "Croissant a la Plancha", price: "$60" },
        { name: "Tostada Francesa", price: "$60" },
      ],
    },
    {
      name: "Ensalada",
      items: [
        { name: "Balsamica", price: "$141" },
        { name: "45", price: "$135" },
      ],
    },
    {
      name: "Panadería Gourmet",
      items: [
        { name: "Croissant", price: "$55" },
        { name: "Bisquet", price: "$40" },
        { name: "Roll", price: "$50" },
        { name: "Polvorón 3pz", price: "$30" },
        { name: "Mini bisquet", price: "$28" },
      ],
    },
    {
      name: "Bebidas",
      items: [
        { name: "Jugo (Verde/Naranja/Arándano)", price: "$45" },
        { name: "Agua embotellada", price: "$15" },
        { name: "Refrescos", price: "$45" },
      ],
    },
    {
      name: "Algo Ligero",
      items: [{ name: "Plato de fruta de temporada", price: "$90" }],
    },
    {
      name: "Panadería para Llevar",
      items: [
        { name: "Ciabatta pza", price: "$11" },
        { name: "Pan de Caja 800g", price: "$85" },
        { name: "Pan de Hogaza (Masa Madre) 600g", price: "$120" },
      ],
    },
    {
      name: "Extras",
      items: [
        { name: "Orden de Pollo / 1 Pza Huevo", price: "$15" },
        { name: "Orden de Pan Blanco", price: "$12" },
        { name: "Orden de aguacate", price: "$20" },
        { name: "Guarnición de chilaquiles", price: "$25" },
        { name: "Shot extra espresso", price: "$10" },
        { name: "Leche de Almendras", price: "+$15" },
      ],
    },
  ];

  return (
    <section
      id="menú"
      className="section-padding"
      style={{
        background: "var(--color-white)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-olive)",
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            Lo que ofrecemos
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              marginTop: 8,
              marginBottom: 16,
            }}
          >
            Nuestro Menú
            <CroissantIcon size={28} />
          </h2>
        </div>

        <div className="menu-categories-grid">
          {categories.map((cat, ci) => (
            <div
              key={cat.name}
              className={`reveal reveal-delay-${(ci % 4) + 1}`}
              style={{
                marginBottom: 40,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                  color: "var(--color-espresso)",
                  marginBottom: 16,
                  paddingBottom: 10,
                  borderBottom: "2px solid var(--color-caramel)",
                }}
              >
                {cat.name}
              </h3>
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--color-fog)",
                    gap: 12,
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: "clamp(0.88rem, 2vw, 0.95rem)",
                      color: "var(--color-espresso)",
                    }}
                  >
                    {item.name}
                  </p>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1rem",
                      color: "var(--color-caramel)",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: 16 }}>
          <p
            style={{
              color: "#7a6652",
              fontSize: "0.9rem",
              fontStyle: "italic",
            }}
          >
            Menú sujeto a disponibilidad y temporada.
          </p>
        </div>
      </div>
    </section>
  );
}

// ---------- Horarios ----------
function Horarios() {
  const horario = [
    { dia: "Lunes", horas: "9:11 a.m. – 4:00 p.m.", cerrado: false },
    { dia: "Martes", horas: "9:00 a.m. – 4:00 p.m.", cerrado: false },
    { dia: "Miércoles", horas: "8:30 a.m. – 4:00 p.m.", cerrado: false },
    { dia: "Jueves", horas: "8:30 a.m. – 4:00 p.m.", cerrado: false },
    { dia: "Viernes", horas: "9:00 a.m. – 4:00 p.m.", cerrado: false },
    { dia: "Sábado", horas: "Cerrado", cerrado: true },
    { dia: "Domingo", horas: "9:00 a.m. – 4:00 p.m.", cerrado: false },
  ];

  const hoy = new Date().getDay(); // 0=Dom, 1=Lun ...
  const indexHoy = hoy === 0 ? 6 : hoy - 1; // Map to our array index

  return (
    <section
      id="horarios"
      className="section-padding"
      style={{
        background: "var(--color-parchment)",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-olive)",
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            Cuándo visitarnos
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginTop: 8 }}>
            Horarios
            <ClockLineIcon size={28} />
          </h2>
        </div>

        <div
          className="reveal"
          style={{
            background: "var(--color-cream)",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--color-fog)",
          }}
        >
          {horario.map((row, i) => (
            <div
              key={row.dia}
              className="horario-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background:
                  i === indexHoy ? "rgba(123,74,45,0.08)" : "transparent",
                borderBottom:
                  i < horario.length - 1
                    ? "1px solid var(--color-fog)"
                    : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(6px, 2vw, 12px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(0.88rem, 2vw, 1rem)",
                    color: row.cerrado ? "#aaa" : "var(--color-espresso)",
                    fontWeight: i === indexHoy ? 600 : 400,
                  }}
                >
                  {row.dia}
                </span>
                {i === indexHoy && (
                  <span
                    style={{
                      fontSize: "0.8rem",
                      background: "var(--color-caramel)",
                      color: "white",
                      borderRadius: 20,
                      padding: "2px 8px",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Hoy
                  </span>
                )}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {!row.cerrado && (
                  <Clock
                    size={14}
                    color="var(--color-olive)"
                    strokeWidth={1.5}
                  />
                )}
                <span
                  style={{
                    fontSize: "clamp(0.82rem, 2vw, 0.95rem)",
                    color: row.cerrado ? "#bbb" : "var(--color-caramel)",
                    fontWeight: row.cerrado ? 400 : 500,
                    fontStyle: row.cerrado ? "italic" : "normal",
                  }}
                >
                  {row.horas}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Contacto ----------
function Contacto() {
  return (
    <section
      id="contacto"
      className="section-padding"
      style={{
        background: "var(--color-white)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 6vw, 64px)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-olive)",
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            Cómo encontrarnos
          </span>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginTop: 8 }}>
            Visítanos
            <MapPinLineIcon size={28} />
          </h2>
        </div>

        <div className="contacto-grid">
          {/* Info */}
          <div
            className="reveal"
            style={{ display: "flex", flexDirection: "column", gap: 32 }}
          >
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(123,74,45,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <MapPin
                  size={20}
                  color="var(--color-caramel)"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontWeight: 500,
                    color: "var(--color-espresso)",
                    fontSize: "0.9rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Dirección
                </p>
                <a
                  href="https://maps.google.com/?q=Isaac+Ochoterena+3,+Bosques+de+Tetlameya,+Coyoacán,+04730,+CDMX"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--color-caramel)",
                    textDecoration: "none",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                    lineHeight: 1.6,
                  }}
                >
                  Isaac Ochoterena 3,
                  <br />
                  Bosques de Tetlameya,
                  <br />
                  Coyoacán, CDMX 04730
                </a>
              </div>
            </div>

            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(123,74,45,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <Phone
                  size={20}
                  color="var(--color-caramel)"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontWeight: 500,
                    color: "var(--color-espresso)",
                    fontSize: "0.9rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  Teléfono
                </p>
                <a
                  href="tel:5525696506"
                  style={{
                    color: "var(--color-caramel)",
                    textDecoration: "none",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  }}
                >
                  55 2569 6506
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/525525696506"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--color-olive)",
                color: "white",
                padding: "14px 28px",
                borderRadius: 50,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "1rem",
                width: "fit-content",
                transition: "opacity 0.2s",
              }}
              onMouseOver={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")
              }
              onMouseOut={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
              }
            >
              Contáctanos por WhatsApp
            </a>
          </div>

          {/* Map */}
          <div
            className="reveal reveal-delay-2"
            style={{
              borderRadius: 20,
              overflow: "hidden",
              border: "1px solid var(--color-fog)",
              boxShadow: "0 8px 32px rgba(44,26,14,0.08)",
            }}
          >
            <iframe
              title="Mapa Café 45"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.7!2d-99.1693!3d19.3434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fef5cd01c6f1%3A0x0!2sIsaac%20Ochoterena%203%2C%20Bosques%20de%20Tetlameya%2C%20Coyoac%C3%A1n%2C%2004730%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1"
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-espresso)",
        color: "var(--color-cream)",
        padding: "64px clamp(16px, 4vw, 24px) 40px",
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* Brand */}
        <div>
          <img
            src={`${BASE}logo-cafe45.png`}
            alt="Café 45"
            style={{
              height: "clamp(56px, 8vw, 72px)",
              width: "auto",
              marginBottom: 12,
            }}
          />
          <p
            style={{
              color: "rgba(245,236,215,0.6)",
              lineHeight: 1.7,
              fontSize: "0.9rem",
              margin: "0 auto",
              maxWidth: 280,
            }}
          >
            Café de especialidad en el corazón de Coyoacán. Un lugar para
            tomarte el tiempo.
          </p>
        </div>

        {/* Links */}
        <div>
          <p
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(245,236,215,0.45)",
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            Navegación
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {["Inicio", "Servicios", "Menú", "Horarios", "Contacto"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  style={{
                    color: "rgba(245,236,215,0.7)",
                    textDecoration: "none",
                    fontSize: "1rem",
                    transition: "color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      "var(--color-cream)")
                  }
                  onMouseOut={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      "rgba(245,236,215,0.7)")
                  }
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>

        {/* Redes sociales */}
        <div>
          <p
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(245,236,215,0.45)",
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            Redes sociales
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            {[
              {
                icon: <Instagram size={20} strokeWidth={1.5} />,
                href: "#",
                label: "Instagram",
              },
              {
                icon: <Facebook size={20} strokeWidth={1.5} />,
                href: "#",
                label: "Facebook",
              },
              {
                icon: <Twitter size={20} strokeWidth={1.5} />,
                href: "#",
                label: "Twitter",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(245,236,215,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(245,236,215,0.7)",
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(245,236,215,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-cream)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "rgba(245,236,215,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(245,236,215,0.7)";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p
            style={{
              color: "rgba(245,236,215,0.5)",
              fontSize: "0.875rem",
              marginTop: 20,
              fontStyle: "italic",
            }}
          >
            @cafe45coyoacan
          </p>
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          borderTop: "1px solid rgba(245,236,215,0.12)",
          paddingTop: 28,
        }}
      >
        <p
          style={{
            margin: 0,
            color: "rgba(245,236,215,0.4)",
            fontSize: "0.875rem",
          }}
        >
          © {new Date().getFullYear()} Café 45 · Coyoacán, CDMX
        </p>
        <p
          style={{
            margin: 0,
            color: "rgba(245,236,215,0.4)",
            fontSize: "0.875rem",
          }}
        >
          Isaac Ochoterena 3, Bosques de Tetlameya
        </p>
      </div>
    </footer>
  );
}

// ---------- Main Page ----------
export default function IndexPage() {
  useReveal();

  return (
    <div>
      <Nav />
      <Hero />
      <Servicios />
      <MenuPreview />
      <Horarios />
      <Contacto />
      <Footer />
    </div>
  );
}

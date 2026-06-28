// src/App.jsx
import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import ThemeSelector from "./components/ThemeSelector";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hasan@example.com",
    href: "mailto:hasan@example.com",
  },
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1XX-XXXXXX",
    href: "tel:+8801XXXXXXXX",
  },
];

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/hasan", label: "GitHub" },
  {
    Icon: FaLinkedin,
    href: "https://linkedin.com/in/hasan",
    label: "LinkedIn",
  },
  { Icon: FaXTwitter, href: "https://twitter.com/hasan", label: "Twitter / X" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Navbar - Uses: bg-surface/80, border-border, text-primary, text-text */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-text-inverse font-heading font-bold text-lg">
                  H
                </span>
              </div>
              <span className="font-heading font-semibold text-xl text-text">
                Hasan
              </span>
            </div>
            <ThemeSelector />
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero - Uses: text-text, text-primary */}
          <section className="text-center space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-text tracking-tight">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear
              from you.
            </p>
          </section>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Info Column */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="p-6 space-y-5">
                <h2 className="font-heading text-xl font-semibold text-text">
                  Contact Info
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <a
                      key={i}
                      href={item.href || "#"}
                      className="flex items-start gap-3 group"
                    >
                      {/* Uses: bg-primary-light, text-primary, hover:bg-primary, hover:text-text-inverse */}
                      <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <item.icon
                          className="w-5 h-5 text-primary group-hover:text-text-inverse transition-colors"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text-muted">
                          {item.label}
                        </p>
                        <p className="text-text">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="font-heading text-xl font-semibold text-text mb-4">
                  Follow Me
                </h2>
                <div className="flex gap-3">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-card border border-border flex items-center justify-center
                                hover:bg-primary hover:border-primary hover:text-text-inverse
                                transition-all duration-200"
                      aria-label={s.label}
                    >
                      <s.Icon className="w-5 h-5 text-text-muted transition-colors" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card className="p-6 sm:p-8">
                <h2 className="font-heading text-2xl font-semibold text-text mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-text-muted">
          Built with React + Tailwind v4 • Dynamic Theming Demo
        </div>
      </footer>
    </div>
  );
}

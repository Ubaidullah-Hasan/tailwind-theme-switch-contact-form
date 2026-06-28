// src/App.jsx
import ThemeSelector from './components/ThemeSelector';
import ContactForm from './components/ContactForm';
import Card from './components/Card';

// ✅ UI Icons: Lucide React (Generic icons)
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  User, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Palette,
  Check,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react';

// ✅ Brand Icons: React Icons (Font Awesome Brands)
// GitHub, LinkedIn, Twitter/X ইত্যাদি ব্র্যান্ড লোগোর জন্য
import { 
  FaGithub, 
  FaLinkedin, 
  // FaXTwitter,      // Twitter-র নতুন ব্র্যান্ড নাম X (Font Awesome 6+)
  FaTwitter,     // পুরনো Twitter লোগো চাইলে এটি dùng করুন
} from 'react-icons/fa';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hasan@example.com', href: 'mailto:hasan@example.com' },
  { icon: MapPin, label: 'Location', value: 'Dhaka, Bangladesh' },
  { icon: Phone, label: 'Phone', value: '+880 1XX-XXXXXX', href: 'tel:+8801XXXXXXXX' },
];

// Brand icons আলাদা অবজেক্টে রাখা ভালো প্র্যাকটিস
const socialLinks = [
  { Icon: FaGithub, href: 'https://github.com/hasan', label: 'GitHub' },
  { Icon: FaLinkedin, href: 'https://linkedin.com/in/hasan', label: 'LinkedIn' },
  { Icon: FaTwitter, href: 'https://twitter.com/hasan', label: 'Twitter / X' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[hsl(var(--surface-hsl))]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-[hsl(var(--border-hsl))] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--primary-hsl))] flex items-center justify-center">
                <span className="text-[hsl(var(--text-inverse-hsl))] font-heading font-bold text-lg">H</span>
              </div>
              <span className="font-heading font-semibold text-xl text-[hsl(var(--text-hsl))]">Hasan</span>
            </div>
            <ThemeSelector />
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero */}
          <section className="text-center space-y-4">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[hsl(var(--text-hsl))] tracking-tight">
              Get in <span className="text-[hsl(var(--primary-hsl))]">Touch</span>
            </h1>
            <p className="text-lg text-[hsl(var(--text-muted-hsl))] max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </section>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Info Column */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="p-6 space-y-5">
                <h2 className="font-heading text-xl font-semibold text-[hsl(var(--text-hsl))]">Contact Info</h2>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <a key={i} href={item.href || '#'} className="flex items-start gap-3 group">
                      <div className="w-10 h-10 rounded-lg bg-[hsl(var(--primary-light-hsl))] flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--primary-hsl))] transition-colors">
                        <item.icon className="w-5 h-5 text-[hsl(var(--primary-hsl))] group-hover:text-[hsl(var(--text-inverse-hsl))] transition-colors" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[hsl(var(--text-muted-hsl))]">{item.label}</p>
                        <p className="text-[hsl(var(--text-hsl))]">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="font-heading text-xl font-semibold text-[hsl(var(--text-hsl))] mb-4">Follow Me</h2>
                <div className="flex gap-3">
                  {socialLinks.map((s, i) => (
                    // ✅ Brand Icon Component: <s.Icon />
                    <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 rounded-lg glass-card border border-[hsl(var(--border-hsl))] flex items-center justify-center
                                hover:bg-[hsl(var(--primary-hsl))] hover:border-[hsl(var(--primary-hsl))] hover:text-[hsl(var(--text-inverse-hsl))]
                                transition-all duration-200"
                       aria-label={s.label}>
                        <s.Icon className="w-5 h-5 text-[hsl(var(--text-muted-hsl))] transition-colors" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <Card className="p-6 sm:p-8">
                <h2 className="font-heading text-2xl font-semibold text-[hsl(var(--text-hsl))] mb-6">Send a Message</h2>
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-[hsl(var(--border-hsl))] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-[hsl(var(--text-muted-hsl))]">
          Built with React + Tailwind v4 • Dynamic Theming Demo
        </div>
      </footer>
    </div>
  );
}
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Code,
  Phone,
  MessageSquare,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Shield,
  Clock,
  Target,
  Lightbulb,
  Settings,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export default function DigitalLabsLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">
                dedigitallabs
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                href="#industries"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Industries
              </Link>
              <Link
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium"
                >
                  Professional Software Development
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Custom Software
                  <span className="block text-blue-600">Solutions with</span>
                  <span className="block text-gray-700">AI Integration</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  We develop professional software solutions integrated with AI
                  calling agents and intelligent chatbots to streamline your
                  business operations and enhance customer engagement.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  <Link href="#contact" className="flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 bg-transparent"
                >
                  <Link href="#services">View Services</Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Projects Delivered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600 mt-1">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600 mt-1">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Code className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Custom Software
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Tailored solutions for your business
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        AI Calling Agents
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Intelligent voice automation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        AI Chatbots
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Smart customer support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-gray-100 text-gray-700 px-4 py-2"
            >
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Professional Software Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating custom software solutions with
              integrated AI capabilities to enhance your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-7 h-7 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  Web Development
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Custom web applications and websites built with modern
                  technologies and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Modern Frameworks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    SEO Optimized
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-7 h-7 text-green-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  AI Calling Agents
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Intelligent voice agents that handle customer calls,
                  appointments, and sales conversations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Natural Conversations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    24/7 Availability
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Multi-language Support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="w-7 h-7 text-purple-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  AI Chatbots
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Smart chatbots that provide instant customer support and
                  automate routine inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Instant Responses
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Context Awareness
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Easy Integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="w-7 h-7 text-orange-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  Mobile Applications
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Native and cross-platform mobile apps for iOS and Android with
                  seamless user experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Cross-Platform
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Native Performance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    App Store Ready
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-teal-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  CRM Solutions
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Customer relationship management systems to streamline your
                  sales and customer service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Lead Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Sales Pipeline
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Analytics Dashboard
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Settings className="w-7 h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  Custom Software
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Tailored software solutions designed specifically for your
                  business requirements and workflows
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Custom Features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Scalable Architecture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Ongoing Support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-gray-200 text-gray-700 px-4 py-2"
            >
              Industries We Serve
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver software solutions tailored to the unique needs of
              various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "E-commerce",
                description: "Online stores and marketplaces",
              },
              {
                name: "Healthcare",
                description: "Medical practice management",
              },
              { name: "Education", description: "Learning management systems" },
              {
                name: "Real Estate",
                description: "Property management platforms",
              },
              {
                name: "Finance",
                description: "Financial service applications",
              },
              {
                name: "Manufacturing",
                description: "Production management systems",
              },
              { name: "Retail", description: "Point of sale and inventory" },
              {
                name: "Hospitality",
                description: "Booking and management systems",
              },
            ].map((industry, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-md transition-all duration-300 text-center bg-white"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900">
                    {industry.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-700 px-4 py-2"
              >
                About dedigitallabs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Professional Software Development with AI Integration
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                dedigitallabs is a professional software development company
                specializing in custom solutions integrated with AI
                technologies. We focus on creating robust, scalable software
                that incorporates AI calling agents and intelligent chatbots to
                enhance business operations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced developers and AI specialists work
                together to deliver solutions that not only meet your current
                needs but also prepare your business for the future of
                technology.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">5+</div>
                  <div className="text-gray-600 mt-1">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600 mt-1">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-gray-600 mt-1">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-600 mt-1">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Why Choose Us?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Target className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Custom Solutions
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Tailored software built for your specific needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Reliable & Secure
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Enterprise-grade security and reliability
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Timely Delivery
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Projects delivered on time and within budget
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-gray-200 text-gray-700 px-4 py-2"
            >
              Client Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations with
              our software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "CEO, TechStart Solutions",
                content:
                  "dedigitallabs developed a comprehensive CRM system for us with integrated AI chatbot. The solution has improved our customer response time by 70%.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Operations Manager, RetailPro",
                content:
                  "The AI calling agent they built for our customer service has been a game-changer. It handles 80% of our inquiries automatically with high accuracy.",
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "Founder, EduTech India",
                content:
                  "Professional team that delivered our e-learning platform on time. The custom features they built perfectly match our requirements.",
                rating: 5,
              },
              {
                name: "Sneha Gupta",
                role: "Director, HealthCare Plus",
                content:
                  "Their patient management system with AI chatbot has streamlined our operations significantly. Excellent support and maintenance.",
                rating: 5,
              },
              {
                name: "Vikash Singh",
                role: "Manager, LogiFlow",
                content:
                  "The inventory management software they developed has reduced our operational costs by 30%. Highly recommend their services.",
                rating: 5,
              },
              {
                name: "Neha Agarwal",
                role: "Co-founder, StartupHub",
                content:
                  "From concept to deployment, dedigitallabs provided excellent service. The web application they built exceeded our expectations.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-gray-200 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 italic leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-700 px-4 py-2"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help you build the perfect software
              solution for your business
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team is ready to understand your requirements and deliver
                  a solution that drives your business forward. Contact us today
                  for a free consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Email
                    </div>
                    <div className="text-gray-600">hello@dedigitallabs.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Phone
                    </div>
                    <div className="text-gray-600">+91 9582179766</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      Office Address
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      Office No. 104 First Floor, D-Mall,
                      <br />
                      Pitampura, New Delhi - 110034
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h4 className="text-gray-900 font-semibold mb-4">
                  Our Expertise
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Web Development
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Mobile Apps
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI Calling Agents
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI Chatbots
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    CRM Solutions
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Custom Software
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-gray-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 text-xl">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      First Name *
                    </label>
                    <Input
                      placeholder="John"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Last Name *
                    </label>
                    <Input
                      placeholder="Doe"
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 9876543210"
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Service Required *
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none">
                    <option value="">Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI Calling Agents</option>
                    <option>AI Chatbots</option>
                    <option>CRM Solutions</option>
                    <option>Custom Software</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Project Details *
                  </label>
                  <Textarea
                    placeholder="Please describe your project requirements, timeline, and any specific features you need..."
                    className="border-gray-300 focus:border-blue-500 min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Send Message
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">dedigitallabs</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional software development company specializing in custom
                solutions with AI integration.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    AI Calling Agents
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    AI Chatbots
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Custom Software
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="hover:text-white transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <div className="font-medium text-white">Email</div>
                  <div>hello@dedigitallabs.com</div>
                </div>
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div>+91 9582179766</div>
                </div>
                <div>
                  <div className="font-medium text-white">Address</div>
                  <div className="text-sm leading-relaxed">
                    Office No. 104 First Floor, D-Mall,
                    <br />
                    Pitampura, New Delhi - 110034
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} dedigitallabs. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Professional Software Development Services
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

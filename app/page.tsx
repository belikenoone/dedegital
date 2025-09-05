import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Github,
  Globe,
  Lightbulb,
  Linkedin,
  MapPin,
  MessageSquare,
  Phone,
  Settings,
  Smartphone,
  Star,
  Target,
  Twitter,
  Users,
  Megaphone,
  PenTool,
  Search,
  Mail,
  TrendingUp,
  UserCheck,
  BarChart3,
  Heart,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ui/contact-form";

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
                De Digital Labs
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
                href="#clients"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Clients
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
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="bg-blue-100 text-blue-700 px-6 py-2 text-sm font-medium"
            >
              We Help Brands Grow & Scale
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Brand's Digital
              </span>
              <span className="block text-gray-700">Presence</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From custom software and AI integration to comprehensive branding,
              digital marketing, and strategic growth solutions - we're your
              complete digital transformation partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                <Link href="#contact" className="flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Projects Delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600 mt-1">
                  Client Retention
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Support</div>
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
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From software development to brand strategy and growth marketing -
              we provide end-to-end solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Software Development */}
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
                  technologies
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
                  Intelligent voice agents for customer service and sales
                  automation
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
                  Smart chatbots for instant customer support and engagement
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
                  Native and cross-platform mobile apps for iOS and Android
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
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <PenTool className="w-7 h-7 text-rose-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  Branding & Identity
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Complete brand strategy, visual identity, and brand guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Brand Strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Logo Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Brand Guidelines
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <Megaphone className="w-7 h-7 text-amber-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  Digital Marketing
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Performance marketing across paid, organic, and social
                  channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Paid Campaigns
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Social Media
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Email Marketing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Search className="w-7 h-7 text-emerald-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  SEO & Content
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Technical SEO, content strategy, and organic growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Technical SEO
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Content Strategy
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Analytics & Reporting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <UserCheck className="w-7 h-7 text-teal-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  Staffing Solutions
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Talent acquisition and staffing services for growing
                  businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Talent Sourcing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Screening & Interviews
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Contract & Permanent
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-7 h-7 text-indigo-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  Market Research
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Data-driven insights and market analysis for strategic
                  decisions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Market Analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Consumer Insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Competitive Research
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-pink-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  Influencer Marketing
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Strategic influencer partnerships and campaign management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Influencer Sourcing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Campaign Management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Performance Tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <Settings className="w-7 h-7 text-violet-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">
                  Custom Software
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Tailored software solutions for unique business requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                    Custom Development
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

      {/* Clients Section */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-gray-200 text-gray-700 px-4 py-2"
            >
              Trusted Partners
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Brands That Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've had the privilege of working with industry leaders and
              innovative companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {[
              "Symmetrical Global",
              "IGR Reality",
              "Kent",
              "Microsoft",
              "HP",
              "Trivedi Pharma",
              "Natraj Events",
              "Sunhygen Solar",
            ].map((client, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-md transition-all duration-300 text-center bg-white p-6"
              >
                <div className="text-lg font-semibold text-gray-900">
                  {client}
                </div>
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
                About De Digital Labs
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Your Complete Digital Transformation Partner
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                dedigitallabs is a full-service digital agency that combines
                technical expertise with creative strategy. We specialize in
                software development, AI integration, branding, digital
                marketing, and comprehensive business growth solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to enterprise clients, we've helped hundreds of
                brands transform their digital presence and achieve measurable
                growth through innovative technology and strategic marketing.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">7+</div>
                  <div className="text-gray-600 mt-1">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">150+</div>
                  <div className="text-gray-600 mt-1">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
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
                    Why Choose De Digital Labs?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Target className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          End-to-End Solutions
                        </h4>
                        <p className="text-gray-600 text-sm">
                          From strategy to execution, we handle everything
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Proven Results
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Track record of delivering measurable growth
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-purple-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Expert Team
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Skilled professionals across all disciplines
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
              Client Success Stories
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their digital presence
              with our solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "CEO, Symmetrical Global",
                content:
                  "dedigitallabs transformed our entire digital strategy. From rebranding to AI integration, they delivered exceptional results that increased our market presence by 200%.",
                rating: 5,
              },
              {
                name: "Priya Sharma",
                role: "Marketing Director, Kent",
                content:
                  "Their influencer marketing campaigns and SEO strategies helped us reach new audiences. Our online engagement increased by 150% within 6 months.",
                rating: 5,
              },
              {
                name: "Amit Patel",
                role: "Founder, IGR Reality",
                content:
                  "The custom CRM and AI chatbot they built streamlined our operations. Customer response time improved by 80% and lead conversion doubled.",
                rating: 5,
              },
              {
                name: "Sneha Gupta",
                role: "Operations Manager, Trivedi Pharma",
                content:
                  "Professional team that understood our pharmaceutical industry needs. The compliance-ready software and digital marketing exceeded expectations.",
                rating: 5,
              },
              {
                name: "Vikash Singh",
                role: "Director, Sunhygen Solar",
                content:
                  "From brand identity to lead generation systems, dedigitallabs helped us establish a strong market presence in the renewable energy sector.",
                rating: 5,
              },
              {
                name: "Neha Agarwal",
                role: "Event Manager, Natraj Events",
                content:
                  "Their event management software and social media marketing strategies helped us scale our business and improve client satisfaction significantly.",
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
              Let's Connect
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your digital
              transformation goals and drive measurable growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Let's Build Something Amazing Together
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team is ready to understand your vision and deliver
                  solutions that drive real business results. Contact us today
                  for a free consultation and strategy session.
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
                  {[
                    "Software Development",
                    "AI Integration",
                    "Branding & Identity",
                    "Digital Marketing",
                    "SEO & Content",
                    "Influencer Marketing",
                    "Market Research",
                    "Staffing Solutions",
                  ].map((item) => (
                    <div className="flex items-center" key={item}>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <ContactForm />
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
                <span className="text-2xl font-bold">De Digital Labs</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your complete digital transformation partner. From software
                development to brand strategy and growth marketing.
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
                {[
                  "Web Development",
                  "AI Integration",
                  "Mobile Apps",
                  "Branding & Identity",
                  "Digital Marketing",
                  "SEO & Content",
                  "Influencer Marketing",
                  "Market Research",
                  "Staffing Solutions",
                ].map((service) => (
                  <li key={service}>
                    <Link
                      href="#services"
                      className="hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
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
                    href="#clients"
                    className="hover:text-white transition-colors"
                  >
                    Our Clients
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
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="hover:text-white transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} De Digital Labs. All rights
                reserved.
              </p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Transforming brands through technology and strategy
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

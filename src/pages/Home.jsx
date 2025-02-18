import { Link } from 'react-router-dom';
import { Code, Briefcase, GraduationCap, Cloud, Bot, ShoppingBag, Mail, MapPin, Phone, Building2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texto e información */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Hola, soy Leandro González 👋
              <span className="block text-blue-600 dark:text-blue-400 mt-2">
                Ingeniero de Sistemas
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Soy una persona proactiva, organizada y responsable, con excelentes relaciones interpersonales.
              Especializado en desarrollo web, cloud computing e inteligencia artificial.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Ver Proyectos
                <Code className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Contactar
                <Mail className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Información de contacto */}
            <div className="pt-6 space-y-2 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>3113309402</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:lego8605@gmail.com" className="hover:text-blue-600">
                  lego8605@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Cll 20 Nro. 18-20, oficina 302, Dosquebradas, Risaralda</span>
              </div>
            </div>
          </div>

          {/* Imagen de perfil */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 bg-gradient-to-b from-blue-100 to-white dark:from-gray-800 dark:to-gray-900">
              <img
                src="/src/assets/images/profile.png"
                alt="Oscar Leandro González"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Badges flotantes */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-transform">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-transform">
              <Cloud className="h-6 w-6" />
            </div>
            {/* Decoración adicional */}
            <div className="absolute -z-10 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-3xl rounded-full transform -translate-y-1/2 translate-x-1/4"></div>
          </div>
        </div>
      </section>

      {/* Experiencia Laboral */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 rounded-2xl">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experiencia Laboral</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Media Manager */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <ShoppingBag className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Social Media Manager</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Eventos y hostal Finca la luminosa</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Ago 2019 - Presente</p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Manejo de campañas publicitarias con herramientas ADS</li>
                    <li>• Análisis de métricas de campañas para el cumplimiento de los objetivos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Asesor de Medios Tecnológicos */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Building2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Asesor de Medios Tecnológicos</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">Academia de seguridad colombolatina</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Ene 2022 - 2023</p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Implementación de CCTV y accesos biométricos</li>
                    <li>• Implementación de sistemas de seguridad electrónica en tiempo real</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías Especializadas */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Tecnologías Especializadas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Cloud className="h-8 w-8 text-blue-600" />,
              title: "Cloud Computing",
              skills: ["AWS Lambda", "EC2", "S3", "Google Cloud Platform"]
            },
            {
              icon: <Bot className="h-8 w-8 text-purple-600" />,
              title: "Inteligencia Artificial",
              skills: ["APIs de LLM", "Implementación de soluciones IA"]
            },
            {
              icon: <ShoppingBag className="h-8 w-8 text-green-600" />,
              title: "E-commerce & Marketing",
              skills: ["Plataformas de pago", "Herramientas ADS", "Marketing Digital"]
            }
          ].map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Educación */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 rounded-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Educación</h2>
        <div className="max-w-3xl mx-auto space-y-6 px-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Maestría en Transformación Digital</h3>
            <p className="text-gray-600 dark:text-gray-300">Corporación Universitaria Uniminuto - En curso (2025)</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Ingeniería de Sistemas</h3>
            <p className="text-gray-600 dark:text-gray-300">Universidad Libre Seccional Pereira - 2024</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2 dark:text-white">Certificaciones</h3>
            <div className="space-y-2">
              <p className="text-gray-600 dark:text-gray-300">• Curso de Manejo de AWS cloud - Amazon Institute, 2023</p>
              <p className="text-gray-600 dark:text-gray-300">• Curso de Manejo de Redes Cisco CCNA - Amazon Institute, 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
          ¿Interesado en colaborar en un proyecto?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Estoy siempre abierto a nuevas oportunidades y desafíos. 
          Contáctame para discutir cómo podemos trabajar juntos.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Contactar
          <Mail className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
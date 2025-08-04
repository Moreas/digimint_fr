import { FaRobot, FaChartLine, FaCogs } from 'react-icons/fa'

const services = [
  {
    icon: <FaRobot className="w-12 h-12 text-yellow-400" />,
    title: "Custom AI Agents",
    description: "Tailored AI solutions that automate and optimize your business processes, saving time and resources."
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-yellow-400" />,
    title: "Data Analytics",
    description: "Advanced analytics and insights to help you make data-driven decisions and grow your business."
  },
  {
    icon: <FaCogs className="w-12 h-12 text-yellow-400" />,
    title: "Process Automation",
    description: "Streamline your operations with intelligent automation solutions designed for SMBs."
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Innovative AI Offerings for SMBs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 
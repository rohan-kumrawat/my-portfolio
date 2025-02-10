import { motion } from 'framer-motion'
import { 
  SiJavascript, 
  SiReact, 
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiCloudinary,
  SiPostman,
  SiGit,
  SiNpm,
  SiMysql,
  SiHtml5,
  SiCss3
} from 'react-icons/si'

export default function Skills() {
  const skills = [
    {
      category: "Frontend Stack",
      icon: "💻",
      tech: [
        { icon: <SiHtml5 className="w-full h-full"/>, name: "HTML5", level: "90%" },
        { icon: <SiCss3 className="w-full h-full"/>,  name: "CSS3", level:  "90%"},
        { icon: <SiReact className="w-full h-full"/>, name: "React", level: "80%" },
        { icon: <SiAngular className="w-full h-full"/>, name: "Angular", level: "90%" },
        { icon: <SiJavascript className="w-full h-full"/>, name: "JavaScript", level: "90%" },
        { icon: <SiTypescript className="w-full h-full"/>, name: "TypeScript", level: "90%" },
        { icon: <SiTailwindcss className="w-full h-full"/>, name: "Tailwind CSS", level: "85%" }
      ]
    },
    {
      category: "Backend Stack",
      icon: "⚙️",
      tech: [
        { icon: <SiNodedotjs className="w-full h-full"/>, name: "Node.js", level: "90%" },
        { icon: <SiExpress className="w-full h-full"/>, name: "Express", level: "90%" },
        { icon: <SiMongodb className="w-full h-full"/>, name: "MongoDB", level: "90%" },
        { icon: <SiMysql className="w-full h-full"/>, name: "MySQL", level: "75%" }
      ]
    },
    {
      category: "Tools & DevOps",
      icon: "🛠️",
      tech: [
        { icon: <SiDocker className="w-full h-full"/>, name: "Docker", level: "Learning" },
        { icon: <SiCloudinary className="w-full h-full"/>, name: "Cloudinary", level: "90%" },
        { icon: <SiGit className="w-full h-full"/>, name: "Git", level: "85%" },
        { icon: <SiPostman className="w-full h-full"/>, name: "Postman", level: "90%" },
        { icon: <SiNpm className="w-full h-full"/>, name: "NPM", level: "90%" }


      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-8 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-primary transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{stack.icon}</span>
                <h3 className="text-xl font-semibold text-primary">
                  {stack.category}
                </h3>
              </div>

              <div className="space-y-5">
                {stack.tech.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 text-primary">
                        {skill.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-primary text-sm">
                            {skill.level}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                            style={{ width: skill.level }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
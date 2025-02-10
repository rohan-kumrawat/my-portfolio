const projects = [
  {
    title: "RoomBuddy",
    description: "A platform where users can find and interact with potential roommates.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "https://your-roombuddy-link.com",
  },
  {
    title: "AI Resume Builder",
    description: "An AI-powered resume builder with job-matching functionality.",
    technologies: ["React", "OpenAI API", "MongoDB", "Cloudinary"],
    link: "https://your-ai-resume-link.com",
  },
  {
    title: "Real-Time Polling App",
    description: "Create polls and get real-time results with graphical representation.",
    technologies: ["MERN", "Socket.io", "Tailwind CSS"],
    link: "https://your-polling-app-link.com",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-all duration-300" id="projects">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">My Projects</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Some of the work I have done.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:scale-105 
              transition-transform duration-300 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

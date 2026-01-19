import { FaArrowRight } from "react-icons/fa";

const projects = [
    {
        title: "FinTech Dashboard Overhaul",
        category: "Web Development",
        imageColor: "bg-blue-500", // Placeholder for image
    },
    {
        title: "HealthCare Mobile App",
        category: "Mobile Application",
        imageColor: "bg-green-500",
    },
    {
        title: "E-Commerce Platform Scaling",
        category: "Cloud Infrastructure",
        imageColor: "bg-purple-500",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white mb-4">
                            Featured Case Studies
                        </h2>
                        <p className="text-lg text-zinc-500 dark:text-zinc-400">
                            Explore how we've helped innovative companies transform their businesses with custom software solutions.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-full bg-[#242424] px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-[#333] dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                        View All Projects
                    </a>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className={`aspect-[4/3] overflow-hidden rounded-2xl ${project.imageColor} relative mb-4`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                {/* Placeholder for Project Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-50 text-2xl">
                                    PROJECT {index + 1}
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">{project.category}</p>
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:underline">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="h-10 w-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 dark:border-zinc-700 dark:text-white group-hover:bg-[#242424] group-hover:text-white group-hover:border-[#242424] transition-colors dark:group-hover:bg-white dark:group-hover:text-black">
                                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

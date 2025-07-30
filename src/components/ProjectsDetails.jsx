import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
import ProjectData from "../components/project_data.json";
import { motion, AnimatePresence } from "framer-motion";


const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const project = ProjectData.find(
        (p) => p.id.trim().toLowerCase() === id.trim().toLowerCase()
    );

    if (!project)
        return <div className="text-center text-red-500 text-xl mt-10">Project not found</div>;

    return (
        <div className="p-8 max-w-3xl mx-auto mt-15 mb-20 relative">
            <h1 className="text-4xl text-center font-bold text-blue-700 mb-7">{project.name}</h1>
            <img
                src={project.image}
                alt={project.name}
                className="my-4 w-full rounded-lg shadow-lg"
            />
            <p className="mb-6 p-3 text-lg text-center text-blue-400">{project.description}</p>

            <span className="text-lg border border-amber-600 p-2 rounded-2xl shadow-2xl">
                Project Links Below
            </span>

            <h2 className="text-2xl font-semibold mt-8 mb-2">Full Description</h2>
            <ul className="list-disc list-inside space-y-2">
                {project.Full_description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>

            <div className="flex flex-col md:flex-row gap-5">
                {/* Technology List */}
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold mt-8 mb-2">Technology Used:</h2>
                    <ul className="list-disc list-inside space-y-1 mb-6">
                        {project.Technologies.map((tech, index) => (
                            <li className="border rounded-2xl p-2" key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {/* Desktop View Button */}
                {project.link && (
                    <button
                        onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                        className=" glow-hover mt-6 bg-blue-600 text-white px-6 py-2  rounded hover:bg-blue-700 transition cursor-pointer"
                    >
                        View in Desktop
                    </button>
                )}

                {/* Mobile View Button to open modal */}
                <button
                    onClick={() => setShowModal(true)}
                    className="glow-hover mt-6 bg-blue-600 text-white px-7 py-2  rounded hover:bg-blue-700 transition cursor-pointer"
                >
                    View in Mobile
                </button>

                {/* Go Back Button */}
                <button
                    onClick={() => navigate("/Projects")}
                    className="glow-hover inline-block mt-6 bg-blue-600 text-white px-13 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                >
                    Go Back
                </button>
            </div>
            {/* Modal Popup for view in mobile START*/}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-opacity-60 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="flex flex-col justify-center items-center p-6 bg-gray-900 border border-blue-200 rounded-4xl shadow-[0_0_25px_5px_rgba(59,130,246,0.7)] relative"
                            initial={{ scale: 0.5, y: -50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.5, y: -50, opacity: 0 }}
                            transition={{
                                type: "spring",
                                duration: 0.9,
                                ease: "easeInOut"
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="glow-hover absolute border border-red-900 bg-red-900 -top-1 rounded-2xl right-1 text-white text-3xl -mx-2 -my-2 p-1 cursor-pointer"
                            >
                                ×
                            </button>

                            <h2 className="text-blue-500 text-lg mb-2 text-center">
                                Scan This QR code to VIEW IN MOBILE
                            </h2>
                            <img
                                src={project.qr}
                                className="my-4 w-40 h-40 shadow-lg"
                                alt="QR Code"
                            />
                            <p className="text-white text-xl mb-2 text-center">{project.name}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Modal Popup for view in mobile END */}
        </div>
    );
};

export default ProjectDetails;

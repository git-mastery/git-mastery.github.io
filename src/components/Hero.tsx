import { motion } from "framer-motion";
import { ArrowRight, GitBranch, GraduationCap, User } from "lucide-react";
import { useCallback, useState } from "react";

interface LinkButtonProps {
  text: string;
  url: string;
  color: string;
}

function LinkButton({
  text,
  url,
  color,
}: LinkButtonProps) {
  return (
    <a href={url} className={`px-4 py-2 bg-${color}-600 inline-flex flex-row gap-2 items-center text-lg text-white rounded-xl hover:bg-${color}-700`}>
      {text} <ArrowRight />
    </a>
  )
}

export function Hero() {
  const [role, setRole] = useState<"educator" | "student" | undefined>();

  const renderActions = useCallback(() => {
    if (role === "student") {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
        >
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">First Time Here?</h3>
            <p className="mb-4 text-lg text-gray-500">
              Start your very first tour and get started!
            </p>
            <LinkButton text="Start" url="https://git-mastery.github.io/learning-lab/tours/my-folder-my-repo/initializing-local-repo/" color="blue" />
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Returning Student</h3>
            <p className="mb-4 text-lg text-gray-500">
              View and continue your tours.
            </p>
            <LinkButton text="All Tours" url="https://git-mastery.github.io/learning-lab/tours" color="blue" />
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
            <p className="mb-4 text-lg text-gray-500">
              Track your completed exercises.
            </p>
            <LinkButton text="View Progress" url="https://git-mastery.github.io/progress-dashboard" color="blue" />
          </div>
        </motion.div>
      );
    }

    if (role === "educator") {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
        >
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Setup Class Tracker</h3>
            <p className="mb-4 text-lg text-gray-500">
              Create a class and manage students’ progress.
            </p>
            <LinkButton text="Setup Tracker" url="https://github.com/git-mastery" color="green" />
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Explore Exercises</h3>
            <p className="mb-4 text-lg text-gray-500">
              View available exercises for your students to attempt.
            </p>
            <LinkButton text="View Exercises" url="https://git-mastery.github.io/problems-directory" color="green" />
          </div>
        </motion.div>
      );
    }

    return null;
  }, [role]);

  return (
    <div className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col gap-6 mx-auto justify-center items-center lg:w-3/4 w-full">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-white p-4 rounded-full shadow-md">
              <GitBranch size={48} className="text-blue-800" />
            </div>
            <h1 className="font-bold text-5xl md:text-6xl text-center">Git-Mastery</h1>
          </div>
          <p className="text-xl text-neutral-700 text-center">
            Master Git through hands-on, guided tours with real-world scenario exercises.
            <br />
            Learn, practice, and receive feedback on your journey to Git proficiency.
          </p>
          <div className="flex justify-center gap-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 text-xl rounded-xl border ${role === "student" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border-gray-300"
                } hover:shadow`}
              onClick={() => setRole("student")}
            >
              <User className="h-5 w-5" /> I'm a Student
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 text-xl rounded-xl border ${role === "educator" ? "bg-green-600 text-white" : "bg-white text-gray-700 border-gray-300"
                } hover:shadow`}
              onClick={() => setRole("educator")}
            >
              <GraduationCap className="h-5 w-5" /> I'm an Educator
            </button>
          </div>
          {renderActions()}
        </div>
      </div>
    </div>
  )
}

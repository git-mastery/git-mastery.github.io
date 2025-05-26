import { ArrowRight, GitBranch } from "lucide-react";

function IncompleteTour() {
  return (
    <div className="flex flex-col gap-1 items-center justify-center bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200 hover:shadow-lg transition duration-300">
      <p className="text-xl text-neutral-600 text-center font-bold">Work in Progress</p>
      <p className="text-lg text-neutral-400 text-center">Come back soon!</p>
    </div>
  )
}

interface TourProps {
  category: string;
  title: string;
  description: string;
  lessonCount: number;
  exerciseCount: number;
  tourLink: string;
  color: string;
}

function Tour({
  category,
  title,
  description,
  lessonCount,
  exerciseCount,
  tourLink,
  color
}: TourProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-neutral-200 hover:shadow-lg transition duration-300">
      <div className={`h-3 bg-${color}-800`}></div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <GitBranch size={20} className={`text-${color}-800`} />
          <p className={`text-sm font-medium text-${color}-800`}>{category}</p>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <div className="flex items-center gap-1 text-sm text-neutral-500 mb-4">
          <span>{lessonCount} Lessons</span>
          <span>•</span>
          <span>{exerciseCount} Exercises</span>
        </div>
        <a href={tourLink} className={`text-${color}-800 font-semibold flex items-center gap-1 hover:underline`}>
          Start Tour <ArrowRight size={16} />
        </a>
      </div>
    </div>
  )
}

export function AvailableTours() {
  return (
    <div className="py-16 px-8 bg-neutral-50" id="tours">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Available Tours</h2>
        <p className="text-center text-lg text-neutral-600 mb-12">Choose your learning path</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Tour category="Fundamentals" title="Recording the History of a Folder" description="Learn the core concepts of Git and how to create snapshots of your projects." lessonCount={3} exerciseCount={2} tourLink="https://git-mastery.github.io/learning-lab/tours/my-folder-my-repo/initializing-local-repo/" color="blue" />
          <IncompleteTour />
          <IncompleteTour />
        </div>

        <div className="flex justify-center mt-10">
          <a href="https://git-mastery.github.io/learning-lab/tours" className="px-6 py-3 font-semibold bg-neutral-200 text-neutral-800 rounded-full hover:bg-neutral-200 transition duration-300">
            View All Tours
          </a>
        </div>
      </div>
    </div>

  )
}

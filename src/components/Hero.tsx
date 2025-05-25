import { ArrowRight, GitBranch } from "lucide-react";

export function Hero() {
  return (
    <div className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col gap-6 mx-auto justify-center items-center lg:w-3/4 w-full">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="bg-white p-4 rounded-full shadow-md">
              <GitBranch size={48} className="text-blue-800" />
            </div>
            <h1 className="font-bold text-5xl md:text-6xl text-center">git-mastery</h1>
          </div>
          <p className="text-xl text-neutral-700 text-center">
            Master Git through hands-on, guided Tours with real-world scenarios.
            Learn, practice, and receive feedback on your journey to Git proficiency.
          </p>
          <div className="flex md:flex-row flex-col gap-4 mt-4">
            <a className="px-8 py-3 font-bold bg-blue-800 text-white text-lg rounded-full border-2 border-blue-800 hover:bg-blue-900 transition duration-300 flex items-center gap-2 justify-center"
              href="https://git-mastery.github.io/learning-lab">
              Start Learning <ArrowRight size={18} />
            </a>
            <a className="px-8 py-3 font-bold bg-transparent text-blue-800 text-lg rounded-full border-2 border-blue-800 hover:bg-blue-50 transition duration-300 flex items-center gap-2 justify-center"
              href="#structure">
              How It Works
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

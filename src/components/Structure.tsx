import { BookOpen, Code } from "lucide-react";

export function Structure() {
  return (
    <div className="py-16 px-8" id="structure">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">How Git-Mastery Works</h2>
        <p className="text-center text-lg text-neutral-600 mb-12">Our unique learning structure helps you build real-world Git skills</p>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="flex-1 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-800 rounded-full p-2">
                <BookOpen size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Tours</h3>
            </div>
            <p className="mb-4">Collections of lessons working toward practical goals like "creating project snapshots" or "collaborating with a team."</p>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <p className="font-semibold">Examples:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Recording the History of a Folder</li>
                <li>Backing up a Repo on the Cloud</li>
                <li>Branching Locally</li>
              </ul>
            </div>
          </div>

          <div className="flex-1 bg-emerald-50 rounded-xl p-6 border border-emerald-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-600 rounded-full p-2">
                <Code size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Lessons</h3>
            </div>
            <p className="mb-4">Modular content within each tour that teaches specific Git concepts and builds toward the tour's goal.</p>
            <div className="bg-white p-4 rounded-lg border border-emerald-100">
              <p className="font-semibold">Examples:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Saving a Snapshot</li>
                <li>Creating a Remote Repo</li>
                <li>Resolving Merge Conflicts</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-6">Each Lesson Contains:</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 border border-neutral-200 hover:shadow-lg transition duration-300">
            <h4 className="font-bold text-lg mb-2 text-blue-800">Hands-On Practice</h4>
            <p>Local-first exercises where you can immediately apply the concepts you've learned in the lesson.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 border border-neutral-200 hover:shadow-lg transition duration-300">
            <h4 className="font-bold text-lg mb-2 text-emerald-600">Problem Sets</h4>
            <p>Real-world scenarios to solve on your local machine, with remote feedback to improve your skills.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 border border-neutral-200 hover:shadow-lg transition duration-300">
            <h4 className="font-bold text-lg mb-2 text-purple-700">Detours</h4>
            <p>Optional content that explores related topics to enhance your understanding of Git concepts.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

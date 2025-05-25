export function CallToAction() {
  return (
    <div className="py-16 px-8 bg-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to master Git?</h2>
        <p className="text-lg text-blue-100 mb-8">Start your guided journey to Git proficiency today with our free, hands-on learning platform.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a className="px-8 py-3 font-bold bg-white text-blue-800 text-lg rounded-full hover:bg-blue-50 transition duration-300"
            href="https://git-mastery.github.io/learning-lab/setup">
            Setup git-mastery
          </a>
          <a className="px-8 py-3 font-bold bg-transparent text-white text-lg rounded-full border-2 border-white hover:bg-blue-900 transition duration-300"
            href="https://github.com/git-mastery">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

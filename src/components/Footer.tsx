export function Footer() {
  return (
    <footer className="py-8 px-8 border-t border-t-neutral-200 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Git-Mastery was made with ❤️ by the National University of Singapore's School of Computing</p>
        <div className="flex gap-6">
          <a className="text-blue-800 hover:underline" href="https://github.com/git-mastery">GitHub</a>
          <a className="text-blue-800 hover:underline" href="https://github.com/orgs/git-mastery/discussions">Discussions</a>
          <a className="text-blue-800 hover:underline" href="https://github.com/git-mastery/contribution-guide/blob/main/CONTRIBUTING.md">Contribute</a>
        </div>
      </div>
    </footer>
  )
}

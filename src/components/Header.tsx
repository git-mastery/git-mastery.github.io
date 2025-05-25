export function Header() {
  return (
    <header className="sticky top-0 bg-white flex justify-between items-center py-6 px-8 border-b border-neutral-200 z-10" >
      <p className="font-bold text-2xl">git-mastery</p>
      <nav className="hidden md:flex flex-row gap-8">
        <a className="text-sm font-semibold text-neutral-600 hover:text-blue-800" href="#tours">Tours</a>
        <a className="text-sm font-semibold text-neutral-600 hover:text-blue-800" href="#structure">How It Works</a>
        <a className="text-sm font-semibold text-neutral-600 hover:text-blue-800" href="#problems">Problem Sets</a>
        <a className="text-sm font-semibold text-neutral-600 hover:text-blue-800" href="#faq">FAQ</a>
      </nav>
    </header >
  )
}

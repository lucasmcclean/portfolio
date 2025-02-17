import Navbar from '../components/Navbar';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <main className="px-24">
        <div className="h-svh flex flex-col justify-center">
          <h1 className="text-7xl font-semibold">Lucas McClean</h1>
          <p className="text-5xl font-mono">Software Engineer</p>
        </div>
      </main>
    </>
  )
}

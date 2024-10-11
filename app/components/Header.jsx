import Link from "next/link"

const Header = () => {
  return (
    <header className="header">
    <div className="container">
        <div className="logo">
            <Link href="/" className="font-bold">Traversy Media</Link>
        </div>
        <div className="links flex justify-center">
            <Link href="/about">About</Link>
            <Link href="/about/team">Our Team</Link>
            <Link href="/code/repos">Code</Link>
        </div>
    </div>

    </header>
  )
}

export default Header
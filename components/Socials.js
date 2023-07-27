// Links
import Link from "next/link";

// Icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiLinkedinLine,
  RiGithubLine
} from "react-icons/ri";

const Socials = () => {

  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.facebook.com/nicoippoliti01'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
      </Link>
      <Link href={'https://www.instagram.com/nico_ippoliti/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={'https://twitter.com/nico_ippoliti'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/nicolasippoliti/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
      <Link href={'https://github.com/NicolasIppoliti'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
    </div>
)};

export default Socials;

import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="w-12 md:w-16 h-12 md:h-16 mr-2 md:mr-4 relative">
            <Image
                src={profileImg}
                alt="Think Law logo"
                className="object-contain"
                sizes="20vw"
                priority
            />
        </div>
        <span className="font-bold dark:font-semibold text-lg md:text-xl">Think Law</span>
    </Link>
  )
}

export default Logo

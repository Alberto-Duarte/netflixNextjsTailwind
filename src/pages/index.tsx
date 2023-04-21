import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-center">
      <h1>Netflix</h1>
      <p className="text-white text-[3.5vw]">Who's watching?</p>
      <div className="flex flex-row gap-3 mt-6">
        {
          USERS.map((user, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <Link href={user.link} className="w-[128px] h-[128px] rounded-xl overflow-hidden bg-white">
                <Image src={user.avatar} width={128} height={128} alt=""/>
              </Link>
              <p className="text-gray-400 text-xs">{user.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

const USERS = [
  {
    name:'Alberto',
    link:'/browse',
    avatar:'https://avatars.dicebear.com/api/male/124.svg'
  },
  {
    name:'Kids',
    link:'/',
    avatar:'https://avatars.dicebear.com/api/male/122.svg'
  },
  {
    name:'Add profile',
    link:'/',
    avatar:'https://avatars.dicebear.com/api/female/12.svg'
    // icon:'...'
  }
]
import { Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function Profile(){
    return (
        <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <Image
              src="/child_luffy.jpg"
              alt="My Avatar"
              objectFit="contain"
              width={120}
              height={120}
              className="rounded-full border-4 border-primary/20"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl font-bold mb-2">Reza Muttaqien</h1>
            <p className="text-xl text-muted-foreground mb-4">Full Stack Developer & Mobile App Specialist</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Jakarta, ID
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                taqien01@gmail.com
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl">
              Passionate developer with 5+ years of experience creating innovative mobile and web applications.
              Specialized in Flutter, Android and also Next.js. Love turning ideas into reality through
              clean, efficient code.
            </p>
          </div>
        </div>
      </div>
    )
}
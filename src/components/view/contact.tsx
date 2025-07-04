import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Contact() {
    return (
        <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold mb-4">{`Let's Work Together`}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {
                    `I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to
            collaborate or just say hello!`
                }
            </p>
            <div className="flex justify-center gap-4">
                <Button asChild>
                    <Link href="mailto:taqien01@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Get In Touch
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="https://github.com/taqien01" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View GitHub
                    </Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="https://www.linkedin.com/in/taqien01/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        Linkedin
                    </Link>
                </Button>
            </div>
        </div>
    )
}
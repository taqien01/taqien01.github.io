import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/project_data";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectComponent(){
    return (
        <>
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
          <p className="text-muted-foreground">A collection of my recent work and side projects</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {
                  project.links && (
                    <div className="flex flex-wrap gap-2">
                  {project.links.playstore && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.links.playstore} target="_blank" rel="noopener noreferrer">
                        <Smartphone className="w-4 h-4 mr-1" />
                        Play Store
                      </Link>
                    </Button>
                  )}
                  {project.links.website && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.links.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Website
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                </div>
                  )
                }
              </CardContent>
            </Card>
          ))}
        </div>
        </>
    )
}
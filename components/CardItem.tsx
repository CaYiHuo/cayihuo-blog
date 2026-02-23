import Image from "next/image"
import Link from "next/link"
import { SquareArrowOutUpRight } from "lucide-react"

function CardItem({ title, icon, description, link }: { title: string, icon?: string, description: string, link?: string }) {
    return (
        <div className="flex flex-col items-center justify-center text-center w-full border border-border rounded-md p-6 transition-all duration-300 hover:shadow-md hover:translate-y-1 group min-h-45">
            <div className="flex items-center justify-center gap-2 mb-4">
               {icon && (
                    <div>
                        <Image 
                            src={icon as string} 
                            alt={title} 
                            width={48} 
                            height={48} 
                            className="w-12 h-12 rounded-full border-2 border-primary/20 transition-transform duration-300 group-hover:rotate-6"
                        />
                    </div>
                )
                }
                <span className="text-text-primary font-bold text-lg group-hover:text-primary transition-colors duration-300">{title}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6 grow">{description}</p>
            {link && (
                <Link 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary text-sm hover:underline transition-colors duration-300 mt-auto flex items-center gap-1"
            >
                <SquareArrowOutUpRight className="w-4 h-4 inline-block" />
                去访问
            </Link>
            )
        }
        </div>
    )
}

export default CardItem
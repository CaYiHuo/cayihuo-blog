'use client'
import Nav from "@/components/Nav"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Atom } from "lucide-react"

function NotFound() {
    return (
        <div>
            <Nav />
            <NotFoundContent />
        </div>
    )
}


function NotFoundContent() {

  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-10 min-h-[60vh] text-center">
            <Atom className="w-16 h-16 text-primary mb-4" />
        <h1 className="text-4xl font-bold text-primary">这里什么都没有哦～</h1>
        <p className="text-lg text-primary mt-4">没关系，我们一起回家吧～</p>

        <div className="flex justify-center items-center">
            <Button className="mt-10" variant="outline" asChild>
                <Link href="/">回家～</Link>
            </Button>
        </div>
    </div>
  )
}
 
export default NotFound
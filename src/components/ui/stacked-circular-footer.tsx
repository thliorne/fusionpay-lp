import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

function StackedCircularFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("bg-background py-12", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-primary/10 p-8">
          <Icons.logo className="icon-class w-6" />
          </div>
          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-primary">Home</a>
            <a href="#" className="hover:text-primary">About</a>
            <a href="#" className="hover:text-primary">Services</a>
            <a href="#" className="hover:text-primary">Products</a>
            <a href="#" className="hover:text-primary">Contact</a>
          </nav>
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }

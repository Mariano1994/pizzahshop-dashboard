import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Building, ChevronDown, LogOut } from "lucide-react"


const AccountMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 select-none">
          Pizza Shop
          <ChevronDown/>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
            <span>Mariano Capiliku</span>
            <span className="text-xs font-normal text-muted-foreground ">marianocapiliku@gmail.com</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator/>
        <DropdownMenuItem >
          <Building className="w-4 h-4 mr-1"/>
            <span>Perfil da loja</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="w-4 h-4 mr-1"/>
            <span>Sair</span>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AccountMenu
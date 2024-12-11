import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Building, ChevronDown, LogOut } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { getUserProfile } from "../api/getUserProfile"
import { getManagedRestaurant } from "../api/getManagedRestaurant"
import { Skeleton } from "./ui/skeleton"


const AccountMenu = () => {

  const {data: profile, isLoading: isuserProfileLoading} = useQuery({
    queryKey:['profile'],
    queryFn: getUserProfile,

  })

  const {data: restaurantInfo, isLoading: isRestaurantLoading} = useQuery(
    {
      queryKey: ['restaurant'],
      queryFn: getManagedRestaurant
    }
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
     
      <Button variant="outline" className="flex items-center gap-2 select-none">
        {isRestaurantLoading ? <Skeleton className="h- w-40"/> : restaurantInfo?.name}
        <ChevronDown/>
   </Button>
      
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
           {isuserProfileLoading ? 
           (<div className="space-y-1.5">
            <Skeleton className="h-4 w-32"/>
            <Skeleton className="h-3 w-24"/>
           </div>) : (
            <>
              <span>{profile?.name}</span>
              <span className="text-xs font-normal text-muted-foreground ">{profile?.email}</span>
           </>)
           }
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
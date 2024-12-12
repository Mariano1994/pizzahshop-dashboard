import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Building, ChevronDown, LogOut } from "lucide-react"
import {useMutation, useQuery } from "@tanstack/react-query"
import { getUserProfile } from "../api/getUserProfile"
import { getManagedRestaurant } from "../api/getManagedRestaurant"
import { Skeleton } from "./ui/skeleton"
import { Dialog } from "./ui/dialog"
import { DialogTrigger } from "@radix-ui/react-dialog"
import StoregeProfileModal from "./StoregeProfileModal"
import { SignOut } from "../api/Sign-out"
import { useNavigate } from "react-router"



const AccountMenu = () => {
  const navigate = useNavigate()

  const {data: profile, isLoading: isuserProfileLoading} = useQuery({
    queryKey:['profile'],
    queryFn: getUserProfile,

  })

  const {data: restaurantInfo, isLoading: isRestaurantLoading} = useQuery(
    {
      queryKey: ['restaurant'],
      queryFn: getManagedRestaurant,
      staleTime: Infinity
    }
  )

  const {mutateAsync: signOut, isPending: isSiginOut} = useMutation({
      mutationFn: SignOut,
      onSuccess: ()=> {
       navigate('/sign-in', {replace: true})
      }
  })

  return (
  <Dialog>

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
        <DialogTrigger asChild>
          <DropdownMenuItem >
          <Building className="w-4 h-4 mr-1"/>
            <span>Perfil da loja</span>
          </DropdownMenuItem>
        </DialogTrigger>

        <DropdownMenuItem asChild className="text-rose-500 dark:text-rose-400">
          <button className="w-full" onClick={()=> signOut()}disabled={isSiginOut}>
            <LogOut className="w-4 h-4 mr-1"/>
            <span>Sair</span>
          </button>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>

    <StoregeProfileModal/>
  </Dialog>
  )
}

export default AccountMenu
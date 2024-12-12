import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { DialogClose, DialogContent, DialogFooter, DialogHeader } from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getManagedRestaurant } from "../api/getManagedRestaurant"
import { useForm } from "react-hook-form"
import z from 'zod'
import { Loader } from "lucide-react"
import { toast } from "sonner"
import { updateProfile } from "../api/updateProfile"
import { queryClient } from "../lib/react-query"


const UpdateStoreInfoSchema = z.object({
  name: z.string(),
  description: z.string()
})

type UpdateStoreInfoProps = z.infer<typeof UpdateStoreInfoSchema>


const StoregeProfileModal = () => {
  const {data: restaurantInfo} = useQuery(
    {
      queryKey: ['restaurant'],
      queryFn: getManagedRestaurant,
      staleTime: Infinity
    }
  )

  const {mutateAsync: updateRestaurantProfile} = useMutation({
    mutationFn: updateProfile,
    //This function is used to reflet all the updated values in real time on ui
    onSuccess(_, {name, description}) {
      const cached = queryClient.getQueryData(['restaurant'])
      
      if(cached) {
        queryClient.setQueryData(['restaurant'], {
          ...cached,
          name,
          description
        })
      }
    } 
  })
  const {handleSubmit, register, reset, formState:{isSubmitting}} = useForm<UpdateStoreInfoProps>({
      values: {
      name: restaurantInfo?.name as string,
      description: restaurantInfo?.description as string
    }
  })


  async function uploadStoreInfo(data: UpdateStoreInfoProps) {

    try {
      await updateRestaurantProfile({
        name: data.name,
        description: data.description
      })
      reset()
      toast.success('Perfil atualizado com sucesso')
    } catch (error) {
      console.log(error)
      toast.error('Não foi possível atualizar as informações')
    }
  
  }

  return (
  <DialogContent>
  <DialogHeader>
    <DialogTitle> Perfil da loja</DialogTitle>
    <DialogDescription> Atualize as informacoes do seu estabelecimento visiveis ao seu cliente</DialogDescription>
  </DialogHeader>
  
  
  <form onSubmit={handleSubmit(uploadStoreInfo)}>
    <div className="space-y-4 gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right"           htmlFor="name">
          Nome
      </Label>
      <Input id="name" className="col-span-3" {...register('name')} />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label className="text-right"           htmlFor="description">
          Descrição
      </Label>
      <Textarea className="col-span-3 resize-none" id="description" {...register('description')} />
      </div>

    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant='ghost' type="button">
          Cancelar
        </Button>
      </DialogClose>
      <Button variant='success' type="submit" disabled={isSubmitting}>
        {isSubmitting? <Loader className=" animate-spin"/> : "Atualizar"}
      </Button>
    </DialogFooter>
  </form>
  
</DialogContent>
)
}

export default StoregeProfileModal
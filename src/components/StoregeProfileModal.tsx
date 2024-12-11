import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { DialogContent, DialogFooter, DialogHeader } from "./ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useQuery } from "@tanstack/react-query"
import { getManagedRestaurant } from "../api/getManagedRestaurant"
import { useForm } from "react-hook-form"
import z from 'zod'
import { Loader } from "lucide-react"


const UploadStoreInfoSchema = z.object({
  name: z.string(),
  description: z.string()
})


const StoregeProfileModal = () => {
  const {data: restaurantInfo} = useQuery(
    {
      queryKey: ['restaurant'],
      queryFn: getManagedRestaurant
    }
  )

type UploadStoreInfoProps = z.infer<typeof UploadStoreInfoSchema>

  const {handleSubmit, register, formState:{isSubmitting}} = useForm<UploadStoreInfoProps>({
      values: {
      name: restaurantInfo?.name as string,
      description: restaurantInfo?.description as string
    }
  })




  async function uploadStoreInfo(data: UploadStoreInfoProps) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
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
      <Button variant='ghost' type="button">
        Cancelar
      </Button>
      <Button variant='success' type="submit" disabled={isSubmitting}>
        {isSubmitting? <Loader className=" animate-spin"/> : "Atualizar"}
      </Button>
    </DialogFooter>
  </form>
  
</DialogContent>
)
}

export default StoregeProfileModal
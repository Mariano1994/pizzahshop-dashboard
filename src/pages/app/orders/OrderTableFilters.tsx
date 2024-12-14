
import { Search, X } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue  } from "../../../components/ui/select"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from "react-router"


const orderFilterSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional()
})

type orderFilterType = z.infer<typeof orderFilterSchema>

const OrderTableFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')


  const {handleSubmit, register, control, reset, formState:{isSubmitting} } = useForm<orderFilterType>({
    resolver: zodResolver(orderFilterSchema),
    defaultValues: {
      orderId: orderId ?? '',
      customerName: customerName ?? '',
      status: status ?? 'all'
    }
  })

  // Function to filter results
  async function handleFilter(data: orderFilterType){
    setSearchParams( state => {
      if(data.orderId) {
        state.set('orderId', data.orderId)
      } else {
        state.delete('orderId')
      }

      if(data.customerName) {
        state.set('customerName', data.customerName)
      } else {
        state.delete('customerName')
      }

      if(data.status) {
        state.set('status', data.status)
      } else {
        state.delete('status')
      }

      state.set('page','1')

      return state

    }
      
    )
  }

  //Function to remove filters
  const handleRemoveFilters = () => {
    setSearchParams(state => {
      state.delete('orderId')
      state.delete('customerName')
      state.delete('status')

      state.set('page', '1')

      reset({
        orderId: '',
        customerName: '',
        status: 'all'
      })

      
      return state
      
    })
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit(handleFilter)}>
    <span  className="text-sm font-semibold">Filtros:</span>
    <Input className="h-8 w-auto" placeholder="ID do pedido" {...register('orderId')}/>
    <Input className="h-8 w-[320px]" placeholder="Nome do Cliente" {...register('customerName')}/>
    <Controller 
       name="status"
       control={control}
       render={({field: {name, onChange, value}})=> {
        return (
          <Select defaultValue="all" name={name} onValueChange={onChange} value={value} >
          <SelectTrigger className="h-8 w-[180px]">
            <SelectValue/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos status</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="canceled">Cancelado</SelectItem>
            <SelectItem value="processing">Em preparo</SelectItem>
            <SelectItem value="delivering">Em entrega</SelectItem>
            <SelectItem value="delivered">Entregue</SelectItem>
          </SelectContent>
        </Select>
        )
       }}
       />

    <Button type="submit" variant="secondary" size="xs" disabled={isSubmitting}>
      <Search className="mr-1 h-4 w-4"/>
      Filtrar resultados
    </Button>

    <Button type="button" variant="outline" size="xs" onClick={handleRemoveFilters}>
      <X className="mr-1 h-4 w-4"/>
      Remover filtros
    </Button>
  </form>
  )
}
export default OrderTableFilters
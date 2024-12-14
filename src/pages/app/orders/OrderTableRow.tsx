import { ArrowRight,Search, X } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { TableCell, TableRow } from "../../../components/ui/table"
import { Dialog, DialogTrigger } from "../../../components/ui/dialog"
import {formatDistanceToNow} from 'date-fns'
import {pt} from 'date-fns/locale'
import OrderDetails from "./OrderDetails"
import OrderStatus from "./OrdersStatus"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { cancelOder } from "../../../api/cancelOrder"
import { queryClient } from "../../../lib/react-query"
import { GetOrdersResponse } from "../../../api/getOrder"


interface OrderProps {
  order: {
    orderId: string;
    createdAt: Date,
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }   
}

const OrderTableRow = ({order}: OrderProps) => {

  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const {mutateAsync: cancelOrderFn} = useMutation({
    mutationFn: cancelOder,
    async onSuccess(_, {orderId} ) {
      const ordersListCached = queryClient.getQueriesData<GetOrdersResponse>({
        queryKey: ['result']
      })

      ordersListCached.forEach(([cachedKey, cahedData])=> {
        if(!cahedData) return

        queryClient.setQueryData<GetOrdersResponse>(cachedKey, {
          ...cahedData,
          orders: cahedData.orders.map(order => (
            order.orderId === orderId ? 
             {...order, status: 'canceled' }
             : order
          ))
        })
      })
    }
  })

  return (
    <TableRow>
    <TableCell>
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogTrigger asChild>
          <Button variant='outline' size="xs">
            <Search className="h-3 w-3"/>
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </DialogTrigger>
        <OrderDetails open={isDetailsOpen} orderId={order.orderId}/>
      </Dialog>
    </TableCell>
    <TableCell className="font-mono text-xs font-medium"> {order.orderId}</TableCell>
    <TableCell className="text-muted-foreground">{formatDistanceToNow(order.createdAt, {
      locale: pt,
      addSuffix: true
    })}</TableCell>
    <TableCell> 
     <OrderStatus status={order.status}/>
    </TableCell>
    <TableCell className="font-medium"> {order.customerName}</TableCell>
    <TableCell className="font-medium"> {(order.total / 100).toLocaleString('pt-pt', {
      style: "currency",
      currency: 'AOA'
    })}</TableCell>
    <TableCell className="font-mono">
    <Button variant='outline' size='xs'>
        <ArrowRight className="h-3 w-3 mr-1"/>
        Aprovar
      </Button>
    </TableCell>
    <TableCell className="font-mono">
      <Button variant='ghost' size='xs' disabled={!['pending', 'processing'].includes(order.status)} onClick={()=> cancelOrderFn({orderId: order.orderId})}>
        <X className="h-3 w-3 mr-1"/>
        Cancelar
      </Button>
    </TableCell>
  </TableRow>
  )
}
export default OrderTableRow
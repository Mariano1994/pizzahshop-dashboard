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
import { approveOrder } from "../../../api/approveOrder"
import { dispatchOrder } from "../../../api/dispatchOrder"


type statusType = "pending" | "canceled" | "processing" | "delivering" | "delivered";
interface OrderProps {
  order: {
    orderId: string;
    createdAt: Date,
    status: statusType
    customerName: string;
    total: number;
  }   
}

const OrderTableRow = ({order}: OrderProps) => {

  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const updateOrderStatusOnCache = (orderId: string, nextStatus: statusType) => {
    const ordersListCached = queryClient.getQueriesData<GetOrdersResponse>({
      queryKey: ['result']
    })

    ordersListCached.forEach(([cachedKey, cahedData])=> {
      if(!cahedData) return

      queryClient.setQueryData<GetOrdersResponse>(cachedKey, {
        ...cahedData,
        orders: cahedData.orders.map(order => (
          order.orderId === orderId ? 
           {...order, status: nextStatus }
           : order
        ))
      })
    })
  }

  const {mutateAsync: cancelOrderFn, isPending: isCancelling} = useMutation({
    mutationFn: cancelOder,
    async onSuccess(_, {orderId} ) {
      updateOrderStatusOnCache(orderId, 'canceled')
    }
  })

  const {mutateAsync:approveOrderFn, isPending: isApproving} = useMutation({
    mutationFn: approveOrder,
    async onSuccess(_, {orderId}) {
      updateOrderStatusOnCache(orderId, 'processing')
    }
  })

  const {mutateAsync: dispatchOrderFn, isPending: isDelivering  } = useMutation({
    mutationFn: dispatchOrder,
    async onSuccess(_, {orderId}) {
      updateOrderStatusOnCache(orderId, 'delivering')
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
      {
        order.status === 'pending' && (
          <Button 
            variant='outline' size='xs' 
            onClick={()=>approveOrderFn({orderId: order.orderId})}
            disabled={isApproving}
          >
              <ArrowRight className="h-3 w-3 mr-1"/>
              Aprovar
          </Button>
        )
      }

      {
        order.status === "processing" && (
          <Button 
            variant='outline' size='xs' 
            onClick={()=> dispatchOrderFn({orderId: order.orderId})}
            disabled={isDelivering}
          >
              <ArrowRight className="h-3 w-3 mr-1"/>
               Entregar
          </Button>
        )
      }

      {
        order.status === 'delivering' && (
          <Button variant='outline' size='xs'>
              <ArrowRight className="h-3 w-3 mr-1"/>
              Entregue
          </Button>
        )
      }
      
    </TableCell>
    <TableCell className="font-mono">
      <Button 
        variant='ghost' size='xs' 
        disabled={!['pending', 'processing'].includes(order.status) || isCancelling} 
        onClick={()=> cancelOrderFn({orderId: order.orderId})}
      >
        <X className="h-3 w-3 mr-1"/>
        Cancelar
      </Button>
    </TableCell>
  </TableRow>
  )
}
export default OrderTableRow
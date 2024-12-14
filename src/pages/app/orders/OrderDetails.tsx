import { DialogTitle } from "@radix-ui/react-dialog"
import { DialogContent, DialogDescription, DialogHeader } from "../../../components/ui/dialog"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { useQuery } from "@tanstack/react-query"
import { getOrderDetails } from "../../../api/gerOrderDetails"
import OrderStatus from "./OrdersStatus"
import { formatDistanceToNow } from "date-fns"
import {pt} from 'date-fns/locale'

interface OrderDetailsProps {
  orderId : string
  open: boolean
}

const OrderDetails = ({orderId, open}:OrderDetailsProps) => {
  const {data: orderDetails} = useQuery({
    queryKey: ["order", orderId],
    queryFn: ()=> getOrderDetails({orderId}),
    enabled: open
  })


  return (
   <DialogContent>
    <DialogHeader>
      <DialogTitle>Pedido: {orderId}</DialogTitle>
      <DialogDescription>Detalhes do pedido</DialogDescription>
    </DialogHeader>

    <div className="space-y-6">
      {
        orderDetails && 
        <>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <OrderStatus status={orderDetails?.status}/>  
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end"> 
                {orderDetails.customer.name}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end"> 
                {orderDetails.customer.phone ?? 'Não informado'}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end"> 
               {orderDetails?.customer.email}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Realizado ha</TableCell>
              
                 <TableCell className="flex justify-end"> 
                  {formatDistanceToNow(orderDetails.createdAt, {
                      locale: pt,
                      addSuffix: true
                      }
                    )}
                 </TableCell>
            
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Qtd</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableHeader>
          <TableBody>
              {orderDetails && orderDetails.orderItems.map(order => (
                    <TableRow key={order.id}>
                    <TableCell>{order.product.name}</TableCell>
                    <TableCell className="text-right">{order.quantity}</TableCell>
                    <TableCell className="text-right">{(order.priceInCents / 100).toLocaleString('pt', {
                      style: 'currency',
                      currency: 'AOA'
                    })}</TableCell>
                    <TableCell className="text-right">{(order.priceInCents * order.quantity / 100).toLocaleString('pt', {
                      style: 'currency',
                      currency: 'AOA'
                    })}</TableCell>
                  </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">{(orderDetails?.totalInCents / 100).toLocaleString('pt', {
                style: 'currency',
                currency: 'AOA'
              })}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        
        </>
      }
    
    </div>
   </DialogContent>
  )
}

export default OrderDetails
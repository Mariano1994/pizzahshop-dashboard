import { ArrowRight,Search, X } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { TableCell, TableRow } from "../../../components/ui/table"
import { Dialog, DialogTrigger } from "../../../components/ui/dialog"
import OrderDetails from "./OrderDetails"
import OrderStatus from "./OrdersStatus"

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

  return (
    <TableRow>
    <TableCell>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline' size="xs">
            <Search className="h-3 w-3"/>
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </DialogTrigger>
        <OrderDetails/>
      </Dialog>
    </TableCell>
    <TableCell className="font-mono text-xs font-medium"> {order.orderId}</TableCell>
    <TableCell className="text-muted-foreground"> há 15 minutos</TableCell>
    <TableCell> 
     <OrderStatus status={order.status}/>
    </TableCell>
    <TableCell className="font-medium"> {order.customerName}</TableCell>
    <TableCell className="font-medium"> {order.total.toLocaleString('pt-pt', {
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
      <Button variant='ghost' size='xs'>
        <X className="h-3 w-3 mr-1"/>
        Cancelar
      </Button>
    </TableCell>
  </TableRow>
  )
}
export default OrderTableRow
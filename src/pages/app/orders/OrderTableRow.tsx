import { ArrowRight, Search, X } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { TableCell, TableRow } from "../../../components/ui/table"

const OrderTableRow = () => {
  return (
    <TableRow>
    <TableCell>
      <Button variant='outline' size="xs">
        <Search className="h-3 w-3"/>
        <span className="sr-only">Detalhes do pedido</span>
      </Button>
    </TableCell>
    <TableCell className="font-mono text-xs font-medium"> 8498t5knvdk</TableCell>
    <TableCell className="text-muted-foreground"> há 15 minutos</TableCell>
    <TableCell className="font-mono"> 
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-slate-400"/>
        <span className="font-medium text-muted-foreground">Pendente</span>
      </div>
    </TableCell>
    <TableCell className="font-medium"> Mariano Artur Molar Capiliku</TableCell>
    <TableCell className="font-medium"> 1.589 kz</TableCell>
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
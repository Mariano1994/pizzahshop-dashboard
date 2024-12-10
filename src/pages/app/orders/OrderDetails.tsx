import { DialogTitle } from "@radix-ui/react-dialog"
import { DialogContent, DialogDescription, DialogHeader } from "../../../components/ui/dialog"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "../../../components/ui/table"

const OrderDetails = () => {
  return (
   <DialogContent>
    <DialogHeader>
      <DialogTitle>Pedido: fnfef8375</DialogTitle>
      <DialogDescription>Detalhes do pedido</DialogDescription>
    </DialogHeader>

    <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end"> 
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"/>
                  <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end"> 
                Mariano Artur Molar Capiliku
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end"> 
                945781642
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end"> 
                marianocapiliku@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Realizado ha</TableCell>
              <TableCell className="flex justify-end"> 
                15 minutos
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
            <TableRow>
              <TableCell>Pizza Pepperoni Familiar</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">123</TableCell>
              <TableCell className="text-right">246</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza Mussarela Single</TableCell>
              <TableCell className="text-right">4</TableCell>
              <TableCell className="text-right">1200 kz</TableCell>
              <TableCell className="text-right">4600 kz</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">5012 kz</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
    </div>
   </DialogContent>
  )
}

export default OrderDetails
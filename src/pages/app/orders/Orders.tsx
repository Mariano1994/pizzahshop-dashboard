import { Helmet } from "react-helmet-async"
import { Input } from "../../../components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { Button } from "../../../components/ui/button"
import { ArrowRight, Search, X } from "lucide-react"

const Orders = () => {
  return (
   <>
    <Helmet title="Pedidos"/>
    <div className=" flex flex-col gap-4">
       <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
    </div>
    <div className=" space-y-2.5 mt-4">
        <form className="flex items-center gap-2">
          <span  className="text-sm font-semibold">Filtros:</span>
          <Input className="h-8 w-[320px]" placeholder="Nome do Cliente"/>
        </form>

        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Indentifacador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
             {Array.from({length: 5}).map((_, i)=> {
              return (
                <TableRow key={i}>
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
             })}
            </TableBody>
          </Table>
        </div>
    </div>
   
   </>
  )
}
export default Orders
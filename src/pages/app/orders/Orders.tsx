import { Helmet } from "react-helmet-async"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import OrderTableRow from "./OrderTableRow"
import OrderTableFilters from "./OrderTableFilters"

const Orders = () => {
  return (
   <>
    <Helmet title="Pedidos"/>
    <div className=" flex flex-col gap-4">
       <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
    </div>
    <div className=" space-y-2.5 mt-4">
      <OrderTableFilters/>
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
                <OrderTableRow key={i}/>
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
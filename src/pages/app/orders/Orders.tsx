import { Helmet } from "react-helmet-async"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import OrderTableRow from "./OrderTableRow"
import OrderTableFilters from "./OrderTableFilters"
import Pagination from "../../../components/Pagination"
import { useQuery } from "@tanstack/react-query"
import { getOrders } from "../../../api/getOrder"
import { useSearchParams } from "react-router"
import { z } from "zod"
import OrdersTableSkeleton from "./OrdersTableSkeleton"





const Orders = () => {
  const [seachParams, setSearchParams] = useSearchParams()

  const orderId = seachParams.get('orderId')
  const customerName= seachParams.get('customerName')
  const status = seachParams.get('status')


  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(seachParams.get('page')?? 1)



  const {data: result, isLoading: isLoadingOrdes } = useQuery({
    queryKey:['result', pageIndex, orderId, status, customerName],
    queryFn: ()=> getOrders({pageIndex, customerName, orderId, status: status === 'all'? null :status}),
  })

  const handlePaginate = (pageIndex: number) => {
    setSearchParams(prev => {
      prev.set('page', (pageIndex + 1).toString())
      return prev
    })
  }

  
  return (
   <>
    <Helmet title="Pedidos"/>
    <div className=" flex flexcol gap-4">
       <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
       <div className=" space-y-2.5">
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
            {isLoadingOrdes && <OrdersTableSkeleton/>}

             {result && result.orders.map( order =>   <OrderTableRow key={order.orderId} order={order}/>)}
            </TableBody>
          </Table>
        </div>
        {result && <Pagination 
                  onPageChange={handlePaginate}
                  pageIndex={result.meta.pageIndex} 
                  totalCount={result.meta.totalCount} 
                  perPage={result.meta.perPage}/>}
    </div>
    </div>
   </>
  )
}
export default Orders
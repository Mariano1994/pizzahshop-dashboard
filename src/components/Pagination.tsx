import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "./ui/button"

interface PaginationProps {
   pageIndex: number,
   totalCount: number,
   perPage: number,
   onPageChange: (pageIndex: number)=> Promise<void> | void
}

const Pagination = ({pageIndex, totalCount, perPage,  onPageChange}:PaginationProps) => {
  const pages = Math.ceil(totalCount / perPage) || 1



  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium"> Página {pageIndex + 1} de {pages}</div>
        <div className="flex items-center gap-2">
          <Button disabled={pageIndex === 0} onClick={()=> onPageChange(0)} variant='outline' className="h-8 w-8 p-0">
            <ChevronsLeft className="h-4 w-4"/>
            <span className="sr-only">Ir para a primeira página</span>
          </Button>

          <Button disabled={pageIndex === 0} onClick={()=> onPageChange(pageIndex - 1)} variant='outline' className="h-8 w-8 p-0 disabled:cursor-not-allowed">
            <ChevronLeft className="h-4 w-4"/>
            <span className="sr-only">Ir para página anterior</span>
          </Button>

          <Button disabled={pages <= pageIndex + 1} onClick={()=> onPageChange(pageIndex + 1)} variant='outline' className="h-8 w-8 p-0 disabled:hover:cursor-not-allowed">
            <ChevronRight className="h-4 w-4"/>
            <span className="sr-only">Ir para próxima página</span>
          </Button>

          <Button disabled={pages <= pageIndex + 1} onClick={()=> onPageChange(pages -1)} variant='outline' className="h-8 w-8 p-0 disabled:hover:cursor-not-allowed">
            <ChevronsRight className="h-4 w-4"/>
            <span className="sr-only">Ir para a última página</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Pagination
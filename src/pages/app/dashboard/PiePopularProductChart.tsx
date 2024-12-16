
import {Label, Pie, PieChart } from "recharts"
import {
  CardContent,
} from "../../../components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from  "../../../components/ui/chart"
import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { GetPopularProducts } from "../../../api/getPopularProduts"


const chartConfig = {
  visitors: {
    label: "Popular Products",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const COLORS = ['hsl(var(--chart-1))',"hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"]



export function PiePopularProductChart() {

  const {data: PopularProducts} =useQuery({
    queryKey:  ['metrics', 'popular-produts' ],
    queryFn: GetPopularProducts
  })

  
  const PopularProductData = useMemo(()=> {
    return PopularProducts?.map((product, index)=> {
      return { 
        product: product.product,
        amount: product.amount,
        fill: COLORS[index]
      }
    })

  }, [PopularProducts])

  const TotalUnitSold = useMemo(() => {
    return PopularProductData?.reduce((acc, curr) => acc + curr.amount, 0)
  }, [PopularProductData])


  return (

    <>
     <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
          >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              />
            <Pie
              data={PopularProductData}
              dataKey="amount"
              nameKey="product"
              innerRadius={60}
              strokeWidth={5}
              >
                
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                          >
                          {TotalUnitSold?.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                          >
                          U. vendidas
                        </tspan>
                      </text>
                    )
                  }
                }}
                />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      
      </> 
  )
  
}
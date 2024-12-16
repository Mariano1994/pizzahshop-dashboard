
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
// import { useQuery } from "@tanstack/react-query"
// import { GetPopularProducts } from "../../../api/getPopularProduts"

const chartData = [
  { product: "Pepperoni", amount: 30, fill: "var(--color-chrome)" },
  { product: "Mussarela", amount: 50, fill: "var(--color-safari)" },
  { product: "Maguerita", amount: 80, fill: "var(--color-firefox)" },
  { product: "4 Estacoes", amount: 30, fill: "var(--color-edge)" },
  { product: "other", amount: 90, fill: "var(--color-other)" },
]
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



export function PiePopularProductChart() {

  // const {data: PopularProducts} =useQuery({
  //   queryKey:  ['metrics', 'popular-produts'],
  //   queryFn: GetPopularProducts
  // })

  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.amount, 0)
  }, [])




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
              data={chartData}
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
                          {totalVisitors.toLocaleString()}
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
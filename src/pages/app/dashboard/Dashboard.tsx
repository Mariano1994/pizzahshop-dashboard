import { Helmet } from "react-helmet-async"
import MonthRevenueCard from "./MonthRevenueCard"
import MonthOrdersAmountCard from "./MonthOrdersAmountCard"
import DayOrdersAmountCard from "./DayOrdersAmountCard"
import MonthCanceledOrdersAmount from "./MonthCanceledOrdersAmount"
import { RevenueChart } from "./RevenueChart"
import PopularProductsChart from "./PopularProductsChart"


const Dashboard = ()=> {
  return (
   <>
   <Helmet title="Dashboard"/>
  <div className="flex flex-col gap-4">
    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
    <div className="grid grid-cols-4 gap-4">
      <MonthRevenueCard/>
      <MonthOrdersAmountCard/>
      <DayOrdersAmountCard/>
      <MonthCanceledOrdersAmount/>
    </div>
    <div className="grid grid-cols-9 gap-4">
    <RevenueChart/>
    <PopularProductsChart/>
    </div>
  </div>
   </>
  )
}

export default Dashboard
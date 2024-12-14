import { api } from "../lib/axios";

interface getOrderDetailsProps {
  orderId: string
}

interface GetOrderDetailsResponse {
  id: string;
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  createdAt: string,
  totalInCents: number;
  customer: {
      name: string;
      email: string;
      phone: string | null;
  };
  orderItems: {
    id: string,
    priceInCents: number,
    quantity: number,
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({orderId}: getOrderDetailsProps){
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)
  return response.data
}
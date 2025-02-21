import { api } from "../lib/axios";

export interface GetOrdersParams {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string | undefined;
    createdAt: Date | undefined,
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered"; 
    customerName: string | undefined;
    total: number | undefined;
}[];
meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
};
}

export async function getOrders({pageIndex, customerName, status,orderId}: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      orderId,
      customerName,
      status
    }
  })

  return response.data
}
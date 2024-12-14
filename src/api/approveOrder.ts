import { api } from "../lib/axios"

interface ApproveOrderPops {
  orderId: string
}

export async function approveOrder({orderId}:ApproveOrderPops) {
  await api.patch(`/orders/${orderId}/approve`)
}
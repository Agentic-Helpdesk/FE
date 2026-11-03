import client from '../../../shared/api/client'
import type { Ticket } from '../types'

export const ticketApi = {
  getAll: () => client.get<Ticket[]>('/tickets'),
  getById: (id: string) => client.get<Ticket>(`/tickets/${id}`),
}

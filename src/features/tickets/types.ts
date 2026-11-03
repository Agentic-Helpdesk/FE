export interface Ticket {
  id: string
  title: string
  status: 'open' | 'in_progress' | 'closed'
  createdAt: string
}

export function formatCurrency (amount: number | string) {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN'
  }).format(Number(amount))
}

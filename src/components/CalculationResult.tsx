'use client'

export const CalculationResult = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <p className="font-medium text-2xl">Valor atual da conta</p>

      <p className="font-bold text-[48px]">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(0)}
      </p>

      <p className="text-sm">Valor não inclui taxas, multas ou juros adicionais que podem ser cobrados</p>
    </div>
  )
}
const CURRENCT_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "GBP", style: "currency"
})

export function formatCurrency(number: number) {
    return CURRENCT_FORMATTER.format(number)
}
export type Amount = number;

type StripeDetails = {
    last4: string
}

type PaypalDetails = {
    email: string
}

type RazorpayDetails = {
    vpa: string
}

export type PayDetails = StripeDetails | PaypalDetails | RazorpayDetails;

export type PayResponse = {
    status: 'success' | 'failed'
    gateway: 'stripe' | 'paypal' | 'razorpay'
}
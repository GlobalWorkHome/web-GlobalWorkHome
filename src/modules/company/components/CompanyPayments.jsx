"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import InputPro from "../../ui/InputPro"
import { ButtonPro } from "../../ui/ButtonPro"
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/Table"

export default function CompanyPayments () {
  const t = useTranslations("company.payments")
  const [amount, setAmount] = useState("")
  const [paymentStatus, setPaymentStatus] = useState("")
  const [paymentHistory, setPaymentHistory] = useState([
    { id: 1, date: "2023-05-01", amount: 100, status: "completed" },
    { id: 2, date: "2023-04-01", amount: 100, status: "completed" },
    { id: 3, date: "2023-03-01", amount: 100, status: "completed" },
  ])

  const handlePayment = async (e) => {
    e.preventDefault()

    try {
      const newPayment = {
        id: paymentHistory.length + 1,
        date: new Date().toLocaleDateString(),
        amount: Number.parseFloat(amount),
        status: "completed",
      }

      setPaymentHistory([newPayment, ...paymentHistory])
      setAmount("")
      setPaymentStatus("completed")
    } catch (error) {
      setPaymentStatus("failed")
      console.error("Payment failed:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("makePayment")}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePayment} className="space-y-4">
              <InputPro
                type="number"
                placeholder={t("amount")}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <ButtonPro type="submit" className="w-full">
                {t("payButton")}
              </ButtonPro>
            </form>
            {paymentStatus && (
              <div className={`mt-4 text-lg ${paymentStatus === "completed" ? "text-green-500" : "text-red-500"}`}>
                {paymentStatus === "completed" ? t("status.completed") : t("status.failed")}
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>{t("history")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("date")}</TableHead>
                  <TableHead>{t("amount")}</TableHead>
                  <TableHead>{t("status")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>${payment.amount}</TableCell>
                    <TableCell>{t(`status.${payment.status}`)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}



// 'use client'

// import { useTranslations } from 'next-intl'
// import { useState } from 'react'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

// export default function CompanyPayments() {
//   const t = useTranslations('company1.payments')
//   const [amount, setAmount] = useState('')
//   const [paymentStatus, setPaymentStatus] = useState('')
//   const [paymentHistory, setPaymentHistory] = useState([
//     { id: 1, date: '2023-05-01', amount: 100, status: 'completed' },
//     { id: 2, date: '2023-04-01', amount: 100, status: 'completed' },
//     { id: 3, date: '2023-03-01', amount: 100, status: 'completed' },
//   ])

//   const handlePayment = async (e) => {
//     e.preventDefault()

//     // Simulating the payment process
//     try {
//       const newPayment = {
//         id: paymentHistory.length + 1,
//         date: new Date().toLocaleDateString(),
//         amount: parseFloat(amount),
//         status: 'completed', // Simulate payment completion
//       }

//       // Update payment history with the new payment
//       setPaymentHistory([newPayment, ...paymentHistory])
//       setAmount('')
//       setPaymentStatus('completed') // Simulate successful payment status
//     } catch (error) {
//       setPaymentStatus('failed') // In case of an error during payment
//       console.error('Payment failed:', error)
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>{t('makePayment')}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handlePayment} className="space-y-4">
//               <Input
//                 type="number"
//                 placeholder={t('amount')}
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//               />
//               <Button type="submit" className="w-full">
//                 {t('payButton')}
//               </Button>
//             </form>
//             {paymentStatus && (
//               <div className={`mt-4 text-lg ${paymentStatus === 'completed' ? 'text-green-500' : 'text-red-500'}`}>
//                 {paymentStatus === 'completed' ? t('status.completed') : t('status.failed')}
//               </div>
//             )}
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>{t('history')}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>{t('date')}</TableHead>
//                   <TableHead>{t('amount')}</TableHead>
//                   <TableHead>{t('status')}</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {paymentHistory.map((payment) => (
//                   <TableRow key={payment.id}>
//                     <TableCell>{payment.date}</TableCell>
//                     <TableCell>${payment.amount}</TableCell>
//                     <TableCell>{t(`status.${payment.status}`)}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

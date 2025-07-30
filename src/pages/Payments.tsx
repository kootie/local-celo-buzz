import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Wallet, ArrowRight, CheckCircle, Clock, XCircle } from "lucide-react"

const mockTransactions = [
  {
    id: "TXN-001",
    amount: "₵25.99",
    customer: "john.doe@email.com",
    status: "Completed",
    timestamp: "2024-01-15 14:30:22",
    celoHash: "0x742d35cc6ba47a2c03234bba..."
  },
  {
    id: "TXN-002", 
    amount: "₵42.50",
    customer: "jane.smith@email.com",
    status: "Pending",
    timestamp: "2024-01-15 14:28:15",
    celoHash: "0x983d24bb5ca32d1b92384ccd..."
  },
  {
    id: "TXN-003",
    amount: "₵18.75",
    customer: "mike.johnson@email.com", 
    status: "Completed",
    timestamp: "2024-01-15 14:25:08",
    celoHash: "0x123a45ef6bd78c9e03456fff..."
  },
  {
    id: "TXN-004",
    amount: "₵33.20",
    customer: "sarah.wilson@email.com",
    status: "Failed",
    timestamp: "2024-01-15 14:20:45",
    celoHash: "0x456b78cd9ae01f2g34567aaa..."
  }
]

const Payments = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-600" />
      case "Failed":
        return <XCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Completed":
        return "default"
      case "Pending":
        return "secondary"
      case "Failed":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Payment Management</h1>
        <p className="text-muted-foreground">Monitor Celo payments and transactions</p>
      </div>

      {/* Payment Setup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wallet className="h-5 w-5 mr-2" />
            Celo Wallet Integration
          </CardTitle>
          <CardDescription>Configure your restaurant's Celo wallet for payments</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="wallet-address">Celo Wallet Address</Label>
              <Input 
                id="wallet-address" 
                placeholder="0x742d35cc6ba47a2c03234bba8d0f1c0e02b2..."
                value="0x742d35cc6ba47a2c03234bba8d0f1c0e02b2846f"
                readOnly
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mintpay-key">MintPay API Key</Label>
              <Input 
                id="mintpay-key" 
                type="password"
                placeholder="••••••••••••••••••••••••••••••••"
                value="mp_test_key_1234567890abcdef"
                readOnly
              />
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Connected to Celo Network</span>
            </div>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
              Active
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <CreditCard className="h-5 w-5 mr-2" />
            Recent Transactions
          </CardTitle>
          <CardDescription>Latest Celo payments received</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTransactions.map((transaction, index) => (
              <div key={transaction.id}>
                <div className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(transaction.status)}
                    <div>
                      <p className="font-medium">{transaction.id}</p>
                      <p className="text-sm text-muted-foreground">{transaction.customer}</p>
                      <p className="text-xs text-muted-foreground font-mono">
                        {transaction.celoHash}
                      </p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="font-bold text-lg">{transaction.amount}</p>
                    <Badge variant={getStatusVariant(transaction.status)}>
                      {transaction.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{transaction.timestamp}</p>
                  </div>
                </div>
                {index < mockTransactions.length - 1 && <Separator />}
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t">
            <Button variant="outline" className="w-full">
              View All Transactions
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Payments
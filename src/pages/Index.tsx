
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wallet, Store, MapPin, Star } from "lucide-react"
import { Link } from "react-router-dom"

const Index = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <Badge variant="outline" className="px-4 py-2 text-sm">
            🌍 Powered by Celo Blockchain
          </Badge>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Celo Restaurant Payments
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect restaurants and customers through seamless cryptocurrency payments using Celo's stable digital currency
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg">
            <Link to="/restaurants">
              Find Restaurants <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/dashboard">Restaurant Portal</Link>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Wallet className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Fast Payments</CardTitle>
            <CardDescription>
              Send and receive payments instantly using Celo's stablecoin technology
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Store className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Restaurant Network</CardTitle>
            <CardDescription>
              Connect with local restaurants that accept Celo payments for food orders
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Location-Based</CardTitle>
            <CardDescription>
              Find nearby restaurants and view their menus with real-time availability
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Stats Section */}
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Platform Statistics</CardTitle>
          <CardDescription>Growing network of restaurants and satisfied customers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Partner Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">₵125,000+</div>
              <div className="text-sm text-muted-foreground">Total Payments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2,500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.8</div>
              <div className="text-sm text-muted-foreground flex items-center justify-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                Average Rating
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Index;

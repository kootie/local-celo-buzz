import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Clock } from "lucide-react"

const mockRestaurants = [
  {
    id: 1,
    name: "Bella's Italian Kitchen",
    description: "Authentic Italian cuisine with fresh ingredients",
    rating: 4.8,
    image: "🍝",
    location: "Downtown, Lagos",
    acceptsCelo: true,
    estimatedTime: "25-35 min"
  },
  {
    id: 2,
    name: "Spice Route",
    description: "Traditional Nigerian dishes with a modern twist",
    rating: 4.6,
    image: "🍲",
    location: "Victoria Island, Lagos",
    acceptsCelo: true,
    estimatedTime: "20-30 min"
  },
  {
    id: 3,
    name: "Ocean Breeze Seafood",
    description: "Fresh seafood and coastal delicacies",
    rating: 4.7,
    image: "🦐",
    location: "Lekki, Lagos",
    acceptsCelo: true,
    estimatedTime: "30-40 min"
  }
]

const Restaurants = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Restaurants</h1>
        <p className="text-muted-foreground">Discover restaurants accepting Celo payments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRestaurants.map((restaurant) => (
          <Card key={restaurant.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="text-4xl mb-2">{restaurant.image}</div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Celo Pay
                </Badge>
              </div>
              <CardTitle className="text-xl">{restaurant.name}</CardTitle>
              <CardDescription>{restaurant.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-medium">{restaurant.rating}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{restaurant.estimatedTime}</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{restaurant.location}</span>
              </div>
              <Button className="w-full">View Menu</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Restaurants
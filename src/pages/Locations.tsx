import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"

const mockLocations = [
  {
    id: 1,
    name: "Bella's Italian Kitchen - Downtown",
    address: "15 Marina Street, Lagos Island, Lagos",
    phone: "+234 801 234 5678",
    hours: "10:00 AM - 10:00 PM",
    status: "Open",
    acceptsCelo: true,
  },
  {
    id: 2,
    name: "Spice Route - Victoria Island",
    address: "Plot 42 Adeola Odeku Street, Victoria Island, Lagos", 
    phone: "+234 802 345 6789",
    hours: "11:00 AM - 11:00 PM",
    status: "Open",
    acceptsCelo: true,
  },
  {
    id: 3,
    name: "Ocean Breeze Seafood - Lekki",
    address: "Km 25 Lekki-Epe Expressway, Lekki, Lagos",
    phone: "+234 803 456 7890",
    hours: "12:00 PM - 9:00 PM",
    status: "Closed",
    acceptsCelo: true,
  }
]

const Locations = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Restaurant Locations</h1>
        <p className="text-muted-foreground">Find restaurants near you that accept Celo payments</p>
      </div>

      {/* Map Placeholder */}
      <Card className="h-64">
        <CardContent className="h-full flex items-center justify-center bg-muted rounded-lg">
          <div className="text-center space-y-2">
            <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
            <p className="text-muted-foreground">Interactive map will be displayed here</p>
            <p className="text-sm text-muted-foreground">Showing restaurants accepting Celo payments</p>
          </div>
        </CardContent>
      </Card>

      {/* Location List */}
      <div className="space-y-4">
        {mockLocations.map((location) => (
          <Card key={location.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{location.name}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {location.address}
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Badge variant={location.status === "Open" ? "default" : "secondary"}>
                    {location.status}
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Celo Pay
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{location.hours}</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Navigation className="h-4 w-4 mr-1" />
                    Directions
                  </Button>
                  <Button size="sm">
                    View Menu
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Locations
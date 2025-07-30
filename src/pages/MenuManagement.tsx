import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus, Edit, Trash2 } from "lucide-react"

const mockMenuItems = [
  {
    id: 1,
    name: "Jollof Rice with Chicken",
    description: "Traditional Nigerian jollof rice served with grilled chicken",
    price: "₵15.99",
    category: "Main Course",
    available: true,
    image: "🍚"
  },
  {
    id: 2,
    name: "Suya Platter",
    description: "Spiced grilled meat skewers with onions and peppers",
    price: "₵12.50",
    category: "Appetizer",
    available: true,
    image: "🍖"
  },
  {
    id: 3,
    name: "Plantain & Eggs",
    description: "Fried plantain served with scrambled eggs",
    price: "₵8.75",
    category: "Breakfast",
    available: false,
    image: "🍌"
  },
  {
    id: 4,
    name: "Palm Wine",
    description: "Traditional fermented palm wine",
    price: "₵5.00",
    category: "Beverages",
    available: true,
    image: "🥥"
  }
]

const MenuManagement = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Menu Management</h1>
          <p className="text-muted-foreground">Manage your restaurant's menu items and pricing</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Menu Item</DialogTitle>
              <DialogDescription>
                Add a new item to your restaurant menu
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price (₵)
                </Label>
                <Input id="price" type="number" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input id="category" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Textarea id="description" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Item</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMenuItems.map((item) => (
          <Card key={item.id}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="text-3xl mb-2">{item.image}</div>
                <Badge variant={item.available ? "default" : "secondary"}>
                  {item.available ? "Available" : "Out of Stock"}
                </Badge>
              </div>
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">{item.price}</span>
                <Badge variant="outline">{item.category}</Badge>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default MenuManagement
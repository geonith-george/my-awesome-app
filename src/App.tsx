import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to shadcn/ui</CardTitle>
          <CardDescription>Your project is ready to go!</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button className="w-full">Get Started</Button>
          <p className="text-sm text-muted-foreground text-center">
            Start building amazing interfaces
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default App

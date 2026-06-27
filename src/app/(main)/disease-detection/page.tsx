import { Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { MainLayout } from "@/components/layout";
import { Upload, Camera, Leaf, TriangleAlert as AlertTriangle } from "lucide-react";

export default function DiseaseDetectionPage() {
  return (
    <MainLayout title="Disease Detection">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Crop Disease Detection</h2>
          <p className="text-foreground-muted mt-1">
            Upload or capture an image of your crop to detect diseases
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="border-2 border-dashed border-border rounded-xl p-8 lg:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Upload Crop Image
              </h3>
              <p className="text-foreground-muted mb-6 max-w-md mx-auto">
                Drag and drop an image or click to browse. Supported formats: JPG, PNG
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button leftIcon={<Upload className="w-4 h-4" />}>Upload Image</Button>
                <Button variant="outline" leftIcon={<Camera className="w-4 h-4" />}>
                  Take Photo
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: "Upload Image",
                    description: "Take a clear photo of the affected crop leaves",
                  },
                  {
                    step: 2,
                    title: "AI Analysis",
                    description: "Our AI analyzes the image for disease patterns",
                  },
                  {
                    step: 3,
                    title: "Get Results",
                    description: "Receive diagnosis and treatment recommendations",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-background font-semibold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-foreground-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Common Diseases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Leaf Blight", crops: "Rice, Wheat" },
                  { name: "Powdery Mildew", crops: "Vegetables, Fruits" },
                  { name: "Rust Disease", crops: "Wheat, Cotton" },
                  { name: "Bacterial Leaf Spot", crops: "Tomato, Pepper" },
                ].map((disease) => (
                  <div
                    key={disease.name}
                    className="flex items-center gap-3 p-3 rounded-lg bg-background-elevated"
                  >
                    <div className="w-8 h-8 rounded bg-warning/10 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-warning" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{disease.name}</p>
                      <p className="text-xs text-foreground-muted">{disease.crops}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Detections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-4 rounded-lg border border-border bg-background-elevated"
                >
                  <div className="w-full h-32 rounded-lg bg-background mb-3 flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-foreground-subtle" />
                  </div>
                  <p className="font-medium text-foreground">Detection #{i}</p>
                  <p className="text-sm text-foreground-muted mt-1">
                    Result placeholder
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}

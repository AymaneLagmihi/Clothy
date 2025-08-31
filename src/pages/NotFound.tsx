import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6 p-8 rounded-xl shadow-elegant bg-card border border-border">
        <h1 className="text-6xl font-bold text-destructive">404</h1>
        <p className="text-2xl text-muted-foreground">Sorry, the page you are looking for does not exist.</p>
        <Button variant="default" size="lg" asChild>
          <a href="/">Go Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

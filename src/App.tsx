import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Cases from "./pages/Cases";
import Contacts from "./pages/Contacts";
import ServicePromotion from "./pages/ServicePromotion";
import ServiceSEO from "./pages/ServiceSEO";
import ServiceContent from "./pages/ServiceContent";
import ServiceDev from "./pages/ServiceDev";
import Page404 from "./pages/Page404";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodvizhenie" element={<ServicePromotion />} />
          <Route path="/seo" element={<ServiceSEO />} />
          <Route path="/kontent" element={<ServiceContent />} />
          <Route path="/razrabotka" element={<ServiceDev />} />
          <Route path="/keisy" element={<Cases />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/kontakty" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

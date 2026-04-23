import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/About.tsx";
import Academics from "./pages/Academics.tsx";
import Admissions from "./pages/Admissions.tsx";
import Faculty from "./pages/Faculty.tsx";
import StudentLife from "./pages/StudentLife.tsx";
import Facilities from "./pages/Facilities.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";
import FAQs from "./pages/FAQs.tsx";
import Contact from "./pages/Contact.tsx";
import Careers from "./pages/Careers.tsx";
import MandatoryDisclosure from "./pages/MandatoryDisclosure.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Introduction from "./pages/Introduction";
import Applications from "./pages/Applications";
import Challenges from "./pages/Challenges";
import PowerPlant from "./pages/PowerPlant";
import EconomicImpact from "./pages/EconomicImpact";
import Reports from "./pages/Reports";
import Development from "./pages/Development";
import KeyAdvantages from "./pages/KeyAdvantages";
import FeaturesBenefits from "./pages/FeaturesBenefits";
import Research from "./pages/Research";
import Ambition from "./pages/Ambition";
import FutureScenarios from "./pages/FutureScenarios";
import CaseStudies from "./pages/CaseStudies";
import AirborneWindEnergy from "./pages/Services/AirborneWindEnergy";
import ProjectDevelopment from "./pages/Services/ProjectDevelopment";
import EnergyConsulting from "./pages/Services/EnergyConsulting";
import PartnershipOpportunities from "./pages/Services/PartnershipOpportunities";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/power-plant" element={<PowerPlant />} />
          <Route path="/economic-impact" element={<EconomicImpact />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/development" element={<Development />} />
          <Route path="/key-advantages" element={<KeyAdvantages />} />
          <Route path="/features-benefits" element={<FeaturesBenefits />} />
          <Route path="/research" element={<Research />} />
          <Route path="/ambition" element={<Ambition />} />
          <Route path="/future-scenarios" element={<FutureScenarios />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/services/airborne-wind-energy" element={<AirborneWindEnergy />} />
          <Route path="/services/project-development" element={<ProjectDevelopment />} />
          <Route path="/services/energy-consulting" element={<EnergyConsulting />} />
          <Route path="/services/partnership-opportunities" element={<PartnershipOpportunities />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

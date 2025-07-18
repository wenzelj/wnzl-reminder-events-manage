
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeRouter, Routes, Route } from "react-router-native";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { View } from "react-native";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <NativeRouter>
        <View>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </View>
      </NativeRouter>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;

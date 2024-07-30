// __tests__/page.test.tsx
import { render, screen } from "@testing-library/react";
import { store } from "@/app/state/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "@/app/page";
import Navbar from "@/components/common/Navbar";

const queryClient = new QueryClient();

describe("Home Page", () => {
  it("renders Navbar component", () => {
    // render komponen
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Home />
        </Provider>
      </QueryClientProvider>
    );

    // manipulation document
    const navbarElement = screen.getByTestId("navbar");

    // assertions
    expect(navbarElement).toBeInTheDocument();
  });
});


describe("Navbar Component", () => {
  it("should render the SiTestrail icon", () => {
    render(<QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </QueryClientProvider>);

    const iconElement = screen.getByTestId("testrail-icon");
    expect(iconElement).toBeInTheDocument();
  });
});
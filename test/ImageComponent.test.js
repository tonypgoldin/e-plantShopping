import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import { screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ImageComponent from "../src/ImageComponent";

describe("ImageComponent", () => {
    let container;

    const render = component => act(() => ReactDOM.createRoot(container).render(component));

    beforeEach(() => {
        container = document.createElement("div");

        document.body.replaceChildren(container);
    });

    it ("renders the image when the URL is available", () => {
        render(<ImageComponent src="assets/images/pic1.png" alt="plant product" />);

        const img = screen.getByRole("img");
    
        expect(img).toHaveAttribute("src", "assets/images/pic1.png");
        expect(img).toHaveAttribute("alt", "plant product");
    });

    it("shows an error message when the image URL is unavailable", () => {
        render(<ImageComponent src="invalid-url.jpg" />);
        const img = screen.getByRole("img");
    
        act(() => { img.dispatchEvent(new Event("error")) });
    
        expect(screen.getByText("Image not available")).toBeInTheDocument();
    });
})
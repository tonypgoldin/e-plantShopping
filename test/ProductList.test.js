import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { screen } from "@testing-library/react";
import {act } from "react-dom/test-utils";
import ProductList from "../src/ProductList";

describe("Product List", () => {
    let container;

    const items = [{name: "Sunshine Plant", description: "Bright yellow like the sun", cost: "$18", img: {src: "assets/images/pic1.png", alt: "plant product"}}];

    beforeEach(() => {
        container = document.createElement("div");

        document.body.replaceChildren(container);
    });

    const render = component => act(() => ReactDOM.createRoot(container).render(component));

    it("renders the name of the product", () => {
        render(<ProductList products={items} />);
  
        expect(document.body.textContent).toContain("Sunshine Plant");
    })

    it("renders the description of the product", () => {
        render(<ProductList products={items} />);

        expect(document.body.textContent).toContain("Bright yellow like the sun");
    })

    it("renders the description of the product", () => {
        render(<ProductList products={items} />);
  
        expect(document.body.textContent).toContain("$18");
    })

    it("renders the image of the product", () => {
        render(<ProductList products={items} />);
  
        const img = screen.getByRole("img");
    
        expect(img).toHaveAttribute("src", "assets/images/pic1.png");
        expect(img).toHaveAttribute("alt", "plant product");
    })
})
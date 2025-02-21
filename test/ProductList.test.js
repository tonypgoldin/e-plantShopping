import React from "react";
import ReactDOM from "react-dom/client";
import {act } from "react-dom/test-utils";
import ProductList from "../src/ProductList";

describe("Product List", () => {
    let container;

    const items = [{name: "Sunshine Plant", description: "Bright yellow like the sun", cost: "$18"}];

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
})
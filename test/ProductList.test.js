import React from "react";
import ReactDOM from "react-dom/client";
import {act } from "react-dom/test-utils";
import ProductList from "../src/ProductList";

describe("Product List", () => {
    it("renders the name of the product", () => {
        const items = [{name: "Sunshine Plant"}];

        const component = (<ProductList products={items} />);

        const container = document.createElement("div");

        document.body.appendChild(container)

        act(() => ReactDOM.createRoot(container).render(component));
  
        expect(document.body.textContent).toContain("Sunshine Plant");
    })

    it("renders the description of the product", () => {
        const items = [{name: "Sunshine Plant", description: "Bright yellow like the sun"}];

        const component = (<ProductList products={items} />);

        const container = document.createElement("div");

        document.body.appendChild(container)

        act(() => ReactDOM.createRoot(container).render(component));
  
        expect(document.body.textContent).toContain("Bright yellow like the sun");
    })

    it("renders the description of the product", () => {
        const items = [{name: "Sunshine Plant", description: "Bright yellow like the sun", cost: "$18"}];

        const component = (<ProductList products={items} />);

        const container = document.createElement("div");

        document.body.appendChild(container)

        act(() => ReactDOM.createRoot(container).render(component));
  
        expect(document.body.textContent).toContain("$18");
    })
})
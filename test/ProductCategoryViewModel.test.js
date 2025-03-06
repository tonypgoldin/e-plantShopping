import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import {act } from "react-dom/test-utils";

import ProductCategoryViewModel from "../src/ProductCategoryViewModel";

describe("ProductCategoryViewModel", () => {
    let container;

    const item = {name: "Sunshine Plant", description: "Bright yellow like the sun", cost: "$18", image: {src: "assets/images/pic1.png", alt: "plant product"}};

    beforeEach(() => {
        container = document.createElement("div");

        document.body.replaceChildren(container);
    });

    const render = component => act(() => ReactDOM.createRoot(container).render(component));

    it("renders the product category", () => {
        render(<ProductCategoryViewModel category="Aromatic Fragrant Plants" products={[]} />);
  
        expect(document.body.textContent).toContain("Aromatic Fragrant Plants");
    })

    it("renders the plant product's name", () => {
        render(<ProductCategoryViewModel category="Aromatic Fragrant Plants" products={[item]} />);
  
        expect(document.body.textContent).toContain("Aromatic Fragrant Plants");
        expect(document.body.textContent).toContain(item.name);
    })
})
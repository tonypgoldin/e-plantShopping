import "@testing-library/jest-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import {act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";

import PlantProductItem from "../src/PlantProductItem";

describe("PlantProductItem", () => {
    let container;

    const item = {name: "Sunshine Plant", description: "Bright yellow like the sun", cost: "$18", image: {src: "assets/images/pic1.png", alt: "plant product"}};

    beforeEach(() => {
        container = document.createElement("div");

        document.body.replaceChildren(container);
    });

    const render = component => act(() => ReactDOM.createRoot(container).render(component));

    it("renders the name of the product", () => {
        render(<PlantProductItem plant={item} />);
  
        expect(document.body.textContent).toContain("Sunshine Plant");
    })

    it("renders the description of the product", () => {
        render(<PlantProductItem plant={item} />);

        expect(document.body.textContent).toContain("Bright yellow like the sun");
    })

    it("renders the cost of the product", () => {
        render(<PlantProductItem plant={item} />);
  
        expect(document.body.textContent).toContain("$18");
    })

    it("renders the image of the product", () => {
        render(<PlantProductItem plant={item} />);
  
        const img = screen.getByRole("img");
    
        expect(img).toHaveAttribute("src", "assets/images/pic1.png");
        expect(img).toHaveAttribute("alt", "plant product");
    })
})
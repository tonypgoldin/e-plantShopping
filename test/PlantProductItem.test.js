import "@testing-library/jest-dom";
//import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CartSlice from "../src/CartSlice";
import store from "../src/store";

import PlantProductItem from "../src/PlantProductItem";

describe("PlantProductItem", () => {
    let container;

    const item = {name: "Sunshine Plant", description: "Bright yellow like the sun", cost: "$18", image: {src: "assets/images/pic1.png", alt: "plant product"}};

    beforeEach(() => {
        container = document.createElement("div");

        document.body.replaceChildren(container);
    });

    const local_render = component => act(() => ReactDOM.createRoot(container).render(component));

    it("renders the name of the product", () => {
        local_render(<PlantProductItem plant={item} />);
  
        expect(document.body.textContent).toContain("Sunshine Plant");
    })

    it("renders the description of the product", () => {
        local_render(<PlantProductItem plant={item} />);

        expect(document.body.textContent).toContain("Bright yellow like the sun");
    })

    it("renders the cost of the product", () => {
        local_render(<PlantProductItem plant={item} />);
  
        expect(document.body.textContent).toContain("$18");
    })

    it("renders the image of the product", () => {
        local_render(<PlantProductItem plant={item} />);
  
        const img = screen.getByRole("img");
    
        expect(img).toHaveAttribute("src", "assets/images/pic1.png");
        expect(img).toHaveAttribute("alt", "plant product");
    })

    it("has a button element", () => {
        local_render(<PlantProductItem plant={item} />);

        const button = document.querySelector("div > button")
        expect(button.type).toEqual("button")
    })

    // it ("should return the initial state", () => {
    //     expect(CartSlice.reducer(undefined, { type: 'unknown'})).toEqual({"items" : []})
    // })

    // it("adds an item to the cart when the button is clicked", () => {
    //     render(
    //         <Provider store={store}>
    //             <PlantProductItem plant={item} />
    //         </Provider>);

    //     const button = screen.getByText("Add To Cart")

    //     expect(store.getState().cart).toEqual({"items": []})

    //     button.click()
        
    //     expect(store.getState().cart).toEqual({"items":[{"name": item.name, "quantity": 1}]})
    // })
})
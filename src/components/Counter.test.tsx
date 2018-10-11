import * as React from "react";
import { shallow } from "enzyme";

import Counter from "./Counter";

describe("<Counter/> renders", () => {
    it("Should check for child elements", () => {
        const wrapper = shallow(<Counter />);

        // console.log(wrapper.debug());

        expect(wrapper.find("button").length).toEqual(2);
        expect(wrapper.find("#btnIncrement").length).toEqual(1);
        expect(wrapper.find("#btnDecrement").length).toEqual(1);

        expect(wrapper.find("label").length).toEqual(1);
    })

    it("Should check for default value", () => {
        const wrapper = shallow(<Counter />);

        expect(wrapper.find("label").text()).toEqual("0");
    })

    it("Should increment result", () => {
        const wrapper = shallow(<Counter />);

        const btnIncrement = wrapper.find("#btnIncrement");
        btnIncrement.simulate("click");

        expect(wrapper.find("label").text()).toEqual("1");
    })

    it("Should decrement result", () => {
        const wrapper = shallow(<Counter />);

        const btnDecrement = wrapper.find("#btnDecrement");
        btnDecrement.simulate("click");

        expect(wrapper.find("label").text()).toEqual("-1");
    })
})

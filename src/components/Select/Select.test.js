import React from "react";
import { shallow } from "enzyme";
import Select from "components/Select";

const items = ["one", 2, { key: "Three", value: 3 }];

describe("<Select />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = shallow(<Select items={items} />);
      expect(wrapper.find("option").length).toBe(3);
    });
    it("should render placeholder", () => {
      const wrapper = shallow(<Select items={items} placeholder="test" />);
      expect(wrapper.find("option").length).toBe(4);
      expect(wrapper.find("optgroup").length).toBe(1);
    });
  });
});

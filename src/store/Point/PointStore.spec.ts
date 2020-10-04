import { PointStore } from "./PointStore";

describe("PointStore", () => {
  it("creates new points", () => {
    const store = new PointStore();
    store.createPoint({ title: "kek" });
    store.createPoint({ title: "lol" });
    expect(store.pointList.length).toBe(2);
    expect(store.pointList[0].title).toBe("kek");
    expect(store.pointList[1].title).toBe("lol");
  });
});

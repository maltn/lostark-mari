import type { NextPage } from "next";
import React, { useEffect, useRef, useState } from "react";

const Label = ({ htmlFor, children }: { htmlFor: string; children: any }) => {
  return (
    <div className="w-8/12">
      <label className="text-white text-lg text-left" htmlFor={htmlFor}>
        {children}
      </label>
    </div>
  );
};

const Input = ({ name }: { name: string }) => {
  return (
    <input
      type="text"
      name={name}
      className="rounded w-8/12 p-2 pl-4 pr-4 outline-none"
    />
  );
};

const Home: NextPage = () => {
  const [mariValue, setMariValue] = useState<number>();
  const [marketValue, setMarketValue] = useState<number>();
  const formData = useRef<any>({});

  const formChangeHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement;
    if (!isNaN(parseFloat(target.value))) {
      let data = { ...formData.current };
      data[target.name] = parseFloat(target.value);
      formData.current = data;

      if (
        !isNaN(formData.current["mariGoldCost"]) &&
        !isNaN(formData.current["mariCrystalCount"]) &&
        !isNaN(formData.current["mariItemCount"]) &&
        !isNaN(formData.current["mariItemCost"])
      ) {
        setMariValue(
          (data["mariItemCost"] / data["mariItemCount"]) *
            (data["mariGoldCost"] / data["mariCrystalCount"])
        );
      }
      if (
        !isNaN(formData.current["marketItemCost"]) &&
        !isNaN(formData.current["marketItemCount"])
      ) {
        setMarketValue(data["marketItemCost"] / data["marketItemCount"]);
      }
    }
  };

  return (
    <div className="w-224 h-160 center">
      <div className="w-1/2 float-left rounded h-full p-8">
        <form
          onSubmit={(e: any) => e.preventDefault()}
          onChange={formChangeHandler}
          action="#"
          className="flex items-start flex-col w-full h-full space-y-4">
          <Label htmlFor="mariGoldCost">Mari Gold Cost</Label>
          <Input name="mariGoldCost" />

          <Label htmlFor="mariCrystalCount">Mari Crystal Amount</Label>
          <Input name="mariCrystalCount" />

          <Label htmlFor="mariItemCount">Mari Amount of Items</Label>
          <Input name="mariItemCount" />

          <Label htmlFor="mariItemCost">Mari Item Cost</Label>
          <Input name="mariItemCost" />

          <Label htmlFor="marketItemCount">Market Item Count</Label>
          <Input name="marketItemCount" />

          <Label htmlFor="marketItemCost">Market Item Cost</Label>
          <Input name="marketItemCost" />
        </form>
      </div>
      <div className="w-1/2 float-left h-full text-xl text-white p-8 relative">
        <p className="text-center opacity-50 text-2xl">Mari</p>
        <p className="text-center">{mariValue?.toFixed(2)} Gold/Item</p>
        <p className="text-center mt-8 opacity-50 text-2xl">Market</p>
        <p className="text-center">{marketValue?.toFixed(2)} Gold/Item</p>

        <div className="w-full absolute bottom-10 left-0">
          <p className="text-center w-full opacity-50 text-2xl">Result</p>

          {mariValue && marketValue ? (
            <p className="text-center">
              {mariValue > marketValue
                ? "Market is more worth"
                : "Mari is more worth"}
            </p>
          ) : (
            <br />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

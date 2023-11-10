import React from "react";

// interface
import { ThemeTypes } from "../../../data/settings";

// components
import ThemeColor from "./ThemeColor";

interface ThemeSettingsProps {
  theme: ThemeTypes;
  onChangeData: (field: string, value: any) => void;
}
const ThemeSettings = ({ theme, onChangeData }: ThemeSettingsProps) => {
  return (
    <div className="accordion-body">
      <ThemeColor theme={theme} onChangeData={onChangeData} />
    </div>
  );
};

export default ThemeSettings;

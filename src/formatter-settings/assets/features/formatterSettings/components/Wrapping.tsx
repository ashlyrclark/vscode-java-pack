// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import React from "react";
import { useSelector} from "react-redux";
import { Catagory, JavaFormatterSetting } from "../../../../FormatterConstants";
import Setting from "./Setting";

const Wrapping = (): JSX.Element => {
  const settings: JavaFormatterSetting[] = useSelector((state: any) => state.formatterSettings.settings);

  return (
    <div>
        <Setting setting={settings} catagory={Catagory.Wrapping}/>
    </div>
  );
};

export default Wrapping;
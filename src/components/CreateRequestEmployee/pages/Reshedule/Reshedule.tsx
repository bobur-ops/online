import { useState } from "react";
import FormAbleToMove from "./FormAbleToMove";
import FormUnableToMove from "./FormUnableToMove";
import { Space, Switch } from "antd-mobile";

type ResheduleProps = {
  mobile?: boolean
  onDone?: () => void
}

export default function Reshedule({ mobile, onDone }: ResheduleProps) {
  const [ableToMove, setAbleToMove] = useState(true);

  return (
    <div>
      <Space direction="vertical" block>
        <div className="flex items-center gap-2">
          <Switch checked={ableToMove} onChange={setAbleToMove} />
          <label className="leading-none">а/м может передвигаться своим ходом</label>
        </div>
        {ableToMove && <FormAbleToMove mobile={mobile} onDone={onDone} />}
        {!ableToMove && <FormUnableToMove mobile={mobile} onDone={onDone} />}
      </Space>
    </div>
  );
}

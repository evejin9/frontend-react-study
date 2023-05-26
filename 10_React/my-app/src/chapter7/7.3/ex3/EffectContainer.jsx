import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer() {
  const [isVisivle, setIsVisible] = useState(true);

  return (
    <div>
      <button type="button" onClick={() => setIsVisible(true)}>나타나라</button>
      <button type="button" onClick={() => setIsVisible(false)}>사라져라</button>
      {isVisivle && <EffectSummary />}
      {/* 논리 연산자의 short-circuit을 이용한 조건부 렌더링 */}
    </div>
  );
}

export default EffectContainer;
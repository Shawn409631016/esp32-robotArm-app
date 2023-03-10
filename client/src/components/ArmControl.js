import React from 'react';
import '../CSS/ArmControl.css';

export default function ArmControl(props) {
  const { targetAngles, currentAngles, handleChange, handleReset } = props;

  return (
    <div className="axis-container">
      <div>A軸角度：{targetAngles.A}°</div>
      <input
        type="range"
        min="0"
        max="180"
        value={targetAngles.A}
        onChange={(e) => handleChange('A', e.target.value)}
      />
      <div>B軸角度：{targetAngles.B}°</div>
      <input
        type="range"
        min="0"
        max="180"
        value={targetAngles.B}
        onChange={(e) => handleChange('B', e.target.value)}
      />
      <div>C軸角度：{targetAngles.C}°</div>
      <input
        type="range"
        min="0"
        max="180"
        value={targetAngles.C}
        onChange={(e) => handleChange('C', e.target.value)}
      />
      <div>D軸角度：{targetAngles.D}°</div>
      <input
        type="range"
        min="0"
        max="180"
        value={targetAngles.D}
        onChange={(e) => handleChange('D', e.target.value)}
      />
      <div>E軸角度：{targetAngles.E}°</div>
      <input
        type="range"
        min="0"
        max="180"
        value={targetAngles.E}
        onChange={(e) => handleChange('E', e.target.value)}
      />
      <div>F軸角度：{targetAngles.F}°</div>
      <input
        type="range"
        min="0"
        max="180"
        value={targetAngles.F}
        onChange={(e) => handleChange('F', e.target.value)}
      />

      <button className="reset-btn" onClick={handleReset}>
        返回初始狀態
      </button>
      <div className="current-state">
        <div>當前狀態:</div>
        <div>
          A軸-當前位置：{currentAngles.A}° - 目標位置：{targetAngles.A}°
        </div>
        <div>
          B軸-當前位置：{currentAngles.B}° - 目標位置：{targetAngles.B}°
        </div>
        <div>
          C軸-當前位置：{currentAngles.C}° - 目標位置：{targetAngles.C}°
        </div>
        <div>
          D軸-當前位置：{currentAngles.D}° - 目標位置：{targetAngles.D}°
        </div>
        <div>
          E軸-當前位置：{currentAngles.E}° - 目標位置：{targetAngles.E}°
        </div>
        <div>
          F軸-當前位置：{currentAngles.F}° - 目標位置：{targetAngles.F}°
        </div>
      </div>
    </div>
  );
}

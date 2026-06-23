import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", style, as: Component = "h1" }) => {
  return (
    <div className={`glitch-wrapper ${className}`} style={style}>
      {/* @ts-ignore */}
      <Component className="glitch" data-text={text}>
        {text}
      </Component>
    </div>
  );
};

export default GlitchText;

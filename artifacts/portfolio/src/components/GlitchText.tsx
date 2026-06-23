import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "", as: Component = "h1" }) => {
  return (
    <div className={`glitch-wrapper ${className}`}>
      {/* @ts-ignore */}
      <Component className="glitch" data-text={text}>
        {text}
      </Component>
    </div>
  );
};

export default GlitchText;

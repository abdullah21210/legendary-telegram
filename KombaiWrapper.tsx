import React from 'react';

interface KombaiWrapperProps {
  children: React.ReactNode;
}

const KombaiWrapper: React.FC<KombaiWrapperProps> = ({ children }) => {
  return (
    <div className="kombai-wrapper" style={{ width: '100%', height: '100%' }}>
      {children}
    </div>
  );
};

export default KombaiWrapper;
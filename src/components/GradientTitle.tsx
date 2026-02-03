export const GradientTitle: React.FC<{ children: React.ReactNode; size?: 'large' | 'small' }> = ({ 
  children, 
  size = 'small' 
}) => {
  const styles = size === 'large' ? {
    textAlign: 'center' as const,
    fontFamily: 'Cinzel',
    fontSize: '32px',
    fontWeight: 600,
    lineHeight: '120%',
  } : {
    textAlign: 'center' as const,
    fontFamily: 'Cinzel',
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '120%',
  };

  return (
    <div className="gradient-text" style={styles}>
      {children}
    </div>
  );
};

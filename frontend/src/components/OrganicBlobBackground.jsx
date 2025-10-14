export const OrganicBlobBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
    
    {/* Organic Blobs */}
    <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] blur-3xl animate-blob" />
    <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-primary/20 to-transparent rounded-[60%_40%_30%_70%/40%_70%_30%_60%] blur-2xl animate-blob animation-delay-2000" />
    <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] bg-gradient-to-tl from-primary/20 to-transparent rounded-[30%_70%_70%_30%/70%_30%_30%_70%] blur-3xl animate-blob animation-delay-4000" />
  </div>
);
import ActionGrid from "@/components/action/ActionGrid";
import { actions } from "@/database/data";
const Action = () => {

  return (
    <main className="p-6 md:ml-16 py-8 md:p-8 md:py-12 xl:ml-0">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 border-b-2 border-black pb-2">
        Aksi
      </h1>
      <p className="text-muted-foreground text-sm md:text-base">
        Temukan aksi yang dapat kamu lakukan untuk menjaga lingkungan.
      </p>
      <div className="mt-4 space-y-4">
        <ActionGrid
          actions={actions}
          actionType="peduliAlam"
          category="Peduli Alam"
        />
        <ActionGrid
          actions={actions}
          actionType="kurangiSampahPlastik"
          category="Kurangi Sampah Plastik"
        />
        <ActionGrid
          actions={actions}
          actionType="hematEnergi"
          category="Hemat Energi"
        />
        <ActionGrid
          actions={actions}
          actionType="bijakDalamKonsumsi"
          category="Bijak dalam Konsumsi"
        />
        <ActionGrid
          actions={actions}
          actionType="daurUlang"
          category="Daur Ulang"
        />
      </div>
    </main>
  );
};

export default Action;

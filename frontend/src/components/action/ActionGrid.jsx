import ActionCard from "./ActionCard";

const ActionGrid = ({ actions, actionType, category, userLevel }) => {
  const actionsByType = actions.filter(
    (action) => action.category === category
  );
  const actionThemes = {
    hematEnergi: {
      backgroundColor: "bg-[#FFD900]/30",
      textColor: "text-[#FFA600]",
    },
    kurangiSampahPlastik: {
      backgroundColor: "bg-[#DD0026]/20",
      textColor: "text-[#DD0026]",
    },
    peduliAlam: {
      backgroundColor: "bg-[#32CD32]/20",
      textColor: "text-[#228C22]",
    },
    bijakDalamKonsumsi: {
      backgroundColor: "bg-[#EB73B0]/20",
      textColor: "text-[#DC3B95]",
    },
    daurUlang: {
      backgroundColor: "bg-[#3C83F6]/20",
      textColor: "text-[#195B80]",
    },
  };
  return (
    <section>
      <div className="bg-white rounded-xl overflow-hidden">
        <h1
          className={`p-3 font-bold ${actionThemes[actionType].textColor} ${actionThemes[actionType].backgroundColor}`}
        >
          {category}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
          {actionsByType.map((action) => (
            <ActionCard
              key={action.id}
              action={action}
              actionType={actionType}
              userLevel={userLevel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionGrid;

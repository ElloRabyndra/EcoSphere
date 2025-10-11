import { Link, useParams } from "react-router";
import { actions } from "@/database/data";
import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import ActionDetailCard from "@/components/action/ActionDetailCard";
const ActionDetail = () => {
  const { actionId } = useParams();
  const [action, setAction] = useState({});
  const [actionType, setActionType] = useState("hematEnergi");
  const actionTypes = [
    "hematEnergi",
    "kurangiSampahPlastik",
    "peduliAlam",
    "bijakDalamKonsumsi",
    "daurUlang",
  ];

  useEffect(() => {
    const action = actions.find((a) => a.id === parseInt(actionId));
    setAction(action);
    const currentAction = actionTypes.find(
      (type) =>
        type.toLowerCase() === action.category.replaceAll(" ", "").toLowerCase()
    );
    setActionType(currentAction);
  }, [actionId]);
  return (
    <section className="p-6 md:ml-16 py-8 md:p-8 md:py-12">
      {/* Tombol Kembali */}
      <Link to="/aksi" className="flex items-center gap-2 text-primary mb-4">
        <ChevronLeft className="w-6 h-6" />
        <span>Kembali ke Daftar Aksi</span>
      </Link>
      <ActionDetailCard action={action} actionType={actionType} />
    </section>
  );
};

export default ActionDetail;

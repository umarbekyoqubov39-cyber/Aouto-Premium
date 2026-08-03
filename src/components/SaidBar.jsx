import React from "react";

function SaidBar() {
  return (
    <aside
      className={`bg-slate-900 text-white transition-all duration-300 border border-gray-50 ${
        open ? "w-64" : "w-20"
      }`}
    >
      <div className="p-5">Matn 1</div>
      <div className="p-5">Matn 2</div>
      <div className="p-5">Matn 3</div>
      <div className="p-5">Matn 4</div>
      <div className="p-5">Matn 5</div>
    </aside>
  );
}

export default SaidBar;

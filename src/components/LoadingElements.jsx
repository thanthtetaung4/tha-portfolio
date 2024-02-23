import useScreenSize from "../hooks/useScreenSize";

const LoadingElements = () => {
  const screenSize = useScreenSize();

  const loadingEl = (
    <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
      <div className="animate-pulse">
        <div className="h-40 w-full rounded bg-slate-700"></div>
        <div className="flex-1 space-y-6 py-3">
          <div className="h-2 rounded bg-slate-700"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 h-2 rounded bg-slate-700"></div>
              <div className="col-span-1 h-2 rounded bg-slate-700"></div>
              <div className="col-span-2 h-2 rounded bg-slate-700"></div>
              <div className="col-span-1 h-2 rounded bg-slate-700"></div>
              <div className="col-span-2 h-2 rounded bg-slate-700"></div>
              <div className="col-span-1 h-2 rounded bg-slate-700"></div>
              <div className="col-span-1 h-2 rounded bg-slate-700"></div>
              <div className="col-span-2 h-2 rounded bg-slate-700"></div>
              <div className="col-span-1 h-2 rounded bg-slate-700"></div>
              <div className="col-span-2 h-2 rounded bg-slate-700"></div>
              <div className="col-span-1 h-2 rounded bg-slate-700"></div>
              <div className="col-span-2 h-2 rounded bg-slate-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const elementCount =
    screenSize.width > 1250 ? 3 : screenSize.width < 900 ? 1 : 2;

  const loadingEls = [];
  for (let index = 0; index < elementCount; index++) {
    loadingEls.push(<div key={index}>{loadingEl}</div>);
  }

  return <div className={`grid grid-cols-${elementCount}`}>{loadingEls}</div>;
};

export default LoadingElements;

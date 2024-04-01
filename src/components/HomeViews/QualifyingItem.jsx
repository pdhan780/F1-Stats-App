const QualifyingItem = ({ pos, driver, constructor, Q1, Q2, Q3 }) => {
    return (
        <li className="grid grid-cols-6 gap-4 items-left">
        <span className="text-left font-f1 font-bold p-3">{pos}</span>
        <span className="col-span-1 font-bold">{driver}</span>
        <span className="col-span-1 ">{constructor}</span>
        <span className="col-span-1">{Q1}</span>
        <span className="col-span-1">{Q2}</span>
        <span className="col-span-1">{Q3}</span>
    </li>
    );
  };
  
  export default QualifyingItem;
  
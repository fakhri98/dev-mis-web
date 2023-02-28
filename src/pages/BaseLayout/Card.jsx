import IconPerson from "../../icons/IconPerson";
// import MultiplePersons from "../../icons/MultiplePersons";
// import MultiplePersons2 from "../../icons/MultiplePersons2";

function Card ({ iconVariant="iconPerson", onClick , children }) {
  const icon = {
    iconPerson: <IconPerson />,
  };

  return (
    <div className="w-72 bg-white border-2 rounded-md text-left drop-shadow-md">
      <div className="flex flex-nowrap divide-x-2 divide-red-400">
        <div 
          className="p-3"
        > <IconPerson />
        </div>
        <div className="p-3 ml-3 my-3">
          <p className="text-red-500 text-2xl"> 1.000.000 </p>
          <p className="text-red-500">Orang</p>
        </div>
      </div>
    </div>
  );
};

export default Card
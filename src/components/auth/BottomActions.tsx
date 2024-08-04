// import { Button } from "../ui/button";

import { Button } from "../ui/button";

const ACTION_LIST = [
  {
    label: "Create Account",
    href: "/signup",
  },
  {
    label: "Get Help",
    href: "/help",
  },
];

const BottomActions = () => {
  return (
    <div className="mt-2 flex justify-between">
      {ACTION_LIST.map((action) => (
        <Button variant="link" key={action.label}>
          {action.label}
        </Button>
      ))}
    </div>
  );
};

export default BottomActions;

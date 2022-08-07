import Button from "./Button/Button";

//This collapsable button has default poarameters just in case you have not implemented any

const CollapsibleButton = ({
  content = [<Button title={"button"}/>,<Button title={"button"}/>,<Button title={"button"}/>]
})=>{

    return (<div className="d-flex flex-column">
    {content}
    
    
    </div>)
  };


export default CollapsibleButton;

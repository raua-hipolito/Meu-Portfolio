import { CopyIcon } from "../icons/CopyIcon";

interface CopyButtonProps {
    textToCopy: string;
}

export const CopyButton = ({textToCopy}: CopyButtonProps) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
    }

    return(
        <button className="inline-flex justify-center items-center"
        onClick={handleCopy}
        >
            <CopyIcon 
            title="Clique para cópiar"
            className="fill-white"
            />
        </button>
    )
};
import * as React from 'react';
import { WithStyles } from 'react-jss';
interface ISelectedFileProps {
    fileName: string;
    removeFile: any;
    classes: string;
}
/** Wrappers */
declare const StyledSelectedFile: React.ComponentType<Pick<ISelectedFileProps & WithStyles<(theme: any) => {
    selectedFile: {
        display: string;
        alignItems: string;
        flexWrap: string;
        justifyContent: string;
        padding: string;
        borderBottom: string;
    };
    file: {
        display: string;
        alignItems: string;
        flexWrap: string;
        overflow: string;
    };
    fileName: {
        marginLeft: number;
        overflow: string;
        textOverflow: string;
        whiteSpace: string;
        fontSize: string;
        letterSpacing: string;
        color: any;
    };
    fileLogo: {
        fill: any;
        width: number;
    };
    closeLogo: {
        fill: any;
        width: number;
    };
    closeButton: {
        display: string;
        alignItems: string;
        justifyContent: string;
        width: number;
        height: number;
        marginLeft: number;
        backgroundColor: any;
        borderRadius: string;
        cursor: string;
    };
}>, "fileName" | "removeFile"> & {
    classes?: Partial<string & Record<"selectedFile" | "file" | "fileName" | "fileLogo" | "closeLogo" | "closeButton", string>> | undefined;
}>;
export default StyledSelectedFile;
/** Exports */
export { StyledSelectedFile as SelectedFile, };

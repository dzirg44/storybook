import * as React from 'react';
import { WithStyles } from 'react-jss';
interface IProps {
    children: any;
}
declare const WrappedGlobalStyles: React.ComponentType<Pick<IProps & WithStyles<(theme: any) => {
    '@global': {
        '@import': any[];
        html: {
            height: string;
            width: string;
        };
        body: {
            fontFamily: any;
            fontWeight: any;
            fontSmoothing: string;
            height: string;
            width: string;
            padding: number;
            margin: number;
            backgroundColor: any;
            color: any;
        };
        h1: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
            letterSpacing: number;
        };
        h2: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
            letterSpacing: number;
        };
        h3: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
            letterSpacing: number;
        };
        h4: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
            letterSpacing: number;
        };
        h5: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
            letterSpacing: number;
        };
        h6: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
            letterSpacing: number;
        };
        p: {
            fontSize: number;
            fontFamily: any;
            fontWeight: any;
            letterSpacing: number;
        };
        b: {
            fontFamily: any;
            fontWeight: any;
        };
        hr: {
            border: string;
        };
        '#root': {
            height: string;
        };
        'button:focus': {
            outline: string;
        };
        '*, ::after, ::before': {
            boxSizing: string;
        };
        a: {
            color: any;
            textDecoration: string;
            '&:hover': {
                textDecoration: string;
            };
        };
    };
}>, "children"> & {
    classes?: Partial<Record<"@global", string>> | undefined;
}>;
export { WrappedGlobalStyles as GlobalStyles };

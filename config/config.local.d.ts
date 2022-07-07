/// <reference types="node" />
import { PowerPartial } from 'egg';
declare const _default: () => {
    baseUrl: string;
    multipart?: PowerPartial<{
        mode?: string | undefined;
        fileModeMatch?: import("egg").MatchItem | import("egg").MatchItem[] | undefined;
        autoFields?: boolean | undefined;
        defaultCharset?: string | undefined;
        fieldNameSize?: number | undefined;
        fieldSize?: string | number | undefined;
        fields?: number | undefined;
        fileSize?: string | number | undefined;
        files?: number | undefined;
        whitelist?: string[] | ((filename: string) => boolean) | undefined;
        fileExtensions?: string[] | undefined;
        tmpdir?: string | undefined;
        cleanSchedule?: import("egg-multipart").ScheduleOptions | undefined;
    }> | undefined;
    view?: PowerPartial<{
        root: string;
        cache: boolean;
        defaultExtension: string;
        defaultViewEngine: string;
        mapping: import("egg").PlainObject<string>;
    }> | undefined;
    workerStartTimeout?: number | undefined;
    baseDir?: string | undefined;
    middleware?: (string | undefined)[] | undefined;
    bodyParser?: PowerPartial<{
        enable: boolean;
        encoding: string;
        formLimit: string;
        jsonLimit: string;
        textLimit: string;
        strict: boolean;
        queryString: {
            arrayLimit: number;
            depth: number;
            parameterLimit: number;
        };
        ignore: import("egg").IgnoreOrMatch;
        match: import("egg").IgnoreOrMatch;
        enableTypes: string[];
        extendTypes: {
            json: string[];
            form: string[];
            text: string[];
        };
    }> | undefined;
    logger?: PowerPartial<import("egg").EggLoggerConfig> | undefined;
    customLogger?: PowerPartial<{
        [key: string]: import("egg-logger").EggLoggerOptions;
    }> | undefined;
    httpclient?: PowerPartial<import("egg").HttpClientConfig> | undefined;
    development?: PowerPartial<{
        watchDirs: string[];
        ignoreDirs: string[];
        fastReady: boolean;
        reloadOnDebug: boolean;
        overrideDefault: boolean;
        overrideIgnore: boolean;
        reloadPattern: string | string[];
    }> | undefined;
    customLoader?: PowerPartial<{
        [key: string]: import("egg").CustomLoaderConfig;
    }> | undefined;
    dump?: PowerPartial<{
        ignore: Set<string>;
    }> | undefined;
    env?: string | undefined;
    HOME?: string | undefined;
    hostHeaders?: string | undefined;
    i18n?: PowerPartial<{
        defaultLocale: string;
        dir: string;
        queryField: string;
        cookieField: string;
        cookieMaxAge: string | number;
    }> | undefined;
    ipHeaders?: string | undefined;
    jsonp?: PowerPartial<{
        limit: number;
        callback: string;
        csrf: boolean;
        whiteList: string | RegExp | (string | RegExp)[];
    }> | undefined;
    keys?: string | undefined;
    name?: string | undefined;
    pkg?: any;
    rundir?: string | undefined;
    security?: PowerPartial<{
        domainWhiteList: string[];
        protocolWhiteList: string[];
        defaultMiddleware: string;
        csrf: any;
        ssrf: {
            ipBlackList: string[];
            checkAddress?(ip: string): boolean;
        };
        xframe: {
            enable: boolean;
            value: "SAMEORIGIN" | "DENY" | "ALLOW-FROM";
        };
        hsts: any;
        methodnoallow: {
            enable: boolean;
        };
        noopen: {
            enable: boolean;
        };
        xssProtection: any;
        csp: any;
    }> | undefined;
    siteFile?: PowerPartial<import("egg").PlainObject<string | Buffer>> | undefined;
    watcher?: PowerPartial<import("egg").PlainObject<any>> | undefined;
    onClientError?: PowerPartial<(err: Error, socket: import("net").Socket, app: import("egg").EggApplication) => import("egg").ClientErrorResponse | Promise<import("egg").ClientErrorResponse>> | undefined;
    serverTimeout?: number | null | undefined;
};
export default _default;

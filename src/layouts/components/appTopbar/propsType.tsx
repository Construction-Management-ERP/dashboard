interface command {
    (data: any) : any
}

export interface AppTopbarRightMenuItem {
    label: string,
    icon: string,
    command?: command
}

export interface Props {
    logo?: string,
    title?: string,
    items?: Array<AppTopbarRightMenuItem>
}
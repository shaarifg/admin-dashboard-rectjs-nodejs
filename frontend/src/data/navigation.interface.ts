export interface Navigation{
    id:number,
    label: string,
    icon: string,
    link: string,
    childLabels?: {
        id: number,
        label: string,
        icon: string,
        link: string,   
    }[]|null,
}
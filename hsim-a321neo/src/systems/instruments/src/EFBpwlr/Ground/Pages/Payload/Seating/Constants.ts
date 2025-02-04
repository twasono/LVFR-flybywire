export const TYPE = Object.freeze({ NB_ECO: 0, NB_ECO_EMERG: 1, NB_PREM_ECO: 2, NB_BUSINESS: 3 });

export const CanvasConst = Object.freeze({
    width: 1000,
    height: 150,
});
export interface SeatInfo {
    type: number,
    x?: number,
    y?: number,
    yOffset?: number
}

export interface RowInfo {
    x?: number,
    y?: number,
    xOffset?: number,
    yOffset?: number,
    seats: SeatInfo[],
}

export interface PaxStationInfo {
    name: string,
    capacity: number,
    rows: RowInfo[],
    simVar: string,
    fill: number,
    stationIndex: number,
    position: number,
}

export interface CargoStationInfo {
    name: string,
    weight: number,
    simVar: string,
    stationIndex: number,
    progressBarWidth: number,
    position: number,
}

export const SeatConstants = Object.freeze({
    [TYPE.NB_ECO]: {
        len: 18.2,
        wid: 19.2,
        padX: 13,
        padY: 0,
        imageX: 25.4,
        imageY: 19.2,
    },
    [TYPE.NB_ECO_EMERG]: {
        len: 19.2,
        wid: 19.2,
        padX: 20,
        padY: 0,
        imageX: 25.4,
        imageY: 19.2,
    },
    [TYPE.NB_PREM_ECO]: {
        len: 11.52,
        wid: 11.52,
        padX: 7.8,
        padY: 0,
        imageX: 15.24,
        imageY: 11.52,
    },
    [TYPE.NB_BUSINESS]: {
        len: 30,
        wid: 19.2,
        padX: 8,
        padY: 0,
        imageX: 30,
        imageY: 19.2,
    },
});

export const Status = Object.freeze({
    Planned: 0,
    Loaded: 1,
});

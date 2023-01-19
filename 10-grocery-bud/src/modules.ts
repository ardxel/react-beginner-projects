import React, {ChangeEvent, ComponentPropsWithRef, FormEvent, MutableRefObject} from "react";
import {InputType} from "zlib";

export type TList = {
    id: number,
    title: string
}

export type TAlert = {
    show: boolean,
    msg: string,
    type: string
}

export type TEdit = {
    isEdit: boolean,
    id: number,
    title: string
}

export type TFnSubmit = (event: FormEvent<HTMLFormElement>) => void;
export type TFnChange = (event: ChangeEvent<HTMLInputElement>) => void;
export type TFnVoid = () => void;
export type TFnVoidWithId = (id: number) => void;
export type TFnAlert = (show: boolean, msg: string, type: string) => void

export type TFormProps = {
    inputChangeValue: TFnChange,
    currentValue: string,
    submit: TFnSubmit,
    alert: TAlert,
}

export type TListProps = {
    list: TList[]
    clearAll: TFnVoid,
    deleteItem: TFnVoidWithId,
    editItem: TFnVoidWithId
}

export type TItemProps = {
    id: number,
    title: string,
    deleteItem: TFnVoidWithId,
    editItem: TFnVoidWithId
}

export type THandlers = [TFnSubmit, TFnVoid, TFnChange, TFnVoidWithId, TFnVoidWithId]